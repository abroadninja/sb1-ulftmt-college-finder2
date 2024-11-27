import React from 'react';
import { X, MapPin, Users, Trophy, Building2, GraduationCap, Globe, DollarSign, Star, Percent, Calendar, Award, BookmarkPlus } from 'lucide-react';
import { College } from '../types';

interface CollegeDetailViewProps {
  college: College;
  onClose: () => void;
  onAddToChecklist: (college: College) => void;
}

export default function CollegeDetailView({ college, onClose, onAddToChecklist }: CollegeDetailViewProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Previous content remains the same until the last button */}
        
        {/* Replace the last button section */}
        <div className="border-t pt-6 flex justify-between items-center">
          <div>
            <p className="text-lg font-semibold">Annual Tuition Fee</p>
            <p className="text-3xl font-bold text-blue-600">
              ₹{(college.tuitionPerYear/100000).toFixed(1)} Lakhs
            </p>
          </div>
          <button 
            onClick={() => onAddToChecklist(college)}
            className="flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <BookmarkPlus className="w-5 h-5" />
            Add to Checklist
          </button>
        </div>
      </div>
    </div>
  );
}