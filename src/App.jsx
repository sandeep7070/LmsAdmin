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
import Expense from './Pages/Expense/Expense';
import ExpenseForm from './Pages/Expense/ExpenseForm';

function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        <SideLayout /> {/* Always render the SideLayout */}
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Dashboadsh />} />
            <Route path="/Service" element={<ServiceTable />} />
            <Route path='/Service/form' element={<ServiceForm />} />
            <Route path="/Team" element={<SimpleTable />} />
            <Route path="/About" element={<AboutCompany />} />
            <Route path="/Course" element={<CourseList />} />
            <Route path="/Course/form" element={<CourseForm />} />
            <Route path = "/Expense" element={<Expense/>} />
            <Route path = "/Expense/form" element={<ExpenseForm/>} />
            <Route path="/Blog" element={<StyledTable />} />
            <Route path="/Testimonials" element={<Testimonials />} />
            <Route path="/Testimonials/form" element={<TestimonialForm />} />
            <Route path="/Registrations" element={<RegistrationForm />} />
            <Route path='/Notice-Board' element={<NoticeBoad/>} /> 
            <Route path="/Update-For-job" element={<UpdateJob />} />  
          </Routes>
        </div>
        <Toaster richColors position="top-center" />
      </div>
    </BrowserRouter>
  );
}

export default App;
