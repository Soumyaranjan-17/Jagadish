import React from 'react';
import { Shield, Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Shield className="w-6 h-6 text-cyber-blue" />
            <span className="text-xl font-bold">Jagadish Tripathy</span>
          </div>
          <div className="flex gap-6">
            <a
              href="https://github.com/jagdishtripathy"
              className="text-gray-400 hover:text-cyber-blue transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/jagadishtripathy"
              className="text-gray-400 hover:text-cyber-blue transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:jagadishtripathy144@gmail.com"
              className="text-gray-400 hover:text-cyber-blue transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="text-center text-gray-400">
          <p className="mb-2">Securing the Web, One Exploit at a Time</p>
          <p>&copy; {new Date().getFullYear()} Jagadish Tripahy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}