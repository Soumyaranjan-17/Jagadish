import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

const posts = [
  {
    title: 'Exploring Network Security: MITM Attack Learning Experience 🌐',
    date: 'November 30, 2024',
    excerpt:
      'A hands-on exploration of MITM attacks, understanding network vulnerabilities, and learning secure communication practices like using VPNs to prevent real-world threats.',
    link: 'https://www.linkedin.com/posts/jagadishtripathy_cybersecurity-bettercap-ethicalhacking-activity-7268625638687690752-k9o3',
  },
  {
    title: 'SYNBOT: AI-Powered Bot for SIET',
    date: 'November 19, 2024',
    excerpt:
      'Celebrating the successful collaboration and innovation behind SYNBOT, an AI-powered bot built for Synergy Institute of Engineering and Technology (SIET).',
    link: 'https://www.linkedin.com/posts/jagadishtripathy_excited-to-share-our-latest-project-synbot-activity-7267039096970104835-WAES',
  },
  {
    title: 'Ethical Hacking with Meterpreter on Android! 📱🔒',
    date: 'November 25, 2024',
    excerpt:
      'Dived into ethical hacking with Kali Linux and Metasploit, testing an Android device for vulnerabilities using Meterpreter and learning valuable post-exploitation techniques.',
    link: 'https://www.linkedin.com/posts/jagadishtripathy_cybersecurity-ethicalhacking-metasploit-activity-7265946330609373184-piyk',
  },
];

export function Blog() {
  return (
    <section className="py-20 dark:bg-slate-800" id="blog">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Latest Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {posts.map((post) => (
            <article
              key={post.title}
              className="bg-white dark:bg-slate-700 rounded-lg shadow-md overflow-hidden group hover:transform hover:scale-105 transition-all"
            >
              <div className="p-6">
                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-3">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{post.date}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">{post.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
                <a
                  href={post.link}
                  className="inline-flex items-center gap-2 text-cyber-blue hover:text-cyber-purple transition-colors"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}