'use client';

import { motion } from 'framer-motion';
import { link } from 'fs';
import { Award, Calendar, ExternalLink, CheckCircle } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    {
  name: 'Oracle Cloud Infrastructure 2025 Certified Generative AI Professional',
  platform: 'Oracle',
  date: 'October 2025',
  category: 'AI/Cloud',
  color: 'from-nebula-pink to-orange-500',
  description: 'Certification demonstrating expertise in Oracle Cloud Infrastructure and Generative AI services',
  link: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=0BC5481C6D8F23D8372FE1FDE216279DEE629D205BFAF74BBBF0AA1A7E848A93'
},
{
      name: 'Automation Design & Robotics',
      platform: 'Skillsoft',
      date: 'June 2024',
      category: 'Robotics',
      color: 'from-electric-cyan to-blue-500',
      description: 'Advanced robotics design principles and automation systems',
      link:'https://skillsoft.digitalbadges.skillsoft.com/2683ba58-0064-4ce9-badc-f039b2d27e4d#acc.WjqaPlfD'
    },
    {
      name: 'Build a Computer Vision App with Azure Cognitive Services',
      platform: 'Microsoft (Coursera)',
      date: 'Dec 2023',
      category: 'AI/ML',
      color: 'from-neon-purple to-purple-500',
      description: 'Computer vision application development using Azure AI',
      link:'https://www.linkedin.com/in/aditya-sai-3317702a6/details/certifications/1635555405599/single-media-viewer/?profileId=ACoAAEnLrNUBtlmX5R017dHOdXAeUJe3FjIgtD4'
    },
    {
      name: 'Foundations of Cybersecurity',
      platform: 'Google (Coursera)',
      date: 'Feb 2024',
      category: 'Cybersecurity',
      color: 'from-cosmic-orange to-orange-500',
      description: 'Fundamental cybersecurity concepts and threat analysis',
      link:'https://www.coursera.org/account/accomplishments/verify/7GZEHN6NE57J?utm_product=course'
    },
    {
      name: 'ROBOPACK 3-Day Workshop',
      platform: 'My Equation',
      date: 'May 2024',
      category: 'Robotics',
      color: 'from-stellar-yellow to-yellow-500',
      description: 'Hands-on robotics workshop with practical applications',
      link:'https://www.linkedin.com/in/aditya-sai-3317702a6/details/certifications/1719408945902/single-media-viewer/?profileId=ACoAAEnLrNUBtlmX5R017dHOdXAeUJe3FjIgtD4'
    },
    {
      name: 'Building Smart Business Assistants with IBM Watson',
      platform: 'Coursera',
      date: 'Jan 2024',
      category: 'AI/ML',
      color: 'from-nebula-pink to-pink-500',
      description: 'AI-powered business assistant development',
      link:'https://www.coursera.org/account/accomplishments/verify/THPNPBPC2C2F?utm_product=project'
    },
    {
      name: 'Create a Lead Generation Messenger Chatbot using Chatfuel',
      platform: 'Coursera',
      date: 'Jan 2024',
      category: 'AI/ML',
      color: 'from-electric-cyan to-neon-purple',
      description: 'Chatbot development for lead generation and automation',
      link:'https://www.linkedin.com/in/aditya-sai-3317702a6/details/certifications/1705987525967/single-media-viewer/?profileId=ACoAAEnLrNUBtlmX5R017dHOdXAeUJe3FjIgtD4'
    },
    {
      name: 'Data Encryption using AWS KMS',
      platform: 'UST (Coursera)',
      date: 'Jan 2024',
      category: 'Cybersecurity',
      color: 'from-cosmic-orange to-red-500',
      description: 'Advanced data encryption and key management systems',
      link:'https://www.coursera.org/account/accomplishments/verify/FHRPWEQA6LAX?utm_product=project'
    },
    {
      name: 'Deep Learning with PyTorch: Image Segmentation',
      platform: 'Coursera',
      date: 'Jan 2024',
      category: 'AI/ML',
      color: 'from-neon-purple to-blue-500',
      description: 'Deep learning techniques for computer vision tasks',
      link:'https://www.coursera.org/account/accomplishments/verify/GVCPAZFTYFA7?utm_product=project'
    },
    {
      name: 'Introduction to AI',
      platform: 'Great Learning',
      date: 'May 2024',
      category: 'AI/ML',
      color: 'from-stellar-yellow to-orange-500',
      description: 'Foundational artificial intelligence concepts and applications',
      link:'https://www.linkedin.com/in/aditya-sai-3317702a6/details/certifications/1719409723471/single-media-viewer/?profileId=ACoAAEnLrNUBtlmX5R017dHOdXAeUJe3FjIgtD4'
    },
    {
      name: 'UI/UX for Beginners',
      platform: 'Great Learning',
      date: 'June 2024',
      category: 'Design',
      color: 'from-electric-cyan to-purple-500',
      description: 'User interface and experience design fundamentals',
      link:'https://www.linkedin.com/in/aditya-sai-3317702a6/details/certifications/1719413150133/single-media-viewer/?type=DOCUMENT&profileId=ACoAAEnLrNUBtlmX5R017dHOdXAeUJe3FjIgtD4'
    },
    {
      name: 'Google Ads for Beginners',
      platform: 'Coursera',
      date: 'Sep 2024',
      category: 'Marketing',
      color: 'from-nebula-pink to-orange-500',
      description: 'Digital marketing and advertising campaign management',
      link:'https://www.linkedin.com/in/aditya-sai-3317702a6/details/certifications/1725356306803/single-media-viewer/?type=DOCUMENT&profileId=ACoAAEnLrNUBtlmX5R017dHOdXAeUJe3FjIgtD4'
    }
  ];

  const categoryColors = {
  'AI/ML': 'text-electric-cyan',
  'Cybersecurity': 'text-cosmic-orange',
  'Robotics': 'text-stellar-yellow',
  'Design': 'text-neon-purple',
  'Marketing': 'text-nebula-pink',
  'AI/Cloud': 'text-nebula-pink' // Added color for AI/Cloud
};


  const stats = [
    { number: '11+', label: 'Certifications', color: 'electric-cyan' },
    { number: '5+', label: 'Platforms', color: 'neon-purple' },
    { number: '2024', label: 'Most Recent', color: 'cosmic-orange' },
    { number: '5+', label: 'Categories', color: 'stellar-yellow' }
  ];

  return (
    <section id="certifications" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-electric-cyan mb-6" data-macaly="certifications-title">
            🏅 Certifications & Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric-cyan to-neon-purple mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A diverse collection of certifications reflecting my commitment to continuous learning and expertise in emerging technologies
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-electric-cyan/50 transition-all duration-300">
                <div className={`text-3xl font-bold text-${stat.color} mb-2`}>
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-electric-cyan/50 transition-all duration-300 hover:transform hover:scale-105 h-full">
                {/* Certificate header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${cert.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${categoryColors[cert.category as keyof typeof categoryColors]} bg-white/10`}>
                      {cert.category}
                    </span>
                  </div>
                </div>

                {/* Certificate content */}
                <h3 className="text-lg font-bold text-white mb-2 leading-tight" data-macaly={`cert-${index}-title`}>
                  {cert.name}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {cert.description}
                </p>

                {/* Certificate details */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-400 text-sm">
                    <span className="w-2 h-2 bg-electric-cyan rounded-full mr-3"></span>
                    <span className="font-medium text-white">{cert.platform}</span>
                  </div>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Calendar className="w-4 h-4 mr-3 text-electric-cyan" />
                    <span>{cert.date}</span>
                  </div>
                </div>

                {/* Action button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-electric-cyan/20 to-neon-purple/20 border border-electric-cyan/30 px-4 py-2 rounded-lg text-electric-cyan font-medium hover:border-electric-cyan/50 transition-all duration-300"
                >
                  <ExternalLink className="w-4 h-4" />
                  <a href={cert.link}>View Certificate</a>
                </motion.button>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-electric-cyan/0 to-neon-purple/0 group-hover:from-electric-cyan/5 group-hover:to-neon-purple/5 rounded-xl transition-all duration-300 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievement Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-electric-cyan/10 to-neon-purple/10 backdrop-blur-sm border border-electric-cyan/20 rounded-xl p-8 max-w-3xl mx-auto">
            <Award className="w-16 h-16 text-electric-cyan mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Commitment to Excellence</h3>
            <p className="text-gray-300 leading-relaxed">
              These certifications validate my technical knowledge and demonstrate my initiative in exploring interdisciplinary areas. 
              Each certification represents dedication to mastering new technologies and staying current with industry trends in AI, 
              cybersecurity, robotics, and emerging tech fields.
            </p>
          </div>
        </motion.div>

        {/* Animated background elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-electric-cyan/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-neon-purple/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>
    </section>
  );
}
