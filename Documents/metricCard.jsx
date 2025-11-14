import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motion'

const MetricCard = ({ icon: Icon, value, label, delay = 0 }) => {
  return (
    <motion.div
      variants={fadeIn('up', delay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center card-hover"
    >
      <div className="flex justify-center mb-4">
        <div className="p-3 rounded-lg bg-blue-500/20 text-blue-400">
          <Icon className="w-8 h-8" />
        </div>
      </div>
      <div className="text-3xl font-heading font-bold text-gradient mb-2">{value}</div>
      <div className="text-sm text-slate-400">{label}</div>
    </motion.div>
  )
}

export default MetricCard
