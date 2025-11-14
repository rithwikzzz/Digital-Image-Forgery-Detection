import { TrendingUp, Award, BarChart3, Target } from 'lucide-react'
import Section from '../components/Section'
import Card from '../components/Card'
import MetricCard from '../components/MetricCard'
import { performanceMetrics, comparisonData, qualitativeResults } from '../data/mockData'

const Results = () => {
  return (
    <div className="pt-24 pb-12">
      <Section
        title="Results & Evaluation"
        subtitle="Comprehensive analysis of model performance, comparative evaluation, and qualitative results"
      >
        <div className="space-y-20">
          <div>
            <h3 className="text-2xl font-heading font-bold text-white mb-8 flex items-center gap-3">
              <TrendingUp className="w-6 h-6 text-blue-400" />
              Performance Metrics
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {performanceMetrics.map((metric, index) => (
                <MetricCard
                  key={index}
                  icon={metric.icon === 'Target' ? Target : metric.icon === 'TrendingUp' ? TrendingUp : Award}
                  value={metric.value}
                  label={metric.label}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>

          <div className="bg-slate-900/30 rounded-2xl p-8">
            <h3 className="text-2xl font-heading font-bold text-white mb-8 flex items-center gap-3">
              <BarChart3 className="w-6 h-6 text-blue-400" />
              Training & Validation Curves
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card hover={false}>
                <h4 className="text-lg font-heading font-semibold text-white mb-4">Loss Curves</h4>
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop"
                  alt="Training and Validation Loss"
                  className="w-full rounded-lg border border-slate-700"
                />
                <p className="text-xs text-slate-400 mt-3">
                  Training loss (blue) and validation loss (orange) over 100 epochs. Model converges around epoch 60 with minimal overfitting.
                </p>
              </Card>
              <Card hover={false}>
                <h4 className="text-lg font-heading font-semibold text-white mb-4">Accuracy Curves</h4>
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop"
                  alt="Training and Validation Accuracy"
                  className="w-full rounded-lg border border-slate-700"
                />
                <p className="text-xs text-slate-400 mt-3">
                  Training accuracy (blue) and validation accuracy (orange) progression. Achieves 96.8% validation accuracy at peak performance.
                </p>
              </Card>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-heading font-bold text-white mb-8">Confusion Matrix & ROC Curve</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <h4 className="text-lg font-heading font-semibold text-white mb-4">Confusion Matrix</h4>
                <div className="bg-slate-950 rounded-lg p-6">
                  <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                    <div className="text-center">
                      <div className="text-xs text-slate-500 mb-2">Predicted Authentic</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xs text-slate-500 mb-2">Predicted Forged</div>
                    </div>
                    <div className="col-span-2 grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="text-xs text-slate-500">Actual Authentic</div>
                        <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-4 text-center">
                          <div className="text-2xl font-bold text-green-400">872</div>
                          <div className="text-xs text-slate-400">True Negative</div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="text-xs text-slate-500 opacity-0">.</div>
                        <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-4 text-center">
                          <div className="text-2xl font-bold text-red-400">28</div>
                          <div className="text-xs text-slate-400">False Positive</div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="text-xs text-slate-500">Actual Forged</div>
                        <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-4 text-center">
                          <div className="text-2xl font-bold text-red-400">31</div>
                          <div className="text-xs text-slate-400">False Negative</div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="text-xs text-slate-500 opacity-0">.</div>
                        <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-4 text-center">
                          <div className="text-2xl font-bold text-green-400">869</div>
                          <div className="text-xs text-slate-400">True Positive</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-slate-400 mt-4">
                  High true positive and true negative rates indicate strong classification performance across both classes.
                </p>
              </Card>

              <Card>
                <h4 className="text-lg font-heading font-semibold text-white mb-4">ROC Curve</h4>
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop"
                  alt="ROC Curve"
                  className="w-full rounded-lg border border-slate-700"
                />
                <div className="mt-4 p-4 bg-slate-900/50 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-400">AUC Score</span>
                    <span className="text-xl font-bold text-blue-400">0.987</span>
                  </div>
                </div>
                <p className="text-xs text-slate-400 mt-3">
                  Area Under Curve (AUC) of 0.987 demonstrates excellent discriminative ability between authentic and forged images.
                </p>
              </Card>
            </div>
          </div>

          <div className="bg-slate-900/30 rounded-2xl p-8">
            <h3 className="text-2xl font-heading font-bold text-white mb-8">Comparative Analysis</h3>
            <Card hover={false}>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-4 text-sm font-semibold text-white">Method</th>
                      <th className="text-center py-3 px-4 text-sm font-semibold text-white">Accuracy</th>
                      <th className="text-center py-3 px-4 text-sm font-semibold text-white">Precision</th>
                      <th className="text-center py-3 px-4 text-sm font-semibold text-white">Recall</th>
                      <th className="text-center py-3 px-4 text-sm font-semibold text-white">F1-Score</th>
                      <th className="text-center py-3 px-4 text-sm font-semibold text-white">AUC</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((method, index) => (
                      <tr key={index} className={`border-b border-slate-800 ${method.isOurs ? 'bg-blue-500/10' : ''}`}>
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-white">{method.name}</span>
                            {method.isOurs && (
                              <span className="px-2 py-0.5 bg-blue-500/20 border border-blue-500/30 rounded text-xs text-blue-400">Ours</span>
                            )}
                          </div>
                        </td>
                        <td className="text-center py-3 px-4 text-sm text-slate-300">{method.accuracy}</td>
                        <td className="text-center py-3 px-4 text-sm text-slate-300">{method.precision}</td>
                        <td className="text-center py-3 px-4 text-sm text-slate-300">{method.recall}</td>
                        <td className="text-center py-3 px-4 text-sm text-slate-300">{method.f1Score}</td>
                        <td className="text-center py-3 px-4 text-sm text-slate-300">{method.auc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-slate-400 mt-4">
                Our proposed method outperforms baseline approaches across all metrics, demonstrating the effectiveness of deep learning with attention mechanisms.
              </p>
            </Card>
          </div>

          <div>
            <h3 className="text-2xl font-heading font-bold text-white mb-8">Qualitative Results: Tamper Localization</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {qualitativeResults.map((result, index) => (
                <Card key={index} delay={index * 0.1}>
                  <div className="space-y-3">
                    <img
                      src={result.image}
                      alt={result.type}
                      className="w-full aspect-square object-cover rounded-lg border border-slate-700"
                    />
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-white">{result.type}</span>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          result.detected ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                        }`}>
                          {result.detected ? 'Detected' : 'Missed'}
                        </span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-400">Confidence:</span>
                        <span className="text-blue-400 font-medium">{result.confidence}%</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-400">IoU Score:</span>
                        <span className="text-cyan-400 font-medium">{result.iou}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default Results
