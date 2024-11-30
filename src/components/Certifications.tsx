import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const certifications = [
  {
    title: 'Linux and Private Cloud Administration on IBM Power Systems',
    issuer: 'REDHAT',
    date: 'October 2024',
    link: 'https://www.coursera.org/account/accomplishments/specialization/9P6WZWRDLT9U',
  },
  {
    title: 'Google Cybersecurity Specialization',
    issuer: 'Google',
    date: 'September 2023',
    link: 'https://www.coursera.org/account/accomplishments/specialization/5EI9ULLCTQCF',
  },
  {
    title: 'Introduction to OSINT',
    issuer: 'Security Blue Team',
    date: 'October 2024',
    link: 'https://www.linkedin.com/in/jagadishtripathy/details/certifications/1730220495928/single-media-viewer?type=DOCUMENT&profileId=ACoAAFKiAs0BAe9wLHFuZ--NIXnUmy7QpUMDKLo&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bon%2BcPtpnRwCqj6Nw8CvU%2Bw%3D%3D',
  },
];

export function Certifications() {
  return (
    <section className="py-20 dark:bg-slate-900" id="certifications">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
          Certifications & Courses
        </h2>
        <div className="max-w-4xl mx-auto grid gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 flex items-center gap-6 group hover:transform hover:scale-[1.02] transition-all"
            >
              <div className="flex-shrink-0">
                <Award className="w-12 h-12 text-cyber-blue" />
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-semibold mb-1 dark:text-white">{cert.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  {cert.issuer} • {cert.date}
                </p>
              </div>
              <a
                href={cert.link}
                className="text-gray-400 hover:text-cyber-blue transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-6 h-6" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}