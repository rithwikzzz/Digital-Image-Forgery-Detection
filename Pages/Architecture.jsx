import { Cpu, GitBranch, Layers, Zap } from 'lucide-react'
import Section from '../components/Section'
import Card from '../components/Card'
import { architectureSteps, modelComponents, techStack } from '../data/mockData'

const Architecture = () => {
  return (
    <div className="pt-24 pb-12">
      <Section
        title="System Architecture & Methodology"
        subtitle="Detailed overview of our deep learning approach, model architecture, and implementation strategy"
      >
        <div className="space-y-20">
          <div>
            <h3 className="text-2xl font-heading font-bold text-white mb-8 flex items-center gap-3">
              <GitBranch className="w-6 h-6 text-blue-400" />
              High-Level Architecture Flow
            </h3>
            <div className="relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-400/30 -translate-x-1/2 hidden md:block" />
              <div className="space-y-8">
                {architectureSteps.map((step, index) => (
                  <Card key={index} delay={index * 0.1}>
                    <div className="flex flex-col md:flex-row items-center gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full flex items-center justify-center border-2 border-blue-500/30">
                          <span className="text-2xl font-bold text-blue-400">{index + 1}</span>
                        </div>
                      </div>
                      <div className="flex-1 text-center md:text-left">
                        <h4 className="text-xl font-heading font-semibold text-white mb-2">{step.title}</h4>
                        <p className="text-slate-400 text-sm leading-relaxed mb-3">{step.description}</p>
                        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                          {step.techniques.map((tech, idx) => (
                            <span key={idx} className="px-3 py-1 bg-slate-900/50 border border-slate-700 rounded-full text-xs text-slate-300">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-slate-900/30 rounded-2xl p-8">
            <h3 className="text-2xl font-heading font-bold text-white mb-8 flex items-center gap-3">
              <Layers className="w-6 h-6 text-blue-400" />
              Model Architecture Components
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {modelComponents.map((component, index) => (
                <Card key={index} delay={index * 0.1}>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-500/20 rounded-lg">
                        <Cpu className="w-5 h-5 text-blue-400" />
                      </div>
                      <h4 className="text-lg font-heading font-semibold text-white">{component.name}</h4>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">{component.description}</p>
                    <div className="space-y-2">
                      <p className="text-xs text-slate-500 font-medium">Key Features:</p>
                      <ul className="space-y-1">
                        {component.features.map((feature, idx) => (
                          <li key={idx} className="text-xs text-slate-400 flex items-start gap-2">
                            <span className="text-blue-400 mt-0.5">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-heading font-bold text-white mb-8 flex items-center gap-3">
              <Zap className="w-6 h-6 text-blue-400" />
              Training & Optimization Strategy
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <h4 className="text-lg font-heading font-semibold text-white mb-4">Loss Functions</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 font-mono text-sm mt-0.5">L1</span>
                    <div>
                      <p className="text-sm font-medium text-white">Binary Cross-Entropy</p>
                      <p className="text-xs text-slate-400">For classification (authentic vs forged)</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 font-mono text-sm mt-0.5">L2</span>
                    <div>
                      <p className="text-sm font-medium text-white">Focal Loss</p>
                      <p className="text-xs text-slate-400">Handles class imbalance effectively</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 font-mono text-sm mt-0.5">L3</span>
                    <div>
                      <p className="text-sm font-medium text-white">IoU Loss</p>
                      <p className="text-xs text-slate-400">For tamper localization masks</p>
                    </div>
                  </li>
                </ul>
              </Card>

              <Card>
                <h4 className="text-lg font-heading font-semibold text-white mb-4">Optimization Details</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center pb-2 border-b border-slate-700">
                    <span className="text-slate-400">Optimizer</span>
                    <span className="text-white font-medium">AdamW</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-slate-700">
                    <span className="text-slate-400">Learning Rate</span>
                    <span className="text-white font-medium">1e-4 (initial)</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-slate-700">
                    <span className="text-slate-400">Scheduler</span>
                    <span className="text-white font-medium">CosineAnnealing</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-slate-700">
                    <span className="text-slate-400">Batch Size</span>
                    <span className="text-white font-medium">32</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-slate-700">
                    <span className="text-slate-400">Epochs</span>
                    <span className="text-white font-medium">100</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Weight Decay</span>
                    <span className="text-white font-medium">1e-5</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <div className="bg-slate-900/30 rounded-2xl p-8">
            <h3 className="text-2xl font-heading font-bold text-white mb-8">Technology Stack</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {techStack.map((category, index) => (
                <Card key={index} delay={index * 0.1} hover={false}>
                  <h4 className="text-lg font-heading font-semibold text-white mb-4">{category.category}</h4>
                  <ul className="space-y-2">
                    {category.tools.map((tool, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-slate-400">
                        <span className="w-2 h-2 bg-blue-400 rounded-full" />
                        {tool}
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>

          <Card>
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h3 className="text-2xl font-heading font-bold text-gradient">Architecture Diagram</h3>
              <img
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=600&fit=crop"
                alt="Neural Network Architecture Visualization"
                className="w-full rounded-xl border border-slate-700"
              />
              <p className="text-sm text-slate-400">
                Simplified visualization of the end-to-end architecture: input preprocessing → feature extraction → attention mechanisms → classification head → localization output
              </p>
            </div>
          </Card>
        </div>
      </Section>
    </div>
  )
}

export default Architecture
