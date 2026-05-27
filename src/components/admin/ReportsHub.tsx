import { Link } from 'react-router-dom';
import AdminLayout from './AdminLayout';
import { BarChart3, TrendingUp, Users, Car, UserCheck, ArrowRight } from 'lucide-react';

export default function ReportsHub() {
  const reports = [
    {
      title: 'Revenue Report',
      description: 'Analyze income across different vehicle classes and services.',
      icon: TrendingUp,
      href: '/admin/reports/revenue',
      color: 'bg-green-100 text-green-600'
    },
    {
      title: 'Booking Report',
      description: 'Track reservation volume, cancellations, and fulfillment rates.',
      icon: BarChart3,
      href: '/admin/reports/bookings',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      title: 'Fleet Utilisation',
      description: 'Monitor vehicle usage, downtime, and availability trends.',
      icon: Car,
      href: '/admin/reports/fleet',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      title: 'Customer Analytics',
      description: 'Understand customer demographics, retention, and behavior.',
      icon: Users,
      href: '/admin/reports/customers',
      color: 'bg-orange-100 text-orange-600'
    },
    {
      title: 'Driver Performance',
      description: 'Review trip ratings, on-time rates, and driver earnings.',
      icon: UserCheck,
      href: '/admin/reports/drivers',
      color: 'bg-teal-100 text-teal-600'
    }
  ];

  return (
    <AdminLayout>
      <div className="p-6 max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-black text-gray-900 uppercase tracking-tight">Reports & Analytics</h1>
          <p className="text-gray-500 mt-1">Access detailed insights and performance metrics across the platform.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reports.map((report) => (
            <Link
              key={report.title}
              to={report.href}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow group relative overflow-hidden"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg ${report.color}`}>
                  <report.icon className="w-6 h-6" />
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-gray-900 group-hover:translate-x-1 transition-all" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{report.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{report.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
}
