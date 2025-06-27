import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white py-8'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          <div>
            <div className='flex items-center mb-4'>
              <div className='w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center mr-2'>📋</div>
              <h3 className='text-lg font-semibold'>JobHuntly</h3>
            </div>
            <p className='text-gray-400'>Great platform for the job seeker that searching for new career heights.</p>
            <div className='flex mt-2'>
              {[...Array(5)].map((_, i) => (
                <span key={i} className='text-yellow-400'>★</span>
              ))}
              <span className='text-gray-400 ml-1'>4.8 out of 5</span>
            </div>
          </div>
          <div>
            <h4 className='text-lg font-semibold mb-4'>For Candidates</h4>
            <ul className='space-y-2 text-gray-400'>
              <li>Browse Jobs</li>
              <li>Browse Employers</li>
              <li>Candidate Dashboard</li>
              <li>Saved Jobs</li>
            </ul>
          </div>
          <div>
            <h4 className='text-lg font-semibold mb-4'>For Employers</h4>
            <ul className='space-y-2 text-gray-400'>
              <li>Post a Job</li>
              <li>Browse Candidates</li>
              <li>Employer Dashboard</li>
              <li>Applications</li>
            </ul>
          </div>
          <div>
            <h4 className='text-lg font-semibold mb-4'>Support</h4>
            <ul className='space-y-2 text-gray-400'>
              <li>Help Center</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        </div>
        <p className='text-center text-gray-500 mt-8'>© 2024 JobHuntly. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;