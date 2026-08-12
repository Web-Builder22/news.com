import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { NewsCard } from '../components/NewsCard';
import { newsData } from '../data/news';
import { ArrowLeft } from 'lucide-react';

export function Category() {
  const { id } = useParams<{ id: string }>();
  
  // Format category name for display (capitalize first letter)
  const categoryName = id ? id.charAt(0).toUpperCase() + id.slice(1) : '';
  
  const categoryNews = newsData.filter(
    news => news.category.toLowerCase() === id?.toLowerCase()
  );

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center text-sm text-slate-500 mb-4">
          <Link to="/" className="hover:text-slate-900 transition-colors flex items-center">
            <ArrowLeft className="w-4 h-4 mr-1" /> Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-slate-900 font-medium">{categoryName}</span>
        </div>
        
        <h1 className="text-4xl font-bold text-slate-900 flex items-center">
          <span className="w-3 h-10 bg-blue-600 mr-4 rounded-sm"></span>
          {categoryName} News
        </h1>
        <p className="text-slate-600 mt-3 text-lg">
          Latest updates and stories from {categoryName.toLowerCase()}.
        </p>
      </div>

      {categoryNews.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryNews.map(news => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-slate-50 rounded-2xl border border-slate-100">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">No Articles Found</h2>
          <p className="text-slate-500 mb-6">We couldn't find any news in this category at the moment.</p>
          <Link to="/" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors">
            Return to Homepage
          </Link>
        </div>
      )}
    </div>
  );
}
