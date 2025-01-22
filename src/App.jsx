import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import SideLayout from './SideHeader';  
import Dashboadsh from './Components/Dashboad/Dashboad';
import ServiceTable from './Components/Pages/Service/ServiceTable';
import SimpleTable from './Components/Pages/TeamP/TeamProtiles';
import AboutCompany from './Components/Pages/AboutCompany/AboutCompany';
import CourseList from './Components/Pages/Cource/Cource';
import StyledTable from './Components/Pages/Blog/BlogAll';
import Testimonials from './Components/Pages/Testimonials/Testimoials';
import RegistrationForm from './Components/Pages/RegistrationsF/Registrations'
import DashboardLayout from './Components/Pages/Update-of-Job/UpdateJob';
import JobBoard from './Components/Pages/Update-of-Job/UpdateJob';

function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        <SideLayout /> {/* Always render the SideLayout */}
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Dashboadsh />} />
            <Route path="/Service" element={<ServiceTable />} />
            <Route path="/Team" element={<SimpleTable />} />
            <Route path="/About" element={<AboutCompany />} />
            <Route path="/Course" element={<CourseList />} />
            <Route path="/Blog" element={<StyledTable />} />
            <Route path="/Testimonials" element={<Testimonials />} />
            <Route path="/Registrations" element={<RegistrationForm />} />
            <Route path="/Update-For-job" element={<JobBoard />} />

            
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
