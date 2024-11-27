import { FilterState } from '../types';

interface AdvancedFiltersProps {
  filters: FilterState;
  onChange: (filters: FilterState) => void;
}

export default function AdvancedFilters({ filters, onChange }: AdvancedFiltersProps) {
  const updateFilters = (updates: Partial<FilterState>) => {
    onChange({ ...filters, ...updates });
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-medium mb-3">Rating</h3>
        <input
          type="range"
          min="0"
          max="5"
          step="0.1"
          value={filters.minRating}
          onChange={(e) => updateFilters({ minRating: Number(e.target.value) })}
          className="w-full"
        />
        <div className="text-sm text-gray-600">Minimum Rating: {filters.minRating}</div>
      </div>

      <div>
        <h3 className="font-medium mb-3">Acceptance Rate</h3>
        <input
          type="range"
          min="0"
          max="100"
          value={filters.maxAcceptanceRate}
          onChange={(e) => updateFilters({ maxAcceptanceRate: Number(e.target.value) })}
          className="w-full"
        />
        <div className="text-sm text-gray-600">Max Acceptance Rate: {filters.maxAcceptanceRate}%</div>
      </div>

      <div>
        <h3 className="font-medium mb-3">Campus Features</h3>
        <label className="flex items-center gap-2 mb-2">
          <input
            type="checkbox"
            checked={filters.hasHousing === true}
            onChange={(e) => updateFilters({ hasHousing: e.target.checked ? true : null })}
            className="rounded text-blue-600 focus:ring-blue-500"
          />
          <span>On-campus Housing</span>
        </label>
      </div>

      <div>
        <h3 className="font-medium mb-3">Founded Year</h3>
        <input
          type="number"
          value={filters.minFoundedYear || ''}
          onChange={(e) => updateFilters({ minFoundedYear: Number(e.target.value) })}
          placeholder="Minimum year"
          className="w-full px-3 py-2 rounded border focus:border-blue-500 focus:ring-1 focus:ring-blue-200"
        />
      </div>

      <div>
        <h3 className="font-medium mb-3">Scholarships</h3>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={filters.scholarshipsOnly}
            onChange={(e) => updateFilters({ scholarshipsOnly: e.target.checked })}
            className="rounded text-blue-600 focus:ring-blue-500"
          />
          <span>Show only programs with scholarships</span>
        </label>
      </div>
    </div>
  );
}