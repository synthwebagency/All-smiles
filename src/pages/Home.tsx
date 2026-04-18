import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { WHY_US_SLIDES, TEAM, SERVICES, GALLERY, REVIEWS } from '../constants';
import { ChevronRight, ChevronLeft, Star } from 'lucide-react';

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const [currentWhySlide, setCurrentWhySlide] = useState(0);

  // Why Us Slideshow auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentWhySlide((prev) => (prev + 1) % WHY_US_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="overflow-hidden" ref={containerRef}>
      {/* HERO SECTION */}
      <section className="relative h-screen w-full flex items-center justify-center bg-navy">
        {/* Cinematic Video Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="w-full h-full object-cover opacity-60"
            poster="/images/hero-poster.jpg"
          >
            <source src="/images/hero-background-video.mp4" type="video/mp4" />
          </video>
          <div className="w-full h-full bg-navy/20 absolute inset-0 z-10" />
        </div>

        <div className="relative z-20 text-center px-6 max-w-5xl">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-9xl text-white font-serif font-bold mb-8 leading-[0.9] uppercase"
          >
            Your Smile.<br />Our Priority.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-lg md:text-2xl text-white/80 font-light tracking-[0.2em] mb-12 uppercase"
          >
            Premium dental care for every generation.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Link 
              to="/story"
              className="px-12 py-5 bg-white text-navy font-bold tracking-[0.3em] text-xs hover:bg-black hover:text-white transition-all duration-500 uppercase rounded-none"
            >
              Our Story
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/40 flex flex-col items-center"
        >
          <span className="text-[10px] tracking-widest mb-4 font-bold">SCROLL</span>
          <div className="w-[1px] h-12 bg-white/20" />
        </motion.div>
      </section>

      {/* WHY PATIENTS CHOOSE US (SLIDESHOW) */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 space-y-4 md:space-y-0">
            <div className="max-w-2xl">
              <span className="text-xs font-bold tracking-[0.5em] text-gray-400 block mb-4 uppercase">EXPERIENCE EXCELLENCE</span>
              <h2 className="text-4xl md:text-6xl uppercase leading-none">Why Patients<br /><span className="italic font-light">Choose Us</span></h2>
            </div>
            <div className="flex space-x-4">
              <button 
                onClick={() => setCurrentWhySlide((prev) => (prev - 1 + WHY_US_SLIDES.length) % WHY_US_SLIDES.length)}
                className="w-16 h-16 border border-gray-200 flex items-center justify-center hover:bg-navy hover:text-white transition-all"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={() => setCurrentWhySlide((prev) => (prev + 1) % WHY_US_SLIDES.length)}
                className="w-16 h-16 border border-gray-200 flex items-center justify-center hover:bg-navy hover:text-white transition-all"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div className="relative h-[400px] md:h-[300px]">
            {WHY_US_SLIDES.map((slide, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={{ 
                  opacity: currentWhySlide === index ? 1 : 0,
                  x: currentWhySlide === index ? 0 : 50,
                  visibility: currentWhySlide === index ? 'visible' : 'hidden'
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute inset-0 flex flex-col justify-center"
              >
                <h3 className="text-3xl md:text-5xl font-serif text-navy mb-6">{slide.title}</h3>
                <p className="text-lg md:text-2xl text-gray-500 font-light leading-relaxed max-w-3xl">
                  {slide.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MEET THE TEAM */}
      <section className="py-32 bg-off-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
             <span className="text-xs font-bold tracking-[0.5em] text-gray-400 block mb-4 uppercase">THE MASTERS OF CARE</span>
             <h2 className="text-5xl md:text-7xl uppercase mb-8">Meet Our Team</h2>
             <div className="w-24 h-[1px] bg-navy mx-auto" />
          </div>

          {/* Doctors */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
            {TEAM.doctors.map((doc, idx) => (
              <motion.div 
                key={idx}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="aspect-[4/5] overflow-hidden mb-8">
                  <img 
                    src={doc.image} 
                    alt={doc.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-3xl font-serif text-navy mb-2">{doc.name}</h3>
                <p className="text-xs font-bold tracking-widest text-navy/40 mb-4 uppercase">{doc.role} — {doc.education}</p>
                <p className="text-gray-500 font-light leading-relaxed">{doc.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Nurses */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {TEAM.nurses.map((nurse, idx) => (
              <motion.div 
                key={idx}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="aspect-[4/5] overflow-hidden mb-6">
                  <img 
                    src={nurse.image} 
                    alt={nurse.name} 
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                  />
                </div>
                <h4 className="text-xl font-serif text-navy mb-1">{nurse.name}</h4>
                <p className="text-[10px] font-bold tracking-widest text-navy/40 mb-3 uppercase">{nurse.education}</p>
                <p className="text-sm text-gray-500 font-light">{nurse.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY SLIDESHOW */}
      <section className="bg-navy py-32 overflow-hidden">
         <div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row justify-between items-end">
            <h2 className="text-5xl md:text-7xl text-white font-serif tracking-tight leading-none uppercase">Clinic<br /><span className="italic font-light">Elegance</span></h2>
            <p className="text-white/40 text-xs font-bold tracking-[0.5em] mt-8 md:mt-0 uppercase">GALLERY ARCHIVE</p>
         </div>
         <div className="flex space-x-8 px-6 animate-marquee">
            {GALLERY.concat(GALLERY).map((item, idx) => (
              <div key={idx} className="flex-none w-[300px] md:w-[600px] aspect-video">
                <img 
                  src={item.url} 
                  alt={item.caption} 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            ))}
         </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <span className="text-xs font-bold tracking-[0.5em] text-gray-400 block mb-4 uppercase">PRECISION PROCEDURES</span>
            <h2 className="text-5xl md:text-7xl uppercase mb-8">Specialized Services</h2>
            <div className="w-24 h-[1px] bg-navy mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, idx) => (
              <motion.div
                key={service.id}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <Link to={`/service/${service.id}`}>
                  <div className="aspect-[3/4] overflow-hidden mb-8 relative">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-all" />
                    <div className="absolute bottom-8 left-8 right-8">
                      <h3 className="text-2xl text-white font-serif uppercase tracking-widest">{service.title}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 font-light leading-relaxed mb-4">{service.shortDescription}</p>
                  <div className="flex items-center text-[10px] font-bold tracking-[0.3em] text-navy uppercase">
                    View Procedure <ChevronRight size={12} className="ml-2" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-32 bg-off-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <span className="text-xs font-bold tracking-[0.5em] text-gray-400 block mb-4 uppercase">VOICES OF TRUST</span>
              <h2 className="text-5xl md:text-7xl text-navy uppercase mb-8">Client<br />Testimonials</h2>
              <p className="text-lg text-gray-500 font-light leading-relaxed mb-12">
                We take immense pride in the smiles we create. Our patients are our greatest advocates and their stories drive our dedication.
              </p>
              <a 
                href="https://workspace.google.com/products/calendar/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-12 py-5 bg-navy text-white text-xs font-bold tracking-widest hover:bg-black transition-all uppercase"
              >
                Book Your Story
              </a>
            </div>
            
            <div className="space-y-8">
              {REVIEWS.map((review, idx) => (
                <div key={idx} className="bg-white p-12 border border-gray-100">
                  <div className="flex space-x-1 mb-6">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" className="text-navy" />
                    ))}
                  </div>
                  <p className="text-xl font-serif text-navy/80 italic mb-8 leading-relaxed">
                    "{review.text}"
                  </p>
                  <h4 className="text-xs font-bold tracking-widest text-navy uppercase">— {review.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-navy py-48 text-center text-white relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="text-5xl md:text-8xl font-serif mb-12 leading-none uppercase">Ready To Restore Your Smile?</h2>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a 
              href="https://workspace.google.com/products/calendar/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-16 py-6 bg-white text-navy text-sm font-bold tracking-[0.5em] hover:bg-gray-200 transition-all inline-block uppercase"
            >
              BOOK HERE
            </a>
          </motion.div>
        </div>
        {/* Subtle texture background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="w-full h-full bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>
      </section>
    </div>
  );
}
