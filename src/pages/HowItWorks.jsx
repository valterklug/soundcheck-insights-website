import { Link } from 'react-router-dom'
import { PageWrapper, FadeIn, StaggerContainer, StaggerItem } from '../components/Animate'

const phases = [
  { num:'Phase 01', label:'You run the client intake', timing:'Day 0 · Your time: ~1h', color:'var(--teal)',
    title:'The most important hour in the process.',
    body:"You lead a scoped conversation with your client: what market are they entering, what's the core business question, what decisions hang on the answer. You capture the brief and submit it through the platform — bringing the context no AI can infer.",
    tag:'Your relationship · Your framing'},
  { num:'Phase 02', label:'Platform generates the report', timing:'Days 1-5 · Automated', color:'var(--gray)',
    title:'What would take 3-4 weeks runs in under 5 days.',
    body:"The Soundcheck AI engine aggregates market data, builds competitive maps, calculates viability scores, and produces a structured 30-50 page analysis. You don't need to do anything during this phase.",
    tag:'Automated · No input needed from you'},
  { num:'Phase 03', label:'You validate with your expertise', timing:'Days 6-12 · Your time: ~5-8h', color:'var(--orange)',
    title:'This is where your value as a practitioner comes in.',
    body:"You review the AI-generated output against your own market knowledge, add strategic context and narrative, adjust any section that doesn't match your read, and build your recommendations layer on top. The output becomes yours, not ours.",
    tag:'Your expertise · Your strategic layer'},
  { num:'Phase 04', label:'You deliver under your brand', timing:'Day 14 · Your time: ~1h', color:'var(--teal-2)',
    title:'You present. You take the credit. You open the next conversation.',
    body:"You present the finalized report to your client white-labeled under your agency. Soundcheck's name never appears. You receive the credit, deepen the relationship, and open the next conversation.",
    tag:'Your brand · Your credit · Your next engagement'},
]

export default function HowItWorks() {
  return (
    <PageWrapper>
      <section className="page-hero">
        <div className="page-hero-inner">
          <span className="sc-label">How the Platform Works</span>
          <h1 className="page-h1">The AI does the research.<br /><span className="text-teal">You</span> deliver the intelligence.</h1>
          <p className="page-sub">How agencies use Soundcheck to produce decision-grade market reports — in 6-10 hours of their time, delivered under their brand.</p>
          <div style={{display:"flex",gap:10,flexWrap:"wrap",marginTop:28}}>
            {[["6-10h","your time per report"],["14 days","brief to delivery"],["100%","white-labeled to you"],["0","new hires needed"]].map(([v,l])=>(
              <div key={l} className="chip"><strong>{v}</strong> {l}</div>
            ))}
          </div>
        </div>
      </section>

      <section style={{background:"var(--navy)",padding:"80px 60px",borderBottom:"1px solid var(--border)"}} className="section-pad">
        <div style={{maxWidth:1200,margin:"0 auto"}}>
          <FadeIn>
            <span className="sc-label">The Four Phases</span>
            <h2 style={{fontFamily:"IBM Plex Sans,sans-serif",fontSize:"clamp(1.6rem,3vw,2.4rem)",fontWeight:300,letterSpacing:"-.015em",marginBottom:48,lineHeight:1.1,maxWidth:640}}>From brief to client-ready report in 14 days.</h2>
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
        <style>{"@media(max-width:700px){.phase-row{grid-template-columns:1fr!important}.phase-row>div:first-child{border-right:none!important;border-bottom:1px solid rgba(255,255,255,0.06)}.section-pad{padding:60px 24px!important}}"}</style>
      </section>

      <section style={{background:"var(--navy-2)",padding:"80px 60px",borderBottom:"1px solid var(--border)"}} className="section-pad">
        <div style={{maxWidth:1200,margin:"0 auto"}}>
          <FadeIn><span className="sc-label">Division of Work</span>
          <h2 style={{fontFamily:"IBM Plex Sans,sans-serif",fontSize:"clamp(1.5rem,3vw,2.2rem)",fontWeight:300,letterSpacing:"-.015em",marginBottom:48,lineHeight:1.1}}>What the platform does. What you do.</h2></FadeIn>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:2,marginBottom:2}} className="grid-2-eq">
            <FadeIn>
              <div style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.06)",padding:"36px"}}>
                <span style={{fontFamily:"IBM Plex Sans,sans-serif",fontSize:11,fontWeight:500,letterSpacing:"0.15em",textTransform:"uppercase",color:"var(--teal)",display:"block",marginBottom:22}}>Platform handles</span>
                {["Market data aggregation at scale","Competitive landscape mapping","Industry benchmark compilation","Viability scoring across 10 dimensions","Structured report assembly (30-50 pages)"].map(t=>(
                  <div key={t} style={{display:"flex",gap:12,alignItems:"flex-start",padding:"11px 0",borderBottom:"1px solid rgba(255,255,255,0.05)"}}>
                    <div style={{width:5,height:5,background:"var(--teal)",borderRadius:"50%",flexShrink:0,marginTop:7}}/>
                    <div style={{fontFamily:"Inter,sans-serif",fontSize:13,color:"rgba(255,255,255,0.5)",lineHeight:1.5}}>{t}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.06)",padding:"36px"}}>
                <span style={{fontFamily:"IBM Plex Sans,sans-serif",fontSize:11,fontWeight:500,letterSpacing:"0.15em",textTransform:"uppercase",color:"var(--orange)",display:"block",marginBottom:22}}>You bring</span>
                {["Client context and relationship knowledge","Professional judgment and market read","Strategic narrative and recommendation framing","Confidence scoring and gap flagging","Your brand and your client relationship"].map(t=>(
                  <div key={t} style={{display:"flex",gap:12,alignItems:"flex-start",padding:"11px 0",borderBottom:"1px solid rgba(255,255,255,0.05)"}}>
                    <div style={{width:5,height:5,background:"var(--orange)",borderRadius:"50%",flexShrink:0,marginTop:7}}/>
                    <div style={{fontFamily:"Inter,sans-serif",fontSize:13,color:"rgba(255,255,255,0.5)",lineHeight:1.5}}>{t}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
          <StaggerContainer style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:2}} className="delivs-grid">
            {[["📄","Executive Summary","2-4 page decision brief"],["📊","Full Report","30-50 pages of analysis"],["📐","Presentation Deck","Client-ready slides"],["🏷","White-Labeled","Your brand throughout"]].map(([icon,t,s])=>(
              <StaggerItem key={t}>
                <div style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.06)",padding:22,textAlign:"center"}}>
                  <div style={{fontSize:18,marginBottom:10}}>{icon}</div>
                  <div style={{fontFamily:"IBM Plex Sans,sans-serif",fontSize:13,fontWeight:500,color:"#fff",marginBottom:4}}>{t}</div>
                  <div style={{fontFamily:"Inter,sans-serif",fontSize:11,color:"rgba(255,255,255,0.3)"}}>{s}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
        <style>{"@media(max-width:700px){.grid-2-eq{grid-template-columns:1fr!important}.delivs-grid{grid-template-columns:repeat(2,1fr)!important}}"}</style>
      </section>

      <section className="cta-strip">
        <FadeIn>
          <h2 className="cta-strip-h2">Ready to run your first report?</h2>
          <p className="cta-strip-sub">Most operators start on an existing client. Low risk, immediate value.</p>
        </FadeIn>
        <div className="cta-actions">
          <Link to="/partner" className="btn btn-white">Request Platform Access</Link>
          <Link to="/products" className="btn btn-outline-white">Explore the 5 Products</Link>
        </div>
      </section>
    </PageWrapper>
  )
}
