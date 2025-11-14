import { BookOpen, FileText, Layers } from 'lucide-react'
import Section from '../components/Section'
import Card from '../components/Card'
import { forgeryTypes, relatedWork } from '../data/mockData'

const Literature = () => {
  return (
    <div className="pt-24 pb-12">
      <Section
        title="Literature Review"
        subtitle="Understanding forgery types and related research in image forensics and deep learning"
      >
        <div className="space-y-20">
          <div>
            <h3 className="text-2xl font-heading font-bold text-white mb-8 flex items-center gap-3">
              <Layers className="w-6 h-6 text-blue-400" />
              Common Forgery Types
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {forgeryTypes.map((type, index) => (
                <Card key={index} delay={index * 0.1}>
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{type.icon}</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-heading font-semibold text-white mb-2">{type.name}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed mb-3">{type.description}</p>
                      <div className="space-y-2">
                        <p className="text-xs text-slate-500 font-medium">Detection Challenges:</p>
                        <ul className="space-y-1">
                          {type.challenges.map((challenge, idx) => (
                            <li key={idx} className="text-xs text-slate-400 flex items-start gap-2">
                              <span className="text-blue-400 mt-0.5">•</span>
                              <span>{challenge}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="bg-slate-900/30 rounded-2xl p-8">
            <h3 className="text-2xl font-heading font-bold text-white mb-8 flex items-center gap-3">
              <BookOpen className="w-6 h-6 text-blue-400" />
              Related Work & Key Research
            </h3>
            <div className="space-y-6">
              {relatedWork.map((work, index) => (
                <Card key={index} delay={index * 0.1} hover={false}>
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                        <FileText className="w-6 h-6 text-blue-400" />
                      </div>
                    </div>
                    <div className="flex-1 space-y-3">
                      <div>
                        <h4 className="text-lg font-heading font-semibold text-white mb-1">{work.title}</h4>
                        <p className="text-sm text-slate-500">{work.authors} • {work.year}</p>
                      </div>
                      <p className="text-slate-400 text-sm leading-relaxed">{work.summary}</p>
                      <div className="flex flex-wrap gap-2">
                        {work.keyContributions.map((contrib, idx) => (
                          <span key={idx} className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs text-blue-400">
                            {contrib}
                          </span>
                        ))}
                      </div>
                      {work.limitations && (
                        <div className="pt-2 border-t border-slate-700">
                          <p className="text-xs text-slate-500 font-medium mb-1">Limitations:</p>
                          <p className="text-xs text-slate-400">{work.limitations}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <Card>
              <div className="max-w-4xl mx-auto space-y-6">
                <h3 className="text-2xl font-heading font-bold text-gradient text-center">Research Evolution Timeline</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 bg-blue-400 rounded-full" />
                      <div className="w-0.5 h-full bg-blue-400/30" />
                    </div>
                    <div className="pb-8">
                      <div className="text-sm text-blue-400 font-medium mb-1">2005-2010: Classical Methods</div>
                      <p className="text-sm text-slate-400">Hand-crafted features, statistical analysis, JPEG artifacts, noise inconsistencies</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 bg-blue-400 rounded-full" />
                      <div className="w-0.5 h-full bg-blue-400/30" />
                    </div>
                    <div className="pb-8">
                      <div className="text-sm text-blue-400 font-medium mb-1">2011-2015: Machine Learning</div>
                      <p className="text-sm text-slate-400">SVM classifiers, feature fusion, patch-based analysis, multi-scale approaches</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 bg-blue-400 rounded-full" />
                      <div className="w-0.5 h-full bg-blue-400/30" />
                    </div>
                    <div className="pb-8">
                      <div className="text-sm text-blue-400 font-medium mb-1">2016-2020: Deep Learning Era</div>
                      <p className="text-sm text-slate-400">CNNs, transfer learning, attention mechanisms, end-to-end learning, localization</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 bg-blue-400 rounded-full" />
                    </div>
                    <div>
                      <div className="text-sm text-blue-400 font-medium mb-1">2021-Present: Advanced Architectures</div>
                      <p className="text-sm text-slate-400">Transformers, self-supervised learning, multimodal fusion, adversarial robustness, explainable AI</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default Literature
