'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'

// Standard prices only: partner discounts live in contracts, never on the public site.
const P = { payg: 1190, subIntro: 990, subRegular: 1490, subExtra: 990, li: 190 }

// Spread N projects over k active months, evenly spaced across the year.
function distribute(N, evenness) {
  const k = Math.max(1, Math.min(12, N, Math.round(2 + (evenness / 100) * 10)))
  const months = new Array(12).fill(0)
  const idx = []
  for (let i = 0; i < k; i++) idx.push(Math.floor((i * 12) / k + (12 / k - 1) / 2))
  const base = Math.floor(N / k)
  const rem = N - base * k
  idx.forEach((m) => { months[m] = base })
  for (let j = 0; j < rem; j++) months[idx[Math.floor((j * k) / rem)]] += 1
  return months
}

function compute({ N, ev, liN, annual, regular }) {
  const months = distribute(N, ev)
  const liYear = (n) => n * P.li * 12
  const fee = regular ? P.subRegular : P.subIntro
  const opts = [{ id: 'payg', cost: N * P.payg + liYear(liN), extras: 0, unused: 0, upfront: false }]
  let ce = 0, cu = 0
  months.forEach((m) => { ce += Math.max(0, m - 2); cu += Math.max(0, 2 - m) })
  opts.push({ id: 'sub', cost: 12 * fee + ce * P.subExtra + liYear(Math.max(0, liN - 1)), extras: ce, unused: cu, upfront: false, fee })
  if (annual) {
    const cae = Math.max(0, N - 24)
    opts.push({ id: 'subA', cost: 11 * fee + cae * P.subExtra + liYear(Math.max(0, liN - 1)), extras: cae, unused: Math.max(0, 24 - N), upfront: true, fee })
  }
  return { months, opts, fee }
}

