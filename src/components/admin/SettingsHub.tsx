import { Link } from 'react-router-dom';
import AdminLayout from './AdminLayout';
import { Settings, Shield, CreditCard, Mail, MessageSquare, Plane, XCircle, CalendarCheck, PackagePlus, ArrowRight, Map } from 'lucide-react';

export default function SettingsHub() {
  const settingGroups = [
    {
      category: 'System Configuration',
      items: [
        { title: 'General Settings', description: 'Platform branding and core details.', icon: Settings, href: '/admin/settings/general' },
        { title: 'Session & Security', description: 'Authentication and session rules.', icon: Shield, href: '/admin/settings/security' },
      ]
    },
    {
      category: 'Transactions & Bookings',
      items: [
        { title: 'Payment Display', description: 'Currency formats and payment options.', icon: CreditCard, href: '/admin/settings/payments' },
        { title: 'Booking Rules', description: 'Lead times and booking limitations.', icon: CalendarCheck, href: '/admin/settings/booking-rules' },
        { title: 'Cancellation Policies', description: 'Refund windows and cancellation fees.', icon: XCircle, href: '/admin/settings/cancellation' },
        { title: 'Extras & Add-ons', description: 'Manage global booking extras.', icon: PackagePlus, href: '/admin/settings/extras' },
      ]
    },
    {
      category: 'Communications',
      items: [
        { title: 'Email Templates', description: 'Booking confirmations and alerts.', icon: Mail, href: '/admin/settings/emails' },
        { title: 'SMS Templates', description: 'Driver and passenger text alerts.', icon: MessageSquare, href: '/admin/settings/sms' },
      ]
    },
    {
      category: 'Locations',
      items: [
        { title: 'Supported Airports', description: 'Manage flight tracking locations.', icon: Plane, href: '/admin/settings/airports' },
        { title: 'Sitemap Overview', description: 'Public sitemap configurations.', icon: Map, href: '/admin/settings/sitemap' },
      ]
    }
  ];

  return (
    <AdminLayout>
      <div className="p-6 max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-black text-gray-900 uppercase tracking-tight">System Settings</h1>
          <p className="text-gray-500 mt-1">Configure global application parameters and business rules.</p>
        </div>

        <div className="space-y-10">
          {settingGroups.map((group) => (
            <div key={group.category}>
              <h2 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wider">{group.category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {group.items.map((item) => (
                  <Link
                    key={item.title}
                    to={item.href}
                    className="flex items-start bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:border-gray-300 hover:shadow-md transition-all group"
                  >
                    <div className="p-2.5 bg-gray-50 rounded-lg text-gray-600 group-hover:bg-brand-maroon group-hover:text-white transition-colors">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div className="ml-4 flex-1">
                      <h3 className="text-sm font-bold text-gray-900 mb-1 flex items-center justify-between">
                        {item.title}
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-brand-maroon opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" />
                      </h3>
                      <p className="text-xs text-gray-500 leading-relaxed">{item.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
}
