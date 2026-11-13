import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { SearchModal } from './components/SearchModal';
import { ScrollToTop } from './components/ScrollToTop';

import { Home } from './pages/Home';
import { AboutUs } from './pages/AboutUs';
import { Products } from './pages/Products';
import { ProductDetails } from './pages/ProductDetails';
import { RepairingServices } from './pages/RepairingServices';
import { ContactUs } from './pages/ContactUs';

export function App() {
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1E232B] font-sans antialiased selection:bg-[#CC5500]/20 selection:text-[#CC5500]">
        
        {/* Navigation */}
        <Navbar onOpenSearch={() => setSearchModalOpen(true)} />

        {/* Global Search Dialog Modal */}
        <SearchModal
          isOpen={searchModalOpen}
          onClose={() => setSearchModalOpen(false)}
        />

        {/* Main Content Area */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:slug" element={<ProductDetails />} />
            <Route path="/repairing-services" element={<RepairingServices />} />
            <Route path="/contact" element={<ContactUs />} />
            {/* Catch-all redirect to Home */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        {/* Floating WhatsApp Action Pill */}
        <WhatsAppFloat />

        {/* Footer */}
        <Footer />
        
      </div>
    </Router>
  );
}

export default App;
