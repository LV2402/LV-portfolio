import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Users, BookOpen, Star } from 'lucide-react';

export default function Achievements() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gray-900" id="achievements">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-16 text-center text-white">Achievements & Recognition</h2>
          
          {/* Achievements Section */}
          <div className="mb-16">
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <Award className="text-purple-400 mr-3" size={28} />
                <h3 className="text-2xl font-bold text-white">Academic Achievements</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-900/50 p-6 rounded-lg border border-purple-500/20">
                  <div className="flex items-center mb-3">
                    <Star className="text-purple-400 mr-2" size={20} />
                    <h4 className="text-lg font-semibold text-purple-300">TSEAMCET</h4>
                  </div>
                  <p className="text-gray-300">Secured 1877 Rank in state-wide engineering entrance</p>
                </div>
                <div className="bg-gray-900/50 p-6 rounded-lg border border-purple-500/20">
                  <div className="flex items-center mb-3">
                    <Star className="text-purple-400 mr-2" size={20} />
                    <h4 className="text-lg font-semibold text-purple-300">Competitive Programming</h4>
                  </div>
                  <p className="text-gray-300">Solved 500+ coding problems across platforms</p>
                </div>
              </div>
            </div>
          </div>

          {/* Community Engagement Section */}
          <div className="mb-16">
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <Users className="text-purple-400 mr-3" size={28} />
                <h3 className="text-2xl font-bold text-white">Community Engagement</h3>
              </div>
              <div className="grid gap-6">
                <div className="bg-gray-900/50 p-6 rounded-lg border border-purple-500/20">
                  <h4 className="text-xl font-semibold text-purple-300 mb-2">Telugu Literature & Cultural Club - VJSV</h4>
                  <p className="text-gray-300">Core Member & Event Organizer, leading cultural initiatives and literary events</p>
                </div>
                <div className="bg-gray-900/50 p-6 rounded-lg border border-purple-500/20">
                  <h4 className="text-xl font-semibold text-purple-300 mb-2">Student Force - VJSF</h4>
                  <p className="text-gray-300">Engaged in community service initiatives, organizing social impact projects</p>
                </div>
                <div className="bg-gray-900/50 p-6 rounded-lg border border-purple-500/20">
                  <h4 className="text-xl font-semibold text-purple-300 mb-2">IUCEE</h4>
                  <p className="text-gray-300">Active member fostering global engineering education collaboration through innovative projects and workshops</p>
                </div>
              </div>
            </div>
          </div>

          {/* Certificates Section */}
          <div>
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <BookOpen className="text-purple-400 mr-3" size={28} />
                <h3 className="text-2xl font-bold text-white">Certificates & Accomplishments</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "VJ HACKATHON 2024",
                    href: "https://drive.google.com/file/d/1YPGzNmyFUoznpswvWp7Wdkxe0ISJxbWH/view"
                  },
                  {
                    title: "Codenox 2.0",
                    href: "https://drive.google.com/file/d/1jp4JC4lAx9z5_pEjooUVudIF6uUDekHn/view"
                  },
                  {
                    title: "Winter Coding Contest 4.0",
                    href: "https://drive.google.com/file/d/1TCUeXy9B2wMtpf4Lp1wvRyNWjURIl7uw/view"
                  },
                  {
                    title: "Flipkart Grid 6.0",
                    href: "https://drive.google.com/file/d/1v7BVXY2z8_FJEH73CRD_tb2LnH6-XcqE/view"
                  }
                ].map((cert, index) => (
                  <motion.a
                    key={cert.title}
                    href={cert.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-900/50 p-6 rounded-lg border border-purple-500/20 hover:bg-gray-900/70 transition-colors group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-purple-300 group-hover:text-purple-400 transition-colors font-medium">
                        {cert.title}
                      </span>
                      <Star className="text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" size={16} />
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}