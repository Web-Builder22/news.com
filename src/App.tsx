import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Article } from './pages/Article';
import { Category } from './pages/Category';
import { Search } from './pages/Search';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans antialiased">
        <Navbar />
        
        <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/article/:id" element={<Article />} />
            <Route path="/category/:id" element={<Category />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}
