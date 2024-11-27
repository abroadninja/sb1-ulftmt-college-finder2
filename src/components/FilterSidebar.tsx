import { Sliders } from 'lucide-react';
import { FilterState } from '../types';

interface FilterSidebarProps {
  filters: FilterState;
  onChange: (filters: FilterState) => void;
}

export default function FilterSidebar({ filters, onChange }: FilterSidebarProps) {
  const updateFilters = (updates: Partial<FilterState>) => {
    onChange({ ...filters, ...updates });
  };

  const entranceExams = ['JEE Advanced', 'NEET', 'CAT', 'CLAT', 'GATE', 'NID DAT'];
  const states = ['Delhi', 'Gujarat', 'Karnataka', 'Maharashtra', 'Tamil Nadu'];
  const cities = ['New Delhi', 'Ahmedabad', 'Bangalore', 'Mumbai', 'Chennai'];

  return (
    <div className="w-72 bg-white p-6 rounded-lg shadow-sm border border-gray-100 h-fit">
      <div className="flex items-center gap-2 mb-6">
        <Sliders className="w-5 h-5 text-blue-600" />
        <h2 className="text-lg font-semibold">Filters</h2>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="font-medium mb-3">Institution Type</h3>
          {['Public', 'Private'].map((type) => (
            <label key={type} className="flex items-center gap-2 mb-2">
              <input
                type="checkbox"
                checked={filters.type.includes(type)}
                onChange={(e) => {
                  const newTypes = e.target.checked
                    ? [...filters.type, type]
                    : filters.type.filter((t) => t !== type);
                  updateFilters({ type: newTypes });
                }}
                className="rounded text-blue-600 focus:ring-blue-500"
              />
              <span>{type}</span>
            </label>
          ))}
        </div>

        <div>
          <h3 className="font-medium mb-3">State</h3>
          <select
            value={filters.state || ''}
            onChange={(e) => updateFilters({ state: e.target.value || undefined })}
            className="w-full px-3 py-2 rounded border focus:border-blue-500 focus:ring-1 focus:ring-blue-200"
          >
            <option value="">All States</option>
            {states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>

        <div>
          <h3 className="font-medium mb-3">City</h3>
          <select
            value={filters.city || ''}
            onChange={(e) => updateFilters({ city: e.target.value || undefined })}
            className="w-full px-3 py-2 rounded border focus:border-blue-500 focus:ring-1 focus:ring-blue-200"
          >
            <option value="">All Cities</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        <div>
          <h3 className="font-medium mb-3">Annual Fees (₹)</h3>
          <div className="flex gap-4">
            <input
              type="number"
              value={filters.minTuition}
              onChange={(e) => updateFilters({ minTuition: Number(e.target.value) })}
              placeholder="Min"
              className="w-full px-3 py-2 rounded border focus:border-blue-500 focus:ring-1 focus:ring-blue-200"
            />
            <input
              type="number"
              value={filters.maxTuition}
              onChange={(e) => updateFilters({ maxTuition: Number(e.target.value) })}
              placeholder="Max"
              className="w-full px-3 py-2 rounded border focus:border-blue-500 focus:ring-1 focus:ring-blue-200"
            />
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-3">Entrance Exams</h3>
          {entranceExams.map((exam) => (
            <label key={exam} className="flex items-center gap-2 mb-2">
              <input
                type="checkbox"
                checked={filters.entranceExam?.includes(exam)}
                onChange={(e) => {
                  const newExams = e.target.checked
                    ? [...(filters.entranceExam || []), exam]
                    : filters.entranceExam?.filter((ex) => ex !== exam);
                  updateFilters({ entranceExam: newExams });
                }}
                className="rounded text-blue-600 focus:ring-blue-500"
              />
              <span>{exam}</span>
            </label>
          ))}
        </div>

        <div>
          <h3 className="font-medium mb-3">Degree Level</h3>
          {['Bachelor', 'Master', 'PhD'].map((degree) => (
            <label key={degree} className="flex items-center gap-2 mb-2">
              <input
                type="checkbox"
                checked={filters.degrees.includes(degree)}
                onChange={(e) => {
                  const newDegrees = e.target.checked
                    ? [...filters.degrees, degree]
                    : filters.degrees.filter((d) => d !== degree);
                  updateFilters({ degrees: newDegrees });
                }}
                className="rounded text-blue-600 focus:ring-blue-500"
              />
              <span>{degree}</span>
            </label>
          ))}
        </div>

        <div>
          <h3 className="font-medium mb-3">Department</h3>
          {['Engineering', 'Business', 'Medicine', 'Law', 'Design'].map((dept) => (
            <label key={dept} className="flex items-center gap-2 mb-2">
              <input
                type="checkbox"
                checked={filters.departments.includes(dept)}
                onChange={(e) => {
                  const newDepts = e.target.checked
                    ? [...filters.departments, dept]
                    : filters.departments.filter((d) => d !== dept);
                  updateFilters({ departments: newDepts });
                }}
                className="rounded text-blue-600 focus:ring-blue-500"
              />
              <span>{dept}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}