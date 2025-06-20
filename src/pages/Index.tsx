
const Index = () => {
  return (
    <div className="min-h-screen bg-white text-black font-outfit">
      <div className="max-w-2xl mx-auto px-6 py-16">
        
        {/* Logo */}
        <div className="mb-16">
          <img 
            src="/lovable-uploads/ca386524-2de8-475f-9958-7521fad7b887.png" 
            alt="Schemantyk Logo" 
            className="w-24 h-24"
          />
        </div>

        {/* Company Name */}
        <div className="mb-16">
          <h1 className="text-4xl font-normal mb-8">Schemantyk</h1>
          
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
            <div className="border-b border-black pb-2">
              <span className="text-lg">Coming Soon</span>
            </div>
            <div className="border-b border-black pb-2">
              <div className="flex flex-col">
                <span className="text-lg">Kupler.app</span>
                <span className="text-sm opacity-70 mt-1">Available on Web, iOS and Android</span>
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
                className="text-black italic underline hover:opacity-70 transition-opacity"
              >
                Contact
              </a>
              
              <a 
                href="#" 
                className="text-black italic underline hover:opacity-70 transition-opacity"
              >
                Twitter
              </a>
              
              <a 
                href="#" 
                className="text-black italic underline hover:opacity-70 transition-opacity"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-black">
          <p className="text-sm opacity-70">
            © 2024 Schemantyk. Independent digital product studio.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
