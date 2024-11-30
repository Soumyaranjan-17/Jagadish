import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Email Phishing Detector',
    description: 'This project is an automated tool that detects, quarantines, and alerts about phishing emails by scanning URLs with the VirusTotal API and notifying the security team.',
    technologies: ['Python', 'Scapy', 'Virus Total'],
    github: 'https://github.com/jagdishtripathy/',
    demo:''
  },
  {
    title: 'Network Packet Sniffer',
    description: 'The Network Packet Sniffer captures and analyzes network packets in real-time, providing insights into IPs, MACs, protocols, and payloads.',
    technologies: ['Python', 'Nmap', 'Arp-scan'],
    github: 'https://github.com/jagdishtripathy/Packet-sniffer',
  },
  {
    title: 'Password Complexity Checker',
    description: "The Password Complexity Checker is a Python tool that evaluates password strength, guiding users to create secure passwords by meeting defined complexity and security standards.",
    technologies: ['Python'],
    github: 'https://github.com/jagdishtripathy/Password-complexity-checker',
  },
];

export function Projects() {
  return (
    <section className="py-20 dark:bg-slate-800 transition-colors" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-white dark:bg-slate-700 rounded-lg shadow-md overflow-hidden transition-colors">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-cyber-blue/10 text-cyber-blue rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-1 text-gray-600 dark:text-gray-300 hover:text-cyber-blue transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      className="flex items-center gap-1 text-gray-600 dark:text-gray-300 hover:text-cyber-blue transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}