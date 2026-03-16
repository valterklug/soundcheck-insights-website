import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion, AnimatePresence } from 'framer-motion'

// ─── CONFIGURATION ──────────────────────────────────────────────────────────
// Using FormSubmit.co — sends submissions to info@soundcheckinsights.com
// First submission triggers a confirmation email — click to activate.
const FORMSUBMIT_EMAIL = 'info@soundcheckinsights.com'
// ────────────────────────────────────────────────────────────────────────────

export default function ContactForm({ dark = false, fields = 'contact', buttonLabel = 'Send Message →', formName = 'contact' }) {
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const { register, handleSubmit, reset, formState: { errors } } = useForm()

  const onSubmit = async (data) => {
    setStatus('submitting')
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${FORMSUBMIT_EMAIL}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...data,
          _subject: `[Soundcheck] ${formName} form — ${data.name}`,
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

  const fieldClass = dark ? 'form-field form-field-dark' : 'form-field'
  const labelClass = dark ? 'form-label form-label-dark' : 'form-label'

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      {/* Name + Email */}
      <div className="form-grid">
        <div className="form-group">
          <label className={labelClass}>Your Name</label>
          <input
            type="text"
            className={fieldClass}
            placeholder="Jane Smith"
            {...register('name', { required: 'Name is required' })}
          />
          {errors.name && <span className="form-error-msg">{errors.name.message}</span>}
        </div>
        <div className="form-group">
          <label className={labelClass}>Email Address</label>
          <input
            type="email"
            className={fieldClass}
            placeholder="jane@youragency.com"
            {...register('email', {
              required: 'Email is required',
              pattern: { value: /^\S+@\S+\.\S+$/, message: 'Please enter a valid email' }
            })}
          />
          {errors.email && <span className="form-error-msg">{errors.email.message}</span>}
        </div>
      </div>

      {/* Company */}
      <div className="form-group">
      </div>

      {/* Topic selector */}
      {fields === 'contact' && (
        <div className="form-group">
          <label className={labelClass}>What's this about?</label>
          <select
            className={fieldClass}
            style={dark ? { color: 'rgba(255,255,255,0.7)' } : {}}
            {...register('topic', { required: 'Please select a topic' })}
          >
            <option value="">Select one</option>
            <option value="agency-partnership">Agency partnership inquiry</option>
            <option value="brief-expansion">Brief — Market Summary &amp; Expansion Assessment</option>
            <option value="brief-validation">Brief — Idea Validation</option>
            <option value="brief-bizplan">Brief — Business Plan Development</option>
            <option value="brief-focusgroups">Brief — AI Virtual Focus Groups</option>
            <option value="brief-funding">Brief — Funding Vetting (VC/PE)</option>
            <option value="pricing">Pricing &amp; availability</option>
            <option value="brand">I'm a brand (not an agency)</option>
            <option value="press">Press / media</option>
            <option value="other">Other</option>
          </select>
          {errors.topic && <span className="form-error-msg">{errors.topic.message}</span>}
        </div>
      )}

      {/* Partner form extra fields */}
      {fields === 'partner' && (
        <>
          <div className="form-grid">
            <div className="form-group">
              <label className={labelClass}>Company Name</label>
              <input type="text" className={fieldClass} placeholder="Your Company" {...register('agencyName')} />
            </div>
            <div className="form-group">
              <label className={labelClass}>Company Size</label>
              <select className={fieldClass} style={dark ? { color: 'rgba(255,255,255,0.7)' } : {}} {...register('agencySize')}>
                <option value="">Select team size</option>
                <option>Solo / 1 person</option>
                <option>2–5 people</option>
                <option>6–15 people</option>
                <option>16–50 people</option>
                <option>50+ people</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label className={labelClass}>What kind of clients do you serve?</label>
            <input
              type="text"
              className={fieldClass}
              placeholder="e.g., CPG brands entering US, founders, PE-backed companies..."
              {...register('clientTypes')}
            />
          </div>
          <div className="form-group">
            <label className={labelClass}>Partnership model you're interested in</label>
            <select className={fieldClass} style={dark ? { color: 'rgba(255,255,255,0.7)' } : {}} {...register('partnershipModel')}>
              <option value="">Select one</option>
              <option>On-Demand (per project)</option>
              <option>White-Label Partner (monthly)</option>
              <option>Embedded Intelligence (custom)</option>
              <option>Not sure — let's talk</option>
            </select>
          </div>
        </>
      )}

      {/* Message */}
      <div className="form-group">
        <label className={labelClass}>
          {fields === 'partner' ? 'Tell us about your research needs' : 'Message'}
        </label>
        <textarea
          className={fieldClass}
          placeholder={
            fields === 'partner'
              ? 'What types of clients do you work with? What research challenges do you face?'
              : 'Tell us what you\'re working on. The more context you share, the better we can help.'
          }
          {...register('message', { required: 'Message is required' })}
        />
        {errors.message && <span className="form-error-msg">{errors.message.message}</span>}
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="form-submit"
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? 'Sending…' : buttonLabel}
      </button>
      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: dark ? 'rgba(255,255,255,0.25)' : '#999', marginTop: 10 }}>
        No commitment required. Response within 2 business days.
      </p>

      {/* Status messages */}
      <AnimatePresence>
        {status === 'success' && (
          <motion.div
            className="form-success"
            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
          >
            ✓ Message sent! Valter reviews every submission personally and will reply within one business day.
          </motion.div>
        )}
        {status === 'error' && (
          <motion.div
            className="form-success"
            style={{ background: 'rgba(232,71,42,0.1)', borderColor: 'rgba(232,71,42,0.3)', color: '#ff9080' }}
            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
          >
            Something went wrong. Please email directly: <a href="mailto:info@soundcheckinsights.com" style={{ color: '#E8472A' }}>info@soundcheckinsights.com</a>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  )
}
