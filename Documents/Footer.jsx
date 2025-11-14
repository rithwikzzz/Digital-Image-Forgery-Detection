import { Github, Linkedin, Mail, FileText } from 'lucide-react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="relative bg-slate-900/50 backdrop-blur-sm border-t border-slate-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-heading font-bold text-gradient mb-4">Digital Image Forgery Detection</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              A comprehensive deep learning approach to detecting image manipulations using advanced CNN architectures and forensic feature learning. This project demonstrates state-of-the-art techniques in digital forensics and computer vision.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-lg bg-slate-800 hover:bg-blue-500/20 hover:text-blue-400 transition-all">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-slate-800 hover:bg-blue-500/20 hover:text-blue-400 transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-slate-800 hover:bg-blue-500/20 hover:text-blue-400 transition-all">
                <Mail className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-slate-800 hover:bg-blue-500/20 hover:text-blue-400 transition-all">
                <FileText className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">About Project</Link></li>
              <li><Link to="/architecture" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">Methodology</Link></li>
              <li><Link to="/results" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">Results</Link></li>
              <li><Link to="/team" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">Team</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/resources" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">Documentation</Link></li>
              <li><Link to="/datasets" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">Datasets</Link></li>
              <li><Link to="/implementation" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">Live Demo</Link></li>
              <li><a href="#" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">Download Report</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © 2024 Digital Image Forgery Detection Project. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-slate-500 hover:text-blue-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-blue-400 transition-colors">Terms of Use</a>
            <a href="#" className="text-slate-500 hover:text-blue-400 transition-colors">License</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
