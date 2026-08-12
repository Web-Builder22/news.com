import React from 'react';
import { HeroNews } from '../components/HeroNews';
import { NewsCard } from '../components/NewsCard';
import { newsData } from '../data/news';

export function Home() {
  const featuredNews = newsData.find(news => news.isFeatured) || newsData[0];
  const trendingNews = newsData.filter(news => news.isTrending).slice(0, 3);
  const latestNews = newsData.filter(news => news.id !== featuredNews.id && !news.isTrending).slice(0, 4);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      <div className="lg:col-span-8 flex flex-col gap-6">
        {/* Hero Section */}
        <section>
          <HeroNews news={featuredNews} />
        </section>

        {/* Main Content - Latest News */}
        <section className="flex flex-col">
          <div className="flex justify-between items-end mb-4 border-b border-slate-200 pb-2">
            <h3 className="text-lg font-serif font-bold text-slate-800">Latest News</h3>
            <a href="#" className="text-blue-600 text-xs font-bold hover:underline">View All &rarr;</a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {latestNews.map(news => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>
        </section>
      </div>

      {/* Sidebar - Trending News */}
      <aside className="lg:col-span-4 flex flex-col gap-6 h-full">
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col overflow-hidden h-full">
          <div className="bg-slate-900 px-5 py-3">
            <h3 className="text-white font-bold text-sm flex items-center gap-2">
              <span className="w-4 h-4 text-red-500 flex items-center justify-center">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zm3.707 9.293a1 1 0 01-1.414 0L10 8.414l-2.293 2.293a1 1 0 01-1.414-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 010 1.414z"></path></svg>
              </span>
              Trending Now
            </h3>
          </div>
          
          <div className="p-5 divide-y divide-slate-100 flex-1">
            {trendingNews.map((news, index) => (
              <div key={news.id} className="py-4 first:pt-0">
                <div className="flex gap-4 group">
                  <span className="text-2xl font-black text-slate-100 font-serif">
                    0{index + 1}
                  </span>
                  <div>
                    <span className="text-[10px] font-bold text-blue-600 uppercase mb-1 block">
                      {news.category}
                    </span>
                    <a href={`/article/${news.id}`} className="block">
                      <h5 className="text-sm font-bold leading-tight hover:text-blue-600 cursor-pointer text-slate-900">
                        {news.title}
                      </h5>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter Box */}
          <div className="bg-slate-50 p-4 border-t border-slate-100">
            <div className="bg-blue-600 rounded-lg p-4 text-center">
              <p className="text-white text-xs font-bold mb-2">Get the latest news in your inbox</p>
              <div className="flex gap-1">
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="flex-1 rounded py-1 px-2 text-xs focus:outline-none text-slate-900"
                />
                <button className="bg-slate-900 text-white text-[10px] px-2 py-1 rounded font-bold hover:bg-slate-800 transition-colors">
                  JOIN
                </button>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
