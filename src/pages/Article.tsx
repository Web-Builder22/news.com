import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, ArrowLeft, Share2, Bookmark } from 'lucide-react';
import { newsData } from '../data/news';

export function Article() {
  const { id } = useParams<{ id: string }>();
  const article = newsData.find(item => item.id === id);

  if (!article) {
    return (
      <div className="text-center py-20 min-h-[50vh] flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Article Not Found</h2>
        <p className="text-slate-600 mb-8">The news article you are looking for does not exist or has been removed.</p>
        <Link to="/" className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
        </Link>
      </div>
    );
  }

  // Find related articles (same category, excluding current)
  const relatedArticles = newsData
    .filter(item => item.category === article.category && item.id !== article.id)
    .slice(0, 3);

  return (
    <article className="max-w-4xl mx-auto">
      {/* Breadcrumb & Navigation */}
      <div className="mb-6 flex items-center justify-between">
        <Link to="/" className="inline-flex items-center text-slate-500 hover:text-slate-900 transition-colors text-sm font-medium">
          <ArrowLeft className="w-4 h-4 mr-1.5" /> Back
        </Link>
        <div className="flex items-center space-x-3 text-slate-400">
          <button className="hover:text-blue-600 transition-colors p-2 rounded-full hover:bg-slate-100">
            <Share2 className="w-5 h-5" />
          </button>
          <button className="hover:text-blue-600 transition-colors p-2 rounded-full hover:bg-slate-100">
            <Bookmark className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Article Header */}
      <header className="mb-8 md:mb-12">
        <div className="mb-4">
          <Link 
            to={`/category/${article.category.toLowerCase()}`}
            className="text-blue-600 font-semibold uppercase tracking-wider text-sm hover:underline"
          >
            {article.category}
          </Link>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
          {article.title}
        </h1>
        <p className="text-xl text-slate-600 mb-6 font-serif italic">
          {article.excerpt}
        </p>
        
        <div className="flex items-center py-4 border-y border-slate-200">
          <div className="flex-1 flex items-center">
            <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 font-bold mr-3">
              {article.author.charAt(0)}
            </div>
            <div>
              <p className="font-semibold text-slate-900 text-sm">{article.author}</p>
              <div className="flex items-center text-slate-500 text-xs mt-0.5">
                <Clock className="w-3.5 h-3.5 mr-1" />
                <span>{article.date}</span>
                <span className="mx-2">•</span>
                <span>4 min read</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      <figure className="mb-10 md:mb-16">
        <img 
          src={article.imageUrl} 
          alt={article.title} 
          className="w-full h-auto rounded-2xl shadow-sm object-cover aspect-[2/1] md:aspect-[21/9]"
        />
        <figcaption className="text-sm text-slate-500 mt-3 text-center">
          Image via Unsplash
        </figcaption>
      </figure>

      {/* Article Content */}
      <div className="prose prose-lg prose-slate max-w-none mb-16 font-serif">
        {article.content.split('\n\n').map((paragraph, index) => (
          <p key={index} className="mb-6 leading-relaxed text-slate-800 text-lg">
            {paragraph}
          </p>
        ))}
      </div>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <div className="border-t border-slate-200 pt-12 mt-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
            <span className="w-2 h-6 bg-blue-600 mr-3 rounded-sm"></span>
            More from {article.category}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map(news => (
              <div key={news.id} className="group cursor-pointer">
                <div className="overflow-hidden rounded-lg mb-3 aspect-video">
                  <img 
                    src={news.imageUrl} 
                    alt={news.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <Link to={`/article/${news.id}`}>
                  <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {news.title}
                  </h4>
                </Link>
                <p className="text-sm text-slate-500 mt-1">{news.date}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
