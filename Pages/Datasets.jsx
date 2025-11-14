import { Database, Image, PieChart, CheckCircle } from 'lucide-react'
import Section from '../components/Section'
import Card from '../components/Card'
import { datasets, dataAugmentation } from '../data/mockData'

const Datasets = () => {
  return (
    <div className="pt-24 pb-12">
      <Section
        title="Datasets & Data Preparation"
        subtitle="Comprehensive overview of datasets used, data preprocessing, and augmentation techniques"
      >
        <div className="space-y-20">
          <div>
            <h3 className="text-2xl font-heading font-bold text-white mb-8 flex items-center gap-3">
              <Database className="w-6 h-6 text-blue-400" />
              Datasets Used
            </h3>
            <div className="grid grid-cols-1 gap-6">
              {datasets.map((dataset, index) => (
                <Card key={index} delay={index * 0.1}>
                  <div className="space-y-4">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        <h4 className="text-xl font-heading font-semibold text-white mb-2">{dataset.name}</h4>
                        <p className="text-slate-400 text-sm leading-relaxed mb-4">{dataset.description}</p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          <div className="p-3 bg-slate-900/50 rounded-lg">
                            <div className="text-xs text-slate-500 mb-1">Total Images</div>
                            <div className="text-lg font-semibold text-blue-400">{dataset.totalImages}</div>
                          </div>
                          <div className="p-3 bg-slate-900/50 rounded-lg">
                            <div className="text-xs text-slate-500 mb-1">Authentic</div>
                            <div className="text-lg font-semibold text-green-400">{dataset.authentic}</div>
                          </div>
                          <div className="p-3 bg-slate-900/50 rounded-lg">
                            <div className="text-xs text-slate-500 mb-1">Forged</div>
                            <div className="text-lg font-semibold text-red-400">{dataset.forged}</div>
                          </div>
                          <div className="p-3 bg-slate-900/50 rounded-lg">
                            <div className="text-xs text-slate-500 mb-1">Resolution</div>
                            <div className="text-lg font-semibold text-cyan-400">{dataset.resolution}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-slate-700">
                      <p className="text-xs text-slate-500 font-medium mb-2">Forgery Types Covered:</p>
                      <div className="flex flex-wrap gap-2">
                        {dataset.forgeryTypes.map((type, idx) => (
                          <span key={idx} className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs text-blue-400">
                            {type}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="bg-slate-900/30 rounded-2xl p-8">
            <h3 className="text-2xl font-heading font-bold text-white mb-8 flex items-center gap-3">
              <PieChart className="w-6 h-6 text-blue-400" />
              Data Split Strategy
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card hover={false}>
                <div className="text-center space-y-3">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-full flex items-center justify-center border-2 border-blue-500/30">
                    <span className="text-2xl font-bold text-blue-400">70%</span>
                  </div>
                  <h4 className="text-lg font-heading font-semibold text-white">Training Set</h4>
                  <p className="text-sm text-slate-400">8,400 images used for model training and parameter optimization</p>
                </div>
              </Card>
              <Card hover={false}>
                <div className="text-center space-y-3">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 rounded-full flex items-center justify-center border-2 border-cyan-500/30">
                    <span className="text-2xl font-bold text-cyan-400">15%</span>
                  </div>
                  <h4 className="text-lg font-heading font-semibold text-white">Validation Set</h4>
                  <p className="text-sm text-slate-400">1,800 images for hyperparameter tuning and model selection</p>
                </div>
              </Card>
              <Card hover={false}>
                <div className="text-center space-y-3">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-full flex items-center justify-center border-2 border-green-500/30">
                    <span className="text-2xl font-bold text-green-400">15%</span>
                  </div>
                  <h4 className="text-lg font-heading font-semibold text-white">Test Set</h4>
                  <p className="text-sm text-slate-400">1,800 images for final model evaluation and performance metrics</p>
                </div>
              </Card>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-heading font-bold text-white mb-8 flex items-center gap-3">
              <Image className="w-6 h-6 text-blue-400" />
              Data Augmentation Techniques
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dataAugmentation.map((technique, index) => (
                <Card key={index} delay={index * 0.1}>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <h4 className="text-lg font-heading font-semibold text-white">{technique.name}</h4>
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed">{technique.description}</p>
                    <div className="pt-2 border-t border-slate-700">
                      <p className="text-xs text-slate-500 mb-1">Parameters:</p>
                      <p className="text-xs text-slate-400">{technique.parameters}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="bg-slate-900/30 rounded-2xl p-8">
            <h3 className="text-2xl font-heading font-bold text-white mb-8">Sample Images Gallery</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <img
                  src="https://images.unsplash.com/photo-1516110833967-0b5716ca1387?w=400&h=400&fit=crop"
                  alt="Original Image Sample"
                  className="w-full aspect-square object-cover rounded-lg border border-slate-700"
                />
                <p className="text-xs text-center text-green-400 font-medium">Original</p>
              </div>
              <div className="space-y-2">
                <img
                  src="https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=400&h=400&fit=crop"
                  alt="Spliced Image Sample"
                  className="w-full aspect-square object-cover rounded-lg border border-red-500"
                />
                <p className="text-xs text-center text-red-400 font-medium">Splicing</p>
              </div>
              <div className="space-y-2">
                <img
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=400&fit=crop"
                  alt="Copy-Move Sample"
                  className="w-full aspect-square object-cover rounded-lg border border-red-500"
                />
                <p className="text-xs text-center text-red-400 font-medium">Copy-Move</p>
              </div>
              <div className="space-y-2">
                <img
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=400&fit=crop"
                  alt="Retouched Sample"
                  className="w-full aspect-square object-cover rounded-lg border border-red-500"
                />
                <p className="text-xs text-center text-red-400 font-medium">Retouching</p>
              </div>
            </div>
          </div>

          <Card>
            <div className="max-w-4xl mx-auto space-y-6">
              <h3 className="text-2xl font-heading font-bold text-gradient text-center">Data Preprocessing Pipeline</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 mx-auto bg-blue-500/20 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-blue-400">1</span>
                  </div>
                  <p className="text-sm font-medium text-white">Image Loading</p>
                  <p className="text-xs text-slate-400">RGB format, variable sizes</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 mx-auto bg-blue-500/20 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-blue-400">2</span>
                  </div>
                  <p className="text-sm font-medium text-white">Resizing</p>
                  <p className="text-xs text-slate-400">Uniform 256×256px</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 mx-auto bg-blue-500/20 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-blue-400">3</span>
                  </div>
                  <p className="text-sm font-medium text-white">Normalization</p>
                  <p className="text-xs text-slate-400">ImageNet statistics</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 mx-auto bg-blue-500/20 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-blue-400">4</span>
                  </div>
                  <p className="text-sm font-medium text-white">Augmentation</p>
                  <p className="text-xs text-slate-400">Random transforms</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Section>
    </div>
  )
}

export default Datasets
