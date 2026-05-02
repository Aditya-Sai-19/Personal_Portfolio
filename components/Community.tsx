'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface CommunityRole {
  role: string;
  organization: string;
  description: string;
  logo: string;
  logoAlt: string;
  logoScaleClass: string;
}

export default function Community() {
  const communityRoles: CommunityRole[] = [
    {
      role: 'Core Team Member',
      organization: 'MFUGH (Microsoft Fabric Users Group Hyderabad)',
      description:
        'Contributing to organizing events, engaging with the data and AI community, and promoting Microsoft Fabric ecosystem.',
      logo: '/MFUGH.jpeg',
      logoAlt: 'MFUGH logo',
      logoScaleClass: 'scale-110'
    },
    {
      role: 'Community Ambassador',
      organization: 'AI ANYTIME Community',
      description:
        'Supporting AI learning initiatives, sharing knowledge, and helping grow the AI developer community.',
      logo: '/AI ANYTIME.jpeg',
      logoAlt: 'AI ANYTIME logo',
      logoScaleClass: 'scale-125'
    },
    {
      role: 'Vice President',
      organization: 'AI4AP Community',
      description:
        'Leading initiatives, managing team efforts, and driving AI awareness and collaboration activities.',
      logo: '/AI4AP.jpeg',
      logoAlt: 'AI4AP logo',
      logoScaleClass: 'scale-115'
    }
  ];

  return (
    <section id="community" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-electric-cyan mb-6">Community & Leadership</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric-cyan to-neon-purple mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Building impact through leadership, collaboration, and AI community growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {communityRoles.map((item, index) => (
            <motion.div
              key={item.role}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-electric-cyan/50 transition-all duration-300 hover:transform hover:scale-105 h-full">
                <div className="w-12 h-12 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center overflow-hidden mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src={item.logo}
                    alt={item.logoAlt}
                    width={32}
                    height={32}
                    className={`object-contain ${item.logoScaleClass}`}
                  />
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{item.role}</h3>
                <p className="text-electric-cyan font-medium mb-3">{item.organization}</p>
                <p className="text-gray-300 leading-relaxed text-sm">{item.description}</p>

                <div className="absolute inset-0 bg-gradient-to-r from-electric-cyan/0 to-neon-purple/0 group-hover:from-electric-cyan/5 group-hover:to-neon-purple/5 rounded-xl transition-all duration-300 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
