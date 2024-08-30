import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Testimonials from './components/Testimonials/Testimonials'
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Testimonials />
      <About />
      <Portfolio />
      <Footer />
    </div>
  )
}

export default App
