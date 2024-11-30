import React from 'react';
import { Terminal, Code2, Network, Server, Shield, Lock, Database, Bug } from 'lucide-react';

const skillCategories = [
  {
    icon: Terminal,
    title: 'Security Tools',
    skills: ['Kali Linux', 'Wireshark', 'Metasploit', 'Burp Suite', 'Nmap'],
    iconBg: 'bg-red-500/10',
    iconColor: 'text-red-500',
    gradient: 'from-red-500/20 to-transparent',
  },
  {
    icon: Code2,
    title: 'Programming',
    skills: ['Python', 'Bash', 'C', 'JavaScript', 'SQL'],
    iconBg: 'bg-blue-500/10',
    iconColor: 'text-blue-500',
    gradient: 'from-blue-500/20 to-transparent',
  },
  {
    icon: Network,
    title: 'Networking',
    skills: ['TCP/IP', 'DNS', 'HTTP/HTTPS', 'VPNs', 'Firewalls'],
    iconBg: 'bg-green-500/10',
    iconColor: 'text-green-500',
    gradient: 'from-green-500/20 to-transparent',
  },
  {
    icon: Server,
    title: 'Systems',
    skills: ['Linux (Ubuntu, Kali)', 'Windows Server', 'Active Directory'],
    iconBg: 'bg-purple-500/10',
    iconColor: 'text-purple-500',
    gradient: 'from-purple-500/20 to-transparent',
  },
];

export function Skills() {
  return (
    <section className="py-32 relative" id="skills">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="glass-card group card-3d"
              onMouseMove={(e) => {
                const card = e.currentTarget;
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
              }}
            >
              <div className="p-8 card-3d-content">
                <div className={`inline-flex p-4 rounded-lg ${category.iconBg} mb-6`}>
                  <category.icon className={`w-8 h-8 ${category.iconColor}`} />
                </div>
                
                <h3 className="text-2xl font-cyber font-semibold mb-4 text-white neon-text">
                  {category.title}
                </h3>
                
                <ul className="space-y-3">
                  {category.skills.map((skill) => (
                    <li key={skill} className="text-gray-300 flex items-center gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full ${category.iconColor}`}></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}