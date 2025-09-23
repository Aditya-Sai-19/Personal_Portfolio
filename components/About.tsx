'use client';

import { Code, Zap, Shield, Cpu, GraduationCap, Target } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Code,
      title: 'AI & ML Engineering',
      description: 'Building intelligent systems with Python, TensorFlow, and cutting-edge algorithms',
      color: 'bg-electric-cyan'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Ethical hacking, data encryption, and secure digital infrastructure design',
      color: 'bg-neon-purple'
    },
    {
      icon: Cpu,
      title: 'Robotics',
      description: 'Arduino programming, ROS systems, and sensor integration for smart automation',
      color: 'bg-cosmic-orange'
    },
    {
      icon: GraduationCap,
      title: 'Continuous Learning',
      description: 'Multiple certifications in AI, cybersecurity, and emerging technologies',
      color: 'bg-stellar-yellow'
    },
    {
      icon: Target,
      title: 'Problem Solving',
      description: 'Analytical thinking and innovative solutions for real-world challenges',
      color: 'bg-electric-cyan'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Passionate about merging physical and digital worlds through technology',
      color: 'bg-neon-purple'
    }
  ];

  return (
    <section id="about" className="py-20 relative px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-electric-cyan mb-6" data-macaly="about-title">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric-cyan to-neon-purple mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-electric-cyan/50 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <span className="w-3 h-3 bg-electric-cyan rounded-full mr-3 animate-pulse"></span>
                The Journey
              </h3>
              <p className="text-gray-300 leading-relaxed" data-macaly="about-description">
                I'm Kolapalli Aditya Sai, a Computer Science graduate specializing in CSE(AI & ML) Artificial Intelligence and Machine Learning. My journey is driven by a passion for building intelligent systems that bridge the physical and digital worlds, from developing secure infrastructures to pioneering robotic automation. With a strong foundation in Python and deep learning, I'm eager to contribute my problem-solving skills to innovative, tech-driven teams.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-neon-purple/50 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <span className="w-3 h-3 bg-neon-purple rounded-full mr-3 animate-pulse"></span>
                The Vision
              </h3>
              <p className="text-gray-300 leading-relaxed">
                My journey is driven by curiosity and a desire to innovate. I thrive in environments where I can solve real-world problems, collaborate with forward-thinking teams, and continuously expand my technical and creative boundaries. With hands-on experience in Python, Java, C, and SQL, I'm eager to contribute to cutting-edge solutions in AI, robotics, and cybersecurity.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-cosmic-orange/50 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <span className="w-3 h-3 bg-cosmic-orange rounded-full mr-3 animate-pulse"></span>
                Beyond Code
              </h3>
              <p className="text-gray-300 leading-relaxed">
                When I'm not coding or experimenting with new tech, I'm exploring the latest in ethical hacking, UI/UX design, and smart automation. I believe in lifelong learning, and my certifications reflect a commitment to staying ahead in a rapidly evolving tech landscape.
              </p>
            </div>
          </div>

          {/* Right column - Highlights grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div key={highlight.title} className="group relative">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-electric-cyan/50 transition-all duration-300 hover:transform hover:scale-105 h-full">
                  <div className={`w-12 h-12 rounded-lg ${highlight.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <highlight.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">{highlight.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{highlight.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-electric-cyan/10 to-neon-purple/10 backdrop-blur-sm border border-electric-cyan/20 rounded-xl p-8 max-w-2xl mx-auto">
            <GraduationCap className="w-16 h-16 text-electric-cyan mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Education</h3>
            <p className="text-gray-300 text-lg">
              <strong>B.Tech in Computer Science and Engineering (AI & ML)</strong>
            </p>
            <p className="text-electric-cyan font-semibold">Joginpally B R Engineering College</p>
            <p className="text-gray-400 mt-2">Specializing in Artificial Intelligence and Machine Learning</p>
          </div>
        </div>
      </div>
    </section>
  );
}
