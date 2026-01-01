"use client";

import React, { useEffect, useState, Suspense } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { getQuizAnswers, saveQuizAnswers } from '../../lib/storage';
import { recommendations, Recommendation } from '../../data/recommendations';
import RecommendationCard from '../../components/RecommendationCard';
import Button from '../../components/ui/Button';
import { Share2, Download, RefreshCw, Check } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

function ReportContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [userRecommendations, setUserRecommendations] = useState<Recommendation[]>([]);
  const [answers, setAnswers] = useState<Record<string, string> | null>(null);
  const [shareUrl, setShareUrl] = useState('');

  useEffect(() => {
    // Check for shared results in URL first
    const sharedData = searchParams.get('data');
    
    let currentAnswers: Record<string, string> | null = null;

    if (sharedData) {
      try {
        currentAnswers = JSON.parse(atob(sharedData));
        // Don't save shared answers to local storage to preserve user's own data
      } catch (e) {
        console.error("Failed to parse shared data", e);
      }
    } else {
      // Otherwise load from local storage
      currentAnswers = getQuizAnswers();
    }

    if (!currentAnswers) {
      router.push('/quiz');
      return;
    }

    setAnswers(currentAnswers);

    // Filter recommendations based on answers
    const filtered = recommendations.filter(rec => 
      rec.triggerLogic(currentAnswers!)
    );

    // Sort by priority (High -> Medium -> Low)
    const priorityOrder = { 'High': 0, 'Medium': 1, 'Low': 2 };
    filtered.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);

    setUserRecommendations(filtered);
    setLoading(false);

    // Generate share URL
    if (typeof window !== 'undefined') {
      const dataString = btoa(JSON.stringify(currentAnswers));
      const url = `${window.location.origin}/report?data=${dataString}`;
      setShareUrl(url);
    }
  }, [router, searchParams]);

  const handleShare = () => {
    navigator.clipboard.writeText(shareUrl);
    toast.success('Link copied to clipboard!');
  };

  const handlePrint = () => {
    window.print();
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-600 font-medium">Generating your personalized plan...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 print:bg-white print:py-0">
      <Toaster position="bottom-center" />
      
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 print:mb-8">
          <div className="inline-flex items-center justify-center p-3 bg-green-100 rounded-full text-green-700 mb-4 print:hidden">
            <Check className="w-6 h-6 mr-2" />
            <span className="font-bold">Analysis Complete</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Your Personalized Home Safety Plan
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Based on your answers, we've identified {userRecommendations.length} key actions to improve safety and independence.
          </p>
        </div>

        {/* Action Bar */}
        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 mb-8 flex flex-wrap gap-4 justify-center md:justify-between items-center print:hidden">
          <div className="text-sm text-slate-500 font-medium">
            Results generated on {new Date().toLocaleDateString()}
          </div>
          <div className="flex gap-3">
            <Button variant="outline" size="sm" onClick={handleShare} icon={<Share2 className="w-4 h-4" />}>
              Share Results
            </Button>
            <Button variant="outline" size="sm" onClick={handlePrint} icon={<Download className="w-4 h-4" />}>
              Print / Save PDF
            </Button>
            <Link href="/quiz">
              <Button variant="ghost" size="sm" icon={<RefreshCw className="w-4 h-4" />}>
                Retake Quiz
              </Button>
            </Link>
          </div>
        </div>

        {/* Recommendations List */}
        <div className="space-y-6">
          {userRecommendations.length > 0 ? (
            userRecommendations.map(rec => (
              <RecommendationCard key={rec.id} recommendation={rec} />
            ))
          ) : (
            <div className="text-center p-12 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Great News!</h3>
              <p className="text-slate-600">
                Based on your answers, we didn't find any immediate high-priority concerns. 
                However, it's always good to stay proactive. Check out our Resources page for general support.
              </p>
              <div className="mt-6">
                <Link href="/resources">
                  <Button variant="primary">Browse All Resources</Button>
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Footer CTA */}
        <div className="mt-12 text-center print:hidden">
          <p className="text-slate-600 mb-4">Need more help finding services?</p>
          <Link href="/resources">
            <Button variant="secondary" size="lg">
              Browse Full Resource Directory
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function ReportPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-600 font-medium">Loading...</p>
        </div>
      </div>
    }>
      <ReportContent />
    </Suspense>
  );
}

