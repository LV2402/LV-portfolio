import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:vamshishetty24@gmail.com?subject=Contact from ${formData.name}&body=${formData.message}`;
  };

  return (
    <section className="py-20 bg-gray-900" id="contact">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-16 text-center text-white">Get In Touch</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-gray-800 p-6 rounded-xl">
                <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-300">
                    <Mail className="text-purple-400 mr-3" size={20} />
                    <a href="mailto:vamshishetty24@gmail.com" className="hover:text-purple-400 transition-colors">
                      vamshishetty24@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Phone className="text-purple-400 mr-3" size={20} />
                    <span>+91 9392909240</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <MapPin className="text-purple-400 mr-3" size={20} />
                    <span>Hyderabad, India</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 p-6 rounded-xl">
                <h3 className="text-2xl font-bold mb-6 text-white">Resume</h3>
                <a
                  href="/path-to-your-resume.pdf"
                  download
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-colors"
                >
                  <Send className="mr-2" size={20} />
                  Download Resume
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-xl">
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}