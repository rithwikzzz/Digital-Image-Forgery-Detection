import { motion } from 'framer-motion'
import { ArrowRight, Brain, Database, TrendingUp, Play } from 'lucide-react'
import Button from '../components/Button'
import MetricCard from '../components/MetricCard'
import Section from '../components/Section'
import { fadeIn, staggerContainer } from '../utils/motion'
import { projectHighlights } from '../data/mockData'

const Home = () => {
  return (
    <div className="pt-16">
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="space-y-8"
          >
            <motion.div variants={fadeIn('up', 0.2)} className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm mb-6">
              <Brain className="w-4 h-4" />
              <span>Deep Learning Research Project</span>
            </motion.div>

            <motion.h1
              variants={fadeIn('up', 0.3)}
              className="text-5xl md:text-7xl font-heading font-bold leading-tight"
            >
              Digital Image Forgery
              <br />
              <span className="text-gradient">Detection Using Deep Learning</span>
            </motion.h1>

            <motion.p
              variants={fadeIn('up', 0.4)}
              className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed"
            >
              Detecting manipulated images using advanced CNN architectures and forensic feature learning to combat misinformation and ensure digital authenticity
            </motion.p>

            <motion.div
              variants={fadeIn('up', 0.5)}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Button to="/about" icon={ArrowRight}>Explore Project</Button>
              <Button to="/implementation" variant="outline" icon={Play}>View Demo</Button>
            </motion.div>

            <motion.div
              variants={fadeIn('up', 0.6)}
              className="pt-12"
            >
              <img
                src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200&h=600&fit=crop"
                alt="Deep Learning Neural Network Visualization"
                className="w-full max-w-5xl mx-auto rounded-2xl shadow-2xl border border-slate-700"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Section
        title="Project Overview"
        subtitle="A comprehensive approach to detecting image forgeries using state-of-the-art deep learning techniques"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-heading font-bold text-white">The Challenge</h3>
            <p className="text-slate-400 leading-relaxed">
              With the proliferation of sophisticated image editing tools and AI-generated content, detecting forged images has become increasingly critical. Traditional forensic methods struggle with modern manipulation techniques, necessitating advanced deep learning approaches.
            </p>
            <p className="text-slate-400 leading-relaxed">
              This project addresses the growing threat of digital misinformation by developing robust detection systems capable of identifying various forgery types including splicing, copy-move, retouching, and GAN-based synthesis.
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn('left', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-heading font-bold text-white">Our Solution</h3>
            <p className="text-slate-400 leading-relaxed">
              We employ advanced convolutional neural networks with attention mechanisms to learn forensic features directly from data. Our approach combines multiple detection strategies including noise residual analysis, edge inconsistency detection, and semantic understanding.
            </p>
            <p className="text-slate-400 leading-relaxed">
              The system achieves high accuracy across multiple benchmark datasets while maintaining computational efficiency for practical deployment in real-world scenarios.
            </p>
          </motion.div>
        </div>
      </Section>

      <Section title="Key Highlights" className="bg-slate-900/30">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projectHighlights.map((item, index) => (
            <MetricCard
              key={index}
              icon={item.icon === 'Brain' ? Brain : item.icon === 'Database' ? Database : TrendingUp}
              value={item.value}
              label={item.label}
              delay={index * 0.1}
            />
          ))}
        </div>
      </Section>

      <Section
        title="Research Impact"
        subtitle="Contributing to digital forensics and combating misinformation"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center space-y-4"
          >
            <div className="w-16 h-16 mx-auto bg-blue-500/20 rounded-full flex items-center justify-center">
              <span className="text-3xl">🔍</span>
            </div>
            <h3 className="text-xl font-heading font-semibold text-white">Forensic Analysis</h3>
            <p className="text-slate-400">Advanced techniques for detecting pixel-level manipulations and inconsistencies in digital images</p>
          </motion.div>

          <motion.div
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center space-y-4"
          >
            <div className="w-16 h-16 mx-auto bg-blue-500/20 rounded-full flex items-center justify-center">
              <span className="text-3xl">🛡️</span>
            </div>
            <h3 className="text-xl font-heading font-semibold text-white">Trust & Authenticity</h3>
            <p className="text-slate-400">Ensuring digital content authenticity for journalism, legal evidence, and social media platforms</p>
          </motion.div>

          <motion.div
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center space-y-4"
          >
            <div className="w-16 h-16 mx-auto bg-blue-500/20 rounded-full flex items-center justify-center">
              <span className="text-3xl">🚀</span>
            </div>
            <h3 className="text-xl font-heading font-semibold text-white">Real-world Application</h3>
            <p className="text-slate-400">Practical deployment strategies for integration into existing content verification workflows</p>
          </motion.div>
        </div>
      </Section>
    </div>
  )
}

export default Home
