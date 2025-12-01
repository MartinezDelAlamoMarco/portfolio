import { BrowserRouter as Router, Routes, Route } from 'react-router'
import BottomNavbar from './components/BottomNavbar'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import Skills from './pages/Skills'
import Projects from './pages/Projects/Projects'
import TopNavbar from './components/TopNavbar'
import WorkingExperience from './pages/WorkingExperience'
import SecondLifeHub from './pages/Projects/SecondLifeHub'
import PortalWeb from './pages/Projects/PortalWeb'
//import SneakerZ from './pages/Projects/SneakerZ'
import GradientBackground from './components/GradientBackground/GradientBackground'
import DjMarWen from './pages/Projects/DjMarWen'

function App() {
  return (
    <>
    <Router>
      <header>
        <TopNavbar />
        <BottomNavbar />
      </header>
      <main className="pt-5 page-container">
        <div className="page">
          <Routes>
            <Route index element={<Home />} /> 
            <Route path="/about-me" element={<AboutMe />} />  
            <Route path="/working-experience" element={<WorkingExperience />} />  
            <Route path="/skills" element={<Skills />} />  
            <Route path="/projects" element={<Projects />} />  
            <Route path="/projects/second-life-hub" element={<SecondLifeHub />} />
            <Route path="/projects/portal-web" element={<PortalWeb />} />
            {/*<Route path="/projects/sneakerz" element={<SneakerZ />} />*/}
            <Route path="/projects/dj-marwen" element={<DjMarWen />} />
          </Routes>  
        </div>
      </main> 
      <GradientBackground />
    </Router>
    </>
  )
}

export default App
