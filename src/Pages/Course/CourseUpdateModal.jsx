import React, { useState } from "react";
import { ImageUp, SquareCheckBig } from "lucide-react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useDispatch, useSelector } from "react-redux";
import { updateCourse } from "../../Redux/Actions/courseActions";
import { toast } from "sonner";
import Spinner from "../../Components/Spinner/Spinner";
const CourseUpdateModal = ({ course, onClose }) => {
  const dispatch = useDispatch();
  const {status} = useSelector((state)=>state.courses)
  const [data, setData] = useState({
    title: course.title || "",
    code: course.courseCode || "",
    subjects: course.subject || "",
    duration: course.duration || "",
    fees: course.courseFees || "",
    discountedFees: course.discountendfees || "",
    minimumFees: course.minFeesToPay || "",
    curriculum: course.curriculum || "",
    eligibility: course.eligibilityCriteria || "",
    images: null,
    domain: course.domain || "",
  });
  const [image, setImage] = useState(course.imageName || null);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setImage(files[0]?.name || null);
      setData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Handle ReactQuill input changes
  const handleQuillChange = (field, value) => {
    setData((prev) => ({ ...prev, [field]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const {
      title,
      code,
      subjects,
      duration,
      fees,
      discountedFees,
      minimumFees,
      curriculum,
      eligibility,
      domain,
      images,
    } = data;

    // Validation
    if (
      !title ||
      !code ||
      !subjects ||
      !duration ||
      !fees ||
      !discountedFees ||
      !minimumFees ||
      !curriculum ||
      !eligibility ||
      !domain
    ) {
      toast.error("Please fill in all fields before updating.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("subject", subjects);
    formData.append("duration", duration);
    formData.append("courseCode", code);
    formData.append("courseFees", fees);
    formData.append("discountendfees", discountedFees);
    formData.append("minFeesToPay", minimumFees);
    formData.append("curriculum", curriculum);
    formData.append("eligibilityCriteria", eligibility);
    formData.append("domain", domain);
    if (images) formData.append("coverImage", images);

    const result = await dispatch(updateCourse({ courseId: course._id, formData }));
   console.log(result)
    if (result.type === "courses/updateCourse/fulfilled") {
      toast.success(result.payload?.message || "Course updated successfully");
      onClose();
    } else if (result.type === "courses/updateCourse/rejected") {
      toast.error(result.payload?.message || "Failed to update course");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      {status === "loading" && <Spinner/>}
      <div className="w-full max-w-4xl p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Update Course</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title and Code */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="text-lg font-semibold text-gray-700 mb-1" htmlFor="title">
                Title
              </label>
              <input
                type="text"
                className="w-full p-3 rounded-md border-2 outline-none focus:border-yellow-400 border-gray-400"
                placeholder="Enter course title..."
                name="title"
                id="title"
                value={data.title}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-lg font-semibold text-gray-700 mb-1" htmlFor="code">
                Course Code
              </label>
              <input
                type="text"
                className="w-full p-3 rounded-md border-2 outline-none focus:border-yellow-400 border-gray-400"
                placeholder="Enter course code..."
                name="code"
                id="code"
                value={data.code}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Subjects and Duration */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="text-lg font-semibold text-gray-700 mb-1" htmlFor="subjects">
                Subjects
              </label>
              <input
                type="text"
                className="w-full p-3 rounded-md border-2 outline-none focus:border-yellow-400 border-gray-400"
                placeholder="Enter subjects, separated by commas..."
                name="subjects"
                id="subjects"
                value={data.subjects}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-lg font-semibold text-gray-700 mb-1" htmlFor="duration">
                Duration
              </label>
              <select
                className="w-full p-3 rounded-md border-2 outline-none focus:border-yellow-400 border-gray-400"
                name="duration"
                id="duration"
                value={data.duration}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Select duration
                </option>
                <option value="1 month">1 Month</option>
                <option value="3 months">3 Months</option>
                <option value="6 months">6 Months</option>
                <option value="1 year">1 Year</option>
              </select>
            </div>
          </div>

          {/* Fees and Discounted Fees */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="text-lg font-semibold text-gray-700 mb-1" htmlFor="fees">
                Course Fees
              </label>
              <input
                type="number"
                className="w-full p-3 rounded-md border-2 outline-none focus:border-yellow-400 border-gray-400"
                placeholder="Enter course fees..."
                name="fees"
                id="fees"
                value={data.fees}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-lg font-semibold text-gray-700 mb-1" htmlFor="discountedFees">
                Discounted Fees
              </label>
              <input
                type="number"
                className="w-full p-3 rounded-md border-2 outline-none focus:border-yellow-400 border-gray-400"
                placeholder="Enter discounted fees..."
                name="discountedFees"
                id="discountedFees"
                value={data.discountedFees}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Minimum Fees and Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="text-lg font-semibold text-gray-700 mb-1" htmlFor="minimumFees">
                Minimum Fees to Pay
              </label>
              <input
                type="number"
                className="w-full p-3 rounded-md border-2 outline-none focus:border-yellow-400 border-gray-400"
                placeholder="Enter minimum fees..."
                name="minimumFees"
                id="minimumFees"
                value={data.minimumFees}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label
                className="text-lg font-semibold text-gray-700 mb-1 cursor-pointer"
                htmlFor="images"
              >
                Course Images
                <div className="font-medium p-2 rounded-md border-2 border-gray-400 flex justify-center items-center gap-x-4">
                  {image === null ? (
                    <>
                      <ImageUp size={30} className="text-gray-700" />
                      <span className="font-sans text-gray-400 text-sm">
                        Upload Course Image
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="font-sans text-gray-400 text-sm">
                        {image}
                      </span>
                      <SquareCheckBig size={30} className="text-green-700" />
                    </>
                  )}
                </div>
              </label>
              <input
                type="file"
                className="hidden"
                name="images"
                id="images"
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Domain Selection */}
          <div className="flex flex-col">
            <label className="text-lg font-semibold text-gray-700 mb-1" htmlFor="domain">
              Domain
            </label>
            <select
              className="w-full p-3 rounded-md border-2 outline-none focus:border-yellow-400 border-gray-400"
              name="domain"
              id="domain"
              value={data.domain}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select domain
              </option>
              <option value="Web Development">Web Development</option>
              <option value="App Development">App Development</option>
              <option value="Cybersecurity">Cybersecurity</option>
              <option value="Machinelearning">Machine Learning</option>
              <option value="Digital Marketing">Digital Marketing</option>
            </select>
          </div>

          {/* Curriculum and Eligibility */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="text-lg font-semibold text-gray-700 mb-1" htmlFor="curriculum">
                Curriculum
              </label>
              <ReactQuill
                theme="snow"
                value={data.curriculum}
                onChange={(value) => handleQuillChange("curriculum", value)}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-lg font-semibold text-gray-700 mb-1" htmlFor="eligibility">
                Eligibility Criteria
              </label>
              <ReactQuill
                theme="snow"
                value={data.eligibility}
                onChange={(value) => handleQuillChange("eligibility", value)}
              />
            </div>
          </div>

          {/* Submit and Close Buttons */}
          <div className="flex justify-end  pt-12 gap-4">
            <button
              type="button"
              className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-md"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-white rounded-md"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CourseUpdateModal;
