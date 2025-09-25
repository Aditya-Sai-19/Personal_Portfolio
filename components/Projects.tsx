"use client";

import { motion } from "framer-motion";
import { link } from "fs";
import {
  ExternalLink,
  Github,
  Database,
  Filesearch,
  Brain,
  Home,
  Bot,
  Presentation,
  Code,
  Link,
} from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "IRIS Classification Model",
      description:
        "Built a supervised machine learning model to classify iris flower species based on petal and sepal dimensions using Python and Scikit-learn.",
      tech: ["Python", "Scikit-learn", "Machine Learning", "Data Analysis"],
      icon: Brain,
      gradient: "from-electric-cyan to-blue-500",
      features: [
        "High accuracy using decision trees and logistic regression",
        "Comprehensive data preprocessing pipeline",
        "Classification algorithms implementation",
        "Model performance evaluation metrics",
      ],
      link:'https://huggingface.co/spaces/Aditya-Sai-19/iris-classification-app'
    },
    {
      title: "House Price Prediction Model",
      description:
        "Developed a regression model to predict housing prices based on features like location, size, and amenities using advanced ML techniques.",
      tech: ["Python", "Pandas", "Scikit-learn", "Regression"],
      icon: Home,
      gradient: "from-neon-purple to-purple-500",
      features: [
        "Advanced feature engineering techniques",
        "Multiple regression algorithms comparison",
        "Model evaluation and optimization",
        "Data visualization and insights",
      ],
      link:'https://huggingface.co/spaces/Aditya-Sai-19/House_Price_Predictor'
    },
    {
      title: "Phishing URL Detection.",
      description:
        "Built a supervised machine learning model to classify URLs as phishing or legitimate based on structural and lexical features using Python and Scikit-learn",
      tech: [
        "Python",
        "Scikit-learn",
        "Machine Learning",
        "Cybersecurity",
        "Data Analysis",
      ],
      icon: Presentation,
      gradient: "from-cosmic-orange to-orange-500",
      features: [
        "High accuracy up to 96.9% using Random Forest, KNN, Logistic Regression, and Naive Bayes",
        "Feature engineering with domain length, HTTPS presence, and URL patterns",
        "Comparative analysis of multiple classification algorithms",
        "Evaluation using precision, recall, F1-score, and confusion matrix",
      ],
      link:'https://huggingface.co/spaces/Aditya-Sai-19/PHISHING-URL-DETECTION'
    },
    {
  title: "Cricket Document Similarity Search",
  description:
    "Developed and deployed a semantic search app that finds the most relevant document about a cricketer using text embeddings and natural language queries.",
  tech: ["LangChain", "Google Generative AI", "Gradio", "Hugging Face", "Python", "Semantic Search"],
  icon: Filesearch, // Or another icon like Search, MessagesSquare
  gradient: "from-green-400 to-blue-500",
  features: [
    "End-to-end AI application deployment on Hugging Face",
    "Interactive web UI built with Gradio",
    "Semantic search implementation using text embeddings",
    "Utilizes LangChain for orchestrating AI logic",
  ],
  link: 'https://huggingface.co/spaces/Aditya-Sai-19/cricket_similarity_search'
},
    {
      title:
        "Fake Review Detection",
      description:
        "Developed a Flask-based web application to detect fake Amazon food reviews using a hybrid deep learning model combining CNN, LSTM, and fuzzy logic.",
      tech: [
        "Python",
        "TensorFlow",
        "Keras",
        "Flask",
        "Deep Learning",
        "Fuzzy Logic",
        "Natural Language Processing",
      ],
      icon: Bot,
      gradient: "from-stellar-yellow to-yellow-500",
      features: [
        "Real-time review analysis with sentiment classification via CNN",
        "Authenticity detection using LSTM and fuzzy logic integration",
        "Published in European Advanced Journal for Emerging Technologies",
        "End-to-end deployment with Flask for user interaction and prediction",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl font-bold text-electric-cyan mb-6"
            data-macaly="projects-title"
          >
            🚀 Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric-cyan to-neon-purple mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Here are some of the key projects and simulations showcasing my
            practical skills and problem-solving mindset
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="group relative"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-electric-cyan/50 transition-all duration-300 hover:transform hover:scale-105 h-full">
                {/* Project header */}
                <div className="flex items-center mb-6">
                  <div
                    className={`w-12 h-12 whitespace-nowrap rounded-lg bg-gradient-to-r ${project.gradient} flex items-center justify-center mr-[1vw] group-hover:scale-110 transition-transform duration-300`}
                  >
                    <project.icon className="w-6 h-6 text-white" />

                  </div>
                  <div>
                    <h3
                      className="text-lg font-bold text-white mb-2"
                      data-macaly={`project-${index}-title`}
                    >
                      {project.title}
                    </h3>
                    <div className="flex space-x-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 rounded-full bg-white/10  hover:bg-electric-cyan/20 transition-colors duration-300"
                      >
                        <a href="https://github.com/Aditya-Sai-19">
                          {" "}
                          <Github className="w-4 h-4 text-electric-cyan" />
                        </a>
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 rounded-full bg-white/10 hover:bg-electric-cyan/20 transition-colors duration-300"
                      >
                        <a href={project.link}><ExternalLink className="w-4 h-4 text-electric-cyan" /></a>
                      </motion.button>
                    </div>
                  </div>
                </div>

                {/* Project description */}
                <p
                  className="text-gray-300 mb-6 leading-relaxed"
                  data-macaly={`project-${index}-description`}
                >
                  {project.description}
                </p>

                {/* Key features */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3 flex items-center">
                    <Code className="w-4 h-4 mr-2 text-electric-cyan" />
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="text-gray-400 text-sm flex items-start"
                      >
                        <span className="w-2 h-2 bg-electric-cyan rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-white/10 text-electric-cyan text-xs rounded-full border border-electric-cyan/20 hover:border-electric-cyan/50 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-electric-cyan/0 to-neon-purple/0 group-hover:from-electric-cyan/5 group-hover:to-neon-purple/5 rounded-xl transition-all duration-300 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-electric-cyan/10 to-neon-purple/10 backdrop-blur-sm border border-electric-cyan/20 rounded-xl p-8 max-w-2xl mx-auto">
            <Github className="w-16 h-16 text-electric-cyan mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Explore More Projects
            </h3>
            <p className="text-gray-300 mb-6">
              Check out my GitHub profile for more projects, code samples, and
              contributions to open-source initiatives.
            </p>
            <motion.a
              href="https://github.com/Aditya-Sai-19"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-electric-cyan to-neon-purple px-6 py-3 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-electric-cyan/50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5" />
              <span>View GitHub Profile</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
