import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motion'

const Card = ({ children, className = '', hover = true, delay = 0 }) => {
  return (
    <motion.div
      variants={fadeIn('up', delay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 ${
        hover ? 'card-hover' : ''
      } ${className}`}
    >
      {children}
    </motion.div>
  )
}

export default Card
