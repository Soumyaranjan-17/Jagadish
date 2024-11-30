import React from 'react';
import { useTheme } from '../context/ThemeContext';
import {
  Moon,
  Sun,
  Home,
  User,
  Code2,
  FolderGit2,
  Award,
  BookOpen,
  Mail,
  Terminal,
} from 'lucide-react';

export function Sidebar() {
  const { theme, toggleTheme } = useTheme();

  const menuItems = [
    { icon: Home, label: 'Home', href: '#' },
    { icon: User, label: 'About', href: '#about' },
    { icon: Terminal, label: 'Skills', href: '#skills' },
    { icon: FolderGit2, label: 'Projects', href: '#projects' },
    { icon: Award, label: 'Certifications', href: '#certifications' },
    { icon: BookOpen, label: 'Blog', href: '#blog' },
    { icon: Mail, label: 'Contact', href: '#contact' },
  ];

  return (
    <div className="fixed left-0 top-0 h-full w-16 bg-slate-900 dark:bg-black flex flex-col items-center py-8">
      <div className="flex-1 flex flex-col gap-8">
        {menuItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-gray-400 hover:text-cyan-400 transition-colors p-2"
            title={item.label}
          >
            <item.icon className="w-6 h-6" />
          </a>
        ))}
      </div>
      <button
        onClick={toggleTheme}
        className="text-gray-400 hover:text-cyan-400 transition-colors p-2"
        title="Toggle theme"
      >
        {theme === 'dark' ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
      </button>
    </div>
  );
}