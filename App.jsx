import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AnimatedBackground from './components/AnimatedBackground'
import Home from './pages/Home'
import About from './pages/About'
import Literature from './pages/Literature'
import Architecture from './pages/Architecture'
import Datasets from './pages/Datasets'
import Implementation from './pages/Implementation'
import Results from './pages/Results'
import Conclusion from './pages/Conclusion'
import Team from './pages/Team'
import Resources from './pages/Resources'

const App = () => {
  return (
    <Router>
      <div className="relative min-h-screen bg-slate-950 text-slate-100">
        <AnimatedBackground />
        <div className="relative z-10">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/literature" element={<Literature />} />
            <Route path="/architecture" element={<Architecture />} />
            <Route path="/datasets" element={<Datasets />} />
            <Route path="/implementation" element={<Implementation />} />
            <Route path="/results" element={<Results />} />
            <Route path="/conclusion" element={<Conclusion />} />
            <Route path="/team" element={<Team />} />
            <Route path="/resources" element={<Resources />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  )
}

export default App
