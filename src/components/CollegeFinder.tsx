import { useState } from 'react';
import { colleges } from '../data/mockData';
import SearchBar from './SearchBar';
import FilterSidebar from './FilterSidebar';
import ResultsGrid from './ResultsGrid';
import TabNavigation from './TabNavigation';
import SortingOptions from './SortingOptions';
import { FilterState } from '../types';

export default function CollegeFinder() {
  const [activeTab, setActiveTab] = useState<'colleges' | 'courses'>('colleges');
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<FilterState>({
    search: '',
    type: [],
    minTuition: 0,
    maxTuition: 0,
    degrees: [],
    departments: [],
    minRating: 0,
    maxAcceptanceRate: 100,
    hasHousing: null,
    minFoundedYear: 0,
    scholarshipsOnly: false,
    sortBy: 'ranking',
    sortOrder: 'asc'
  });

  const handleSortChange = (sortBy: string, sortOrder: 'asc' | 'desc') => {
    setFilters({ ...filters, sortBy: sortBy as FilterState['sortBy'], sortOrder });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <TabNavigation
          activeTab={activeTab}
          onTabChange={(tab) => setActiveTab(tab)}
        />

        <div className="flex justify-between items-center mb-8">
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
          />
          <SortingOptions
            sortBy={filters.sortBy}
            sortOrder={filters.sortOrder}
            onSortChange={handleSortChange}
          />
        </div>

        <div className="flex gap-8">
          <FilterSidebar
            filters={filters}
            onChange={setFilters}
          />
          <div className="flex-1">
            {activeTab === 'colleges' ? (
              <ResultsGrid colleges={colleges} />
            ) : (
              <div className="bg-white rounded-lg p-8 text-center">
                <h3 className="text-lg font-medium text-gray-900">Course Search</h3>
                <p className="mt-2 text-sm text-gray-500">
                  Search through thousands of courses across different colleges.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}