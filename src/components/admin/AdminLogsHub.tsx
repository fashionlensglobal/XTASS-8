import { Link } from 'react-router-dom';
import AdminLayout from './AdminLayout';
import { Activity, Server, ArrowRight } from 'lucide-react';

export default function AdminLogsHub() {
  const logs = [
    { title: 'Activity Logs', description: 'User log-ins, edits, and reservation modifications.', icon: Activity, href: '/admin/logs/activity' },
    { title: 'System Events', description: 'Server-side errors, API failures, and sync events.', icon: Server, href: '/admin/logs/system' },
  ];

  return (
    <AdminLayout>
      <div className="p-6 max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-black text-gray-900 uppercase tracking-tight">Audit Logs</h1>
          <p className="text-gray-500 mt-1">Review system operations and administrative actions.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {logs.map((log) => (
            <Link
              key={log.title}
              to={log.href}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow group relative overflow-hidden"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-gray-100 text-gray-700 rounded-lg">
                  <log.icon className="w-6 h-6" />
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-gray-900 group-hover:translate-x-1 transition-all" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{log.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{log.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
}
