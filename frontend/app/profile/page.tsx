"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { getQuizHistory, clearAllData, STORAGE_KEYS } from '../../lib/storage';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { History, Trash2, User, Shield, ChevronRight, Calendar } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

export default function ProfilePage() {
  const [history, setHistory] = useState<any[]>([]);
  const [userProfile, setUserProfile] = useState<{name: string, email: string}>({ name: '', email: '' });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // Load history
    const loadedHistory = getQuizHistory();
    setHistory(loadedHistory);

    // Load profile
    if (typeof window !== 'undefined') {
      const savedProfile = localStorage.getItem(STORAGE_KEYS.USER_PROFILE);
      if (savedProfile) {
        setUserProfile(JSON.parse(savedProfile));
      }
    }
  }, []);

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem(STORAGE_KEYS.USER_PROFILE, JSON.stringify(userProfile));
    setIsEditing(false);
    toast.success('Profile updated successfully');
  };

  const handleClearData = () => {
    if (confirm('Are you sure you want to delete all your data? This cannot be undone.')) {
      clearAllData();
      setHistory([]);
      setUserProfile({ name: '', email: '' });
      toast.success('All data cleared from this device');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <Toaster position="bottom-center" />
      
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            My Profile
          </h1>
          <p className="text-lg text-slate-600">
            Manage your personal information and view your assessment history.
          </p>
        </div>

        {/* Personal Info Card */}
        <Card className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-slate-900 flex items-center">
              <User className="w-5 h-5 mr-2 text-blue-600" />
              Personal Information
            </h2>
            {!isEditing && (
              <button 
                onClick={() => setIsEditing(true)}
                className="text-sm text-blue-600 hover:text-blue-800 font-medium"
              >
                Edit
              </button>
            )}
          </div>

          {isEditing ? (
            <form onSubmit={handleSaveProfile} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Name (Optional)</label>
                <input
                  type="text"
                  value={userProfile.name}
                  onChange={(e) => setUserProfile({...userProfile, name: e.target.value})}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email (Optional)</label>
                <input
                  type="email"
                  value={userProfile.email}
                  onChange={(e) => setUserProfile({...userProfile, email: e.target.value})}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your email"
                />
              </div>
              <div className="flex gap-3 pt-2">
                <Button type="submit" variant="primary" size="sm">Save Changes</Button>
                <Button type="button" variant="ghost" size="sm" onClick={() => setIsEditing(false)}>Cancel</Button>
              </div>
            </form>
          ) : (
            <div className="space-y-3">
              <div className="flex border-b border-slate-100 pb-3">
                <span className="w-24 text-slate-500 font-medium">Name:</span>
                <span className="text-slate-900 font-medium">{userProfile.name || 'Not set'}</span>
              </div>
              <div className="flex">
                <span className="w-24 text-slate-500 font-medium">Email:</span>
                <span className="text-slate-900 font-medium">{userProfile.email || 'Not set'}</span>
              </div>
              <p className="text-xs text-slate-400 mt-4 italic">
                * This information is stored only on your device for your convenience.
              </p>
            </div>
          )}
        </Card>

        {/* Assessment History */}
        <Card className="mb-8">
          <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
            <History className="w-5 h-5 mr-2 text-blue-600" />
            Assessment History
          </h2>

          {history.length > 0 ? (
            <div className="space-y-4">
              {history.map((entry, index) => (
                <div key={entry.id || index} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-200 hover:border-blue-300 transition-colors">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border border-slate-200 mr-4 text-slate-400">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">Home Safety Assessment</p>
                      <p className="text-sm text-slate-500">
                        {new Date(entry.date).toLocaleDateString()} at {new Date(entry.date).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                      </p>
                    </div>
                  </div>
                  <Link href="/report">
                    <Button variant="ghost" size="sm" icon={<ChevronRight className="w-4 h-4" />}>
                      View
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 bg-slate-50 rounded-xl border border-dashed border-slate-300">
              <p className="text-slate-500 mb-4">You haven't taken any assessments yet.</p>
              <Link href="/quiz">
                <Button variant="primary" size="sm">Take Your First Quiz</Button>
              </Link>
            </div>
          )}
        </Card>

        {/* Data Privacy / Danger Zone */}
        <Card className="border-red-100 bg-red-50/30">
          <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
            <Shield className="w-5 h-5 mr-2 text-slate-600" />
            Data Privacy
          </h2>
          <p className="text-slate-600 mb-6 text-sm leading-relaxed">
            Your data is stored locally on this device. We do not track you or store your personal information on our servers. 
            If you are on a public computer, please clear your data before leaving.
          </p>
          
          <Button 
            variant="danger" 
            onClick={handleClearData}
            icon={<Trash2 className="w-4 h-4" />}
          >
            Clear All Data
          </Button>
        </Card>
      </div>
    </div>
  );
}

