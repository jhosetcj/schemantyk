
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const Index = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen font-outfit transition-colors ${
      isDarkMode ? 'bg-black text-white' : 'bg-white text-black'
    }`}>
      {/* Dark Mode Toggle Button */}
      <Button
        onClick={toggleDarkMode}
        variant="outline"
        className={`fixed top-6 right-6 z-10 rounded-full px-4 py-2 border transition-colors ${
          isDarkMode 
            ? 'border-white text-white hover:bg-white hover:text-black' 
            : 'border-black text-black hover:bg-black hover:text-white'
        }`}
      >
        {isDarkMode ? 'Light' : 'Dark'}
      </Button>

      <div className="max-w-2xl mx-auto px-6 py-16">
        
        {/* Logo */}
        <div className="mb-16">
          <img 
            src={isDarkMode 
              ? "/lovable-uploads/1311198a-601d-4962-ba6e-b84121320a56.png" 
              : "/lovable-uploads/ca386524-2de8-475f-9958-7521fad7b887.png"
            }
            alt="Schemantyk Logo" 
            className="w-24 h-24"
          />
        </div>

        {/* Company Description */}
        <div className="mb-16">
          <div className="space-y-4 text-lg leading-relaxed">
            <p>
              Schemantyk is an independent digital product studio.
            </p>
            <p>
              We create small, useful, and thoughtful tools, built with artificial intelligence, minimalist design, and a focus on solving real problems.
            </p>
            <p>
              We design meaningful structures. Systems that think. Forms that evolve.
            </p>
          </div>
        </div>

        {/* Products Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-normal mb-6">Products</h2>
          <div className="space-y-3">
            <div className={`border-b pb-2 ${isDarkMode ? 'border-white' : 'border-black'}`}>
              <span className="text-lg">Coming Soon</span>
            </div>
            <div className={`border-b pb-2 ${isDarkMode ? 'border-white' : 'border-black'}`}>
              <div className="flex flex-col">
                <span className="text-lg">Kupler.app</span>
                <div className="text-sm opacity-70 mt-1 space-x-2">
                  <span>Available on </span>
                  <a 
                    href="https://kupler.app" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="italic underline hover:opacity-70 transition-opacity"
                  >
                    Web
                  </a>
                  <span>, </span>
                  <a 
                    href="https://kupler.app" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="italic underline hover:opacity-70 transition-opacity"
                  >
                    iOS
                  </a>
                  <span> and </span>
                  <a 
                    href="https://kupler.app" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="italic underline hover:opacity-70 transition-opacity"
                  >
                    Android
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Links Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-normal">Links</h2>
          
          <div className="space-y-3">
            <div className="flex flex-col space-y-2">
              <a 
                href="mailto:hello@schemantyk.com" 
                className="italic underline hover:opacity-70 transition-opacity"
              >
                Contact
              </a>
              
              <a 
                href="#" 
                className="italic underline hover:opacity-70 transition-opacity"
              >
                Twitter
              </a>
              
              <a 
                href="#" 
                className="italic underline hover:opacity-70 transition-opacity"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className={`mt-16 pt-8 border-t ${isDarkMode ? 'border-white' : 'border-black'}`}>
          <p className="text-sm opacity-70">
            © 2024 Schemantyk. Independent digital product studio.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
