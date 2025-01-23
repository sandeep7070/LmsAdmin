import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { toast } from "sonner";
const ServiceUpdateModal = ({ isOpen, onClose, service }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Update state when service prop changes
  useEffect(() => {
    if (service) {
      setTitle(service.title || "");
      setDescription(service.description || "");
    }
  }, [service]); 



//   Update functionality here.........
   const handleSubmit = ()=>{
       toast.success(` Update successfully........`);
       onClose();
   }


  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-gray-50 rounded-2xl w-[43%] max-h-[95vh] overflow-y-auto shadow-2xl transform transition-all">
        <div className="flex items-center justify-between p-6 border-b bg-gradient-to-r">
          <h2 className="text-2xl font-bold text-black">Update Service</h2>
          <button className="p-2 hover:bg-white/20 rounded-full transition-colors" onClick={onClose}>
            <X className="h-9 w-9 text-red-600 bg-red-300 rounded-full" />
          </button>
        </div>

        <div className="p-4 space-y-6">
          <div className="space-y-2">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Service Title
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#edba12] transition-all"
              placeholder="Enter service title..."
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#edba12] transition-all"
              placeholder="Enter service description..."
            />
          </div>
        </div>

        <div className="flex justify-end gap-4 p-6 border-t bg-gray-50">
          <button
            className="px-6 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-6 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-[#edba12] to-[#e2b931] rounded-lg hover:opacity-90 transition-colors"
            onClick={handleSubmit}
           >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceUpdateModal;
