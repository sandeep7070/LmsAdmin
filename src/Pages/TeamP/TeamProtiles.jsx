import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

const SimpleTable = () => {
  // Sample data
  const initialData = [
    { id: 1, name: "John Doe", email: "john@example.com", status: "Active", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", status: "Inactive", role: "User" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", status: "Active", role: "Editor" },
    { id: 4, name: "Alice Brown", email: "alice@example.com", status: "Active", role: "User" },
    { id: 5, name: "Charlie Wilson", email: "charlie@example.com", status: "Inactive", role: "User" },
  ];

  const [data, setData] = useState(initialData);
  const [sortField, setSortField] = useState("");
  const [sortDirection, setSortDirection] = useState("asc");

  const handleSort = (field) => {
    const direction = field === sortField && sortDirection === "asc" ? "desc" : "asc";
    setSortField(field);
    setSortDirection(direction);

    const sortedData = [...data].sort((a, b) => {
      if (a[field] < b[field]) return direction === "asc" ? -1 : 1;
      if (a[field] > b[field]) return direction === "asc" ? 1 : -1;
      return 0;
    });

    setData(sortedData);
  };

  const SortIcon = ({ field }) => {
    if (sortField !== field) return <ChevronUp className="w-4 h-4 opacity-0 group-hover:opacity-50" />;
    return sortDirection === "asc" ? 
      <ChevronUp className="w-4 h-4" /> : 
      <ChevronDown className="w-4 h-4" />;
  };

  return (
    <div className="w-full bg-white shadow-sm rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th 
                className="px-4 py-3 text-left cursor-pointer group border-b"
                onClick={() => handleSort("id")}
              >
                <div className="flex items-center text-sm font-medium text-gray-700">
                  ID
                  <SortIcon field="id" />
                </div>
              </th>
              <th 
                className="px-4 py-3 text-left cursor-pointer group border-b"
                onClick={() => handleSort("name")}
              >
                <div className="flex items-center text-sm font-medium text-gray-700">
                  Name
                  <SortIcon field="name" />
                </div>
              </th>
              <th 
                className="px-4 py-3 text-left cursor-pointer group border-b"
                onClick={() => handleSort("email")}
              >
                <div className="flex items-center text-sm font-medium text-gray-700">
                  Email
                  <SortIcon field="email" />
                </div>
              </th>
              <th 
                className="px-4 py-3 text-left cursor-pointer group border-b"
                onClick={() => handleSort("status")}
              >
                <div className="flex items-center text-sm font-medium text-gray-700">
                  Status
                  <SortIcon field="status" />
                </div>
              </th>
              <th 
                className="px-4 py-3 text-left cursor-pointer group border-b"
                onClick={() => handleSort("role")}
              >
                <div className="flex items-center text-sm font-medium text-gray-700">
                  Role
                  <SortIcon field="role" />
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {data.map((item) => (
              <tr 
                key={item.id}
                className="hover:bg-gray-50 transition-colors"
              >
                <td className="px-4 py-3 text-sm">{item.id}</td>
                <td className="px-4 py-3 text-sm">{item.name}</td>
                <td className="px-4 py-3 text-sm">{item.email}</td>
                <td className="px-4 py-3 text-sm">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    item.status === "Active" 
                      ? "bg-green-100 text-green-800" 
                      : "bg-red-100 text-red-800"
                  }`}>
                    {item.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm">{item.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SimpleTable;