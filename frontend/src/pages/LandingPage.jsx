import { Navbar, Hero, Features, Stats, Testimonials, Footer, ChatbotFab } from '../components/landing'
import '../components/landing/landing.css'

// Handlers are props so the router/auth can plug in later without touching this page.
export default function LandingPage({ onLogin, onRegister, onDemo }) {
  return (
    <>
      <Navbar onLogin={onLogin} onRegister={onRegister} />
      <Hero onRegister={onRegister} onDemo={onDemo} />
      <Features />
      <Stats />
      <Testimonials />
      <Footer />
      <ChatbotFab />
    </>
  )
}
