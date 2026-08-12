import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { User as UserIcon, Mail } from 'lucide-react';

export function Profile() {
  const { currentUser } = useAuth();

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="bg-slate-900 px-8 py-10 text-center relative">
          <div className="w-24 h-24 bg-blue-600 rounded-full mx-auto flex items-center justify-center text-white text-3xl font-bold mb-4 shadow-lg">
            {currentUser?.displayName ? currentUser.displayName.charAt(0).toUpperCase() : <UserIcon className="w-10 h-10" />}
          </div>
          <h1 className="text-2xl font-serif font-bold text-white mb-1">
            {currentUser?.displayName || 'News Reader'}
          </h1>
          <p className="text-slate-300 flex items-center justify-center gap-2 text-sm">
            <Mail className="w-4 h-4" />
            {currentUser?.email}
          </p>
        </div>
        
        <div className="p-8">
          <h2 className="text-lg font-bold text-slate-900 mb-6 border-b border-slate-100 pb-2">Account Details</h2>
          
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center py-3">
              <span className="text-sm font-medium text-slate-500 w-32">Full Name</span>
              <span className="text-slate-900 font-medium">{currentUser?.displayName || 'Not provided'}</span>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center py-3">
              <span className="text-sm font-medium text-slate-500 w-32">Email Address</span>
              <span className="text-slate-900 font-medium">{currentUser?.email}</span>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center py-3">
              <span className="text-sm font-medium text-slate-500 w-32">Account ID</span>
              <span className="text-slate-500 font-mono text-xs bg-slate-100 px-2 py-1 rounded">{currentUser?.uid}</span>
            </div>
          </div>
          
          <div className="mt-8 bg-blue-50 border border-blue-100 rounded-lg p-6 text-center">
            <h3 className="font-bold text-blue-900 mb-2">Welcome to Daily News Premium</h3>
            <p className="text-sm text-blue-700">
              As a registered user, you have full access to all exclusive articles, personalized newsletters, and ad-free reading experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
