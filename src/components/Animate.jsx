import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

/* Page transition wrapper */
export function PageWrapper({ children }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      style={{ paddingTop: 68 }} // nav height offset
    >
      {children}
    </motion.main>
  )
}

/* Fade in when element enters viewport */
export function FadeIn({ children, delay = 0, direction = 'up', style = {}, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 24 : direction === 'down' ? -24 : 0,
      x: direction === 'left' ? 24 : direction === 'right' ? -24 : 0,
    },
    visible: { opacity: 1, y: 0, x: 0 },
  }

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={style}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* Stagger children animations */
export function StaggerContainer({ children, className = '', style = {} }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={{
        visible: { transition: { staggerChildren: 0.08 } },
        hidden: {},
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  )
}

/* Individual stagger item */
export function StaggerItem({ children, style = {}, className = '' }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] } },
      }}
      style={style}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* Count up number animation */
export function CountUp({ value, suffix = '', decimals = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {value}{suffix}
    </motion.span>
  )
}

/* Hover card with subtle lift */
export function HoverCard({ children, style = {}, className = '' }) {
  return (
    <motion.div
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      style={style}
      className={className}
    >
      {children}
    </motion.div>
  )
}
