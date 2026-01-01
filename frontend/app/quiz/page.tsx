"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { questions } from '../../data/questions';
import { saveQuizAnswers } from '../../lib/storage';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import { ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';

export default function QuizPage() {
  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];
  const totalQuestions = questions.length;
  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  const handleOptionSelect = (value: string) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: value
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      window.scrollTo(0, 0);
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    } else {
      router.push('/');
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Simulate a small delay for better UX
    await new Promise(resolve => setTimeout(resolve, 800));
    saveQuizAnswers(answers);
    router.push('/report');
  };

  const isOptionSelected = (value: string) => {
    return answers[currentQuestion.id] === value;
  };

  const canProceed = !!answers[currentQuestion.id];

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm font-medium text-slate-500 mb-2">
            <span>Question {currentQuestionIndex + 1} of {totalQuestions}</span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
            <div 
              className="bg-blue-600 h-2.5 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <Card className="mb-8 min-h-[400px] flex flex-col justify-center relative overflow-hidden">
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
          
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 leading-tight relative z-10">
            {currentQuestion.text}
          </h2>

          <div className="space-y-4 relative z-10">
            {currentQuestion.options.map((option) => (
              <button
                key={option.id}
                onClick={() => handleOptionSelect(option.value)}
                className={`w-full text-left p-5 rounded-xl border-2 transition-all duration-200 flex items-center justify-between group ${
                  isOptionSelected(option.value)
                    ? 'border-blue-500 bg-blue-50 shadow-md'
                    : 'border-slate-200 hover:border-blue-300 hover:bg-slate-50'
                }`}
              >
                <span className={`text-lg font-medium ${
                  isOptionSelected(option.value) ? 'text-blue-800' : 'text-slate-700'
                }`}>
                  {option.text}
                </span>
                
                {isOptionSelected(option.value) && (
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                )}
                
                {!isOptionSelected(option.value) && (
                  <div className="w-6 h-6 rounded-full border-2 border-slate-300 group-hover:border-blue-400"></div>
                )}
              </button>
            ))}
          </div>
        </Card>

        <div className="flex justify-between items-center">
          <Button 
            variant="ghost" 
            onClick={handleBack}
            icon={<ChevronLeft className="w-5 h-5" />}
          >
            Back
          </Button>
          
          <Button 
            variant="primary" 
            size="lg"
            onClick={handleNext}
            disabled={!canProceed}
            isLoading={isSubmitting}
            className="px-8"
          >
            {currentQuestionIndex === totalQuestions - 1 ? 'Get My Report' : 'Next Question'}
            {currentQuestionIndex !== totalQuestions - 1 && <ChevronRight className="w-5 h-5 ml-2" />}
          </Button>
        </div>
      </div>
    </div>
  );
}

