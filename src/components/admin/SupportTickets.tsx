import { LifeBuoy, Search, Filter } from 'lucide-react';
import AdminLayout from './AdminLayout';

export default function SupportTickets() {
  const tickets = [
    { id: 'TKT-001', subject: 'Reservation modification request', user: 'Kwame Mensah', status: 'Open', priority: 'High', date: '2024-03-15' },
    { id: 'TKT-002', subject: 'Issue with payment processing', user: 'Abena Osei', status: 'In Progress', priority: 'Critical', date: '2024-03-14' },
    { id: 'TKT-003', subject: 'Question about vehicle luggage capacity', user: 'John Doe', status: 'Closed', priority: 'Low', date: '2024-03-10' },
  ];

  return (
    <AdminLayout>
      <div className="p-6 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h1 className="text-2xl font-black text-gray-900 uppercase tracking-tight flex items-center">
              <LifeBuoy className="w-6 h-6 mr-3 text-brand-maroon" />
              Support Helpdesk
            </h1>
            <p className="text-gray-500 mt-1">Manage customer support tickets and inquiries.</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-4 border-b border-gray-200 flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="relative w-full sm:w-96">
              <input
                type="text"
                placeholder="Search tickets..."
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-maroon/20 focus:border-brand-maroon"
              />
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
            </div>
            <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm font-medium text-gray-700 w-full sm:w-auto justify-center">
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider">
                  <th className="p-4 font-bold">Ticket ID</th>
                  <th className="p-4 font-bold">Subject</th>
                  <th className="p-4 font-bold">User</th>
                  <th className="p-4 font-bold">Priority</th>
                  <th className="p-4 font-bold">Status</th>
                  <th className="p-4 font-bold">Date</th>
                  <th className="p-4 font-bold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {tickets.map((ticket) => (
                  <tr key={ticket.id} className="hover:bg-gray-50 transition-colors">
                    <td className="p-4 text-sm font-medium text-gray-900">{ticket.id}</td>
                    <td className="p-4 text-sm text-gray-600">{ticket.subject}</td>
                    <td className="p-4 text-sm text-gray-600">{ticket.user}</td>
                    <td className="p-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${
                        ticket.priority === 'Critical' ? 'bg-red-100 text-red-800' :
                        ticket.priority === 'High' ? 'bg-orange-100 text-orange-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {ticket.priority}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${
                        ticket.status === 'Open' ? 'bg-green-100 text-green-800' :
                        ticket.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {ticket.status}
                      </span>
                    </td>
                    <td className="p-4 text-sm text-gray-500">{ticket.date}</td>
                    <td className="p-4 text-right">
                      <button className="text-brand-maroon hover:text-brand-maroon-hover text-sm font-bold">
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
