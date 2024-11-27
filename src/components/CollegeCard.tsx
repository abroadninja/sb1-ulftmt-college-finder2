import { MapPin, Users, Trophy, Building2, GraduationCap, DollarSign } from 'lucide-react';
import { College } from '../types';

interface CollegeCardProps {
  college: College;
  onViewDetails: (college: College) => void;
}

export default function CollegeCard({ college, onViewDetails }: CollegeCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative">
        <img
          src={college.image}
          alt={college.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
          Rank #{college.ranking}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{college.name}</h3>
        
        <div className="flex items-center gap-2 text-gray-600 mb-4">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">{college.location}</span>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4 text-blue-600" />
            <span className="text-sm">{college.studentCount.toLocaleString()} students</span>
          </div>
          <div className="flex items-center gap-1">
            <Trophy className="w-4 h-4 text-yellow-500" />
            <span className="text-sm">{college.acceptanceRate}% acceptance</span>
          </div>
          <div className="flex items-center gap-1">
            <Building2 className="w-4 h-4 text-green-600" />
            <span className="text-sm">{college.campusSize} acres</span>
          </div>
          <div className="flex items-center gap-1">
            <GraduationCap className="w-4 h-4 text-purple-600" />
            <span className="text-sm">Est. {college.foundedYear}</span>
          </div>
        </div>

        <div className="border-t pt-4">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-semibold text-blue-600">
              ₹{(college.tuitionPerYear/100000).toFixed(1)} Lakhs/year
            </span>
            <div className="flex items-center gap-1">
              <DollarSign className="w-4 h-4 text-green-600" />
              <span className="text-sm">₹{(college.researchFunding/10000000).toFixed(1)}Cr funding</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {college.sportsFacilities.slice(0, 3).map((facility) => (
              <span key={facility} className="px-2 py-1 bg-gray-100 rounded-full text-xs">
                {facility}
              </span>
            ))}
            {college.sportsFacilities.length > 3 && (
              <span className="px-2 py-1 bg-gray-100 rounded-full text-xs">
                +{college.sportsFacilities.length - 3} more
              </span>
            )}
          </div>

          <button
            onClick={() => onViewDetails(college)}
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}