import React from 'react';
import { Building2, Users, Trophy, Target } from 'lucide-react';

const AboutCompany = () => {
  const companyStats = [
    {
      icon: <Building2 className="w-8 h-8 text-white " />,
      value: "10+",
      label: "Years Experience"
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      value: "250+",
      label: "Team Members"
    },
    {
      icon: <Trophy className="w-8 h-8 text-white" />,
      value: "500+",
      label: "Projects Completed"
    },
    {
      icon: <Target className="w-8 h-8 text-white" />,
      value: "98%",
      label: "Client Satisfaction"  
    }
  ];

  return (
    <div className=" py-16">
      <div className="container mx-auto px-4 ">
        {/* Main Content */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900  mb-4">About Company Information</h1>
          <p className="text-lg text-gray-600 mb-8">
            Innovating the future
          </p>
        </div>

        {/* Two Column Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 bg-gray-100 ">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-black">Our Story</h2>
            <p className="text-black">
             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae soluta maiores ipsum, ad doloremque necessitatibus veritatis voluptate fuga cum officia!
            </p>
            <p className="text-black">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure ratione illo dolores perspiciatis animi temporibus facilis quidem, sequi harum labore impedit velit dolorum porro, minus, unde quae rem. Cupiditate, debitis?
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900">Our Mission</h2>
            <p className="text-gray-600">
              We strive to empower businesses through innovative technology solutions that 
              drive growth and create lasting impact. Our mission is to transform ideas into 
              powerful digital experiences that connect, inspire, and drive success.
            </p>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-black mb-3">Core Values</h3>
              <ul className="space-y-2 text-black">
                <li>• Innovation in everything we do</li>
                <li>• Customer success first</li>
                <li>• Continuous learning and growth</li>
                <li>• Collaboration and transparency</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 ">
          {companyStats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-6 bg-[#edba12] rounded-lg hover:bg-[#c5a53c] transition-colors"
            >
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-white">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;