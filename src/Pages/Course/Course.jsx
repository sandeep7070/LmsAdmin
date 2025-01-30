import React, { useEffect, useState } from "react";
import { Eye, Pencil, Trash2, Settings } from "lucide-react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourses } from "../../Redux/Actions/courseActions";
import CourseDeleteModal from "./CourseDeleteModal";
import CourseUpdateModal from "./CourseUpdateModal";
import Spinner from "../../Components/Spinner/Spinner";

const CourseList = () => {
  const dispatch = useDispatch();

  const {courses,status} = useSelector((state) => state.courses);

  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchCourses());
  }, []);

  // Handle actions for View, Edit, and Delete
  const handleView = (id) => {
    console.log(`Viewing course with id: ${id}`);
  };

  const handleEdit = (course) => {
    setSelectedCourse(course);
    setIsUpdateModalOpen(true);
  };

  const handleDelete = (id) => {
    setSelectedCourse(id);
    setIsDeleteModalOpen(true);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      {status === "loading" && <Spinner />}
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Courses</h1>
          <p className="text-lg text-gray-600">Expand your skills</p>
          <Link
            to="/Course/form"
            className="float-right bg-yellow-400 px-4 py-2 rounded-full text-white font-semibold"
          >
            Add new Course
          </Link>
        </div>
        <div className="p-6 pt-0">
          <div className="relative overflow-x-auto rounded-lg shadow">
            <table className="w-full text-left bg-white">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-4 w-16 font-semibold">Co. Code</th>
                  <th className="p-4 w-48 font-semibold">Title</th>
                  <th className="p-4 font-semibold">Price</th>
                  <th className="p-4 font-semibold">Min. Pay</th>
                  <th className="p-4 font-semibold">Duration</th>
                  <th className="p-4 w-32 font-semibold">Info</th>
                  <th className="p-4 w-32 font-semibold">Update</th>
                  <th className="p-4 w-32 font-semibold">Delete</th>
                </tr>
              </thead>
              <tbody>
                {courses?.map((course) => (
                  <tr key={course._id} className="border-b hover:bg-gray-50">
                    <td className="p-4">{course.courseCode}</td>
                    <td className="p-4 font-medium">{course.title}</td>
                    <td className="p-4 text-gray-600">
                      $ {course.courseFees - course.discountendfees}
                    </td>
                    <td className="p-4 text-gray-600">
                      $ {course.minFeesToPay}
                    </td>
                    <td className="p-4 text-gray-600">{course.duration}</td>
                    <td className="p-4">
                      <Button
                        variant="text"
                        size="small"
                        onClick={() => handleView(course.id)}
                        className="h-8 w-8 p-0"
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                    </td>
                    <td className="p-4">
                      <Button
                        variant="text"
                        size="small"
                        onClick={() => handleEdit(course)}
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
                        onClick={() => handleDelete(course._id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Update Modal */}
          {isUpdateModalOpen && 
            <CourseUpdateModal
              course={selectedCourse}
              onClose={() => setIsUpdateModalOpen(false)}
            />
          }
          {/* Delete Modal */}
          <CourseDeleteModal
            isOpen={isDeleteModalOpen}
            onClose={() => setIsDeleteModalOpen(false)}
            id={selectedCourse}
          />
        </div>
      </div>
    </div>
  );
};

export default CourseList;
