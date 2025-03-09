import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github } from "lucide-react";
import Tilt from "react-parallax-tilt";
import { useSpring, animated } from "@react-spring/web";

interface Project {
  title: string;
  description: string;
  tech: string;
  github: string;
  color: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const projects: Project[] = [
  {
    title: "Excelfie",
    description:
      "A secure team-based documentation platform enabling efficient report analysis and comparison. Implemented role-based authentication and optimized data handling for 50% faster query retrieval.",
    tech: "MERN Stack",
    github: "https://github.com/askarthikey/xcelifiee-repo",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Anomix",
    description:
      "An interactive event app supporting real-time engagement for 50+ live users via polling and analytics. Integrated Google OAuth and designed real-time charts.",
    tech: "Next.js, Node.js, MongoDB",
    github: "https://github.com/hanvithSai/suma",
    color: "from-blue-500 to-teal-500",
  },
  {
    title: "Blog Platform",
    description:
      "A blogging platform with rich text editing, user authentication, and interactive comments. Features an admin panel for managing content and users.",
    tech: "MERN Stack",
    github: "https://github.com/LV2402/BLOG-MERN",
    color: "from-orange-500 to-red-500",
  },
];

function ProjectCard({ project, index }: ProjectCardProps) {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const springProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(50px)",
    delay: index * 200,
  });

  return (
    <animated.div ref={ref} style={springProps}>
      <Tilt
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        scale={1.05}
        transitionSpeed={2000}
        className="h-full"
      >
        <div className={`h-full bg-gradient-to-br ${project.color} p-[2px] rounded-xl`}>
          <div className="h-full bg-gray-900 rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-4 text-white">{project.title}</h3>
            <p className="text-gray-300 mb-6">{project.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-purple-400 font-medium">{project.tech}</span>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-purple-400 transition-colors"
              >
                <Github size={24} />
              </a>
            </div>
          </div>
        </div>
      </Tilt>
    </animated.div>
  );
}

export default function Projects() {
  return (
    <section className="relative py-20 bg-gray-900 overflow-hidden" id="projects">
      <div className="absolute inset-0">
        <svg
          className="absolute bottom-0 w-full h-64"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="rgb(30, 41, 59)"
            fillOpacity="1"
            d="M0,192L48,186.7C96,181,192,171,288,144C384,117,480,75,576,80C672,85,768,139,864,149.3C960,160,1056,128,1152,101.3C1248,75,1344,53,1392,42.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          >
            <animate
              attributeName="d"
              dur="10s"
              repeatCount="indefinite"
              values="
                M0,192L48,186.7C96,181,192,171,288,144C384,117,480,75,576,80C672,85,768,139,864,149.3C960,160,1056,128,1152,101.3C1248,75,1344,53,1392,42.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                
                M0,160L48,138.7C96,117,192,75,288,90.7C384,107,480,181,576,192C672,203,768,149,864,154.7C960,160,1056,224,1152,213.3C1248,203,1344,117,1392,74.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                
                M0,192L48,186.7C96,181,192,171,288,144C384,117,480,75,576,80C672,85,768,139,864,149.3C960,160,1056,128,1152,101.3C1248,75,1344,53,1392,42.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </path>
        </svg>
      </div>

      <div className="relative container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-16 text-center text-white"
        >
          Featured Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}