"use client";

import React, { useState, useMemo } from 'react';
import { resources, Resource } from '../../data/resources';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { Search, Filter, ExternalLink, Phone, MapPin, DollarSign } from 'lucide-react';

export default function ResourcesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Funding', 'Contractors', 'Support Services'];

  const filteredResources = useMemo(() => {
    return resources.filter(resource => {
      const matchesSearch = 
        resource.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.servicesOffered.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'All' || resource.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const getCostColor = (cost: string) => {
    switch (cost) {
      case '$': return 'text-green-600 bg-green-50 border-green-200';
      case '$$': return 'text-amber-600 bg-amber-50 border-amber-200';
      case '$$$': return 'text-red-600 bg-red-50 border-red-200';
      default: return 'text-slate-600 bg-slate-50 border-slate-200';
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Orange County Resource Directory
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Browse our curated list of verified local agencies, contractors, and funding programs for older adults.
          </p>
        </div>

        {/* Filters & Search */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 mb-8">
          <div className="flex flex-col md:flex-row gap-6 justify-between items-center">
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-start w-full md:w-auto">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="relative w-full md:w-80">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-400" />
              </div>
              <input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-3 py-2.5 border border-slate-300 rounded-xl leading-5 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-shadow"
              />
            </div>
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.length > 0 ? (
            filteredResources.map(resource => (
              <Card key={resource.id} hoverEffect className="flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-100">
                    {resource.category}
                  </span>
                  <span className={`px-2 py-0.5 rounded-md text-xs font-bold border flex items-center ${getCostColor(resource.costRange)}`}>
                    <DollarSign className="w-3 h-3 mr-0.5" />
                    {resource.costRange}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2">{resource.name}</h3>
                <p className="text-slate-600 text-sm mb-4 flex-grow">
                  {resource.description}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-slate-600">
                    <Phone className="w-4 h-4 mr-2 text-slate-400" />
                    <a href={`tel:${resource.contactPhone}`} className="hover:text-blue-600 transition-colors">
                      {resource.contactPhone}
                    </a>
                  </div>
                  {resource.address && (
                    <div className="flex items-start text-sm text-slate-600">
                      <MapPin className="w-4 h-4 mr-2 text-slate-400 mt-0.5 flex-shrink-0" />
                      <span>{resource.address}</span>
                    </div>
                  )}
                </div>

                <div className="mt-auto pt-4 border-t border-slate-100">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {resource.servicesOffered.slice(0, 3).map((service, idx) => (
                      <span key={idx} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-md">
                        {service}
                      </span>
                    ))}
                    {resource.servicesOffered.length > 3 && (
                      <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-md">
                        +{resource.servicesOffered.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <a 
                    href={resource.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full"
                  >
                    <Button variant="outline" fullWidth size="sm" icon={<ExternalLink className="w-4 h-4" />}>
                      Visit Website
                    </Button>
                  </a>
                </div>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
                <Search className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-medium text-slate-900">No resources found</h3>
              <p className="text-slate-500">Try adjusting your search or category filter.</p>
              <button 
                onClick={() => {setSearchTerm(''); setSelectedCategory('All');}}
                className="mt-4 text-blue-600 hover:text-blue-800 font-medium"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

