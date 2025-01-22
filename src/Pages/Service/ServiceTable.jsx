import React from 'react';
import { Eye, Pencil, Trash2, Settings } from 'lucide-react';
import { Button } from '@mui/material';

const ServiceTable = () => {
  const services = [
    { 
      id: 1, 
      title: "Web Developer",
      description: "Frontend and backend development"
    },
    { 
      id: 2, 
      title: "Android Developer",
      description: "Native Android app development "
    },
    { 
      id: 3, 
      title: "Digital Marketing",
      description: "Comprehensive digital marketing "
    },
    { 
      id: 4, 
      title: "SEO",
      description: "Search engine optimizationib "
    },
  ];

  const handleView = (id) => console.log(`View service ${id}`);
  const handleUpdate = (id) => console.log(`Update service ${id}`);
  const handleDelete = (id) => console.log(`Delete service ${id}`);
  const handleCreate = () => console.log("Create new service");

  return (
    <div className="w-full bg-gray-50">
      <div className="flex flex-row items-center justify-between p-6">
        <h2 className="text-2xl font-semibold flex items-center">
          <Settings className="w-6 h-6 mr-2 ml-4 text-yellow-600" />
          Services
        </h2>
        <Button 
          onClick={handleCreate}
          className="bg-yellow-600 text-white hover:bg-yellow-700"
        >
          Create Form
        </Button>
      </div>
      <div className="p-6 pt-0">
        <div className="relative overflow-x-auto rounded-lg shadow">
          <table className="w-full text-left bg-white">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-4 w-16 font-semibold">No</th>
                <th className="p-4 w-48 font-semibold">Title</th>
                <th className="p-4 font-semibold">Description</th>
                <th className="p-4 w-32 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service, index) => (
                <tr key={service.id} className="border-b hover:bg-gray-50">
                  <td className="p-4">{index + 1}</td>
                  <td className="p-4 font-medium">{service.title}</td>
                  <td className="p-4 text-gray-600">{service.description}</td>
                  <td className="p-4">
                    <div className="flex gap-2">
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => handleView(service.id)}
                        className="h-8 w-8 p-0"
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => handleUpdate(service.id)}
                        className="h-8 w-8 p-0"
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="h-8 w-8 p-0 text-red-600 hover:text-red-700 hover:bg-red-50"
                        onClick={() => handleDelete(service.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ServiceTable;