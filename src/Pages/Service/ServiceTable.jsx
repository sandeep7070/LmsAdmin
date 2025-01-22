import React, { useState } from "react";
import { Eye, Pencil, Trash2, Settings } from "lucide-react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import ServiceUpdateModal from "./ServiceUpdateModal";
import ServiceDeleteModal from "./ServiceDeleteModal";

const ServiceTable = () => {
  // Dummy service data
  const services = [
    {
      id: 1,
      title: "Web Developer",
      description: "Frontend and backend development",
    },
    {
      id: 2,
      title: "Android Developer",
      description: "Native Android app development",
    },
    {
      id: 3,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing",
    },
    { id: 4, title: "SEO", description: "Search engine optimization" },
  ];

  // State to manage modal visibility and selected service
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  // Handle viewing service details
  const handleView = (id) => console.log(`View service with ID: ${id}`);

  // Handle editing a service
  const handleEdit = (service) => {
    setSelectedService(service);
    setIsUpdateModalOpen(true);
  };

  // Handle deleting a service
  const handleDelete = (id) => {
    setIsDelete(true);
    setSelectedService(id);
  };

  return (
    <div className="w-full bg-gray-50">
      {/* Header */}
      <div className="flex flex-row items-center justify-between p-6">
        <h2 className="text-2xl font-semibold flex items-center">
          <Settings className="w-6 h-6 mr-2 ml-4 text-yellow-600" />
          Services
        </h2>
        <Link
          to="/Service/form"
          className="border bg-yellow-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-yellow-400"
        >
          Add Service
        </Link>
      </div>

      {/* Services Table */}
      <div className="p-6 pt-0">
        <div className="relative overflow-x-auto rounded-lg shadow">
          <table className="w-full text-left bg-white">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-4 w-16 font-semibold">S.No</th>
                <th className="p-4 w-48 font-semibold">Title</th>
                <th className="p-4 font-semibold">Description</th>
                <th className="p-4 w-32 font-semibold">Info</th>
                <th className="p-4 w-32 font-semibold">Update</th>
                <th className="p-4 w-32 font-semibold">Delete</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service, index) => (
                <tr key={service.id} className="border-b hover:bg-gray-50">
                  <td className="p-4">{index + 1}</td>
                  <td className="p-4 font-medium">{service.title}</td>
                  <td className="p-4 text-gray-600">{service.description}</td>
                  <td className="p-4">
                    <Button
                      variant="text"
                      size="small"
                      onClick={() => handleView(service.id)}
                      className="h-8 w-8 p-0"
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                  </td>
                  <td className="p-4">
                    <Button
                      variant="text"
                      size="small"
                      onClick={() => handleEdit(service)}
                      className="h-8 w-8 p-0"
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                  </td>
                  <td className="p-4">
                    <Button
                      variant="text"
                      size="small"
                      className="h-8 w-8 p-0 text-red-600 hover:text-red-700 hover:bg-red-50"
                      onClick={() => handleDelete(service.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Update Service Modal */}
      <ServiceUpdateModal
        isOpen={isUpdateModalOpen}
        onClose={() => setIsUpdateModalOpen(false)}
        service={selectedService}
      />
      <ServiceDeleteModal
        isOpen={isDelete}
        onClose={() => setIsDelete(false)}
        id={selectedService}
      />
    </div>
  );
};

export default ServiceTable;
