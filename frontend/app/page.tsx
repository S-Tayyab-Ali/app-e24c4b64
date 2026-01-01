"use client";

import React from 'react';
import Link from 'next/link';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-white pt-16 pb-24 lg:pt-32 lg:pb-40">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-blue-200/30 blur-3xl"></div>
          <div className="absolute top-1/2 -left-24 w-72 h-72 rounded-full bg-teal-200/30 blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium text-sm mb-6 animate-fade-in-up">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2"></span>
              Serving Orange County Seniors
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 tracking-tight mb-8 leading-tight">
              Age in Place with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Confidence & Safety</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
              Get a personalized home safety plan and connect with trusted local resources in under 5 minutes.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/quiz">
                <Button variant="primary" size="xl" className="shadow-blue-500/25 shadow-xl">
                  Start Free Safety Quiz
                </Button>
              </Link>
              <Link href="/resources">
                <Button variant="outline" size="xl">
                  Browse Resources
                </Button>
              </Link>
            </div>
            
            <p className="mt-6 text-sm text-slate-500">
              No account required • Free forever • Private & Secure
            </p>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Use Aging at Home Hub?</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We simplify the overwhelming process of making your home safe for aging in place.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card hoverEffect className="h-full border-t-4 border-t-blue-500">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Personalized Guidance</h3>
              <p className="text-slate-600 leading-relaxed">
                Answer a few simple questions about your home and health to get recommendations tailored specifically to your needs.
              </p>
            </Card>

            <Card hoverEffect className="h-full border-t-4 border-t-teal-500">
              <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-6 text-teal-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Trusted Local Resources</h3>
              <p className="text-slate-600 leading-relaxed">
                Connect directly with verified Orange County agencies, contractors, and funding programs that can help you.
              </p>
            </Card>

            <Card hoverEffect className="h-full border-t-4 border-t-amber-500">
              <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6 text-amber-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Clear Cost Estimates</h3>
              <p className="text-slate-600 leading-relaxed">
                Understand the potential costs of modifications upfront with our simple budget indicators ($ to $$$).
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How It Works</h2>
            <p className="text-lg text-slate-600">Three simple steps to a safer home.</p>
          </div>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-white border-4 border-blue-500 rounded-full flex items-center justify-center text-2xl font-bold text-blue-600 shadow-lg mb-6">1</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Take the Quiz</h3>
                <p className="text-slate-600">Answer 7 simple questions about your home and needs.</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-white border-4 border-blue-500 rounded-full flex items-center justify-center text-2xl font-bold text-blue-600 shadow-lg mb-6">2</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Get Your Plan</h3>
                <p className="text-slate-600">Receive a personalized report with prioritized safety recommendations.</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-white border-4 border-blue-500 rounded-full flex items-center justify-center text-2xl font-bold text-blue-600 shadow-lg mb-6">3</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Take Action</h3>
                <p className="text-slate-600">Connect with local resources and start making improvements.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to make your home safer?</h2>
          <p className="text-xl text-blue-100 mb-10">
            Join hundreds of Orange County seniors who are planning for a safer future.
          </p>
          <Link href="/quiz">
            <Button variant="secondary" size="xl" className="shadow-xl shadow-blue-900/20">
              Start Your Free Assessment
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

