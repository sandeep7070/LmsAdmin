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

  const LevelBadge = ({ level }) => {
    const colors = {
      Beginner: "bg-green-100 text-green-800",
      Intermediate: "bg-blue-100 text-blue-800",
      Advanced: "bg-purple-100 text-purple-800"
    };

    return (
      <span className={`px-3 py-1 rounded-full text-sm font-medium ${colors[level]}`}>
        {level}
      </span>
    );
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4"> Courses</h1>
          <p className="text-lg text-gray-600">
            Expand your skills 
          </p>
          <Link to='/Course/form' className=' float-right bg-yellow-400 px-4 py-2 rounded-full text-white font-semibold '>Add new Course</Link>
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
              {courses.map((course, index) => (
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

{/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
{courses.map((course) => (
  <div key={course.id} className="bg-gray-200 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
    {/* Course Image */}
    // <img 
    //   src={course.image} 
    //   alt={course.title}
    //   className="w-full h-48 object-cover"
    // /> */}

    {/* Course Content */}
    {/* <div className="p-6">
      <div className="flex justify-between items-start mb-4">
        <LevelBadge level={course.level} />
        <div className="flex items-center">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="ml-1 text-sm font-medium">{course.rating}</span>
        </div>
      </div>

      <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
      <p className="text-black text-sm mb-4">{course.description}</p> */}

      {/* Course Meta */}
      {/* <div className="flex items-center gap-4 mb-4 text-sm text-black">
        <div className="flex items-center">
          <Clock className="w-4 h-4 mr-1" />
          {course.duration}
        </div>
        <div className="flex items-center">
          <BookOpen className="w-4 h-4 mr-1" />
          {course.lessons} lessons
        </div>
        <div className="flex items-center">
          <Users className="w-4 h-4 mr-1" />
          {course.students}
        </div>
      </div> */}

      {/* Instructor & Price */}
      {/* <div className="flex items-center justify-between pt-4 border-t">
        <div className="text-sm">
          <span className="text-black">Instructor: </span>
          <span className="font-medium">{course.instructor}</span>
        </div>
        <div className="text-lg font-bold text-black">
          ${course.price}
        </div>
      </div> */}

      {/* <button className="mt-4 w-full bg-[#edba12] bg-blue- text-white py-2 px-4 rounded-lg hover:bg-[#cfaf44] transition-colors flex items-center justify-center">
        View Course
        <ChevronRight className="w-4 h-4 ml-1" />
      </button>
    </div>
  </div>
))}
</div> */}