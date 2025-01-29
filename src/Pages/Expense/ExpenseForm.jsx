import React, { useState } from 'react';
import { Link } from 'react-router-dom';



const ExpenseForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    category: '',
    amount: '',
    paymentMethod: '',
    description: '',
    date: '',
    createdBy: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.category || !formData.amount || !formData.paymentMethod || !formData.date || !formData.createdBy) {
      alert('Please fill all required fields!');
      return;
    }
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-1/2 mx-auto shadow-yellow-400 my-10">
      <h2 className="text-2xl font-semibold mb-4 text-center p-4">Add Expense</h2>
      <hr className='w-1/2 mx-auto border-2  border-yellow-400' />
      <Link to='/Expense' className='bg-blue-600 text-white float-right px-4 py-2 rounded-md font-semibold hover:bg-blue-500'>Go Back</Link>
      
      <label htmlFor='category' className="block my-8 font-medium text-gray-700">Select Category</label>
      <select id="category" name="category" value={formData.category} onChange={handleChange} required 
      className="w-full p-4 border-2 border-gray-500 focus:border-yellow-400 outline-none rounded-md">
        <option value="">Select Category</option>
        <option value="Salary">Salary</option>
        <option value="Utilities">Utilities</option>
        <option value="Rent">Rent</option>
        <option value="Office Supplies">Office Supplies</option>
        <option value="Other">Other</option>
      </select>
      
      <label htmlFor='amount' className="block my-4 font-medium text-gray-700 mt-3">Enter Amount </label>
      <input type="number" id="amount" name="amount" value={formData.amount} onChange={handleChange} required 
      className="w-full p-4 border-2 border-gray-500 rounded-md outline-none focus:border-yellow-400" />
      
      <label className="block my-4 font-medium text-gray-700 mt-3">Payment Method</label>
      <select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange} required 
      className="w-full p-4 border-2 outline-none focus:border-yellow-400 border-gray-500 rounded-md">
        <option value="">Select Payment Method</option>
        <option value="Cash">Cash</option>
        <option value="Credit Card">Credit Card</option>
        <option value="Bank Transfer">Bank Transfer</option>
        <option value="UPI">UPI</option>
        <option value="Other">Other</option>
      </select>
      
      <label className="block my-4 font-medium text-gray-700 mt-3">Description</label>
      <textarea name="description" placeholder='Enter a description.....' value={formData.description} onChange={handleChange} 
      className="w-full p-4 border-2 outline-none focus:border-yellow-400 border-gray-500 rounded-md"></textarea>
      
      <label className="block my-4 font-medium text-gray-700 mt-3">Date</label>
      <input type="date" name="date" value={formData.date} onChange={handleChange} required 
      className="w-full p-4 border-2 outline-none border-gray-500 focus:border-yellow-400 rounded-md" />
      
      <button type="submit" className="mt-4  bg-yellow-400 text-white px-4 py-3 font-semibold  rounded hover:bg-yellow-500 ">Submit Expense</button>
    </form>
  );
};

export default ExpenseForm;