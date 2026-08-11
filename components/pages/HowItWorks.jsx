'use client'

import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import { PageWrapper, FadeIn, StaggerContainer, StaggerItem } from '@/components/Animate'

export default function HowItWorks() {
  const t = useTranslations()

  const phases = t.raw('howItWorks.phases')
  const chips = t.raw('howItWorks.chips')
  const platformItems = t.raw('howItWorks.platformItems')
  const youItems = t.raw('howItWorks.youItems')
  const deliverables = t.raw('howItWorks.deliverables')

  return (
    <PageWrapper>
      <section className="page-hero">
        <div className="page-hero-inner">
          <span className="sc-label">{t('howItWorks.heroLabel')}</span>
          <h1 className="page-h1">{t('howItWorks.heroTitle1')}<br /><span className="text-teal">{t('howItWorks.heroTitle2')}</span> {t('howItWorks.heroTitle3')}</h1>
          <p className="page-sub">{t('howItWorks.heroSub')}</p>
          <div style={{display:"flex",gap:10,flexWrap:"wrap",marginTop:28}}>
            {chips.map(({value, label})=>(
              <div key={label} className="chip"><strong>{value}</strong> {label}</div>
            ))}
          </div>
        </div>
      </section>

      <section style={{background:"var(--navy)",padding:"80px 60px",borderBottom:"1px solid var(--border)"}} className="section-pad">
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
        <style>{"@media(max-width:700px){.phase-row{grid-template-columns:1fr!important}.phase-row>div:first-child{border-right:none!important;border-bottom:1px solid rgba(255,255,255,0.06)}.section-pad{padding:60px 24px!important}}"}</style>
      </section>

      <section style={{background:"var(--navy-2)",padding:"80px 60px",borderBottom:"1px solid var(--border)"}} className="section-pad">
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
            {deliverables.map(({icon, title, sub})=>(
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

      <section className="cta-strip">
        <FadeIn>
          <h2 className="cta-strip-h2">{t('howItWorks.ctaTitle')}</h2>
          <p className="cta-strip-sub">{t('howItWorks.ctaSub')}</p>
        </FadeIn>
        <div className="cta-actions">
          <Link href="/partner" className="btn btn-white">{t('howItWorks.ctaButton1')}</Link>
          <Link href="/products" className="btn btn-outline-white">{t('howItWorks.ctaButton2')}</Link>
        </div>
      </section>
    </PageWrapper>
  )
}
