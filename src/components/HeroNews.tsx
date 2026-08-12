import React from 'react';
import { Link } from 'react-router-dom';
import { NewsItem } from '../types';
import { Clock, ArrowRight } from 'lucide-react';

interface HeroNewsProps {
  news: NewsItem;
}

export function HeroNews({ news }: HeroNewsProps) {
  return (
    <div className="relative h-80 md:h-[400px] rounded-xl overflow-hidden shadow-md group flex shrink-0">
      <div className="absolute inset-0 bg-slate-900">
        <div className="absolute inset-0 w-full h-full opacity-60 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent z-10 pointer-events-none"></div>
        <img 
          src={news.imageUrl} 
          alt={news.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 z-0 absolute inset-0"
        />
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20">
        <span className="bg-blue-600 text-white text-[10px] font-black uppercase px-2 py-1 rounded mb-3 inline-block tracking-tighter">
          {news.category}
        </span>
        
        <Link to={`/article/${news.id}`}>
          <h2 className="text-white text-2xl md:text-3xl font-serif font-bold leading-tight max-w-2xl hover:text-blue-200 transition-colors">
            {news.title}
          </h2>
        </Link>
        
        <p className="text-slate-200 text-sm mt-2 max-w-xl line-clamp-2">
          {news.excerpt}
        </p>
        
        <div className="mt-4 flex items-center gap-4">
          <Link 
            to={`/article/${news.id}`}
            className="bg-white text-slate-950 px-5 py-2 rounded-lg font-bold text-xs hover:bg-slate-100 transition-colors inline-flex"
          >
            Read Full Story
          </Link>
          <span className="text-slate-400 text-xs italic">
            By {news.author} &bull; {news.date}
          </span>
        </div>
      </div>
    </div>
  );
}
