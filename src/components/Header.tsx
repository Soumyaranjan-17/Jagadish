import React from 'react';
import { Github, Linkedin, Mail, Shield, Terminal } from 'lucide-react';
import { HackerText } from './HackerText';

export function Header() {
  return (
    <header className="min-h-screen bg-gradient-to-b from-cyber-dark to-cyber-darker text-white py-32 relative overflow-hidden">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6IiBzdHJva2U9InJnYmEoMCwxODAsMjE2LDAuMSkiIHN0cm9rZS13aWR0aD0iLjUiLz48cGF0aCBkPSJNMCAzMGgzMHYzMEgweiIgc3Ryb2tlPSJyZ2JhKDAsMTgwLDIxNiwwLjEpIiBzdHJva2Utd2lkdGg9Ii41Ii8+PC9nPjwvc3ZnPg==')] opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <Terminal className="w-8 h-8 text-cyber-blue animate-pulse-slow" />
            <Shield className="w-8 h-8 text-cyber-blue animate-pulse-slow" />
          </div>
          <h1 className="font-cyber text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-wider">
            <HackerText text="JAGADISH " className="animate-glow" />
            <HackerText text=" TRIPATHY" className="animate-glow" />
          </h1>
          <h2 className="font-cyber text-2xl md:text-3xl text-cyber-blue mb-8">
            <HackerText text="CYBERSECURITY SPECIALIST" />
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mb-12 leading-relaxed">
            Securing digital frontiers through ethical hacking and innovative defense strategies.
          </p>
          
          <div className="flex gap-6">
            <a
              href="JagadishTripathyResume.pdf"
              target='blank'
              className="px-8 py-4 bg-cyber-blue text-white font-cyber rounded-lg 
                       hover:bg-cyber-blue/80 transition-all duration-300
                       shadow-[0_0_20px_rgba(0,180,216,0.3)] hover:shadow-[0_0_30px_rgba(0,180,216,0.5)]"
            >
              HIRE ME
            </a>
            <a
              href="#projects"
              className="px-8 py-4 border-2 border-cyber-blue text-cyber-blue font-cyber rounded-lg
                       hover:bg-cyber-blue/10 transition-all duration-300"
            >
              VIEW PROJECTS
            </a>
          </div>
        </div>

        <div className="flex justify-center gap-8 mt-16">
          <a
            href="https://github.com/jagdishtripathy/"
            className="text-gray-400 hover:text-cyber-blue transition-colors p-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-8 h-8" />
          </a>
          <a
            href="https://linkedin.com/in/jagadishtripathy/"
            className="text-gray-400 hover:text-cyber-blue transition-colors p-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-8 h-8" />
          </a>
          <a
            href="mailto:jagadishtripathy144@gmail.com"
            className="text-gray-400 hover:text-cyber-blue transition-colors p-2"
          >
            <Mail className="w-8 h-8" />
          </a>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/2 -left-20 w-40 h-40 bg-cyber-blue/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 -right-20 w-40 h-40 bg-cyber-purple/20 rounded-full blur-3xl"></div>
      </div>
    </header>
  );
}