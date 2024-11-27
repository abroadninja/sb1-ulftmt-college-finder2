import { useState } from 'react';
import { User, Mail, Phone, MapPin, School, BookOpen, Save, Camera } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';

interface UserProfile {
  name: string;
  email: string;
  phone: string;
  location: string;
  school: string;
  interests: string[];
  avatar?: string;
}

export default function ProfileSettings() {
  const { user, updateUser } = useAuthStore();
  const [profile, setProfile] = useState<UserProfile>({
    name: user?.name || '',
    email: user?.email || '',
    phone: '',
    location: '',
    school: '',
    interests: [],
    avatar: user?.avatar,
  });
  const [isEditing, setIsEditing] = useState(false);
  const [newInterest, setNewInterest] = useState('');

  const handleSave = () => {
    updateUser(profile);
    setIsEditing(false);
  };

  const addInterest = () => {
    if (newInterest.trim() && !profile.interests.includes(newInterest.trim())) {
      setProfile({
        ...profile,
        interests: [...profile.interests, newInterest.trim()],
      });
      setNewInterest('');
    }
  };

  const removeInterest = (interest: string) => {
    setProfile({
      ...profile,
      interests: profile.interests.filter((i) => i !== interest),
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Profile Settings</h2>
          <button
            onClick={() => isEditing ? handleSave() : setIsEditing(true)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            {isEditing ? (
              <>
                <Save className="w-5 h-5" />
                Save Changes
              </>
            ) : (
              'Edit Profile'
            )}
          </button>
        </div>

        <div className="mb-8 flex items-center gap-6">
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
              {profile.avatar ? (
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <User className="w-12 h-12 text-gray-400" />
              )}
            </div>
            {isEditing && (
              <button className="absolute bottom-0 right-0 p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
                <Camera className="w-4 h-4" />
              </button>
            )}
          </div>
          <div>
            <h3 className="text-xl font-semibold">{profile.name}</h3>
            <p className="text-gray-600">{profile.email}</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={profile.name}
                  onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                  disabled={!isEditing}
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none disabled:bg-gray-50"
                />
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  value={profile.email}
                  onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                  disabled={!isEditing}
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none disabled:bg-gray-50"
                />
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <div className="relative">
                <input
                  type="tel"
                  value={profile.phone}
                  onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                  disabled={!isEditing}
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none disabled:bg-gray-50"
                />
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={profile.location}
                  onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                  disabled={!isEditing}
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none disabled:bg-gray-50"
                />
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Current School/College
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={profile.school}
                  onChange={(e) => setProfile({ ...profile, school: e.target.value })}
                  disabled={!isEditing}
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none disabled:bg-gray-50"
                />
                <School className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Academic Interests
            </label>
            <div className="flex flex-wrap gap-2 mb-3">
              {profile.interests.map((interest) => (
                <span
                  key={interest}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm flex items-center gap-1"
                >
                  {interest}
                  {isEditing && (
                    <button
                      onClick={() => removeInterest(interest)}
                      className="w-4 h-4 rounded-full bg-blue-200 text-blue-800 flex items-center justify-center hover:bg-blue-300"
                    >
                      ×
                    </button>
                  )}
                </span>
              ))}
            </div>
            {isEditing && (
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <input
                    type="text"
                    value={newInterest}
                    onChange={(e) => setNewInterest(e.target.value)}
                    placeholder="Add an interest..."
                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    onKeyPress={(e) => e.key === 'Enter' && addInterest()}
                  />
                  <BookOpen className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
                <button
                  onClick={addInterest}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Add
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}