import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaBlog } from "react-icons/fa";
import { SiCoursera } from "react-icons/si";
import { MdMiscellaneousServices } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import { AiOutlineTeam } from "react-icons/ai";
import { FcAbout } from "react-icons/fc";
import { GrGallery } from "react-icons/gr";
import { FaRegNoteSticky } from "react-icons/fa6";
import { MdAppRegistration } from "react-icons/md";
import { MdOutlineUpdate } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";

import { 
  ChevronRight, 
  ChevronLeft,
  LayoutDashboard,
} from 'lucide-react';

const navigationItems = [
  { id: '/', name: 'Dashboard', icon: LayoutDashboard },
  { id: '/Service', name: 'Service', icon: MdMiscellaneousServices  },  
  { id: '/Team', name: 'Team(Protiles)', icon: AiOutlineTeam  },
  { id: '/About', name: 'About Company', icon: FcAbout  },
  { id: '/Course', name: 'Course', icon: SiCoursera },
  { id: '/Gallery', name: 'Gallery', icon: GrGallery },
  { id: '/Blog', name: 'Blog', icon: FaBlog  },
  { id: '/Testimonials', name: 'Testimonials', icon: FaRegNoteSticky },
  { id: '/Registrations', name: 'Registrations', icon: MdAppRegistration },
  { id: '/Notice-Board', name: 'Notice Board', icon: FaChalkboardTeacher },

  { id: '/Enquiries', name: 'Enquiries', icon: SiCoursera },
  { id: '/Update-For-job', name: 'Update for job', icon: MdOutlineUpdate },
  { id: '/logout', name: 'logout', icon: IoMdLogOut },
];

const SideLayout = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path) => {
    if (path === '/logout') {
      // Handle logout logic here
      return;
    }
    navigate(path);
  };

  return (
    <aside className={`
      relative flex flex-col
      transition-all duration-300 ease-in-out
      bg-white shadow-lg
      rounded-tr-3xl rounded-br-3xl
      ${isSidebarCollapsed ? 'w-36' : 'w-72'}
    `}>        
      <div className="flex justify-center items-center ">
        <img 
          className={`
            transition-all duration-300
            ${isSidebarCollapsed ? 'w-16 h-14' : 'w-26 h-20'}
            object-contain
          `} 
          src="ansh4.jpg" 
          alt="Logo" 
        />
      </div>

      <button 
        onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        className="absolute -right-3 top-3 bg-[#edba12] rounded-full p-2.5 shadow-lg hover:bg-[#edba12] transition-colors"
        aria-label={isSidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        {isSidebarCollapsed ? 
          <ChevronRight className="w-4 h-4" /> : 
          <ChevronLeft className="w-4 h-4" />
        }
      </button>

      <nav className="mt- flex-grow px-4">
        <ul className="space-y-2">
          {navigationItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNavigation(item.id)}
                className={`
                  w-full p-3 flex items-center gap-3
                  transition-all duration-200
                  rounded-s-lg
                  ${location.pathname === item.id 
                    ? 'text-black bg-[#edba12] shadow-md' 
                    : 'text-black hover:bg-[#edba12] hover:text-black hover:shadow-md'}
                  ${isSidebarCollapsed ? 'justify-center' : 'justify-start'}
                `}
              >    
                <item.icon className="w-6 h-6" />
                {!isSidebarCollapsed && 
                  <span className="text-sm font-medium">{item.name}</span>
                }
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default SideLayout;