'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslations } from 'next-intl'
import { motion, AnimatePresence } from 'framer-motion'

const FORMSUBMIT_EMAIL = 'info@soundcheckinsights.com'

// Demo request form for landing pages. Submits through FormSubmit, like ContactForm.
export default function DemoForm({ namespace, formName }) {
  const t = useTranslations(namespace)
  const [status, setStatus] = useState('idle')
  const { register, handleSubmit, reset, formState: { errors } } = useForm()

  const onSubmit = async (data) => {
    setStatus('submitting')
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${FORMSUBMIT_EMAIL}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...data,
          origem: formName,
          _subject: `[Soundcheck] ${formName} - ${data.nome} (${data.agencia})`,
          _template: 'table',
        }),
      })
      if (res.ok) {
        setStatus('success')
        reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const required = { required: t('required') }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="form-grid">
        <div className="form-group">
          <label className="form-label form-label-dark" htmlFor="demo-nome">{t('name')}</label>
          <input id="demo-nome" type="text" className="form-field form-field-dark" placeholder={t('namePlaceholder')} {...register('nome', required)} />
          {errors.nome && <span className="form-error-msg">{errors.nome.message}</span>}
        </div>
        <div className="form-group">
          <label className="form-label form-label-dark" htmlFor="demo-email">{t('email')}</label>
          <input
            id="demo-email"
            type="email"
            className="form-field form-field-dark"
            placeholder={t('emailPlaceholder')}
            {...register('email', { ...required, pattern: { value: /^\S+@\S+\.\S+$/, message: t('emailInvalid') } })}
          />
          {errors.email && <span className="form-error-msg">{errors.email.message}</span>}
        </div>
      </div>

      <div className="form-grid">
        <div className="form-group">
          <label className="form-label form-label-dark" htmlFor="demo-agencia">{t('agency')}</label>
          <input id="demo-agencia" type="text" className="form-field form-field-dark" placeholder={t('agencyPlaceholder')} {...register('agencia', required)} />
          {errors.agencia && <span className="form-error-msg">{errors.agencia.message}</span>}
        </div>
        <div className="form-group">
          <label className="form-label form-label-dark" htmlFor="demo-whatsapp">{t('whatsapp')} <span style={{ fontWeight: 400, opacity: 0.6 }}>{t('optional')}</span></label>
          <input id="demo-whatsapp" type="tel" className="form-field form-field-dark" placeholder={t('whatsappPlaceholder')} {...register('whatsapp')} />
        </div>
      </div>

      <div className="form-grid">
        <div className="form-group">
          <label className="form-label form-label-dark" htmlFor="demo-equipe">{t('teamSize')}</label>
          <select id="demo-equipe" className="form-field form-field-dark" style={{ color: 'rgba(255,255,255,0.7)' }} {...register('equipe')}>
            <option value="">{t('selectOne')}</option>
            {t.raw('teamSizeOptions').map((o) => <option key={o}>{o}</option>)}
          </select>
        </div>
        <div className="form-group">
          <label className="form-label form-label-dark" htmlFor="demo-periodo">{t('period')}</label>
          <select id="demo-periodo" className="form-field form-field-dark" style={{ color: 'rgba(255,255,255,0.7)' }} {...register('periodo')}>
            <option value="">{t('selectOne')}</option>
            {t.raw('periodOptions').map((o) => <option key={o}>{o}</option>)}
          </select>
        </div>
      </div>

      <div className="form-group">
        <label className="form-label form-label-dark" htmlFor="demo-mensagem">{t('message')} <span style={{ fontWeight: 400, opacity: 0.6 }}>{t('optional')}</span></label>
        <textarea id="demo-mensagem" className="form-field form-field-dark" placeholder={t('messagePlaceholder')} {...register('mensagem')} />
      </div>

      <button type="submit" className="form-submit" disabled={status === 'submitting'}>
        {status === 'submitting' ? t('sending') : t('submit')}
      </button>
      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: 'rgba(255,255,255,0.25)', marginTop: 10 }}>
        {t('note')}
      </p>

      <AnimatePresence>
        {status === 'success' && (
          <motion.div className="form-success" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
            {t('success')}
          </motion.div>
        )}
        {status === 'error' && (
          <motion.div
            className="form-success"
            style={{ background: 'rgba(232,71,42,0.1)', borderColor: 'rgba(232,71,42,0.3)', color: '#ff9080' }}
            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
          >
            {t('error')} <a href={`mailto:${FORMSUBMIT_EMAIL}`} style={{ color: '#E8472A' }}>{FORMSUBMIT_EMAIL}</a>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  )
}
