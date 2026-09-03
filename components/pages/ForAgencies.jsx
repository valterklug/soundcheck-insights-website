'use client'

import { Link } from '@/i18n/navigation'

import { useTranslations } from 'next-intl'
import { PageWrapper, FadeIn, StaggerContainer, StaggerItem } from '@/components/Animate'
import Differentiators from '@/components/Differentiators'

export default function ForAgencies() {
  const t = useTranslations()

  const chips = t.raw('forAgencies.chips')
  const operatorItems = t.raw('forAgencies.operatorItems')
  const whiteLabelProducts = t.raw('forAgencies.whiteLabelProducts')
  const worksWellItems = t.raw('forAgencies.worksWellItems')
  const notRightItems = t.raw('forAgencies.notRightItems')
  const partnershipLevels = t.raw('forAgencies.partnershipLevels')

  // Process white-label products to add localized links
  const productsWithLinks = whiteLabelProducts.map(p => ({
    ...p,
    link: p.link || '/products'
  }))

  return (
    <PageWrapper>
      <section className="page-hero" style={{borderBottom:"3px solid var(--orange)"}}>
        <div className="page-hero-inner">
          <span className="sc-label">{t('forAgencies.heroLabel')}</span>
          <h1 className="page-h1">{t('forAgencies.heroTitle1')}<span className="text-orange">{t('forAgencies.heroTitle2')}</span>{t('forAgencies.heroTitle3')}</h1>
          <p className="page-sub">{t('forAgencies.heroSub')}</p>
          <div style={{display:"flex",gap:8,flexWrap:"wrap",marginTop:24}}>
            {chips.map(chip=>(
              <div key={chip.value} className="chip">{chip.icon} <strong>{chip.value}</strong> {chip.label}</div>
            ))}
          </div>
        </div>
      </section>

      <section style={{background:"var(--navy)",padding:"80px 60px"}} className="section-pad">
        <div style={{maxWidth:1200,margin:"0 auto",display:"grid",gridTemplateColumns:"1fr 1fr",gap:80,alignItems:"start"}} className="grid-2">
          <FadeIn>
            <span className="sc-label sc-label-orange">{t('forAgencies.businessCaseLabel')}</span>
            <h2 style={{fontFamily:"IBM Plex Sans,sans-serif",fontSize:"clamp(1.5rem,3vw,2.2rem)",fontWeight:300,letterSpacing:"-.015em",lineHeight:1.1,marginBottom:20}}>{t('forAgencies.businessCaseTitle')}</h2>
            <p style={{fontFamily:"Inter,sans-serif",fontSize:"0.9375rem",color:"rgba(255,255,255,0.5)",lineHeight:1.75,marginBottom:14}}>{t('forAgencies.businessCaseDesc1')}</p>
            <p style={{fontFamily:"Inter,sans-serif",fontSize:"0.9375rem",color:"rgba(255,255,255,0.5)",lineHeight:1.75,marginBottom:14}}>{t('forAgencies.businessCaseDesc2')}</p>
            <p style={{fontFamily:"Inter,sans-serif",fontSize:"0.9375rem",color:"rgba(255,255,255,0.5)",lineHeight:1.75}}>{t('forAgencies.businessCaseDesc3')}</p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div style={{fontFamily:"IBM Plex Sans,sans-serif",fontSize:10,fontWeight:500,letterSpacing:"0.15em",textTransform:"uppercase",color:"rgba(255,255,255,0.25)",marginBottom:14}}>{t('forAgencies.economicsHeader')}</div>
            {/* Two-column economics table */}
            {t.raw('forAgencies.economicsRows').map(([label, value], i) => (
              <div key={label} style={{display:"grid",gridTemplateColumns:"1.6fr 1fr",gap:0,marginBottom:1}}>
                <div style={{padding:"13px 14px",background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.05)",display:"flex",alignItems:"center"}}>
                  <span style={{fontFamily:"Inter,sans-serif",fontSize:12,color:"rgba(255,255,255,0.45)"}}>{label}</span>
                </div>
                <div style={{padding:"13px 14px",background: i === 2 ? "rgba(232,71,42,0.08)" : "rgba(255,255,255,0.03)",border: i === 2 ? "1px solid rgba(232,71,42,0.2)" : "1px solid rgba(255,255,255,0.05)",textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center"}}>
                  <span style={{fontFamily:"IBM Plex Sans,sans-serif",fontSize: i === 2 ? 17 : 13,fontWeight: i === 2 ? 600 : 500,color: i === 2 ? "var(--orange)" : "#fff"}}>{value}</span>
                </div>
              </div>
            ))}
            <p style={{fontFamily:"Inter,sans-serif",fontSize:11,color:"rgba(255,255,255,0.3)",lineHeight:1.6,marginTop:12}}>{t('forAgencies.economicsNote')}</p>

            {/* Five partnership levels */}
            <div style={{marginTop:36}}>
              <div style={{fontFamily:"IBM Plex Sans,sans-serif",fontSize:10,fontWeight:500,letterSpacing:"0.15em",textTransform:"uppercase",color:"rgba(255,255,255,0.25)",marginBottom:14}}>{t('forAgencies.partnershipLabel')}</div>
              {partnershipLevels.map(lvl => (
                <div key={lvl.level} style={{display:"flex",gap:14,alignItems:"flex-start",padding:"12px 14px",background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.05)",marginBottom:1}}>
                  <span style={{fontFamily:"IBM Plex Sans,sans-serif",fontSize:10,fontWeight:500,color:"rgba(255,255,255,0.2)",letterSpacing:"0.1em",flexShrink:0,marginTop:2}}>{lvl.level}</span>
                  <div>
                    <span style={{fontFamily:"IBM Plex Sans,sans-serif",fontSize:13,fontWeight:600,color:"var(--teal)"}}>{lvl.name}</span>
                    <span style={{fontFamily:"Inter,sans-serif",fontSize:12,color:"rgba(255,255,255,0.4)",marginLeft:8}}>{lvl.desc}</span>
                  </div>
                </div>
              ))}
              <p style={{fontFamily:"Inter,sans-serif",fontSize:11,color:"rgba(255,255,255,0.3)",lineHeight:1.6,marginTop:8}}>{t('forAgencies.partnershipNote')}</p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section style={{background:"var(--navy-2)",padding:"80px 60px",borderTop:"1px solid var(--border)"}} className="section-pad">
        <div style={{maxWidth:1200,margin:"0 auto"}}>
          <FadeIn><span className="sc-label">{t('forAgencies.operatorLabel')}</span>
          <h2 style={{fontFamily:"IBM Plex Sans,sans-serif",fontSize:"clamp(1.5rem,3vw,2.2rem)",fontWeight:300,letterSpacing:"-.015em",marginBottom:48,lineHeight:1.1}}>{t('forAgencies.operatorTitle')}</h2></FadeIn>
          <StaggerContainer style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:2}} className="offer-grid">
            {operatorItems.map(item=>(
              <StaggerItem key={item.title}>
                <div style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.06)",borderTop:"3px solid var(--teal)",padding:"32px 28px",height:"100%"}}>
                  <div style={{fontSize:22,marginBottom:16}}>{item.icon}</div>
                  <div style={{fontFamily:"IBM Plex Sans,sans-serif",fontSize:15,fontWeight:500,color:"#fff",marginBottom:10}}>{item.title}</div>
                  <p style={{fontFamily:"Inter,sans-serif",fontSize:13,color:"rgba(255,255,255,0.4)",lineHeight:1.65}}>{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
        <style>{"@media(max-width:900px){.offer-grid{grid-template-columns:1fr!important}.section-pad{padding:60px 24px!important}.econ-grid{grid-template-columns:1.6fr 1fr 1fr 1fr!important;font-size:0.85em}}"}</style>
      </section>

      <section style={{background:"var(--navy)",padding:"80px 60px",borderTop:"1px solid rgba(0,196,212,0.12)"}} className="section-pad">
        <div style={{maxWidth:1200,margin:"0 auto"}}>
          <FadeIn>
            <span className="sc-label">{t('forAgencies.whiteLabelLabel')}</span>
            <h2 style={{fontFamily:"IBM Plex Sans,sans-serif",fontSize:"clamp(1.5rem,3vw,2.2rem)",fontWeight:300,letterSpacing:"-.015em",marginBottom:16,lineHeight:1.1}}>{t('forAgencies.whiteLabelTitle')}</h2>
            <p style={{fontFamily:"Inter,sans-serif",fontSize:"0.9375rem",color:"rgba(255,255,255,0.5)",lineHeight:1.75,marginBottom:48,maxWidth:680}}>{t('forAgencies.whiteLabelSub')}</p>
          </FadeIn>
          <StaggerContainer style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:2}} className="offer-grid">
            {productsWithLinks.map(p=>(
              <StaggerItem key={p.num}>
                <Link href={p.link} style={{textDecoration:"none",display:"block",height:"100%"}}>
                  <div style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.06)",borderTop:`3px solid ${p.color}`,padding:"32px 28px",height:"100%",display:"flex",flexDirection:"column",transition:"border-color 0.2s",cursor:"pointer"}}>
                    <div style={{fontFamily:"IBM Plex Sans,sans-serif",fontSize:10,fontWeight:500,letterSpacing:"0.18em",textTransform:"uppercase",color:"rgba(255,255,255,0.18)",marginBottom:8}}>{p.num}</div>
                    <div style={{fontFamily:"IBM Plex Sans,sans-serif",fontSize:10,fontWeight:500,letterSpacing:"0.12em",textTransform:"uppercase",color:p.color,marginBottom:14}}>{p.audience}</div>
                    <div style={{fontFamily:"IBM Plex Sans,sans-serif",fontSize:17,fontWeight:500,color:"#fff",marginBottom:12,lineHeight:1.25}}>{p.name}</div>
                    <p style={{fontFamily:"Inter,sans-serif",fontSize:13,color:"rgba(255,255,255,0.4)",lineHeight:1.65,marginBottom:20,flex:1}}>{p.desc}</p>
                    <div style={{marginTop:"auto"}}>
                      <div style={{background:"rgba(255,255,255,0.04)",padding:"12px 14px",marginBottom:12}}>
                        <div style={{fontFamily:"IBM Plex Sans,sans-serif",fontSize:12,fontWeight:400,color:"#fff",marginBottom:3}}>{p.price}</div>
                        <div style={{fontFamily:"IBM Plex Sans,sans-serif",fontSize:10,fontWeight:500,letterSpacing:"0.1em",textTransform:"uppercase",color:"rgba(255,255,255,0.2)"}}>{p.delivery} · {t('forAgencies.whiteLabel')}</div>
                      </div>
                      <span style={{fontFamily:"IBM Plex Sans,sans-serif",fontSize:12,fontWeight:500,color:p.color,borderBottom:`1px solid ${p.color}44`}}>{t('forAgencies.seeFullDetails')}</span>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section style={{background:"var(--navy-2)",padding:"80px 60px",borderTop:"1px solid rgba(232,71,42,0.12)"}} className="section-pad">
        <div style={{maxWidth:1200,margin:"0 auto"}}>
          <FadeIn><span className="sc-label">{t('forAgencies.rightFitLabel')}</span>
          <h2 style={{fontFamily:"IBM Plex Sans,sans-serif",fontSize:"clamp(1.5rem,3vw,2.2rem)",fontWeight:300,letterSpacing:"-.015em",marginBottom:48,lineHeight:1.1}}>{t('forAgencies.rightFitTitle')}</h2></FadeIn>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:80,alignItems:"start"}} className="grid-2">
            <FadeIn>
              <div style={{fontFamily:"IBM Plex Sans,sans-serif",fontSize:10,fontWeight:500,letterSpacing:"0.12em",textTransform:"uppercase",color:"rgba(255,255,255,0.25)",marginBottom:12}}>{t('forAgencies.worksWell')}</div>
              {worksWellItems.map(text=>(
                <div key={text} style={{display:"flex",gap:12,alignItems:"flex-start",background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.06)",padding:"14px 18px",marginBottom:2}}>
                  <div style={{color:"var(--teal)",fontWeight:700,flexShrink:0,marginTop:1}}>✓</div>
                  <div style={{fontFamily:"Inter,sans-serif",fontSize:13,color:"rgba(255,255,255,0.55)",lineHeight:1.5}}>{text}</div>
                </div>
              ))}
            </FadeIn>
            <FadeIn delay={0.1}>
              <div style={{fontFamily:"IBM Plex Sans,sans-serif",fontSize:10,fontWeight:500,letterSpacing:"0.12em",textTransform:"uppercase",color:"rgba(255,255,255,0.25)",marginBottom:12}}>{t('forAgencies.notRight')}</div>
              {notRightItems.map((text, i)=>(
                <div key={text} style={{display:"flex",gap:12,alignItems:"flex-start",background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.04)",padding:"12px 18px",marginBottom:2}}>
                  <div style={{color:"rgba(255,255,255,0.2)",flexShrink:0}}>✗</div>
                  <div style={{fontFamily:"Inter,sans-serif",fontSize:12,color:"rgba(255,255,255,0.3)",lineHeight:1.5}}>
                    {text}
                    {i === 0 && <>{' · '}<Link href="/for-brands" style={{color:"var(--teal)",textDecoration:"underline",textUnderlineOffset:3}}>{t('forAgencies.seeBrands')}</Link></>}
                  </div>
                </div>
              ))}
              <div style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.07)",padding:"22px 24px",marginTop:20}}>
                <div style={{fontFamily:"IBM Plex Sans,sans-serif",fontSize:13,fontWeight:500,color:"#fff",marginBottom:6}}>{t('forAgencies.notSureTitle')}</div>
                <div style={{fontFamily:"Inter,sans-serif",fontSize:13,color:"rgba(255,255,255,0.35)",lineHeight:1.6,marginBottom:12}}>{t('forAgencies.notSureDesc')}</div>
                <Link href="/contact" className="text-link">{t('forAgencies.notSureLink')}</Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS (embedded) ────────────────────────────────── */}
      {(() => {
        const phases = t.raw('howItWorks.phases')
        const platformItems = t.raw('howItWorks.platformItems')
        const youItems = t.raw('howItWorks.youItems')
        const deliverableItems = t.raw('howItWorks.deliverables')
        return (
          <>
            <section id="how-it-works" style={{background:"var(--navy)",padding:"80px 60px",borderTop:"1px solid rgba(0,196,212,0.12)"}} className="section-pad">
              <div style={{maxWidth:1200,margin:"0 auto"}}>
                <FadeIn>
                  <span className="sc-label">{t('howItWorks.phasesLabel')}</span>
                  <h2 style={{fontFamily:"IBM Plex Sans,sans-serif",fontSize:"clamp(1.6rem,3vw,2.4rem)",fontWeight:300,letterSpacing:"-.015em",marginBottom:48,lineHeight:1.1,maxWidth:640}}>{t('howItWorks.phasesTitle')}</h2>
                </FadeIn>
                <div style={{display:"flex",flexDirection:"column",gap:2}}>
                  {phases.map((p,i)=>(
                    <FadeIn key={p.num} delay={i*0.08}>
                      <div style={{display:"grid",gridTemplateColumns:"240px 1fr",background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.06)",minHeight:160}} className="phase-row">
                        <div style={{padding:"32px 28px",borderRight:"1px solid rgba(255,255,255,0.06)",borderLeft:`3px solid ${p.color}`,display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
                          <div>
                            <div style={{fontFamily:"IBM Plex Sans,sans-serif",fontSize:10,fontWeight:500,letterSpacing:"0.18em",textTransform:"uppercase",color:"rgba(255,255,255,0.2)",marginBottom:10}}>{p.num}</div>
                            <div style={{fontFamily:"IBM Plex Sans,sans-serif",fontSize:15,fontWeight:400,color:"#fff",lineHeight:1.25}}>{p.label}</div>
                          </div>
                          <div style={{fontFamily:"IBM Plex Sans,sans-serif",fontSize:10,fontWeight:500,letterSpacing:"0.12em",textTransform:"uppercase",color:p.color,marginTop:20}}>{p.timing}</div>
                        </div>
                        <div style={{padding:"32px 40px"}}>
                          <div style={{fontFamily:"IBM Plex Sans,sans-serif",fontSize:15,fontWeight:500,color:"#fff",marginBottom:12}}>{p.title}</div>
                          <p style={{fontFamily:"Inter,sans-serif",fontSize:14,color:"rgba(255,255,255,0.5)",lineHeight:1.75,marginBottom:14}}>{p.body}</p>
                          <span style={{fontFamily:"IBM Plex Sans,sans-serif",fontSize:10,fontWeight:500,letterSpacing:"0.1em",textTransform:"uppercase",color:"rgba(255,255,255,0.25)",background:"rgba(255,255,255,0.05)",padding:"4px 10px",borderRadius:2}}>{p.tag}</span>
                        </div>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>
              <style>{"@media(max-width:700px){.phase-row{grid-template-columns:1fr!important}.phase-row>div:first-child{border-right:none!important;border-bottom:1px solid rgba(255,255,255,0.06)}}"}</style>
            </section>

            <section style={{background:"var(--navy-2)",padding:"80px 60px",borderTop:"1px solid var(--border)"}} className="section-pad">
              <div style={{maxWidth:1200,margin:"0 auto"}}>
                <FadeIn><span className="sc-label">{t('howItWorks.divisionLabel')}</span>
                <h2 style={{fontFamily:"IBM Plex Sans,sans-serif",fontSize:"clamp(1.5rem,3vw,2.2rem)",fontWeight:300,letterSpacing:"-.015em",marginBottom:48,lineHeight:1.1}}>{t('howItWorks.divisionTitle')}</h2></FadeIn>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:2,marginBottom:2}} className="grid-2-eq">
                  <FadeIn>
                    <div style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.06)",padding:"36px"}}>
                      <span style={{fontFamily:"IBM Plex Sans,sans-serif",fontSize:11,fontWeight:500,letterSpacing:"0.15em",textTransform:"uppercase",color:"var(--teal)",display:"block",marginBottom:22}}>{t('howItWorks.platformHandles')}</span>
                      {platformItems.map(item=>(
                        <div key={item} style={{display:"flex",gap:12,alignItems:"flex-start",padding:"11px 0",borderBottom:"1px solid rgba(255,255,255,0.05)"}}>
                          <div style={{width:5,height:5,background:"var(--teal)",borderRadius:"50%",flexShrink:0,marginTop:7}}/>
                          <div style={{fontFamily:"Inter,sans-serif",fontSize:13,color:"rgba(255,255,255,0.5)",lineHeight:1.5}}>{item}</div>
                        </div>
                      ))}
                    </div>
                  </FadeIn>
                  <FadeIn delay={0.1}>
                    <div style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.06)",padding:"36px"}}>
                      <span style={{fontFamily:"IBM Plex Sans,sans-serif",fontSize:11,fontWeight:500,letterSpacing:"0.15em",textTransform:"uppercase",color:"var(--orange)",display:"block",marginBottom:22}}>{t('howItWorks.youBring')}</span>
                      {youItems.map(item=>(
                        <div key={item} style={{display:"flex",gap:12,alignItems:"flex-start",padding:"11px 0",borderBottom:"1px solid rgba(255,255,255,0.05)"}}>
                          <div style={{width:5,height:5,background:"var(--orange)",borderRadius:"50%",flexShrink:0,marginTop:7}}/>
                          <div style={{fontFamily:"Inter,sans-serif",fontSize:13,color:"rgba(255,255,255,0.5)",lineHeight:1.5}}>{item}</div>
                        </div>
                      ))}
                    </div>
                  </FadeIn>
                </div>
                <StaggerContainer style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:2}} className="delivs-grid">
                  {deliverableItems.map(({icon, title, sub})=>(
                    <StaggerItem key={title}>
                      <div style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.06)",padding:22,textAlign:"center"}}>
                        <div style={{fontSize:18,marginBottom:10}}>{icon}</div>
                        <div style={{fontFamily:"IBM Plex Sans,sans-serif",fontSize:13,fontWeight:500,color:"#fff",marginBottom:4}}>{title}</div>
                        <div style={{fontFamily:"Inter,sans-serif",fontSize:11,color:"rgba(255,255,255,0.3)"}}>{sub}</div>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
              <style>{"@media(max-width:700px){.grid-2-eq{grid-template-columns:1fr!important}.delivs-grid{grid-template-columns:repeat(2,1fr)!important}}"}</style>
            </section>
          </>
        )
      })()}

      {/* ── DIFFERENTIATORS ─────────────────────────────────────────── */}
      <Differentiators />

      <section className="cta-strip">
        <FadeIn>
          <h2 className="cta-strip-h2">{t('forAgencies.ctaTitle')}</h2>
          <p className="cta-strip-sub">{t('forAgencies.ctaSub')}</p>
        </FadeIn>
        <div className="cta-actions">
          <Link href="/contact" className="btn btn-white">{t('forAgencies.ctaButton')}</Link>
        </div>
      </section>
    </PageWrapper>
  )
}
