import React from 'react';
import { Ban, Clock, Users, Activity } from 'lucide-react';

export function Dashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center">
          <Ban className="h-8 w-8 text-red-500" />
          <div className="ml-4">
            <p className="text-sm text-gray-500">Active Bans</p>
            <h3 className="text-2xl font-bold">12</h3>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center">
          <Clock className="h-8 w-8 text-yellow-500" />
          <div className="ml-4">
            <p className="text-sm text-gray-500">Equipment Out</p>
            <h3 className="text-2xl font-bold">8</h3>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center">
          <Users className="h-8 w-8 text-blue-500" />
          <div className="ml-4">
            <p className="text-sm text-gray-500">Total Students</p>
            <h3 className="text-2xl font-bold">450</h3>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center">
          <Activity className="h-8 w-8 text-green-500" />
          <div className="ml-4">
            <p className="text-sm text-gray-500">Monthly Activity</p>
            <h3 className="text-2xl font-bold">89</h3>
          </div>
        </div>
      </div>
    </div>
  );
}