import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Code2, BookCopy as BookCode } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <mesh>
        <torusKnotGeometry args={[1, 0.3, 128, 16]} />
        <meshStandardMaterial color="#8B5CF6" />
      </mesh>
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={4} />
    </Canvas>
  );
}

export default function Header() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <motion.header 
      style={{ opacity, scale }}
      className="relative h-screen flex items-center justify-center bg-gradient-to-r from-purple-900 to-blue-900 text-white overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="h-64 w-64 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Scene />
        </div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-bold mb-6 pb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-pink-200"
        >
          Vamshi Lagishetty
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-2xl mb-12 text-purple-200"
        >
         Problem Solver | Tech Enthusiast | Explorer
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex justify-center space-x-8"
        >
          {[
            { icon: Github, href: "https://github.com/LV2402" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/vamshilagishetty/" },
            { icon: Code2, href: "https://leetcode.com/u/vamshishetty24/" },
            { icon: BookCode, href: "https://www.hackerrank.com/profile/vamshi_shetty_" }
          ].map(({ icon: Icon, href }, index) => (
            <motion.a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
              className="bg-white/10 p-4 rounded-full hover:bg-white/20 transition-colors"
            >
              <Icon size={24} />
            </motion.a>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-scroll" />
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
}