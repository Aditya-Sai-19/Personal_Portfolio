'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Github, Linkedin, MessageCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
   
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(formData.subject || 'Portfolio Contact');
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      const mailtoLink = `mailto:workingprofessional19@outlook.com?subject=${subject}&body=${body}`;
      
      // Open default email client
      window.location.href = mailtoLink;
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: 'workingprofessional19@outlook.com',
      link: 'mailto:workingprofessional19@outlook.com',
      color: 'electric-cyan'
    },
    {
      icon: Github,
      title: 'GitHub',
      details: 'Aditya-Sai-19',
      link: 'https://github.com/Aditya-Sai-19',
      color: 'neon-purple'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      details: 'Connect with me',
      link: 'https://linkedin.com/in/aditya-sai-3317702a6',
      color: 'cosmic-orange'
    },
    {
      icon: MapPin,
      title: 'Location',
      details: 'Hyderabad, India',
      link: '#',
      color: 'stellar-yellow'
    }
  ];

  return (
    <section id="contact" className="md:py-20 md:relative">
      <div className="md:container md:mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-electric-cyan mb-6" data-macaly="contact-title">
            📡 Contact
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric-cyan to-neon-purple mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Ready to collaborate on exciting projects? Let's connect and build something amazing together!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-electric-cyan/50 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <MessageCircle className="w-6 h-6 mr-3 text-electric-cyan" />
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white text-sm font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-electric-cyan focus:ring-2 focus:ring-electric-cyan/20 transition-all duration-300"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-electric-cyan focus:ring-2 focus:ring-electric-cyan/20 transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-white text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-electric-cyan focus:ring-2 focus:ring-electric-cyan/20 transition-all duration-300"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-electric-cyan focus:ring-2 focus:ring-electric-cyan/20 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or idea..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-electric-cyan to-neon-purple px-6 py-4 rounded-lg font-semibold text-white shadow-lg hover:shadow-electric-cyan/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-400 text-sm text-center"
                  >
                    ✅ Your email client should open with the message ready to send!
                  </motion.div>
                )}
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-sm text-center"
                  >
                    ❌ Something went wrong. Please try again.
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-electric-cyan/50 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I'm always excited to discuss new opportunities, innovative projects, and potential collaborations. 
                Whether you have a question about my work, want to discuss a project, or just want to say hi, 
                I'd love to hear from you!
              </p>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : '_self'}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center space-x-4 p-4 rounded-lg bg-white/5 border border-white/10 hover:border-electric-cyan/50 transition-all duration-300 hover:transform hover:scale-105 group"
                    whileHover={{ scale: 1.02 }}
                    data-macaly={`contact-${info.title.toLowerCase()}`}
                  >
                    <div className={`w-12 h-12 rounded-lg ${
                      info.color === 'electric-cyan' ? 'bg-electric-cyan' :
                      info.color === 'neon-purple' ? 'bg-neon-purple' :
                      info.color === 'cosmic-orange' ? 'bg-cosmic-orange' :
                      info.color === 'stellar-yellow' ? 'bg-stellar-yellow' :
                      'bg-electric-cyan'
                    } flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{info.title}</h4>
                      <p className="text-gray-400 text-sm">{info.details.slice(0,20)}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-electric-cyan/50 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-4">Quick Actions</h3>
              <div className="grid grid-cols-1 gap-3">
                <motion.a
                  href="mailto:workingprofessional19@outlook.com?subject=Collaboration Opportunity"
                  className="flex items-center space-x-3 p-3 rounded-lg bg-electric-cyan/10 border border-electric-cyan/20 hover:border-electric-cyan/50 transition-all duration-300 text-electric-cyan hover:bg-electric-cyan/20"
                  whileHover={{ scale: 1.02 }}
                >
                  <Mail className="w-5 h-5" />
                  <span>Collaboration Inquiry</span>
                </motion.a>
                <motion.a
                  href="mailto:workingprofessional19@outlook.com?subject=Project Discussion"
                  className="flex items-center space-x-3 p-3 rounded-lg bg-neon-purple/10 border border-neon-purple/20 hover:border-neon-purple/50 transition-all duration-300 text-neon-purple hover:bg-neon-purple/20"
                  whileHover={{ scale: 1.02 }}
                >
                  <Send className="w-5 h-5" />
                  <span>Project Discussion</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Animated background elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-electric-cyan/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-neon-purple/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
    </section>
  );
}
