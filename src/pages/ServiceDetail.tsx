import { useParams, Link } from 'react-router-dom';
import { SERVICES } from '../constants';
import { motion } from 'motion/react';
import { useEffect } from 'react';

export default function ServiceDetail() {
  const { id } = useParams();
  const service = SERVICES.find((s) => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return (
      <div className="h-screen flex items-center justify-center">
        <h1 className="text-2xl font-serif">Service Not Found</h1>
        <Link to="/" className="ml-4 text-navy underline italic">Return Home</Link>
      </div>
    );
  }

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Header */}
      <section className="relative h-[60vh] overflow-hidden">
        <img 
          src={service.image} 
          alt={service.title} 
          className="absolute inset-0 w-full h-full object-cover grayscale opacity-40"
        />
        <div className="absolute inset-0 bg-navy/40" />
        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-6xl md:text-9xl text-white font-serif uppercase tracking-tight"
          >
            {service.title}
          </motion.h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div className="space-y-16">
            <div>
              <h2 className="text-xs font-bold tracking-[0.5em] text-gray-400 mb-6 uppercase">WHY GET {service.title}?</h2>
              <p className="text-2xl font-light text-navy leading-relaxed italic border-l-4 border-navy pl-8">
                {service.why}
              </p>
            </div>

            <div>
              <h2 className="text-xs font-bold tracking-[0.5em] text-gray-400 mb-6 uppercase">WHEN SHOULD YOU GET {service.title}?</h2>
              <p className="text-lg text-gray-500 font-light leading-relaxed">
                {service.when}
              </p>
            </div>

            <div className="bg-off-white p-12">
              <h2 className="text-xs font-bold tracking-[0.5em] text-gray-400 mb-8 uppercase">BENEFITS OF {service.title}</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {service.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center space-x-4 text-sm font-semibold text-navy uppercase tracking-widest">
                    <div className="w-2 h-2 bg-navy rounded-full" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-12">
            <div className="aspect-square relative overflow-hidden bg-navy group">
              <img 
                src={service.image} 
                alt="Care" 
                className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 transition-all duration-700"
              />
              <div className="absolute inset-0 border-[24px] border-white/10 m-8 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="py-32 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-xs font-bold tracking-[0.5em] text-white/40 block mb-6 uppercase">TRANSPARENT PRICING</span>
          <h2 className="text-5xl md:text-7xl font-serif mb-12 uppercase">{service.title} INVESTMENT</h2>
          
          <div className="max-w-2xl mx-auto space-y-12">
            <div className="p-16 border border-white/10 inline-block w-full">
              <h3 className="text-xs font-bold tracking-[0.3em] mb-4 uppercase opacity-60">STARTING PRICE</h3>
              <div className="text-7xl md:text-9xl font-serif mb-4">{service.price}</div>
              <div className="h-[1px] w-24 bg-white/20 mx-auto mb-8" />
              <p className="text-sm text-white/60 font-light leading-relaxed max-w-md mx-auto">
                Please note that the final cost of treatment is tailored to your unique clinical profile. 
                Individual requirements, complexity, and specific material selections will be 
                determined during your comprehensive private consultation.
              </p>
            </div>

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
                BOOK CONSULTATION
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cross-link to other services */}
      <section className="py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
           <h3 className="text-xs font-bold tracking-[0.5em] text-gray-400 mb-12 text-center uppercase">OTHER SPECIALIZATIONS</h3>
           <div className="flex flex-wrap justify-center gap-12">
              {SERVICES.filter(s => s.id !== id).map(s => (
                <Link 
                  key={s.id} 
                  to={`/service/${s.id}`}
                  className="text-lg md:text-3xl font-serif text-gray-300 hover:text-navy transition-all uppercase"
                >
                  {s.title}
                </Link>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
}
