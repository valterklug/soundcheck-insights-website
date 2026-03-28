
import { Link } from 'react-router-dom'
import { PageWrapper, FadeIn, StaggerContainer, StaggerItem } from '../components/Animate'

export default function ForAgencies() {
  return (
    <PageWrapper>
      <section className="page-hero" style={{borderBottom:"3px solid var(--orange)"}}>
        <div className="page-hero-inner">
          <span className="sc-label">For Agencies & Consultancies</span>
          <h1 className="page-h1">Add a <span className="text-orange">$400–$1,250+/hour</span> revenue line to your practice. No new headcount.</h1>
          <p className="page-sub">Soundcheck is a market intelligence platform you operate for your clients. Your expertise validates the AI output. You set the price. You own the relationship.</p>
          <div style={{display:"flex",gap:8,flexWrap:"wrap",marginTop:24}}>
            {[["⏱","2–10h","per report"],["💰","$3,000–$5,000+","per engagement"],["🏷","White-label","ready"],["🔍","You validate","the output"]].map(([i,v,l])=>(
              <div key={v} className="chip">{i} <strong>{v}</strong> {l}</div>
            ))}
          </div>
        </div>
      </section>

      <section style={{background:"var(--navy)",padding:"80px 60px"}} className="section-pad">
        <div style={{maxWidth:1200,margin:"0 auto",display:"grid",gridTemplateColumns:"1fr 1fr",gap:80,alignItems:"start"}} className="grid-2">
          <FadeIn>
            <span className="sc-label sc-label-orange">The Business Case</span>
            <h2 style={{fontFamily:"IBM Plex Sans,sans-serif",fontSize:"clamp(1.5rem,3vw,2.2rem)",fontWeight:300,letterSpacing:"-.015em",lineHeight:1.1,marginBottom:20}}>This is how it works in <em>practice</em> today.</h2>
            <p style={{fontFamily:"Inter,sans-serif",fontSize:"0.9375rem",color:"rgba(255,255,255,0.5)",lineHeight:1.75,marginBottom:14}}>Before opening this as a platform, I ran every Soundcheck report myself. Not as a proof of concept — because the economics were too compelling not to prove first.</p>
            <p style={{fontFamily:"Inter,sans-serif",fontSize:"0.9375rem",color:"rgba(255,255,255,0.5)",lineHeight:1.75,marginBottom:14}}>The platform handles the heavy analytical work: data aggregation, competitive mapping, viability scoring, report generation. Your role is to capture the right information from the client upfront, apply your professional judgment to the AI output, and present the findings with the strategic context that only a real expert can provide.</p>
            <p style={{fontFamily:"Inter,sans-serif",fontSize:"0.9375rem",color:"rgba(255,255,255,0.5)",lineHeight:1.75}}>That&apos;s what your client is paying for.</p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div style={{fontFamily:"IBM Plex Sans,sans-serif",fontSize:10,fontWeight:500,letterSpacing:"0.15em",textTransform:"uppercase",color:"rgba(255,255,255,0.25)",marginBottom:14}}>Real Economics · Per Report (on a $5,000 engagement)</div>
            {/* Two-tier header */}
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:0}}>
              <div style={{padding:"12px 18px",background:"rgba(255,255,255,0.01)"}}></div>
              <div style={{padding:"12px 18px",background:"rgba(0,196,212,0.06)",border:"1px solid rgba(0,196,212,0.15)",textAlign:"center"}}>
                <div style={{fontFamily:"IBM Plex Sans,sans-serif",fontSize:10,fontWeight:600,letterSpacing:"0.12em",textTransform:"uppercase",color:"var(--teal)"}}>Self-Serve</div>
                <div style={{fontFamily:"Inter,sans-serif",fontSize:10,color:"rgba(255,255,255,0.3)",marginTop:2}}>You run the platform</div>
              </div>
              <div style={{padding:"12px 18px",background:"rgba(232,71,42,0.06)",border:"1px solid rgba(232,71,42,0.15)",textAlign:"center"}}>
                <div style={{fontFamily:"IBM Plex Sans,sans-serif",fontSize:10,fontWeight:600,letterSpacing:"0.12em",textTransform:"uppercase",color:"var(--orange)"}}>Full-Service</div>
                <div style={{fontFamily:"Inter,sans-serif",fontSize:10,color:"rgba(255,255,255,0.3)",marginTop:2}}>We help end-to-end</div>
              </div>
            </div>
            {/* Table rows */}
            {[
              ["Soundcheck fee","20% of client price","Up to 50% of client price"],
              ["On a $5k engagement","$1,000","$2,500"],
              ["Your time investment","6–10 hours","2–4 hours"],
              ["Effective hourly rate","$400–$667/h","$625–$1,250/h"],
            ].map(([l,v1,v2])=>(
              <div key={l} style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:0,marginBottom:1}}>
                <div style={{padding:"13px 18px",background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.05)",display:"flex",alignItems:"center"}}>
                  <span style={{fontFamily:"Inter,sans-serif",fontSize:12,color:"rgba(255,255,255,0.45)"}}>{l}</span>
                </div>
                <div style={{padding:"13px 18px",background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.05)",textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center"}}>
                  <span style={{fontFamily:"IBM Plex Sans,sans-serif",fontSize:13,fontWeight:500,color:"#fff"}}>{v1}</span>
                </div>
                <div style={{padding:"13px 18px",background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.05)",textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center"}}>
                  <span style={{fontFamily:"IBM Plex Sans,sans-serif",fontSize:13,fontWeight:500,color:"#fff"}}>{v2}</span>
                </div>
              </div>
            ))}
            {/* Margin row */}
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:0,marginTop:2}}>
              <div style={{padding:"16px 18px",background:"var(--orange)",display:"flex",alignItems:"center"}}>
                <span style={{fontFamily:"IBM Plex Sans,sans-serif",fontSize:12,fontWeight:600,color:"#fff"}}>Your margin</span>
              </div>
              <div style={{padding:"16px 18px",background:"var(--orange)",textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center"}}>
                <span style={{fontFamily:"IBM Plex Sans,sans-serif",fontSize:20,fontWeight:300,color:"#fff"}}>$4,000</span>
              </div>
              <div style={{padding:"16px 18px",background:"var(--orange)",textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center"}}>
                <span style={{fontFamily:"IBM Plex Sans,sans-serif",fontSize:20,fontWeight:300,color:"#fff"}}>$2,500</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section style={{background:"var(--navy-2)",padding:"80px 60px",borderTop:"1px solid var(--border)"}} className="section-pad">
        <div style={{maxWidth:1200,margin:"0 auto"}}>
          <FadeIn><span className="sc-label">What You Get as an Operator</span>
          <h2 style={{fontFamily:"IBM Plex Sans,sans-serif",fontSize:"clamp(1.5rem,3vw,2.2rem)",fontWeight:300,letterSpacing:"-.015em",marginBottom:48,lineHeight:1.1}}>Everything you need to deliver intelligence<br/>at the level of a research firm.</h2></FadeIn>
          <StaggerContainer style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:2}} className="offer-grid">
            {[["🔑","Platform Access","Dashboard to submit briefs, track report progress, and download finalized outputs. Purpose-built for agency workflows."],
              ["📊","30–50 Page Research Reports","AI-generated analysis covering market sizing, competitive landscape, viability scoring, regulatory snapshot, and distribution maps."],
              ["🏷","100% White-Label Ready","Every deliverable comes without Soundcheck branding. Your logo, your brand, your client relationship. Always."],
              ["📐","Client-Ready Presentation Deck","Alongside the full report, every engagement includes a presentation-ready deck structured for your client briefing."],
              ["🧠","Operator Onboarding","Valter walks every new operator through the full workflow personally — including the first report briefing, validation, and delivery."],
              ["📈","US Growth Roadmap (White-Label)","Market analysis, competitive intelligence, ranked growth levers, and a 90-day action plan for US small and mid-size businesses. B2B services and CPG segments. Delivered under your brand in 14 days."],
              ["📬","Monthly Intelligence Briefing","Operator-only market intelligence updates — category shifts, methodology improvements, and research signals."],
            ].map(([icon,t,d])=>(
              <StaggerItem key={t}>
                <div style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.06)",borderTop:"3px solid var(--teal)",padding:"32px 28px",height:"100%"}}>
                  <div style={{fontSize:22,marginBottom:16}}>{icon}</div>
                  <div style={{fontFamily:"IBM Plex Sans,sans-serif",fontSize:15,fontWeight:500,color:"#fff",marginBottom:10}}>{t}</div>
                  <p style={{fontFamily:"Inter,sans-serif",fontSize:13,color:"rgba(255,255,255,0.4)",lineHeight:1.65}}>{d}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
        <style>{"@media(max-width:900px){.offer-grid{grid-template-columns:1fr!important}.section-pad{padding:60px 24px!important}}"}</style>
      </section>

      <section style={{background:"var(--navy)",padding:"80px 60px",borderTop:"1px solid rgba(232,71,42,0.12)"}} className="section-pad">
        <div style={{maxWidth:1200,margin:"0 auto"}}>
          <FadeIn><span className="sc-label">Right Fit</span>
          <h2 style={{fontFamily:"IBM Plex Sans,sans-serif",fontSize:"clamp(1.5rem,3vw,2.2rem)",fontWeight:300,letterSpacing:"-.015em",marginBottom:48,lineHeight:1.1}}>Who this is built for.</h2></FadeIn>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:80,alignItems:"start"}} className="grid-2">
            <FadeIn>
              <div style={{fontFamily:"IBM Plex Sans,sans-serif",fontSize:10,fontWeight:500,letterSpacing:"0.12em",textTransform:"uppercase",color:"rgba(255,255,255,0.25)",marginBottom:12}}>This works well for you if:</div>
              {["You serve clients who make market-entry or investment decisions","You have established client relationships where research would add value","You want to expand your revenue without expanding your team","You're a boutique agency (1–50 people) or independent consultant","You want to deliver research-grade intelligence under your own brand"].map(t=>(
                <div key={t} style={{display:"flex",gap:12,alignItems:"flex-start",background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.06)",padding:"14px 18px",marginBottom:2}}>
                  <div style={{color:"var(--teal)",fontWeight:700,flexShrink:0,marginTop:1}}>✓</div>
                  <div style={{fontFamily:"Inter,sans-serif",fontSize:13,color:"rgba(255,255,255,0.55)",lineHeight:1.5}}>{t}</div>
                </div>
              ))}
            </FadeIn>
            <FadeIn delay={0.1}>
              <div style={{fontFamily:"IBM Plex Sans,sans-serif",fontSize:10,fontWeight:500,letterSpacing:"0.12em",textTransform:"uppercase",color:"rgba(255,255,255,0.25)",marginBottom:12}}>Probably not the right fit if:</div>
              {["You're a brand looking for research on your own business (see our direct products)","You're looking for a tool to replace analyst judgment entirely","You need real-time or continuous market monitoring","You operate a market research firm with your own research infrastructure"].map(t=>(
                <div key={t} style={{display:"flex",gap:12,alignItems:"flex-start",background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.04)",padding:"12px 18px",marginBottom:2}}>
                  <div style={{color:"rgba(255,255,255,0.2)",flexShrink:0}}>✗</div>
                  <div style={{fontFamily:"Inter,sans-serif",fontSize:12,color:"rgba(255,255,255,0.3)",lineHeight:1.5}}>{t}</div>
                </div>
              ))}
              <div style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.07)",padding:"22px 24px",marginTop:20}}>
                <div style={{fontFamily:"IBM Plex Sans,sans-serif",fontSize:13,fontWeight:500,color:"#fff",marginBottom:6}}>Not sure if this is right for you?</div>
                <div style={{fontFamily:"Inter,sans-serif",fontSize:13,color:"rgba(255,255,255,0.35)",lineHeight:1.6,marginBottom:12}}>Tell us about your practice and we'll give you an honest answer.</div>
                <Link to="/contact" className="text-link">Ask us directly →</Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="cta-strip">
        <FadeIn>
          <h2 className="cta-strip-h2">Start with one report.<br/>See what $400+/hour feels like.</h2>
          <p className="cta-strip-sub">Most operators run their first report on an existing client.</p>
        </FadeIn>
        <div className="cta-actions">
          <Link to="/partner" className="btn btn-white">Request Platform Access →</Link>
        </div>
      </section>
    </PageWrapper>
  )
}
