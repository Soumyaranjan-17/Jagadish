import React from 'react';
import { Mail, MessageSquare } from 'lucide-react';

export function Contact() {
  return (
    <section className="py-20 bg-white" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <p className="text-gray-600 mb-8">
            I'm always interested in discussing cybersecurity opportunities or collaborating on
            interesting projects. Feel free to reach out!
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="mailto:jagadishtripathy144@gmail.com"
              className="flex items-center gap-2 px-6 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>Email Me</span>
            </a>
            <a
              href="https://www.linkedin.com/in/jagadishtripathy"
              className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Message on LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}