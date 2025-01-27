import React from 'react';
import { Eye, Pencil, Trash2, Settings } from "lucide-react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const CourseList = () => {
  const courses = [
    {
      id: 1,
      title: "Complete Web Development",
      description: "Learn full-stack web development from scratch with HTML, CSS, JavaScript, React, and Node.js",
      duration: "12 weeks",
      students: 1500,
      lessons: 24,
      rating: 4.8,
      level: "Beginner",
      instructor: "John Smith",
      price: 99.99,
      image: "/api/placeholder/400/250"
    },
    {
      id: 2,
      title: "Advanced React & Redux",
      description: "Master React 18, Redux Toolkit, and modern frontend development practices",
      duration: "8 weeks",
      students: 1200,
      lessons: 18,
      rating: 4.9,
      level: "Advanced",
      instructor: "Sarah Johnson",
      price: 89.99,
      image: "/api/placeholder/400/250"
    },
    {
      id: 3,
      title: "UI/UX Design Fundamentals",
      description: "Learn design principles, user research, wireframing, and prototyping",
      duration: "10 weeks",
      students: 800,
      lessons: 20,
      rating: 4.7,
      level: "Intermediate",
      instructor: "Mike Wilson",
      price: 79.99,
      image: "/api/placeholder/400/250"
    }
  ];

  // Handle actions for View, Edit, and Delete
  const handleView = (id) => {
    console.log(`Viewing course with id: ${id}`);
  };

  const handleEdit = (course) => {
    console.log(`Editing course:`, course);
  };

  const handleDelete = (id) => {
    console.log(`Deleting course with id: ${id}`);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Courses</h1>
          <p className="text-lg text-gray-600">
            Expand your skills
          </p>
          <Link to='/Course/form' className='float-right bg-yellow-400 px-4 py-2 rounded-full text-white font-semibold'>
            Add new Course
          </Link>
        </div>

        <div className="p-6 pt-0">
          <div className="relative overflow-x-auto rounded-lg shadow">
            <table className="w-full text-left bg-white">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-4 w-16 font-semibold">Course Code</th>
                  <th className="p-4 w-48 font-semibold">Title</th>
                  <th className="p-4 font-semibold">Price</th>
                  <th className="p-4 font-semibold">Duration</th>
                  <th className="p-4 w-32 font-semibold">Info</th>
                  <th className="p-4 w-32 font-semibold">Update</th>
                  <th className="p-4 w-32 font-semibold">Delete</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((course) => (
                  <tr key={course.id} className="border-b hover:bg-gray-50">
                    <td className="p-4">{Math.floor(Math.random() * Date.now())}</td>
                    <td className="p-4 font-medium">{course.title}</td>
                    <td className="p-4 text-gray-600">$ {course.price}</td>
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
                        onClick={() => handleDelete(course.id)}
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
      </div>
    </div>
  );
};

export default CourseList;
