import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-bold text-lg mb-4">Let's build something extraordinary.</h3>
            <p className="text-slate-600 max-w-sm mb-6">
              Transforming complex business logic into elegant, high-performance web applications.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-indigo-600"><Github size={20} /></a>
              <a href="https://www.linkedin.com/in/tayari-mbao-030050147/" className="text-slate-400 hover:text-indigo-600"><Linkedin size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-indigo-600"><Twitter size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-indigo-600"><Mail size={20} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-slate-900">Capabilities</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>Next.js Development</li>
              <li>SaaS Architecture</li>
              <li>UI/UX Design</li>
              <li>API Development</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-slate-900">Company</h4>
            <ul className="space-y-2 text-sm text-slate-600">
             <a href="/about" ><li>About Me</li></a>
              <li>My Process</li>
              <li>Case Studies</li>
              <a href="workWithMe"><li>Contact</li></a>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-100 pt-8 flex flex-col md:row justify-between items-center gap-4 text-xs text-slate-400">
          <p>© 2026 DevVision Studio. Built with Next.js & Turbopack.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}