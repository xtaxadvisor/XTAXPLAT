import React from 'react';
import { Shield, Users, Clock, Database, Video, MessageSquare, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/Button';
import { PortalButton } from '../navigation/PortalButton';
import { useAuth } from '../../contexts/AuthContext';

export function Features() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const features = [
    {
      icon: Video,
      title: 'Video Consultations',
      description: 'Connect with our experts through secure video meetings.',
      action: () => navigate('/consultation')
    },
    {
      icon: Shield,
      title: 'Admin Portal',
      description: 'Comprehensive tools for organization management.',
      action: () => navigate('/admin')
    },
    {
      icon: Database,
      title: 'Client Portal',
      description: 'Access your documents and manage your financial information securely.',
      action: () => navigate('/client')
    },
    {
      icon: Users,
      title: 'Professional Portal',
      description: 'Dedicated workspace for financial professionals.',
      action: () => navigate('/professional')
    },
    {
      icon: MessageSquare,
      title: 'Secure Messaging',
      description: 'Direct communication channel with your assigned professionals.',
      action: () => navigate('/messages')
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Comprehensive Service Hub</h2>
          <p className="mt-4 text-xl text-gray-600">
            Everything you need to manage your finances in one place
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <feature.icon className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-gray-600 mb-4">{feature.description}</p>
              {feature.title === 'Admin Portal' ? (
                <PortalButton type="admin" className="w-full mt-4" />
              ) : (
                <Button
                  variant="outline"
                  onClick={feature.action}
                  className="w-full mt-4"
                >
                  Access Now
                </Button>
              )}
            </div>
          ))}
          
          {/* Investors Portal Card */}
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <TrendingUp className="h-10 w-10 text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900">Investors Portal</h3>
            <p className="mt-2 text-gray-600 mb-4">
              Access investment tools and market insights through our dedicated investor platform.
            </p>
            <PortalButton type="investor" className="w-full mt-4" />
          </div>
        </div>
      </div>
    </section>
  );
}