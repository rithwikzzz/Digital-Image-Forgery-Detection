import { useState } from 'react'
import { Upload, Play, Download, Code, FileCode, AlertCircle } from 'lucide-react'
import Section from '../components/Section'
import Card from '../components/Card'
import Button from '../components/Button'
import { implementationFeatures, codeSnippets } from '../data/mockData'

const Implementation = () => {
  const [selectedFile, setSelectedFile] = useState(null)
  const [analyzing, setAnalyzing] = useState(false)
  const [result, setResult] = useState(null)

  const handleFileSelect = (e) => {
    const file = e.target.files[0]
    if (file) {
      setSelectedFile(file)
      setResult(null)
    }
  }

  const handleAnalyze = () => {
    setAnalyzing(true)
    setTimeout(() => {
      setResult({
        prediction: 'Forged',
        confidence: 94.7,
        forgeryType: 'Splicing',
        processingTime: 1.23
      })
      setAnalyzing(false)
    }, 2000)
  }

  return (
    <div className="pt-24 pb-12">
      <Section
        title="Implementation & Demo"
        subtitle="Interactive demo, code examples, and deployment details"
      >
        <div className="space-y-20">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700">
            <h3 className="text-2xl font-heading font-bold text-white mb-8 text-center">Live Detection Demo</h3>
            <div className="max-w-4xl mx-auto">
              <Card>
                <div className="space-y-6">
                  <div className="border-2 border-dashed border-slate-700 rounded-xl p-8 text-center hover:border-blue-500/50 transition-colors">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileSelect}
                      className="hidden"
                      id="file-upload"
                    />
                    <label htmlFor="file-upload" className="cursor-pointer">
                      <Upload className="w-12 h-12 mx-auto text-slate-400 mb-4" />
                      <p className="text-lg text-white font-medium mb-2">Upload Image for Analysis</p>
                      <p className="text-sm text-slate-400">Drag and drop or click to select (JPG, PNG, max 10MB)</p>
                    </label>
                  </div>

                  {selectedFile && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-slate-900/50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                            <FileCode className="w-5 h-5 text-blue-400" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-white">{selectedFile.name}</p>
                            <p className="text-xs text-slate-400">{(selectedFile.size / 1024 / 1024).toFixed(2)} MB</p>
                          </div>
                        </div>
                        <Button onClick={handleAnalyze} icon={Play} disabled={analyzing}>
                          {analyzing ? 'Analyzing...' : 'Analyze Image'}
                        </Button>
                      </div>

                      {analyzing && (
                        <div className="flex items-center justify-center py-8">
                          <div className="space-y-4 text-center">
                            <div className="w-16 h-16 mx-auto border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" />
                            <p className="text-slate-400">Processing image through neural network...</p>
                          </div>
                        </div>
                      )}

                      {result && !analyzing && (
                        <div className="space-y-4 p-6 bg-slate-900/50 rounded-xl border border-slate-700">
                          <h4 className="text-lg font-heading font-semibold text-white mb-4">Detection Results</h4>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 bg-slate-800/50 rounded-lg">
                              <p className="text-xs text-slate-400 mb-1">Prediction</p>
                              <p className={`text-xl font-bold ${result.prediction === 'Forged' ? 'text-red-400' : 'text-green-400'}`}>
                                {result.prediction}
                              </p>
                            </div>
                            <div className="p-4 bg-slate-800/50 rounded-lg">
                              <p className="text-xs text-slate-400 mb-1">Confidence</p>
                              <p className="text-xl font-bold text-blue-400">{result.confidence}%</p>
                            </div>
                            <div className="p-4 bg-slate-800/50 rounded-lg">
                              <p className="text-xs text-slate-400 mb-1">Forgery Type</p>
                              <p className="text-xl font-bold text-yellow-400">{result.forgeryType}</p>
                            </div>
                            <div className="p-4 bg-slate-800/50 rounded-lg">
                              <p className="text-xs text-slate-400 mb-1">Processing Time</p>
                              <p className="text-xl font-bold text-cyan-400">{result.processingTime}s</p>
                            </div>
                          </div>
                          <Button variant="outline" icon={Download} className="w-full">
                            Download Detailed Report
                          </Button>
                        </div>
                      )}
                    </div>
                  )}

                  <div className="flex items-start gap-3 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                    <AlertCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-blue-300">
                      This is a demonstration using mock data. In production, the image would be processed through the trained model for real-time inference.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-heading font-bold text-white mb-8 flex items-center gap-3">
              <Code className="w-6 h-6 text-blue-400" />
              Implementation Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {implementationFeatures.map((feature, index) => (
                <Card key={index} delay={index * 0.1}>
                  <div className="space-y-3">
                    <div className="text-3xl">{feature.icon}</div>
                    <h4 className="text-lg font-heading font-semibold text-white">{feature.title}</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">{feature.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="bg-slate-900/30 rounded-2xl p-8">
            <h3 className="text-2xl font-heading font-bold text-white mb-8">Code Examples</h3>
            <div className="space-y-6">
              {codeSnippets.map((snippet, index) => (
                <Card key={index} delay={index * 0.1} hover={false}>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="text-lg font-heading font-semibold text-white">{snippet.title}</h4>
                      <span className="px-3 py-1 bg-blue-500/20 rounded-full text-xs text-blue-400">{snippet.language}</span>
                    </div>
                    <p className="text-sm text-slate-400">{snippet.description}</p>
                    <div className="bg-slate-950 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-slate-300 font-mono">
                        <code>{snippet.code}</code>
                      </pre>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-heading font-bold text-white mb-8">Deployment Architecture</h3>
            <Card>
              <div className="space-y-6">
                <img
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=600&fit=crop"
                  alt="Deployment Architecture"
                  className="w-full rounded-xl border border-slate-700"
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-slate-900/50 rounded-lg">
                    <h5 className="text-sm font-semibold text-white mb-2">Frontend</h5>
                    <p className="text-xs text-slate-400">React.js with Vite, deployed on Vercel/Netlify for fast global delivery</p>
                  </div>
                  <div className="p-4 bg-slate-900/50 rounded-lg">
                    <h5 className="text-sm font-semibold text-white mb-2">Backend API</h5>
                    <p className="text-xs text-slate-400">Flask/FastAPI serving model inference, containerized with Docker</p>
                  </div>
                  <div className="p-4 bg-slate-900/50 rounded-lg">
                    <h5 className="text-sm font-semibold text-white mb-2">Model Serving</h5>
                    <p className="text-xs text-slate-400">TorchServe or ONNX Runtime for optimized inference performance</p>
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

export default Implementation
