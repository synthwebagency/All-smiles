import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Header */}
      <section className="py-32 bg-off-white text-center">
        <div className="max-w-4xl mx-auto px-6 font-serif">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl text-navy uppercase mb-8"
          >
            Connect
          </motion.h1>
          <div className="w-24 h-[1px] bg-navy/20 mx-auto mb-8" />
          <p className="text-gray-400 tracking-[0.3em] font-sans font-bold text-xs uppercase">Begin your journey to a perfect smile.</p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24">
          
          {/* Info Side */}
          <div className="space-y-24">
            <div className="space-y-12">
              <h2 className="text-xs font-bold tracking-[0.5em] text-gray-400 uppercase">CONTACT DETAILS</h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-navy flex items-center justify-center text-white flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold tracking-widest mb-3 uppercase">LOCATION</h3>
                    <p className="text-lg text-gray-500 font-light leading-relaxed">
                      South Africa Medical Centre<br />
                      CNR South Africa Drive & Tenesse Avenue<br />
                      Cosmo City, Roodepoort<br />
                      South Africa
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-navy flex items-center justify-center text-white flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold tracking-widest mb-3 uppercase">TELEPHONE</h3>
                    <p className="text-lg text-gray-500 font-light">+27 12 312 9021</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-navy flex items-center justify-center text-white flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold tracking-widest mb-3 uppercase">EMAIL</h3>
                    <p className="text-lg text-gray-500 font-light">care@allsmilesclinic.co.za</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-12">
              <h2 className="text-xs font-bold tracking-[0.5em] text-gray-400 uppercase">OFFICE HOURS</h2>
              <div className="space-y-6">
                {[
                  { day: 'Monday - Friday', time: '08:00 — 18:00' },
                  { day: 'Saturday', time: '09:00 — 13:00' },
                  { day: 'Sunday', time: 'By Appointment Only (Premium Members)' },
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center border-b border-gray-100 pb-4">
                    <span className="text-sm font-semibold text-navy uppercase tracking-widest">{item.day}</span>
                    <span className="text-sm text-gray-400 font-light italic">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Maps / CTA Side */}
          <div className="space-y-12">
             <div className="aspect-square bg-gray-100 relative group overflow-hidden border border-gray-100">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3584.671048455581!2d27.9255!3d-26.0406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95759755555555%3A0x5555555555555555!2sSouth%20Africa%20Medical%20Centre!5e0!3m2!1sen!2sza!4v1713430000000!5m2!1sen!2sza" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-700"
                ></iframe>
             </div>

             <div className="bg-navy p-16 text-center text-white">
                <h2 className="text-3xl font-serif mb-8 uppercase">SECURE YOUR APPOINTMENT</h2>
                <p className="text-sm text-white/60 mb-12 font-light leading-relaxed">
                   We invite you to experience a new standard in dental care. Reserve your consultation today and transform your smile with South Africa’s premier clinical team.
                </p>
                <a 
                  href="https://workspace.google.com/products/calendar/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-6 bg-white text-navy text-xs font-bold tracking-[0.5em] hover:bg-black hover:text-white transition-all uppercase"
                >
                  BOOK HERE
                </a>
             </div>
          </div>

        </div>
      </section>
    </div>
  );
}
