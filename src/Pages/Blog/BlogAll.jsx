import React, { useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Eye, Trash2 } from 'lucide-react';
import { FaBlog } from "react-icons/fa6";
import BlogPopup from '../Blog/AddPopup';
import { getAllBlogs, deleteBlog } from '../../Redux/Actions/BlogAction.js';

const BlogManagement = () => {
  const dispatch = useDispatch();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedRows, setSelectedRows] = useState(new Set());
  const [sortField, setSortField] = useState('createdAt');
  const [sortDirection, setSortDirection] = useState('desc');

  // Get the blogs state from Redux
  const blogsState = useSelector(state => state.blog);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const result = await dispatch(getAllBlogs());
        console.log('Fetch result:', result);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };
    fetchBlogs();
  }, [dispatch]);

  // Process the blogs data correctly
  const processedData = useMemo(() => {
    // Check if we have the blogs data in the correct structure
    const blogsData = blogsState?.blogs?.data?.blogs || [];
    
     console.log("blogsData", blogsData )
    return blogsData.map(blog => ({
      id: blog._id,
      category: blog.category || 'Uncategorized',
      content: blog.content || 'No content',
      createdAt: blog.createdAt || new Date().toISOString(),
      description: blog.description || 'No description',
      name: blog.name || 'Untitled',
      status: blog.status || 'Draft',
      title: blog.title || 'Untitled'
    }));
  }, [blogsState?.blogs?.data?.blogs]);

  const sortedData = useMemo(() => {
    return [...processedData].sort((a, b) => {
      const aValue = a[sortField];
      const bValue = b[sortField];
      
      if (sortDirection === 'asc') {
        return aValue > bValue ? 1 : -1;
      }
      return aValue < bValue ? 1 : -1;
    });
  }, [processedData, sortField, sortDirection]);

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(current => current === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const handleRowSelection = (id) => {
    setSelectedRows(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const handleDeleteSelected = async () => {
    try {
      for (const id of selectedRows) {
        await dispatch(deleteBlog(id));
      }
      setSelectedRows(new Set());
      dispatch(getAllBlogs()); // Refresh the list
    } catch (error) {
      console.error('Error deleting blogs:', error);
    }
  };

  // Rest of your component remains the same...
  return (
    <div className="w-full bg-white rounded-lg shadow-md">
      {/* Header section */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <FaBlog className="text-3xl ml-6 text-yellow-600" />
            <h2 className="text-2xl gap-2 font-semibold text-gray-900">
              Content Blog Management
              {blogsState?.blogs?.data?.totalBlogs && (
                <span className="text-sm text-gray-500 ml-2">
                  (Total: {blogsState.blogs.data.totalBlogs})
                </span>
              )}
            </h2>
          </div>
          {/* Buttons */}
          <div className="flex gap-4">
            <button 
              onClick={() => setIsPopupOpen(true)}
              className="flex items-center px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors"
              disabled={blogsState.loading}
            >
              Add Blog
            </button>
            {selectedRows.size > 0 && (
              <button 
                onClick={handleDeleteSelected}
                className="flex items-center px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                disabled={blogsState.loading}
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Delete Selected ({selectedRows.size})
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Table section */}
      {blogsState.loading ? (
        <div className="w-full h-64 flex items-center justify-center">
          <div className="text-gray-600">Loading...</div>
        </div>
      ) : blogsState.error ? (
        <div className="w-full p-4 bg-red-50 border border-red-200 rounded-lg">
          <div className="text-red-600">{blogsState.error}</div>
        </div>
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className="w-full">
              {/* Table header and body implementation remains the same */}
              {/* ... */}
            </table>
          </div>

          {/* Footer section */}
          <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
            <div className="flex justify-between items-center">
              <div className="text-sm text-gray-700">
                Page {blogsState?.blogs?.data?.currentPage || 1} of {blogsState?.blogs?.data?.totalPages || 1} • 
                Showing {sortedData.length} of {blogsState?.blogs?.data?.totalBlogs || 0} entries
              </div>
              {selectedRows.size > 0 && (
                <div className="text-sm text-gray-700">
                  {selectedRows.size} {selectedRows.size === 1 ? 'item' : 'items'} selected
                </div>
              )}
            </div>
          </div>
        </>
      )}

      <BlogPopup 
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </div>
  );
};

export default BlogManagement;