export default function PlanCalculator() {
  const t = useTranslations('planCalculator')
  const [N, setN] = useState(4)
  const [ev, setEv] = useState(80)
  const [liN, setLiN] = useState(0)
  const [annual, setAnnual] = useState(true)
  const [regular, setRegular] = useState(false)

  const sep = t('money.sep')
  const fmt = (n) => t('money.prefix') + Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, sep)
  const dec = (n) => (n % 1 ? n.toFixed(1).replace('.', t('money.decimal')) : String(n))
  const em = (chunks) => <em>{chunks}</em>
  const b = (chunks) => <b>{chunks}</b>

  const { months, opts, fee } = compute({ N, ev, liN, annual, regular })
  const names = { payg: t('optPayg'), sub: t('optSub'), subA: t('optSubA') }
  const notes = {
    payg: t('optPaygNote', { price: fmt(P.payg) }),
    sub: regular ? t('optSubNote', { fee: fmt(fee) }) : t.rich('optSubNoteIntro', { s: (c) => <s>{c}</s>, regular: fmt(P.subRegular), fee: fmt(fee) }),
    subA: t('optSubANote', { upfront: fmt(11 * fee) }),
  }

  const sorted = [...opts].sort((a, c) => a.cost - c.cost)
  const best = sorted[0]
  const payg = opts.find((o) => o.id === 'payg')
  const bestMonthly = sorted.find((o) => !o.upfront)
  const maxCost = Math.max(...opts.map((o) => o.cost))
  const closeCall = best.id !== 'payg' && payg.cost && (payg.cost - best.cost) / payg.cost < 0.08
  const pick = closeCall ? payg : best

  // Recommendation
  const saveVsPayg = payg.cost - best.cost
  let head, body
  const chips = []
  if (best.id === 'payg' || closeCall) {
    head = t.rich('recPaygHead', { em })
    if (best.id === 'payg') {
      const next = sorted[1]
      body = t('recPaygBody', { n: N, gap: fmt(next.cost - payg.cost), next: names[next.id] })
    } else {
      body = t('recCloseBody', { best: names[best.id], save: fmt(saveVsPayg) })
    }
    chips.push(t.rich('chipTotal', { b, price: fmt(payg.cost) }))
    chips.push(t.rich('chipPerProject', { b, price: fmt(P.payg) }))
  } else {
    head = t.rich(best.upfront ? 'recSubAHead' : 'recSubHead', { em })
    body = t('recSubSave', { save: fmt(saveVsPayg), pct: Math.round((saveVsPayg / payg.cost) * 100) }) + ' '
    if (best.upfront) {
      const monthly = opts.find((o) => o.id === 'sub')
      const pool = monthly.cost - best.cost - best.fee
      body += bestMonthly.id === 'payg'
        ? t('recSubAOnly')
        : t('recSubABoth', { fee: fmt(best.fee), monthlySave: fmt(payg.cost - bestMonthly.cost) }) + (pool > 0 ? ' ' + t('recPool', { pool: fmt(pool) }) : '')
    } else if (best.unused > 0) {
      body += t('recUnused', { count: best.unused })
    } else {
      body += t('recFull')
    }
    chips.push(t.rich('chipTotal', { b, price: fmt(best.cost) }))
    chips.push(t.rich('chipPerProject', { b, price: fmt(N ? best.cost / N : 0) }))
    if (best.upfront) chips.push(t.rich('chipUpfront', { b, price: fmt(11 * best.fee) }))
    if (!regular) chips.push(t.rich('chipLocked', { b, price: fmt(best.fee) }))
    chips.push(t.rich(best.upfront ? 'chipTerm12' : 'chipMin3', { b }))
  }
  if (N >= 36) chips.push(t.rich('chipEnterprise', { b }))

  const pace = N >= 12 ? t('paceMonthly', { n: dec(N / 12) }) : 12 / N === 1 ? t('paceOneAMonth') : t('paceEvery', { n: dec(12 / N) })
  const evenLabel = ev >= 67 ? t('evenSteady') : ev >= 34 ? t('evenSeasonal') : t('evenBursts')
  const active = months.filter((m) => m > 0).length
  const pct = (v, min, max) => `${((v - min) / (max - min)) * 100}%`

  // Chart geometry
  const W = 640, H = 220, L = 34, R = 10, T = 14, B = 28
  const maxY = Math.max(4, Math.max(...months) + 1)
  const y = (v) => T + (H - T - B) * (1 - v / maxY)
  const bw = (W - L - R) / 12
  const step = maxY > 10 ? 2 : 1
  const gridVals = []
  for (let v = 0; v <= maxY; v += step) gridVals.push(v)
  const monthNames = t.raw('months')

  return (
    <div className="pc">
      <div className="pc-grid">
        <form className="pc-panel" onSubmit={(e) => e.preventDefault()} autoComplete="off">
          <div className="pc-field">
            <label className="pc-q" htmlFor="pc-vol">{t('volQ')}</label>
            <div className="pc-val"><b>{N >= 36 ? '36+' : N}</b><span>{t('volSub', { count: N, pace })}</span></div>
            <input type="range" id="pc-vol" min="1" max="36" step="1" value={N} onChange={(e) => setN(+e.target.value)} style={{ '--p': pct(N, 1, 36) }} />
            <div className="pc-scale"><span>1</span><span>12</span><span>24</span><span>36+</span></div>
            <p className="pc-hint">{t('volHint')}</p>
          </div>
          <div className="pc-field">
            <label className="pc-q" htmlFor="pc-even">{t('evenQ')}</label>
            <div className="pc-val"><b>{evenLabel}</b><span>{t('evenSub', { n: active })}</span></div>
            <input type="range" id="pc-even" min="0" max="100" step="5" value={ev} onChange={(e) => setEv(+e.target.value)} style={{ '--p': pct(ev, 0, 100) }} />
            <div className="pc-scale">{t.raw('evenScale').map((s) => <span key={s}>{s}</span>)}</div>
          </div>
          <div className="pc-field">
            <label className="pc-q" htmlFor="pc-li">{t('liQ')}</label>
            <div className="pc-val"><b>{liN}</b><span>{liN ? t('liSub', { price: fmt(P.li) }) : t('liSubNone')}</span></div>
            <input type="range" id="pc-li" min="0" max="6" step="1" value={liN} onChange={(e) => setLiN(+e.target.value)} style={{ '--p': pct(liN, 0, 6) }} />
            <div className="pc-scale"><span>0</span><span>2</span><span>4</span><span>6</span></div>
          </div>
          <div className="pc-field">
            <span className="pc-q">{t('optionsQ')}</span>
            <div className="pc-checks">
              <label className="pc-check"><input type="checkbox" checked={annual} onChange={(e) => setAnnual(e.target.checked)} /><span><strong>{t('annualTitle')}</strong><small>{t('annualDesc')}</small></span></label>
              <label className="pc-check"><input type="checkbox" checked={regular} onChange={(e) => setRegular(e.target.checked)} /><span><strong>{t('regularTitle')}</strong><small>{t('regularDesc', { regular: fmt(P.subRegular), intro: fmt(P.subIntro) })}</small></span></label>
            </div>
            <p className="pc-hint">{t('optionsHint')}</p>
          </div>
        </form>

        <div className="pc-panel pc-out" aria-live="polite">
          <span className="sc-label">{t('suggestion')}</span>
          <div className="pc-rec">
            <h3>{head}</h3>
            <p>{body}</p>
            <div className="pc-chips">{chips.map((c, i) => <span key={i} className="pc-chip">{c}</span>)}</div>
          </div>

          <div className="pc-block">
            <h4>{t('compareTitle')}</h4>
            <p className="pc-sub">{t('compareSub', { count: N, li: liN })}</p>
            <div className="pc-rows">
              {opts.map((o) => {
                const bits = [t('perProject', { price: fmt(N ? o.cost / N : 0) })]
                if (o.extras) bits.push(t('extras', { count: o.extras, price: fmt(P.subExtra) }))
                if (o.id !== 'payg' && o.unused) bits.push(t(o.upfront ? 'unusedLeft' : 'unusedExpire', { count: o.unused }))
                return (
                  <div key={o.id} className={'pc-row' + (o === pick ? ' best' : '')}>
                    <div className="pc-name">{names[o.id]}{o === pick && <span className="pc-badge">{t('ourPick')}</span>}<small>{notes[o.id]}</small></div>
                    <div className="pc-barcell"><div className="pc-bar"><i style={{ width: `${((o.cost / maxCost) * 100).toFixed(1)}%` }} /></div><div className="pc-meta">{bits.join(' · ')}</div></div>
                    <div className="pc-cost"><b>{fmt(o.cost)}</b><span>{t('perMonthAvg', { price: fmt(o.cost / 12) })}</span></div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="pc-block">
            <h4>{t('chartTitle')}</h4>
            <p className="pc-sub">{t('chartSub', { n: N })}</p>
            <div className="pc-chart">
              <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={t('chartAria')}>
                {gridVals.map((v) => (
                  <g key={v}>
                    <line x1={L} x2={W - R} y1={y(v)} y2={y(v)} stroke="rgba(255,255,255,0.06)" />
                    <text x={L - 8} y={y(v) + 4} fill="#6B8098" fontSize="11" textAnchor="end" fontFamily="IBM Plex Sans, Arial">{v}</text>
                  </g>
                ))}
                {months.map((m, i) => {
                  const x = L + i * bw + bw * 0.2, w = bw * 0.6
                  const inc = Math.min(m, 2), over = Math.max(0, m - 2)
                  return (
                    <g key={i}>
                      {m > 0 && <rect x={x} y={y(inc)} width={w} height={y(0) - y(inc)} fill="#00C4D4" rx="1" />}
                      {over > 0 && <rect x={x} y={y(m)} width={w} height={y(inc) - y(m)} fill="#4DDDE8" fillOpacity="0.45" rx="1" />}
                      {m > 0 && <text x={x + w / 2} y={y(m) - 5} fill="#FFFFFF" fontSize="11" textAnchor="middle" fontFamily="IBM Plex Sans, Arial">{m}</text>}
                      <text x={L + i * bw + bw / 2} y={H - 8} fill="#6B8098" fontSize="10.5" textAnchor="middle" fontFamily="IBM Plex Sans, Arial">{monthNames[i]}</text>
                    </g>
                  )
                })}
                <line x1={L} x2={W - R} y1={y(2)} y2={y(2)} stroke="#00C4D4" strokeWidth="1.5" strokeDasharray="5 4" />
              </svg>
              <div className="pc-legend"><i />{t('chartLegend')}</div>
            </div>
          </div>
        </div>
      </div>
      <p className="pc-note">{t('note')}</p>

      <style>{`
        .pc-grid{display:grid;grid-template-columns:minmax(0,380px) minmax(0,1fr);gap:2px;background:var(--border);border:1px solid var(--border)}
        @media(max-width:860px){.pc-grid{grid-template-columns:minmax(0,1fr)}}
        .pc-panel{background:var(--navy-2);padding:28px 26px;min-width:0}
        .pc-out{background:var(--navy)}
        .pc-field{display:grid;gap:10px;padding:18px 0;border-top:1px solid var(--border)}
        .pc-field:first-child{border-top:0;padding-top:4px}
        .pc-q{font-family:'IBM Plex Sans',sans-serif;font-weight:500;font-size:1rem;line-height:1.35;color:#fff}
        .pc-val{display:flex;align-items:baseline;gap:10px;flex-wrap:wrap}
        .pc-val b{font-family:'IBM Plex Sans',sans-serif;font-weight:300;font-size:2.1rem;line-height:1;color:#fff;font-variant-numeric:tabular-nums}
        .pc-val span{color:rgba(255,255,255,0.58);font-size:.85rem}
        .pc-hint{color:rgba(255,255,255,0.32);font-size:.8rem;margin:0;line-height:1.6}
        .pc input[type=range]{-webkit-appearance:none;appearance:none;width:100%;height:28px;background:transparent;cursor:pointer;margin:0}
        .pc input[type=range]::-webkit-slider-runnable-track{height:3px;border-radius:2px;background:linear-gradient(to right,var(--teal) 0,var(--teal) var(--p,50%),rgba(255,255,255,0.08) var(--p,50%))}
        .pc input[type=range]::-moz-range-track{height:3px;border-radius:2px;background:rgba(255,255,255,0.08)}
        .pc input[type=range]::-moz-range-progress{height:3px;border-radius:2px;background:var(--teal)}
        .pc input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;width:18px;height:18px;border-radius:50%;background:#fff;border:3px solid var(--teal);margin-top:-7.5px}
        .pc input[type=range]::-moz-range-thumb{width:14px;height:14px;border-radius:50%;background:#fff;border:3px solid var(--teal)}
        .pc input[type=range]:focus-visible{outline:2px solid var(--teal-2);outline-offset:4px}
        .pc-scale{display:flex;justify-content:space-between;color:rgba(255,255,255,0.32);font-size:.72rem;font-family:'IBM Plex Sans',sans-serif;letter-spacing:.04em}
        .pc-checks{display:grid;gap:8px}
        .pc-check{display:flex;gap:12px;align-items:flex-start;padding:12px 14px;background:rgba(255,255,255,0.03);border:1px solid var(--border);border-radius:4px;cursor:pointer;transition:border-color .2s}
        .pc-check:hover{border-color:rgba(0,196,212,0.32)}
        .pc-check input{appearance:none;-webkit-appearance:none;width:18px;height:18px;border:1.5px solid #6B8098;border-radius:3px;margin:2px 0 0;flex:none;display:grid;place-content:center;cursor:pointer}
        .pc-check input:checked{background:var(--orange);border-color:var(--orange)}
        .pc-check input:checked::after{content:"";width:9px;height:5px;border:2px solid #fff;border-top:0;border-right:0;transform:rotate(-45deg) translate(1px,-1px)}
        .pc-check input:focus-visible{outline:2px solid var(--teal-2);outline-offset:2px}
        .pc-check strong{font-family:'IBM Plex Sans',sans-serif;font-weight:500;display:block;font-size:.95rem;color:#fff}
        .pc-check small{color:rgba(255,255,255,0.58);font-size:.8rem;line-height:1.5}
        .pc-check:has(input:checked){border-color:rgba(232,71,42,.45);background:rgba(232,71,42,.05)}
        .pc-rec{border:1px solid rgba(232,71,42,.35);border-left:3px solid var(--orange);background:rgba(232,71,42,.04);padding:22px 22px 20px;border-radius:4px}
        .pc-rec h3{font-family:'IBM Plex Sans',sans-serif;font-weight:300;font-size:clamp(1.4rem,2.6vw,2rem);letter-spacing:-.015em;line-height:1.1;margin:0 0 8px;color:#fff}
        .pc-rec h3 em{font-style:normal;color:var(--orange)}
        .pc-rec p{color:rgba(255,255,255,0.58);margin:0;line-height:1.65;font-size:.9375rem}
        .pc-chips{display:flex;flex-wrap:wrap;gap:8px;margin-top:14px}
        .pc-chip{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);padding:6px 12px;font-family:'IBM Plex Sans',sans-serif;font-size:.75rem;font-weight:500;color:rgba(255,255,255,0.58);border-radius:3px}
        .pc-chip b{color:#fff;font-weight:600}
        .pc-block{margin-top:30px}
        .pc-block h4{font-family:'IBM Plex Sans',sans-serif;font-weight:500;font-size:1.05rem;margin:0 0 4px;color:#fff}
        .pc-sub{color:rgba(255,255,255,0.58);font-size:.85rem;margin:0 0 14px}
        .pc-rows{display:grid;gap:2px;background:var(--border);border:1px solid var(--border)}
        .pc-row{display:grid;grid-template-columns:minmax(0,1.3fr) minmax(0,2fr) auto;gap:16px;align-items:center;background:var(--navy-2);padding:14px 16px}
        .pc-row.best{background:rgba(0,196,212,.06)}
        .pc-name{font-family:'IBM Plex Sans',sans-serif;font-weight:500;font-size:.95rem;line-height:1.3;color:#fff}
        .pc-name small{display:block;font-weight:400;color:rgba(255,255,255,0.32);font-size:.74rem;margin-top:2px;font-family:Inter,sans-serif}
        .pc-name s{color:rgba(255,255,255,0.32)}
        .pc-badge{display:inline-block;font-size:.62rem;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:var(--navy);background:var(--teal);padding:2px 7px;border-radius:2px;margin-left:6px;vertical-align:2px}
        .pc-bar{height:6px;background:rgba(255,255,255,0.08);border-radius:2px;overflow:hidden}
        .pc-bar i{display:block;height:100%;background:#6B8098;border-radius:2px;transition:width .35s ease}
        .pc-row.best .pc-bar i{background:var(--teal)}
        .pc-meta{color:rgba(255,255,255,0.32);font-size:.74rem;margin-top:6px;font-variant-numeric:tabular-nums}
        .pc-cost{text-align:right;font-variant-numeric:tabular-nums}
        .pc-cost b{font-family:'IBM Plex Sans',sans-serif;font-weight:400;font-size:1.25rem;display:block;line-height:1.1;color:#fff}
        .pc-row.best .pc-cost b{color:var(--teal-2)}
        .pc-cost span{color:rgba(255,255,255,0.32);font-size:.74rem}
        @media(max-width:560px){.pc-row{grid-template-columns:minmax(0,1fr) auto}.pc-barcell{grid-column:1 / -1;order:3}.pc-panel{padding:22px 18px}}
        .pc-chart{background:rgba(6,15,30,.8);border:1px solid var(--border);padding:16px 12px 8px;border-radius:4px;overflow-x:auto}
        .pc-chart svg{display:block;width:100%;min-width:420px;height:auto}
        .pc-legend{color:rgba(255,255,255,0.58);font-size:.75rem;margin-top:10px;padding:0 4px}
        .pc-legend i{display:inline-block;width:14px;height:0;border-top:2px dashed var(--teal);vertical-align:middle;margin-right:6px}
        .pc-note{color:rgba(255,255,255,0.32);font-size:.8rem;line-height:1.6;margin:18px 0 0;max-width:820px}
        @media(prefers-reduced-motion:reduce){.pc *{transition:none!important}}
      `}</style>
    </div>
  )
}
