import Background from './components/Background';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Achievements from './components/Achievements';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 relative">
      <Background />
      <Header />
      <About />
      <Projects />
      <Achievements />
    </div>
  );
}