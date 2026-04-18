import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24 mb-24">
        {/* Brand */}
        <div>
          <h2 className="text-3xl font-serif mb-6 tracking-wide">ALL SMILES</h2>
          <p className="text-sm text-white/60 leading-relaxed mb-8">
            Providing premium dental care at the South Africa Medical Centre. 
            Our commitment is to your comfort and absolute dental excellence.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white/60 transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-white/60 transition-colors"><Facebook size={20} /></a>
          </div>
        </div>

        {/* Info */}
        <div className="space-y-8">
          <div className="flex items-start space-x-4">
            <MapPin className="mt-1" size={20} />
            <div>
              <h3 className="text-xs font-bold tracking-widest mb-2 opacity-50">LOCATION</h3>
              <p className="text-sm leading-relaxed">
                South Africa Medical Centre<br />
                CNR South Africa Drive & Tenesse Avenue<br />
                Cosmo City, Roodepoort
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <Phone className="mt-1" size={20} />
            <div>
              <h3 className="text-xs font-bold tracking-widest mb-2 opacity-50">CONTACT</h3>
              <p className="text-sm">+27 12 312 9021</p>
            </div>
          </div>
        </div>

        {/* Hours */}
        <div className="space-y-8">
          <div className="flex items-start space-x-4">
            <Clock className="mt-1" size={20} />
            <div>
              <h3 className="text-xs font-bold tracking-widest mb-2 opacity-50">CLINICAL HOURS</h3>
              <ul className="text-sm space-y-2">
                <li className="flex justify-between w-48 font-light"><span>Mon - Fri</span><span>08:00 - 18:00</span></li>
                <li className="flex justify-between w-48 font-light"><span>Saturday</span><span>09:00 - 13:00</span></li>
                <li className="flex justify-between w-48 font-light italic opacity-60"><span>Sunday</span><span>Closed</span></li>
              </ul>
            </div>
          </div>
          <a
            href="https://workspace.google.com/products/calendar/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 border border-white/20 hover:border-white transition-all text-xs font-bold tracking-widest"
          >
            BOOK HERE
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[10px] tracking-widest font-semibold opacity-40 uppercase">
        <span>© 2026 ALL SMILES DENTAL CLINIC</span>
        <div className="flex space-x-12">
          <Link to="#">PRIVACY POLICY</Link>
          <Link to="#">TERMS OF SERVICE</Link>
        </div>
      </div>
    </footer>
  );
}
