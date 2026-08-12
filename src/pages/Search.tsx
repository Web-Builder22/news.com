import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { NewsCard } from '../components/NewsCard';
import { newsData } from '../data/news';
import { Search as SearchIcon, ArrowLeft } from 'lucide-react';

export function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  const searchResults = newsData.filter(news => 
    news.title.toLowerCase().includes(query.toLowerCase()) ||
    news.excerpt.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto min-h-[60vh]">
      <div className="mb-8">
        <div className="flex items-center text-sm text-slate-500 mb-4">
          <Link to="/" className="hover:text-slate-900 transition-colors flex items-center">
            <ArrowLeft className="w-4 h-4 mr-1" /> Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-slate-900 font-medium">Search</span>
        </div>
        
        <h1 className="text-3xl font-bold text-slate-900 flex items-center mb-2">
          <SearchIcon className="w-8 h-8 text-blue-600 mr-3" />
          Search Results
        </h1>
        <p className="text-slate-600 text-lg">
          Showing results for: <span className="font-semibold text-slate-900">"{query}"</span>
        </p>
      </div>

      {query.trim() === '' ? (
        <div className="text-center py-20 bg-slate-50 rounded-2xl border border-slate-100">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Empty Search</h2>
          <p className="text-slate-500">Please enter a keyword to search for articles.</p>
        </div>
      ) : searchResults.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {searchResults.map(news => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-slate-50 rounded-2xl border border-slate-100">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-200 mb-4">
            <SearchIcon className="w-8 h-8 text-slate-400" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">No matches found</h2>
          <p className="text-slate-500 max-w-md mx-auto">
            We couldn't find any articles matching "{query}". Try checking your spelling or using more general terms.
          </p>
        </div>
      )}
    </div>
  );
}
