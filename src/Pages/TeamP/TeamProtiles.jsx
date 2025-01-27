import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTeamMembers } from '../../Redux/Actions/TeamAction.js'
import { ChevronUp, ChevronDown, Users } from 'lucide-react';

function TeamMemberList() {
  const dispatch = useDispatch();
  // Add default empty array and null for error to prevent destructuring error
  const { teamMembers = [], loading = false, error = null } = useSelector(state => state.team || {});
  const [data, setData] = useState([]);
  const [sortField, setSortField] = useState("");
  const [sortDirection, setSortDirection] = useState("asc");

  useEffect(() => {
    dispatch(getAllTeamMembers());
  }, [dispatch]);

  useEffect(() => {
    if (teamMembers.length > 0) {
      console.log("Total team members:", teamMembers.length);
      console.log("Detailed Team Members Data:", 
        teamMembers.map(member => ({
          id: member.id,
          name: member.name,
          designation: member.designation,
          experience: member.experience
        }))
      );
      
      setData(teamMembers);
    }
  }, [teamMembers]);

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

  // Improved loading and error handling
  if (loading) return (
    <div className="flex items-center justify-center h-full">
      <div className="text-lg text-gray-600">Loading team members...</div>
    </div>
  );

  if (error) return (
    <div className="flex items-center justify-center h-full">
      <div className="text-lg text-red-600">Error: {error.toString()}</div>
    </div>
  );

  // Render empty state if no team members
  if (data.length === 0) return (
    <div className="flex items-center justify-center h-full">
      <div className="text-lg text-gray-600">No team members found</div>
    </div>
  );

  return (
    <div className="w-full">
      <div className="flex items-center gap-2 mb-6">
        <Users className="w-8 h-8 ml-9 pt-1 text-yellow-400" />
        <h2 className="text-3xl pt-3 font-semibold text-black">Team Profiles</h2>
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
              {data.map((teamMember) => (
                <tr 
                  key={teamMember.id}
                  className="hover:bg-slate-100 transition-colors"
                >
                  <td className="px-4 py-3">
                    <img 
                      src={teamMember.imageUrl} 
                      alt={`${teamMember.name}'s photo`}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  </td>
                  <td className="px-4 py-3 text-sm">{teamMember.name}</td>
                  <td className="px-4 py-3 text-sm">{teamMember.designation}</td>
                  <td className="px-4 py-3 text-sm">{teamMember.experience} years</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TeamMemberList;