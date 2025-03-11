import Background from './components/Background';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 relative">
      <Navigation />
      <Background />
      <Header />
      <About />
      <Projects />
      <Achievements />
      <Contact />
    </div>
  );
}