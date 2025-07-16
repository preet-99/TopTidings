/**
 * About Component - TopTidings
 *
 * This component serves as the "About Us" page of the application.
 * It includes general information about the app, useful links,
 * contact information, social media links, and developer credits.
 *
 * Features:
 * - Bootstrap-based responsive layout
 * - Clean and informative sections
 * - Semantic content structure
 * - Proper spacing and styling
 *
 * Author: Preet Vishwakarma
 * Date: July 2025
 */

import React from 'react';

const About = () => {
  return (
    <div className="container py-5 mt-5 text-white">
      {/* Main About Section */}
      <div className="bg-dark rounded p-4 shadow">
        
        {/* App Overview */}
        <div className="row mb-4">
          <div className="col-md-12 text-center">
            <h2 className="fw-bold">About <span className="text-info">TopTidings</span></h2>
            <p className="mt-3">
              <strong>TopTidings</strong> is a simple, fast, and responsive News Application designed to deliver the latest news articles across various categories. 
              Built with modern web technologies, this app fetches real-time news and presents it in a clean and user-friendly interface.
            </p>
          </div>
        </div>

        {/* Details Row */}
        <div className="row text-start">
          
          {/* Links */}
          <div className="col-md-3 mb-4">
            <h5>Useful Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-decoration-none text-white">Coming Soon</a></li>
              <li><a href="#" className="text-decoration-none text-white">Coming Soon</a></li>
              <li><a href="#" className="text-decoration-none text-white">Coming Soon</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-3 mb-4">
            <h5>Contact</h5>
            <ul className="list-unstyled">
              <li>Email: <span className="text-white">bcab6932@gmail.com</span></li>
              <li><a href="https://github.com/preet-99" className="text-decoration-none text-white">GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/preet-vishwakarma-b775a7317" className="text-decoration-none text-white">LinkedIn</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-md-3 mb-4">
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li><a href="https://www.facebook.com/arnav.dhimman" className="text-decoration-none text-white">Facebook</a></li>
              <li><a href="https://www.instagram.com/__darkcipher__" className="text-decoration-none text-white">Instagram</a></li>
              <li><a href="https://x.com/PreetVishwaka99" className="text-decoration-none text-white">Twitter (X)</a></li>
            </ul>
          </div>

          {/* Developer Info */}
          <div className="col-md-3 mb-4">
            <h5>Developer</h5>
            <p className="mb-1">Developed by <strong>Preet Vishwakarma</strong></p>
            <p className="mb-0">Computer Science Student & Web Developer</p>
          </div>
        </div>

        {/* Bottom Line */}
        <hr className="my-3 border-secondary" />
        <div className="text-center">
          <p className="mb-0">&copy; 2025 Preet Vishwakarma & Company. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
