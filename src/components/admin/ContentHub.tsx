import { Link } from 'react-router-dom';
import AdminLayout from './AdminLayout';
import { Home, HelpCircle, FileText, Tag, ShieldAlert, Car, Briefcase, ArrowRight } from 'lucide-react';

export default function ContentHub() {
  const contentAreas = [
    { title: 'Homepage configuration', description: 'Hero images, taglines, and featured services.', icon: Home, href: '/admin/content/homepage' },
    { title: 'Vehicles Pages', description: 'Fleet descriptions and layout.', icon: Car, href: '/admin/content/vehicles' },
    { title: 'Services Pages', description: 'Airport transfers, long-term rentals text.', icon: Briefcase, href: '/admin/content/services' },
    { title: 'FAQs & Articles', description: 'Help centre content and blog posts.', icon: HelpCircle, href: '/admin/content/faqs' },
    { title: 'Deals & Offers', description: 'Promotional banners and active deals.', icon: Tag, href: '/admin/content/deals' },
    { title: 'Policies', description: 'Privacy, terms, and conditions text.', icon: ShieldAlert, href: '/admin/content/policies' },
  ];

  return (
    <AdminLayout>
      <div className="p-6 max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-black text-gray-900 uppercase tracking-tight">Content Management</h1>
          <p className="text-gray-500 mt-1">Manage public-facing website copy, images, and structural layouts.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contentAreas.map((area) => (
            <Link
              key={area.title}
              to={area.href}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow group relative overflow-hidden"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-indigo-50 text-indigo-600 rounded-lg">
                  <area.icon className="w-6 h-6" />
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-gray-900 group-hover:translate-x-1 transition-all" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{area.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{area.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
}
