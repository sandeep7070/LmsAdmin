import React, { useState } from 'react';
import { ChevronUp, ChevronDown, Users } from 'lucide-react';


const TeamTable = () => {
  // Sample data with team members
  const initialData = [
    { 
      id: 1, 
      name: "sandeep", 
      designation: "Senior Developer",
      experience: 8,
      imageUrl: "/api/placeholder/50/50"
    },
    { 
      id: 2, 
      name: "vikash", 
      designation: "Project Manager",
      experience: 12,
      imageUrl: "/api/placeholder/50/50"
    },
    { 
      id: 3, 
      name: "jass ", 
      designation: "UX Designer",
      experience: 5,
      imageUrl: "/api/placeholder/50/50"
    },
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
    <div className="w-full">
      {/* Added Title Section */}
      <div className="flex items-center gap-2 mb-6">
        <Users className="w-8 h-8 ml-9 pt-1   text-yellow-400" />
        <h2 className="text-3xl  pt-3  font-semibold text-black">Team Profiles</h2>
      </div>


      <div className="bg-gray-50 shadow-sm rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left border-b">
                  <div className="text-sm font-medium text-gray-700">
                    Photo
                  </div>
                </th>
                <th 
                  className="px-4 py-3 text-left cursor-pointer group border-b"
                  onClick={() => handleSort("name")}
                >
                  <div className="flex items-center text-sm font-medium text-black">
                    Name
                    <SortIcon field="name" />
                  </div>
                </th>
                <th 
                  className="px-4 py-3 text-left cursor-pointer group border-b"
                  onClick={() => handleSort("designation")}
                >
                  <div className="flex items-center text-sm font-medium text-black">
                    Designation
                    <SortIcon field="designation" />
                  </div>
                </th>
                <th 
                  className="px-4 py-3 text-left cursor-pointer group border-b"
                  onClick={() => handleSort("experience")}
                >
                  <div className="flex items-center text-sm font-medium text-black">
                    Years of Experience
                    <SortIcon field="experience" />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {data.map((item) => (
                <tr 
                  key={item.id}
                  className="hover:bg-slate-100 transition-colors"
                >
                  <td className="px-4 py-3">
                    <img 
                      src={item.imageUrl} 
                      alt={`${item.name}'s photo`}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  </td>
                  <td className="px-4 py-3 text-sm">{item.name}</td>
                  <td className="px-4 py-3 text-sm">{item.designation}</td>
                  <td className="px-4 py-3 text-sm">{item.experience} years</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TeamTable;