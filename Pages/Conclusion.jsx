import { CheckCircle, AlertTriangle, Rocket, BookOpen } from 'lucide-react'
import Section from '../components/Section'
import Card from '../components/Card'
import { achievements, limitations, futureWork } from '../data/mockData'

const Conclusion = () => {
  return (
    <div className="pt-24 pb-12">
      <Section
        title="Conclusion & Future Work"
        subtitle="Summary of achievements, limitations, and directions for future research"
      >
        <div className="space-y-20">
          <Card>
            <div className="max-w-4xl mx-auto space-y-6">
              <h3 className="text-2xl font-heading font-bold text-gradient text-center">Project Summary</h3>
              <p className="text-slate-300 leading-relaxed text-center">
                This project successfully developed a robust deep learning-based system for detecting digital image forgeries. By leveraging advanced CNN architectures with attention mechanisms, we achieved state-of-the-art performance across multiple benchmark datasets, demonstrating the effectiveness of end-to-end learning for forensic feature extraction.
              </p>
              <p className="text-slate-300 leading-relaxed text-center">
                Our approach addresses critical challenges in combating digital misinformation and ensuring content authenticity. The system shows strong generalization across various forgery types including splicing, copy-move, retouching, and GAN-based manipulations, making it suitable for real-world deployment in journalism, legal evidence verification, and social media platforms.
              </p>
            </div>
          </Card>

          <div>
            <h3 className="text-2xl font-heading font-bold text-white mb-8 flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-green-400" />
              Key Achievements
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} delay={index * 0.1}>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-green-500/20 rounded-lg flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-heading font-semibold text-white mb-2">{achievement.title}</h4>
                      <p className="text-sm text-slate-400 leading-relaxed">{achievement.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="bg-slate-900/30 rounded-2xl p-8">
            <h3 className="text-2xl font-heading font-bold text-white mb-8 flex items-center gap-3">
              <AlertTriangle className="w-6 h-6 text-yellow-400" />
              Limitations & Challenges
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {limitations.map((limitation, index) => (
                <Card key={index} delay={index * 0.1}>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <AlertTriangle className="w-5 h-5 text-yellow-400" />
                      <h4 className="text-lg font-heading font-semibold text-white">{limitation.title}</h4>
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed">{limitation.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-heading font-bold text-white mb-8 flex items-center gap-3">
              <Rocket className="w-6 h-6 text-blue-400" />
              Future Research Directions
            </h3>
            <div className="space-y-6">
              {futureWork.map((work, index) => (
                <Card key={index} delay={index * 0.1}>
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full flex items-center justify-center border-2 border-blue-500/30">
                        <Rocket className="w-8 h-8 text-blue-400" />
                      </div>
                    </div>
                    <div className="flex-1 space-y-3">
                      <h4 className="text-xl font-heading font-semibold text-white">{work.title}</h4>
                      <p className="text-slate-400 leading-relaxed">{work.description}</p>
                      <div className="space-y-2">
                        <p className="text-xs text-slate-500 font-medium">Potential Approaches:</p>
                        <ul className="space-y-1">
                          {work.approaches.map((approach, idx) => (
                            <li key={idx} className="text-sm text-slate-400 flex items-start gap-2">
                              <span className="text-blue-400 mt-1">•</span>
                              <span>{approach}</span>
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

          <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 rounded-2xl p-8 border border-blue-500/20">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <BookOpen className="w-16 h-16 mx-auto text-blue-400" />
              <h3 className="text-3xl font-heading font-bold text-gradient">Research Impact</h3>
              <p className="text-lg text-slate-300 leading-relaxed">
                This project contributes to the growing body of research in digital forensics and misinformation detection. By demonstrating the effectiveness of deep learning approaches, we provide a foundation for future work in ensuring digital content authenticity and combating the spread of manipulated media.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
                <div className="p-6 bg-slate-900/50 rounded-xl">
                  <div className="text-4xl font-bold text-blue-400 mb-2">96.8%</div>
                  <div className="text-sm text-slate-400">Peak validation accuracy achieved</div>
                </div>
                <div className="p-6 bg-slate-900/50 rounded-xl">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">0.987</div>
                  <div className="text-sm text-slate-400">AUC score demonstrating robustness</div>
                </div>
                <div className="p-6 bg-slate-900/50 rounded-xl">
                  <div className="text-4xl font-bold text-green-400 mb-2">4+</div>
                  <div className="text-sm text-slate-400">Forgery types successfully detected</div>
                </div>
              </div>
            </div>
          </div>

          <Card>
            <div className="max-w-4xl mx-auto space-y-6">
              <h3 className="text-2xl font-heading font-bold text-white text-center">Acknowledgements</h3>
              <p className="text-slate-400 leading-relaxed text-center">
                We would like to express our gratitude to our project supervisor for invaluable guidance throughout this research. Special thanks to the creators of the CASIA, Columbia, and COVERAGE datasets for making their data publicly available. We also acknowledge the open-source community for providing essential tools and frameworks that made this project possible.
              </p>
              <div className="pt-6 border-t border-slate-700 text-center">
                <p className="text-sm text-slate-500">
                  This project was completed as part of the Final Year Capstone Project at [University Name], Department of Computer Science.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </Section>
    </div>
  )
}

export default Conclusion
