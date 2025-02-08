import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import SideLayout from './SideHeader';  
import Dashboadsh from './Components/Dashboad/Dashboad';
import ServiceTable from './Pages/Service/ServiceTable';
import SimpleTable from './Pages/TeamP/TeamProtiles';
import AboutCompany from './Pages/AboutCompany/AboutCompany';
import CourseList from './Pages/Course/Course';
import StyledTable from './Pages/Blog/BlogAll';
import Testimonials from './Pages/Testimonials/Testimoials';
import TestimonialForm from './Pages/Testimonials/TestimonialsForm';
import RegistrationForm from './Pages/RegistrationsF/Registrations'
import ServiceForm from './Pages/Service/ServiceForm'
import UpdateJob from './Pages/Update-of-Job/UpdateJob'
import NoticeBoad from './Pages/Notice-Boad/NoticeBoad'
import CourseForm from './Pages/Course/CourseForm';
import AdminDashboard from './Components/Staff ManagerDasboad/AdminDashboad';
import Expense from './Pages/Expense/Expense';
import ExpenseForm from './Pages/Expense/ExpenseForm';
import JobForm from './Pages/Update-of-Job/JobForm';
import Gallery from './Pages/Gallery/Gallery';
import Inquiries from './Pages/Inquiries/Inquiries';
import CompanyProfileForm from './Pages/AboutCompany/CompanyProfileForm';

function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        <SideLayout /> 
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Dashboadsh />} />
            <Route path= "/StaffManeger" element={<AdminDashboard/>} />
            <Route path="/Service" element={<ServiceTable />} />
            <Route path='/Service/form' element={<ServiceForm />} />
            <Route path="/Team" element={<SimpleTable />} />
            <Route path="/About" element={<AboutCompany />} />
            <Route path="/About/form" element={<CompanyProfileForm />} />
            <Route path="/Course" element={<CourseList />} />
            <Route path="/Course/form" element={<CourseForm />} />
            <Route path = "/Expense" element={<Expense/>} />
            <Route path = "/Expense/form" element={<ExpenseForm/>} />
            <Route path="/Blog" element={<StyledTable />} />
            <Route path="/Testimonials" element={<Testimonials />} />
            <Route path="/Testimonials/form" element={<TestimonialForm />} />
            <Route path="/Registrations" element={<RegistrationForm />} />
            <Route path='/Notice-Board' element={<NoticeBoad/>} /> 
            <Route path="/Job" element={<UpdateJob />} />  
            <Route path="/Job/form" element={<JobForm />} />  
            <Route path="/Gallery" element={<Gallery />} />  
            <Route path="/Inquiries" element={<Inquiries />} />  
          </Routes>
        </div>
        <Toaster richColors position="top-center" />
      </div>
    </BrowserRouter>
  );
}

export default App;
