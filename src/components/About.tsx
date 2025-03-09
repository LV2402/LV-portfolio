import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from '@react-spring/web';
import React from 'react';

const skills: string[] = [
  'Python', 'C++', 'MERN Stack', 'Problem Solving',
  'Data Structures', 'MySQL', 'MongoDB', 'Git' , "Google Colab"
];

interface SkillBadgeProps {
  skill: string;
  index: number;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ skill, index }) => {
  const props = useSpring({
    from: { opacity: 0, transform: 'scale(0)' },
    to: { opacity: 1, transform: 'scale(1)' },
    delay: index * 100,
  });

  return (
    <animated.span style={props} className="bg-gradient-to-r from-purple-500 to-pink-500 p-[1px] rounded-full">
      <div className="bg-gray-900 px-4 py-2 rounded-full">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          {skill}
        </span>
      </div>
    </animated.span>
  );
};

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gray-900" id="about">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-12 text-center text-white"
          >
            About Me
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 leading-relaxed mb-12"
          >
            Extroverted and enthusiastic software developer with a solid foundation in C++ and Python and a strong
            passion for Mathematics. Skilled in problem-solving and highly adaptable to diverse team environments.
            Quick learner with a proactive approach to tackling real-world coding challenges.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-800 p-8 rounded-xl"
            >
              <h3 className="text-2xl font-bold mb-6 text-white">Education</h3>
              <ul className="space-y-6">
                <li>
                  <p className="text-xl font-semibold text-purple-400">B.Tech in CSE (2023-2027)</p>
                  <p className="text-gray-300">VNR VJIET</p>
                  <p className="text-gray-400">CGPA: 8.8</p>
                </li>
                <li>
                  <p className="text-xl font-semibold text-purple-400">Sri Chaitanya Junior Kalashala (2021-23)</p>
                  <p className="text-gray-400">95.1%</p>
                </li>
                <li>
                  <p className="text-xl font-semibold text-purple-400">Sri Chaitanya High School</p>
                  <p className="text-gray-400">CGPA: 10.0</p>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-800 p-8 rounded-xl"
            >
              <h3 className="text-2xl font-bold mb-6 text-white">Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <SkillBadge key={skill} skill={skill} index={index} />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}