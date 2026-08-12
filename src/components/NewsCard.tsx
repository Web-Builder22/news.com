import React from 'react';
import { Link } from 'react-router-dom';
import { NewsItem } from '../types';
import { ArrowRight, Clock } from 'lucide-react';

interface NewsCardProps {
  news: NewsItem;
}

export function NewsCard({ news }: NewsCardProps) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex flex-col h-full hover:shadow-md transition-shadow">
      <Link to={`/article/${news.id}`} className="h-32 md:h-40 bg-slate-200 rounded-lg mb-3 flex items-center justify-center text-slate-400 font-bold overflow-hidden group">
        <img 
          src={news.imageUrl} 
          alt={news.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>
      <span className="text-blue-600 text-[10px] font-bold uppercase mb-1">
        {news.category}
      </span>
      <Link to={`/article/${news.id}`}>
        <h4 className="font-bold text-sm md:text-base leading-snug mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
          {news.title}
        </h4>
      </Link>
      <p className="text-slate-500 text-xs md:text-sm line-clamp-2 mb-3 flex-grow">
        {news.excerpt}
      </p>
      <div className="mt-auto pt-2 flex justify-between items-center border-t border-slate-50">
        <span className="text-[10px] text-slate-400">{news.date}</span>
        <Link to={`/article/${news.id}`} className="text-blue-600 text-xs font-bold hover:text-blue-800 transition-colors">
          Read More
        </Link>
      </div>
    </div>
  );
}
