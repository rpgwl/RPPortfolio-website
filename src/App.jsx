import './App.css'
import Navbar from './component/Navbar'
import Intro from './component/Intro'
import Skill from './component/Skill'
import Works from './component/Works'
import Contact from './component/Contact'
import Footer from './component/Footer'

export default function App() {
  return (
    <div>
      <Navbar/>
      
      <Intro/>
      <Skill/>
      <Works/>
      <Contact/>
      <Footer/>
    </div>
  )
}
