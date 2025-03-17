import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { School, UserX, Dumbbell, LayoutDashboard, Users } from 'lucide-react';
import { Dashboard } from './components/Dashboard';
import { BansManagement } from './components/BansManagement';
import { StudentsManagement } from './components/StudentsManagement';

function App() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'students' | 'bans' | 'equipment'>('dashboard');

  return (
    <div className="min-h-screen bg-gray-100">
      <Toaster position="top-right" />
      
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <School className="h-8 w-8 text-blue-600" />
              <h1 className="ml-3 text-2xl font-bold text-gray-900">School Management System</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-500 hover:text-gray-700">
                <span className="sr-only">Settings</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation */}
        <div className="flex space-x-4 mb-8">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`flex items-center px-4 py-2 rounded-lg ${
              activeTab === 'dashboard'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            <LayoutDashboard className="h-5 w-5 mr-2" />
            Dashboard
          </button>
          <button
            onClick={() => setActiveTab('students')}
            className={`flex items-center px-4 py-2 rounded-lg ${
              activeTab === 'students'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            <Users className="h-5 w-5 mr-2" />
            Students
          </button>
          <button
            onClick={() => setActiveTab('bans')}
            className={`flex items-center px-4 py-2 rounded-lg ${
              activeTab === 'bans'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            <UserX className="h-5 w-5 mr-2" />
            Student Bans
          </button>
          <button
            onClick={() => setActiveTab('equipment')}
            className={`flex items-center px-4 py-2 rounded-lg ${
              activeTab === 'equipment'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            <Dumbbell className="h-5 w-5 mr-2" />
            Equipment
          </button>
        </div>

        {/* Content */}
        {activeTab === 'dashboard' && <Dashboard />}
        {activeTab === 'students' && <StudentsManagement />}
        {activeTab === 'bans' && <BansManagement />}
        {activeTab === 'equipment' && (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Equipment Management</h2>
            {/* Equipment management content will go here */}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;