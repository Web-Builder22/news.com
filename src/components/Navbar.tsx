import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Menu, X, Newspaper } from 'lucide-react';

const CATEGORIES = [
  'Politics',
  'Technology',
  'Sports',
  'Business',
  'Entertainment'
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="flex flex-col shrink-0 w-full z-50 shadow-lg">
      <div className="bg-slate-950 text-white px-4 md:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-3 text-2xl font-serif font-bold tracking-tight">
            <div className="w-8 h-8 bg-blue-600 rounded-sm flex items-center justify-center font-bold text-xl italic text-white">D</div>
            <span>Daily News</span>
          </Link>
        </div>

        {/* Desktop Search & Date */}
        <div className="hidden md:flex items-center gap-6">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Search news..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-slate-800 text-sm text-white py-1.5 pl-3 pr-10 rounded-md border border-slate-700 focus:outline-none focus:ring-1 focus:ring-blue-500 w-48 lg:w-64"
            />
            <button 
              type="submit"
              className="absolute right-3 top-2 text-slate-400 hover:text-white"
            >
              <Search className="w-4 h-4" />
            </button>
          </form>
          <span className="text-xs font-semibold text-slate-400 uppercase">
            {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric' })}
          </span>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-slate-300 hover:text-white focus:outline-none"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex bg-white border-b border-slate-200 px-8 py-2 items-center justify-center space-x-10 text-xs font-bold uppercase tracking-widest text-slate-600 shrink-0">
        <Link to="/" className="hover:text-blue-600 transition-colors">
          Home
        </Link>
        {CATEGORIES.map(category => (
          <Link
            key={category}
            to={`/category/${category.toLowerCase()}`}
            className="hover:text-blue-600 transition-colors"
          >
            {category}
          </Link>
        ))}
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-xs font-bold uppercase tracking-widest text-slate-600">
            <form onSubmit={handleSearch} className="mb-4 px-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search news..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-slate-100 text-slate-900 border border-slate-200 rounded-md py-2 pl-4 pr-10 w-full focus:ring-1 focus:ring-blue-500 focus:outline-none text-sm"
                />
                <button type="submit" className="absolute right-0 top-0 mt-2 mr-3 text-slate-400">
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </form>
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 rounded-md hover:text-blue-600 hover:bg-slate-50 transition-colors"
            >
              Home
            </Link>
            {CATEGORIES.map(category => (
              <Link
                key={category}
                to={`/category/${category.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 rounded-md hover:text-blue-600 hover:bg-slate-50 transition-colors"
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
