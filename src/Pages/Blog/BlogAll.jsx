import React, { useState } from 'react';
import { ChevronUp, ChevronDown, Pencil, Trash2, Eye } from 'lucide-react';
import BlogPopup from '../Blog/AddPopup'; // Assuming BlogPopup is in the same directory

const BlogManagement = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [data] = useState([
    { id: 1, name: 'React Basics', category: 'Frontend', status: 'Active', date: '2024-01-15' },
    { id: 2, name: 'Node.js API', category: 'Backend', status: 'Draft', date: '2024-01-16' },
    { id: 3, name: 'Database Design', category: 'Database', status: 'Active', date: '2024-01-17' },
  ]);

  return (
    <>
      <div className="w-full bg-white rounded-lg shadow-md overflow-hidden">
        {/* Table Header with Actions */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-black">Content Blog Management</h2>
            <div className="flex gap-6 mr-8">
              <button 
                onClick={() => setIsPopupOpen(true)}
                className="flex items-center px-4 py-2 bg-[#edba12] text-white rounded-lg hover:bg-[#e2b931]"
              >
                Add Blog
              </button>
              <button className="flex items-center px-3 py-2 bg-red-600 text-white rounded-full hover:bg-red-700">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-lx font-medium text-black uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-lx font-medium text-black uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-lx font-medium text-black uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-lx font-medium text-black uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-right text-lx font-medium text-black uppercase tracking-wider">
                  View
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{item.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{item.category}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${item.status === 'Active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-800'}`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{item.date}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900">
                      <Eye className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Table Footer */}
        <div className="px-4 py-3 border-t border-gray-200 bg-gray-50">
          <div className="text-sm text-gray-500">
            Showing {data.length} entries
          </div>
        </div>
      </div>

      {/* Blog Popup */}
      <BlogPopup 
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </>
  );
};

export default BlogManagement;