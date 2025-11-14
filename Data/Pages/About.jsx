import { motion } from 'framer-motion'
import { Target, Lightbulb, Award, AlertCircle } from 'lucide-react'
import Section from '../components/Section'
import Card from '../components/Card'
import { fadeIn } from '../utils/motion'
import { objectives, contributions } from '../data/mockData'

const About = () => {
  return (
    <div className="pt-24 pb-12">
      <Section
        title="About the Project"
        subtitle="Understanding the problem, research gap, and our approach to digital image forgery detection"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop"
              alt="Digital Forensics Concept"
              className="w-full rounded-2xl shadow-2xl border border-slate-700"
            />
          </motion.div>

          <div className="space-y-6">
            <Card delay={0.2}>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-red-500/20 rounded-lg">
                  <AlertCircle className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-white mb-3">Problem Statement</h3>
                  <p className="text-slate-400 leading-relaxed mb-3">
                    The exponential growth of digital image manipulation tools has made it increasingly easy to create convincing forgeries. These manipulated images pose serious threats across multiple domains:
                  </p>
                  <ul className="space-y-2 text-slate-400">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span><strong className="text-white">Misinformation:</strong> Fake news and propaganda spread through manipulated images</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span><strong className="text-white">Legal Evidence:</strong> Compromised integrity of photographic evidence in courts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span><strong className="text-white">Journalism:</strong> Authenticity concerns in news media and reporting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span><strong className="text-white">Social Media:</strong> Viral spread of doctored content affecting public opinion</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card delay={0.3}>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-yellow-500/20 rounded-lg">
                  <Lightbulb className="w-6 h-6 text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-white mb-3">Research Gap</h3>
                  <p className="text-slate-400 leading-relaxed mb-3">
                    Traditional image forensics methods rely on hand-crafted features and statistical analysis, which have significant limitations:
                  </p>
                  <ul className="space-y-2 text-slate-400">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>Struggle with modern sophisticated manipulation techniques</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>Fail against adversarial attacks and anti-forensic methods</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>Limited generalization across different forgery types</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>Require extensive domain expertise and manual feature engineering</span>
                    </li>
                  </ul>
                  <p className="text-slate-400 leading-relaxed mt-3">
                    Deep learning approaches offer automatic feature learning and superior generalization, addressing these critical gaps.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      <Section title="Project Objectives" className="bg-slate-900/30">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {objectives.map((obj, index) => (
            <Card key={index} delay={index * 0.1}>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/20 rounded-lg flex-shrink-0">
                  <Target className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-semibold text-white mb-2">{obj.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{obj.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Expected Contributions">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contributions.map((contrib, index) => (
            <motion.div
              key={index}
              variants={fadeIn('up', index * 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-center space-y-4"
            >
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full flex items-center justify-center border border-blue-500/30">
                <Award className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-white">{contrib.title}</h3>
              <p className="text-slate-400 leading-relaxed">{contrib.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section className="bg-slate-900/30">
        <Card>
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h3 className="text-3xl font-heading font-bold text-gradient">Why This Matters</h3>
            <p className="text-lg text-slate-300 leading-relaxed">
              In an era where "seeing is no longer believing," robust image forgery detection systems are essential infrastructure for maintaining trust in digital content. This project contributes to the broader effort of ensuring digital authenticity and combating misinformation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
              <div className="p-4 bg-slate-900/50 rounded-lg">
                <div className="text-3xl font-bold text-blue-400 mb-2">85%</div>
                <div className="text-sm text-slate-400">of people can't detect sophisticated forgeries</div>
              </div>
              <div className="p-4 bg-slate-900/50 rounded-lg">
                <div className="text-3xl font-bold text-blue-400 mb-2">3.2B</div>
                <div className="text-sm text-slate-400">fake images shared annually on social media</div>
              </div>
              <div className="p-4 bg-slate-900/50 rounded-lg">
                <div className="text-3xl font-bold text-blue-400 mb-2">$78B</div>
                <div className="text-sm text-slate-400">estimated annual cost of misinformation</div>
              </div>
            </div>
          </div>
        </Card>
      </Section>
    </div>
  )
}

export default About
