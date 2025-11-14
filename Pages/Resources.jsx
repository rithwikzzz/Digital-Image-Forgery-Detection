import { BookOpen, Database, Code, FileText, ExternalLink } from 'lucide-react'
import Section from '../components/Section'
import Card from '../components/Card'
import { references, datasetResources, codeRepositories, relatedLinks } from '../data/mockData'

const Resources = () => {
  return (
    <div className="pt-24 pb-12">
      <Section
        title="Resources & References"
        subtitle="Comprehensive collection of research papers, datasets, code repositories, and related resources"
      >
        <div className="space-y-20">
          <div>
            <h3 className="text-2xl font-heading font-bold text-white mb-8 flex items-center gap-3">
              <BookOpen className="w-6 h-6 text-blue-400" />
              Key References
            </h3>
            <div className="space-y-4">
              {references.map((ref, index) => (
                <Card key={index} delay={index * 0.05} hover={false}>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 text-blue-400 font-mono text-sm mt-1">[{index + 1}]</div>
                    <div className="flex-1 space-y-2">
                      <h4 className="text-base font-medium text-white leading-relaxed">{ref.title}</h4>
                      <p className="text-sm text-slate-400">{ref.authors}</p>
                      <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                        <span>{ref.publication}</span>
                        <span>•</span>
                        <span>{ref.year}</span>
                        {ref.doi && (
                          <>
                            <span>•</span>
                            <a href={ref.doi} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline flex items-center gap-1">
                              DOI <ExternalLink className="w-3 h-3" />
                            </a>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="bg-slate-900/30 rounded-2xl p-8">
            <h3 className="text-2xl font-heading font-bold text-white mb-8 flex items-center gap-3">
              <Database className="w-6 h-6 text-blue-400" />
              Dataset Resources
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {datasetResources.map((resource, index) => (
                <Card key={index} delay={index * 0.1}>
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <h4 className="text-lg font-heading font-semibold text-white">{resource.name}</h4>
                      <span className="px-2 py-1 bg-blue-500/20 rounded text-xs text-blue-400">{resource.type}</span>
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed">{resource.description}</p>
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between">
                        <span className="text-slate-500">Size:</span>
                        <span className="text-slate-300">{resource.size}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">License:</span>
                        <span className="text-slate-300">{resource.license}</span>
                      </div>
                    </div>
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      Access Dataset <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-heading font-bold text-white mb-8 flex items-center gap-3">
              <Code className="w-6 h-6 text-blue-400" />
              Code Repositories
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {codeRepositories.map((repo, index) => (
                <Card key={index} delay={index * 0.1}>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-slate-700 rounded-lg">
                        <Code className="w-5 h-5 text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-heading font-semibold text-white mb-1">{repo.name}</h4>
                        <p className="text-xs text-slate-500">{repo.author}</p>
                      </div>
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed">{repo.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {repo.technologies.map((tech, idx) => (
                        <span key={idx} className="px-2 py-1 bg-slate-900/50 border border-slate-700 rounded text-xs text-slate-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      View Repository <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="bg-slate-900/30 rounded-2xl p-8">
            <h3 className="text-2xl font-heading font-bold text-white mb-8 flex items-center gap-3">
              <FileText className="w-6 h-6 text-blue-400" />
              Related Links & Tools
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedLinks.map((link, index) => (
                <Card key={index} delay={index * 0.1} hover={false}>
                  <div className="space-y-3">
                    <h4 className="text-base font-heading font-semibold text-white">{link.title}</h4>
                    <p className="text-sm text-slate-400">{link.description}</p>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      Visit <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <Card>
            <div className="max-w-4xl mx-auto space-y-6">
              <h3 className="text-2xl font-heading font-bold text-gradient text-center">Frequently Asked Questions</h3>
              <div className="space-y-4">
                <div className="p-4 bg-slate-900/50 rounded-lg">
                  <h4 className="text-base font-semibold text-white mb-2">How can I access the trained model?</h4>
                  <p className="text-sm text-slate-400">The trained model weights and configuration files are available in our GitHub repository. Please refer to the README for installation and usage instructions.</p>
                </div>
                <div className="p-4 bg-slate-900/50 rounded-lg">
                  <h4 className="text-base font-semibold text-white mb-2">Can I use this for commercial purposes?</h4>
                  <p className="text-sm text-slate-400">The code and model are released under MIT license for research purposes. For commercial use, please contact the team for licensing arrangements.</p>
                </div>
                <div className="p-4 bg-slate-900/50 rounded-lg">
                  <h4 className="text-base font-semibold text-white mb-2">How do I cite this work?</h4>
                  <p className="text-sm text-slate-400">Please use the citation format provided in the project report. A BibTeX entry is available in the repository README.</p>
                </div>
                <div className="p-4 bg-slate-900/50 rounded-lg">
                  <h4 className="text-base font-semibold text-white mb-2">What are the system requirements?</h4>
                  <p className="text-sm text-slate-400">Minimum: Python 3.8+, 8GB RAM, CUDA-capable GPU (optional but recommended). See technical documentation for detailed requirements.</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Section>
    </div>
  )
}

export default Resources
