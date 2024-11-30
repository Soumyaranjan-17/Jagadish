import React from 'react';
import { Shield, Target, Lock, Brain } from 'lucide-react';

const highlights = [
  {
    icon: Shield,
    title: 'Security Focus',
    description: 'Passionate about ethical hacking and penetration testing',
  },
  {
    icon: Target,
    title: 'CTF Participant',
    description: 'Active participant in Capture The Flag competitions',
  },
  {
    icon: Lock,
    title: 'Security Research',
    description: 'Conducting research on latest security vulnerabilities',
  },
  {
    icon: Brain,
    title: 'Continuous Learning',
    description: 'Always staying updated with latest security trends',
  },
];

export function About() {
  return (
    <section className="py-20 dark:bg-slate-800" id="about">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">About Me</h2>
        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            As a second-year Cybersecurity student, I'm deeply passionate about protecting digital
            assets and understanding the complexities of modern security challenges. My journey in
            cybersecurity began with a fascination for ethical hacking and has evolved into a
            comprehensive pursuit of knowledge in various security domains.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            Currently focusing on penetration testing and vulnerability assessment, I aim to become
            a certified security analyst and contribute to making the digital world more secure.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="p-6 bg-white dark:bg-slate-700 rounded-lg shadow-md group hover:transform hover:scale-105 transition-all"
            >
              <div className="mb-4">
                <item.icon className="w-8 h-8 text-cyber-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}