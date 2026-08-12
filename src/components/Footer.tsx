import React from 'react';
import { Link } from 'react-router-dom';
import { Newspaper, Twitter, Facebook, Instagram, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-500 py-4 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center text-xs border-t border-slate-800 shrink-0 gap-4 md:gap-0 mt-8">
      <div className="flex flex-wrap justify-center gap-4 md:gap-6">
        <span>&copy; {new Date().getFullYear()} Daily News Media Group</span>
        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        <a href="#" className="hover:text-white transition-colors">Contact Us</a>
      </div>
      <div className="flex gap-4">
        <a href="#" className="hover:text-white transition-colors">Twitter</a>
        <a href="#" className="hover:text-white transition-colors">Facebook</a>
        <a href="#" className="hover:text-white transition-colors">Instagram</a>
        <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
      </div>
    </footer>
  );
}
