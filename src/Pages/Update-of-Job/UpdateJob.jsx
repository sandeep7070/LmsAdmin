import React, { useState } from 'react';
import { Search, MapPin, Clock, Briefcase, Filter, Share2 } from 'lucide-react';

const JobBoard = () => {
  const [searchInput, setSearchInput] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedJob, setSelectedJob] = useState(null);
  const [location, setLocation] = useState('');

  const jobs = [
    {
      id: 1,
      title: 'Senior React Developer',
      company: 'TechCorp',
      location: 'Remote',
      type: 'Full-time',
      salary: '$120k - $150k',
      postedDate: '2h ago',
      skills: ['React', 'TypeScript', 'Node.js']
    },
    {
      id: 2,
      title: 'Frontend Engineer',
      company: 'StartupXYZ',
      location: 'San Francisco',
      type: 'Contract',
      salary: '$100k - $130k',
      postedDate: '1d ago',
      skills: ['React', 'JavaScript', 'CSS']
    },
    {
      id: 3,
      title: 'Full Stack Developer',
      company: 'InnovateHub',
      location: 'New York',
      type: 'Full-time',
      salary: '$130k - $160k',
      postedDate: '2d ago',
      skills: ['React', 'Python', 'AWS']
    }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(searchInput);
  };

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = searchTerm === '' || 
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesLocation = location === '' || 
      job.location.toLowerCase().includes(location.toLowerCase());
    
    return matchesSearch && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6">
      {/* Search Form */}
      <div className="max-w-5xl mx-auto bg-slate-50  rounded-xl shadow-sm p-6 mb-6">
        <form onSubmit={handleSearch} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            {/* Job Search Input */}
            <div className="relative">
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                Search Jobs
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-black" />
                <input
                  id="search"
                  type="text"
                  placeholder="Job title or company..."
                  className="w-full pl-10 pr-4 py-2 border border-yellow-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                />
              </div>
            </div>

            {/* Location Input */}
            <div className="relative">
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <input
                  id="location"
                  type="text"
                  placeholder="City or remote..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Search Actions */}
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={() => {
                setSearchInput('');
                setLocation('');
                setSearchTerm('');
              }}
              className="px-4 py-2 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50"
            >
              Clear
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-[#edba12]  text-white rounded-lg hover:bg-[#be9e32] transition-colors"
            >
              Search Jobs
            </button>
          </div>
        </form>
      </div>

      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-6">
        {/* Job List */}
        <div className="w-full lg:w-2/5">
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-gray-900">
              {filteredJobs.length} Jobs Found
            </h2>
          </div>
          <div className="space-y-4">
            {filteredJobs.map(job => (
              <div
                key={job.id}
                onClick={() => setSelectedJob(job)}
                className={`bg-[#edba122f] rounded-xl p-4 cursor-pointer transition-all hover:shadow-md ${
                  selectedJob?.id === job.id ? 'ring-2 ring-yellow-400' : ''
                }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-black">{job.title}</h3>
                    <p className="text-gray-600 text-sm mt-1">{job.company}</p>
                  </div>
                  <button className="p-2 text-black hover:text-black">
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
                
                <div className="mt-3 flex flex-wrap gap-2 text-sm text-black">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {job.location}
                  </div>
                  <div className="flex items-center">
                    <Briefcase className="h-4 w-4 mr-1" />
                    {job.type}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {job.postedDate}
                  </div>
                </div>

                <div className="mt-3 flex flex-wrap gap-2">
                  {job.skills.map(skill => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-[#edba12] text-white text-xs font-medium rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Job Details */}
        <div className="w-full lg:w-3/5">
          {selectedJob ? (
            <div className="bg-slate-50  rounded-xl p-6">
              <div className="border-b pb-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h1 className="text-2xl font-bold text-black">{selectedJob.title}</h1>
                    <p className="text-lg text-black mt-1">{selectedJob.company}</p>
                  </div>
                  <button className="px-6 py-2 bg-[#edba12]  text-white rounded-lg hover:bg-[#b8972c] transition-colors">
                    Apply Now
                  </button>
                </div>

                <div className="mt-4 flex flex-wrap gap-4 text-sm text-black">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {selectedJob.location}
                  </div>
                  <div className="flex items-center">
                    <Briefcase className="h-4 w-4 mr-1" />
                    {selectedJob.type}
                  </div>
                  <div>{selectedJob.salary}</div>
                </div>
              </div>

              <div className="mt-6 prose max-w-none">
                <h2 className="text-lg font-semibold text-black">About the role</h2>
                <p className="mt-3 text-black">
                  We are looking for an experienced developer to join our team. You'll be working
                  on challenging projects using the latest technologies in a collaborative environment.
                </p>
                                          
                                        
                <h2 className="text-lg font-semibold text-gray- mt-6">Requirements</h2>
                <ul className="mt-3 space-y-2 text-black">
                  <li>5+ years of experience with React and modern JavaScript</li>
                  <li>Strong understanding of frontend architecture</li>
                  <li>Experience with TypeScript and state management</li>
                  <li>Excellent problem-solving and communication skills</li>
                </ul>

                <h2 className="text-lg font-semibold text-gray-900 mt-6">Benefits</h2>
                <ul className="mt-3 space-y-2 text-black">
                  <li>Competitive salary: {selectedJob.salary}</li>
                  <li>Remote work options</li>
                  <li>Health insurance and 401(k)</li>
                  <li>Professional development budget</li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-xl p-6 text-center text-black">
              Select a job to view details
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobBoard;