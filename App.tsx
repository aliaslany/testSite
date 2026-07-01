/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Github, Linkedin, Briefcase, GraduationCap, User, Wrench } from 'lucide-react';
import { resumeData } from './data';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 py-12 px-4 sm:px-6 lg:px-8 font-sans selection:bg-blue-200">
      <motion.div 
        className="max-w-3xl mx-auto space-y-8"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        {/* Header / Profile */}
        <motion.header variants={fadeInUp} className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 text-center sm:text-right flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <div className="w-32 h-32 rounded-full bg-slate-200 flex-shrink-0 overflow-hidden border-4 border-white shadow-md">
             <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${resumeData.name}&backgroundColor=e2e8f0`} alt="Profile" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-slate-900">{resumeData.name}</h1>
            <p className="text-lg text-blue-600 font-medium mt-1">{resumeData.title}</p>
            
            <div className="mt-4 flex flex-wrap justify-center sm:justify-start gap-4 text-sm text-slate-600">
              {resumeData.email && (
                <a href={`mailto:${resumeData.email}`} className="flex items-center gap-1.5 hover:text-blue-600 transition-colors">
                  <Mail className="w-4 h-4" />
                  {resumeData.email}
                </a>
              )}
              {resumeData.phone && (
                <span className="flex items-center gap-1.5">
                  <Phone className="w-4 h-4" />
                  <span dir="ltr">{resumeData.phone}</span>
                </span>
              )}
              {resumeData.location && (
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" />
                  {resumeData.location}
                </span>
              )}
            </div>
            
            <div className="mt-4 flex justify-center sm:justify-start gap-3">
              {resumeData.social.linkedin && (
                <a href={resumeData.social.linkedin} target="_blank" rel="noreferrer" className="p-2 bg-slate-50 rounded-full text-slate-500 hover:text-blue-600 hover:bg-blue-50 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
              {resumeData.social.github && (
                <a href={resumeData.social.github} target="_blank" rel="noreferrer" className="p-2 bg-slate-50 rounded-full text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
        </motion.header>

        {/* About */}
        <motion.section variants={fadeInUp} className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
              <User className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-slate-900">درباره من</h2>
          </div>
          <p className="text-slate-600 leading-relaxed text-justify">
            {resumeData.about}
          </p>
        </motion.section>

        {/* Experience */}
        <motion.section variants={fadeInUp} className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
              <Briefcase className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-slate-900">سوابق کاری</h2>
          </div>
          <div className="space-y-8 pl-2 sm:pl-0 pr-2 sm:pr-0 border-r-2 border-slate-100">
            {resumeData.experience.map((exp) => (
              <div key={exp.id} className="relative pr-6">
                <div className="absolute w-3 h-3 bg-blue-600 rounded-full -right-[23px] top-1.5 shadow-[0_0_0_4px_white]"></div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
                  <h3 className="text-lg font-bold text-slate-900">{exp.title}</h3>
                  <span className="text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">{exp.period}</span>
                </div>
                <p className="text-blue-600 font-medium mb-3">{exp.company}</p>
                <p className="text-slate-600 leading-relaxed text-sm text-justify">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Education */}
        <motion.section variants={fadeInUp} className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-slate-900">تحصیلات</h2>
          </div>
          <div className="space-y-6">
            {resumeData.education.map((edu) => (
              <div key={edu.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl bg-slate-50 border border-slate-100">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{edu.degree}</h3>
                  <p className="text-slate-600 mt-1">{edu.university}</p>
                </div>
                <span className="text-sm font-medium text-slate-500 mt-2 sm:mt-0">{edu.period}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Skills */}
        <motion.section variants={fadeInUp} className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
              <Wrench className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-slate-900">مهارت‌ها</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {resumeData.skills.map((skill, index) => (
              <span 
                key={index} 
                className="px-4 py-2 bg-slate-50 border border-slate-200 text-slate-700 rounded-lg text-sm font-medium hover:border-blue-300 hover:text-blue-600 transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.section>

      </motion.div>
    </div>
  );
}
