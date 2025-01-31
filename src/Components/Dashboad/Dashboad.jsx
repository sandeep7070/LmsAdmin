import React, { useEffect } from 'react';
import { 
  Bell,
  Search,
} from 'lucide-react';
import { 
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import { RiTeamLine } from "react-icons/ri";
import { SiCoursera } from "react-icons/si";
import { FaBlog } from "react-icons/fa6";
import { GrUpdate } from "react-icons/gr";
import { GrUserAdmin } from "react-icons/gr";
import { useDispatch,useSelector } from 'react-redux';
import { fetchExpenses } from '../../Redux/Actions/expenseActions';
const salesData = [
  { name: 'Jan', value: 4000 },
  { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 5000 },
  { name: 'Apr', value: 4500 },
  { name: 'May', value: 6000 },
  { name: 'Jun', value: 5500 },
];
// Expenses Data

const AdminDashboard = () => {
  
  const dispatch = useDispatch();

   useEffect(()=>{
    dispatch(fetchExpenses());
   },[dispatch])
   const {expenses,status} = useSelector((state)=>state.expenses);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Navigation */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 ">
          <div className="flex items-center justify-between ">
            <h1 className="text-2xl font-bold text-gray-800 ] ">
            <GrUserAdmin />

              Admin Dashboard</h1>
            <div className="flex items-center space-x-4">
              {/* Search Bar */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-64 pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
              </div>
              {/* Notification */}
              <button className="p-2 rounded-lg hover:bg-gray-100 relative">
                <Bell className="w-6 h-6 text-gray-600" />
                <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                  3
                </span>
              </button>
              {/* Profile */}
              
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div className="bg-whit rounded-lg shadow p-6 bg-gradient-to-r  from-[#edba12] to-yellow-600">
            <div className="flex items-center">
              <div className="p-3 rounded-full">
                <RiTeamLine className="w-8 h-11 text-gray-200" />
              </div>
              <div className="ml-4">
                <h2 className="text-lg font-semibold text-white">Team(Protiles)</h2>
                <p className="text-sm text-black">+2.5% from last month</p>
              </div>
            </div>
          </div>
          
          <div className="rounded-lg shadow p-6 bg-gradient-to-r  from-[#edba12] to-yellow-600">
            <div className="flex items-center">
              <div className="p-3 rounded-full">
                <SiCoursera className="w-8 h-11 text-gray-200" />
              </div>
              <div className="ml-4">
                <h2 className="text-lg font-semibold text-white">Course</h2>
                <p className="text-sm text-black">+5.2% from last month</p>
              </div>
            </div>
          </div>

          <div className="rounded-lg shadow p-6 bg-gradient-to-r  from-[#edba12] to-yellow-600">
            <div className="flex items-center">
              <div className="p-3 rounded-full">
                <FaBlog className="w-8 h-11 text-gray-200" />
              </div>
              <div className="ml-4">
                <h2 className="text-lg font-semibold text-white">Blog</h2>
                <p className="text-sm text-black">+8.1% from last month</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r  from-[#edba12] to-yellow-600 rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full">
                <GrUpdate className="w-6 h-11 text-white" />
              </div>
              <div className="ml-4">
                <h2 className="text-lg font-semibold text-white">Update Job</h2>
                <p className="text-sm text-black">-1.2% from last month</p>
              </div>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Sales Chart */}
          <div className="bg-gray-50 rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-black">Course Sale Overview</h2>
              <select className="border rounded-md px-3 py-1">
                <option>Last 6 months</option>
                <option>Last year</option>
                <option>All time</option>
              </select>
            </div>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={salesData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis dataKey="name" stroke="#6B7280" />
                  <YAxis stroke="#6B7280" />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#4F46E5" 
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-gray-100 rounded-lg shadow p-6 overflow-y-auto max-h-96">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h2>
           { status === "loading" ? <h1>Loading....</h1>:(
             <div className="space-y-4">
             {expenses && expenses?.map((item) => (
               <div key={item._id} className="flex items-center p-3 hover:bg-gray-50 rounded-lg">
                
                 <div className="ml-4">
                   <p className="text-sm font-medium text-gray-900">
                    {item.description}
                   </p>
                   <p className="text-sm text-gray-500">
                     {new Date(item.date).getDay() } ago
                   </p>
                 </div>
                 <span className="ml-auto text-sm text-gray-500">
                   ${item.amount}
                 </span>
               </div>
             ))}
           </div>
           )}
          </div>
        </div>

        {/* Recent Orders Table */}
        <div className="bg-gray-50 rounded-lg shadow">
          <div className="p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Orders</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left bg-gray-100 border-b border-gray-300">
                    <th className="p-4 font-medium text-gray-600">Order ID</th>
                    <th className="p-4 font-medium text-gray-600">Customer</th>
                    <th className="p-4 font-medium text-gray-600">Product</th>
                    <th className="p-4 font-medium text-gray-600">Amount</th>
                    <th className="p-4 font-medium text-gray-600">Status</th>
                    <th className="p-4 font-medium text-gray-600">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4, 5].map((item) => (
                    <tr key={item} className="border-b border-gray-300 hover:bg-gray-50">
                      <td className="p-4 text-gray-900">-{item}234</td>
                      <td className="p-4">
                        <div className="flex items-center">
                          {/* <img
                            src="/api/placeholder/32/32"
                            alt="Customer"
                            className="w-8 h-8 rounded-full mr-3"
                          /> */}
                          <span className="text-gray-900">Sandeep</span>
                        </div>
                      </td>
                      <td className="p-4 text-gray-600">Lectop</td>
                      <td className="p-4 text-gray-900">$299</td>
                      <td className="p-4">
                        <span className="px-3 py-1 text-sm text-green-700 bg-green-100 rounded-full">
                          Completed
                        </span>
                      </td>
                      <td className="p-4 text-gray-600">Jan 20, 2024</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;