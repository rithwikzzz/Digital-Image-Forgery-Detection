import { useState } from 'react'
import { Mail, Linkedin, Github, Send } from 'lucide-react'
import Section from '../components/Section'
import Card from '../components/Card'
import Button from '../components/Button'

// ⬇️ Add your photos to /src/assets and import them
import rithwikImg from '../assets/rithwik.jpg'
import suryaImg from '../assets/surya.jpg'

const Team = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="pt-24 pb-12">
      <Section
        title="Team & Contact"
        subtitle="Meet the team behind this research project and get in touch"
      >
        <div className="space-y-20">

          {/* TEAM LEAD SECTION */}
          <div>
            <h3 className="text-2xl font-heading font-bold text-white mb-8 text-center">
              Team Lead
            </h3>

            <div className="max-w-xl mx-auto">
              <Card>
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <img
                    src={rithwikImg}
                    alt="B. Rithwik Ramsai Sharma"
                    className="w-32 h-32 rounded-full object-cover border-4 border-blue-500/30"
                  />

                  <div className="flex-1 text-center md:text-left">
                    <h4 className="text-2xl font-heading font-bold text-white mb-1">
                      B. Rithwik Ramsai Sharma
                    </h4>

                    <p className="text-blue-400 font-medium mb-2">Project Team Lead</p>

                    <p className="text-slate-400 text-sm leading-relaxed mb-4">
                      Responsible for leading the research, designing the model architecture, and
                      coordinating dataset preprocessing and evaluation.
                    </p>

                    <div className="flex gap-3 justify-center md:justify-start">
                      <a href="#" className="p-2 bg-slate-700 hover:bg-blue-500/20 rounded-lg transition-colors">
                        <Mail className="w-5 h-5 text-slate-300 hover:text-blue-400" />
                      </a>

                      <a href="#" className="p-2 bg-slate-700 hover:bg-blue-500/20 rounded-lg transition-colors">
                        <Linkedin className="w-5 h-5 text-slate-300 hover:text-blue-400" />
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* TEAM MEMBERS SECTION */}
          <div>
            <h3 className="text-2xl font-heading font-bold text-white mb-8 text-center">
              Team Members
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">

              {/* SURYA */}
              <Card>
                <div className="text-center space-y-4">
                  <img
                    src={suryaImg}
                    alt="Y. Surya"
                    className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-slate-700"
                  />

                  <div>
                    <h4 className="text-xl font-heading font-semibold text-white mb-1">
                      Y. Surya
                    </h4>

                    <p className="text-blue-400 text-sm font-medium mb-2">Project Member</p>

                    <p className="text-slate-400 text-sm mb-4">
                      Assisted in dataset handling, system integration, and interface development.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-700">
                    <p className="text-xs text-slate-500 mb-2">Key Contributions:</p>
                    <ul className="space-y-1 text-left mx-auto w-fit">
                      <li className="text-xs text-slate-400 flex items-start gap-2">
                        <span className="text-blue-400 mt-0.5">•</span>
                        Dataset processing & augmentation
                      </li>
                      <li className="text-xs text-slate-400 flex items-start gap-2">
                        <span className="text-blue-400 mt-0.5">•</span>
                        UI/UX for demo deployment
                      </li>
                      <li className="text-xs text-slate-400 flex items-start gap-2">
                        <span className="text-blue-400 mt-0.5">•</span>
                        Backend integration support
                      </li>
                    </ul>
                  </div>

                  <div className="flex gap-3 justify-center pt-4">
                    <a href="#" className="p-2 bg-slate-700 hover:bg-blue-500/20 rounded-lg transition-colors">
                      <Mail className="w-4 h-4 text-slate-300 hover:text-blue-400" />
                    </a>
                    <a href="#" className="p-2 bg-slate-700 hover:bg-blue-500/20 rounded-lg transition-colors">
                      <Linkedin className="w-4 h-4 text-slate-300 hover:text-blue-400" />
                    </a>
                    <a href="#" className="p-2 bg-slate-700 hover:bg-blue-500/20 rounded-lg transition-colors">
                      <Github className="w-4 h-4 text-slate-300 hover:text-blue-400" />
                    </a>
                  </div>
                </div>
              </Card>

            </div>
          </div>

          {/* CONTACT FORM AND REMAINING SECTIONS — unchanged */}
          {/* You can keep your original contact + download sections below this */}
        </div>
      </Section>
    </div>
  )
}

export default Team
