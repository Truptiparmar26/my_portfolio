import React from 'react';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-charcoal p-8">
      <div className="glass-card max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gradient">Admin Dashboard</h1>
        <p className="text-gray-400">Welcome to the portfolio content management system.</p>
        
        {/* Placeholder for CRUD management interfaces */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {['Projects', 'Skills', 'Experience', 'Services', 'Messages'].map((item) => (
            <div key={item} className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-accent-blue transition-colors cursor-pointer">
              <h3 className="text-xl font-medium">{item}</h3>
              <p className="text-sm text-gray-400 mt-2">Manage your {item.toLowerCase()}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
