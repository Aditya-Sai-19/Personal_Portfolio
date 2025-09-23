'use client';

import { motion } from 'framer-motion';
import { Code, Brain, Database, Shield, Bot, Palette, Users, Lightbulb } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      gradient: 'from-electric-cyan to-blue-500',
      skills: [
        { name: 'Python', level: 90, color: 'electric-cyan' },
        { name: 'Java (OOP)', level: 85, color: 'neon-purple' },
        { name: 'C', level: 80, color: 'cosmic-orange' },
        { name: 'SQL', level: 75, color: 'stellar-yellow' }
      ]
    },
    {
      title: 'AI & Data Science',
      icon: Brain,
      gradient: 'from-neon-purple to-purple-500',
      skills: [
        { name: 'Machine Learning', level: 85, color: 'neon-purple' },
        { name: 'Artificial Intelligence', level: 80, color: 'electric-cyan' },
        { name: 'Data Analysis', level: 75, color: 'cosmic-orange' },
        { name: 'Deep Learning', level: 70, color: 'stellar-yellow' }
      ]
    },
    {
      title: 'Robotics & Hardware',
      icon: Bot,
      gradient: 'from-cosmic-orange to-orange-500',
      skills: [
        { name: 'Arduino', level: 80, color: 'cosmic-orange' },
        { name: 'ROS', level: 70, color: 'electric-cyan' },
        { name: 'Sensor Integration', level: 75, color: 'neon-purple' },
        { name: 'Automation', level: 70, color: 'stellar-yellow' }
      ]
    },
    {
      title: 'Cybersecurity',
      icon: Shield,
      gradient: 'from-stellar-yellow to-yellow-500',
      skills: [
        { name: 'Ethical Hacking', level: 70, color: 'stellar-yellow' },
        { name: 'Data Encryption', level: 75, color: 'electric-cyan' },
        { name: 'Network Security', level: 65, color: 'neon-purple' },
        { name: 'Threat Analysis', level: 70, color: 'cosmic-orange' }
      ]
    }
  ];

  const softSkills = [
    { name: 'Analytical Thinking', icon: Brain, color: 'electric-cyan' },
    { name: 'Problem Solving', icon: Lightbulb, color: 'neon-purple' },
    { name: 'Communication', icon: Users, color: 'cosmic-orange' },
    { name: 'Adaptability', icon: Palette, color: 'stellar-yellow' }
  ];

  const tools = [
    'Google Colab', 'Coursera', 'Skillsoft', 'IBM Watson', 'Azure Cognitive Services','Streamlit',
    'TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy','Seaborn','Matplotlib','Langchain','LangFlow'
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-electric-cyan mb-6" data-macaly="skills-title">
            🛠️ Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric-cyan to-neon-purple mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A comprehensive technical skill set spanning AI, cybersecurity, robotics, and software development
          </p>
        </motion.div>

        {/* Technical Skills */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-electric-cyan/50 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.gradient} flex items-center justify-center mr-4`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <div key={skill.name} className="skill-item">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        className={`h-2 rounded-full ${
                          skill.color === 'electric-cyan' ? 'bg-electric-cyan' :
                          skill.color === 'neon-purple' ? 'bg-neon-purple' :
                          skill.color === 'cosmic-orange' ? 'bg-cosmic-orange' :
                          skill.color === 'stellar-yellow' ? 'bg-stellar-yellow' :
                          'bg-electric-cyan'
                        }`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: 0.5 + idx * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            🧠 Soft Skills & Strengths
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:border-electric-cyan/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r from-${skill.color} to-${skill.color}/50 flex items-center justify-center mx-auto mb-4`}>
                  <skill.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-white font-semibold">{skill.name}</h4>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tools & Platforms */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">
            🔧 Tools & Platforms
          </h3>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
            <div className="flex flex-wrap justify-center gap-4">
              {tools.map((tool, index) => (
                <motion.span
                  key={tool}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.05 * index }}
                  viewport={{ once: true }}
                  className="px-4 py-2 bg-gradient-to-r from-electric-cyan/20 to-neon-purple/20 text-white rounded-full border border-electric-cyan/20 hover:border-electric-cyan/50 transition-all duration-300 hover:scale-105 cursor-default"
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Animated background elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-electric-cyan/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-neon-purple/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
    </section>
  );
}
