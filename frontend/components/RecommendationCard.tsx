"use client";

import React, { useState } from 'react';
import { Recommendation } from '../data/recommendations';
import { resources } from '../data/resources';
import Card from './ui/Card';
import Button from './ui/Button';
import { ChevronDown, ChevronUp, MessageCircle, ExternalLink, DollarSign, AlertCircle } from 'lucide-react';

interface RecommendationCardProps {
  recommendation: Recommendation;
}

const RecommendationCard = ({ recommendation }: RecommendationCardProps) => {
  const [isGuidanceOpen, setIsGuidanceOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  const relatedResources = resources.filter(r => 
    recommendation.relatedResourceIds.includes(r.id)
  );

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-700 border-red-200';
      case 'Medium': return 'bg-amber-100 text-amber-700 border-amber-200';
      case 'Low': return 'bg-blue-100 text-blue-700 border-blue-200';
      default: return 'bg-slate-100 text-slate-700';
    }
  };

  const getCostColor = (cost: string) => {
    switch (cost) {
      case '$': return 'text-green-600';
      case '$$': return 'text-amber-600';
      case '$$$': return 'text-red-600';
      default: return 'text-slate-600';
    }
  };

  return (
    <Card className="mb-6 border-l-4 border-l-blue-500" hoverEffect={false}>
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
        <div>
          <div className="flex flex-wrap gap-2 mb-2">
            <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${getPriorityColor(recommendation.priority)}`}>
              {recommendation.priority} Priority
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200">
              {recommendation.type}
            </span>
          </div>
          <h3 className="text-xl font-bold text-slate-900">{recommendation.title}</h3>
        </div>
        <div className="flex items-center bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
          <DollarSign className={`w-4 h-4 mr-1 ${getCostColor(recommendation.costRange)}`} />
          <span className={`font-bold ${getCostColor(recommendation.costRange)}`}>{recommendation.costRange}</span>
          <span className="text-xs text-slate-500 ml-1">Est. Cost</span>
        </div>
      </div>

      <p className="text-slate-600 mb-6 leading-relaxed">
        {recommendation.description}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Guidance Section Toggle */}
        {recommendation.guidance && (
          <button
            onClick={() => setIsGuidanceOpen(!isGuidanceOpen)}
            className={`flex items-center justify-between p-4 rounded-xl border transition-all duration-200 ${
              isGuidanceOpen 
                ? 'bg-blue-50 border-blue-200 ring-1 ring-blue-200' 
                : 'bg-white border-slate-200 hover:border-blue-300 hover:bg-slate-50'
            }`}
          >
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3 text-blue-600">
                <MessageCircle className="w-4 h-4" />
              </div>
              <span className="font-semibold text-slate-700">What to Ask</span>
            </div>
            {isGuidanceOpen ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
          </button>
        )}

        {/* Resources Section Toggle */}
        {relatedResources.length > 0 && (
          <button
            onClick={() => setIsResourcesOpen(!isResourcesOpen)}
            className={`flex items-center justify-between p-4 rounded-xl border transition-all duration-200 ${
              isResourcesOpen 
                ? 'bg-teal-50 border-teal-200 ring-1 ring-teal-200' 
                : 'bg-white border-slate-200 hover:border-teal-300 hover:bg-slate-50'
            }`}
          >
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center mr-3 text-teal-600">
                <ExternalLink className="w-4 h-4" />
              </div>
              <span className="font-semibold text-slate-700">Local Resources ({relatedResources.length})</span>
            </div>
            {isResourcesOpen ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
          </button>
        )}
      </div>

      {/* Expanded Guidance Content */}
      {isGuidanceOpen && recommendation.guidance && (
        <div className="mt-4 p-5 bg-blue-50/50 rounded-xl border border-blue-100 animate-in slide-in-from-top-2">
          <h4 className="font-semibold text-blue-900 mb-2 flex items-center">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></span>
            Ask a {recommendation.guidance.whoToAsk}:
          </h4>
          <ul className="space-y-2 ml-4">
            {recommendation.guidance.whatToAsk.map((question, idx) => (
              <li key={idx} className="text-slate-700 flex items-start">
                <span className="mr-2 text-blue-400">•</span>
                {question}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Expanded Resources Content */}
      {isResourcesOpen && relatedResources.length > 0 && (
        <div className="mt-4 space-y-3 animate-in slide-in-from-top-2">
          {relatedResources.map(resource => (
            <div key={resource.id} className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold text-slate-900">{resource.name}</h4>
                  <p className="text-sm text-slate-500 mb-2">{resource.category}</p>
                  <p className="text-sm text-slate-600 mb-2">{resource.description}</p>
                  <div className="flex items-center gap-4 text-sm">
                    <a href={`tel:${resource.contactPhone}`} className="text-blue-600 hover:underline font-medium flex items-center">
                      {resource.contactPhone}
                    </a>
                    <a href={resource.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium flex items-center">
                      Visit Website <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
};

export default RecommendationCard;

