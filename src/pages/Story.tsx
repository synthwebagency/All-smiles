import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Story() {
  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero */}
      <section className="py-32 bg-navy text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-serif mb-8 uppercase"
          >
            Our Story
          </motion.h1>
          <div className="w-24 h-[1px] bg-white/40 mx-auto" />
        </div>
      </section>

      {/* Content */}
      <section className="py-32">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-16 text-lg text-gray-500 font-light leading-relaxed">
            <p className="first-letter:text-6xl first-letter:font-serif first-letter:float-left first-letter:mr-4 first-letter:text-navy first-letter:mt-2">
              ALL SMILES was born from a vision of redefining the dental experience. We believed that world-class medical precision shouldn't come at the cost of personal comfort. Located in the heart of Cosmo City at the South Africa Medical Centre, we have grown from a small family practice into a leading high-end private dental clinic.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <img 
                src="/images/story-heritage-image.jpg" 
                alt="Clinic History" 
                className="w-full grayscale border border-gray-100"
              />
              <div className="space-y-8">
                <h2 className="text-3xl font-serif text-navy uppercase">A Legacy of Excellence</h2>
                <p>
                  Founded by Dr. Daniel Carter, the clinic has always been about more than just teeth. It's about restoring confidence and improving lives through detailed, empathetic care. Today, the legacy continues with his daughter, Dr. Emily Carter, bringing modern medical advancements to the practice.
                </p>
              </div>
            </div>

            <p>
              Every material we use, from our porcelain crowns to our advanced imaging equipment, is selected for its superior quality and longevity. We don't just fix smiles; we build them to last a lifetime. Our team of Ivy-League-trained professionals works in harmony to ensure that every visit feels like a retreat rather than a procedure.
            </p>

            <div className="text-center pt-12">
               <Link 
                to="/contact" 
                className="px-12 py-5 bg-navy text-white text-xs font-bold tracking-widest hover:bg-black transition-all uppercase"
              >
                Meet Us In Person
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-32 bg-off-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-xs font-bold tracking-[0.5em] text-gray-400 mb-12 uppercase">OUR PHILOSOPHY</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="space-y-4">
              <h3 className="text-xl font-serif text-navy">Integrity</h3>
              <p className="text-sm text-gray-400 font-light leading-relaxed">Honest assessments and transparent treatments, always putting your health first.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-serif text-navy">Precision</h3>
              <p className="text-sm text-gray-400 font-light leading-relaxed">Using the latest technology to ensure every procedure is accurate and effective.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-serif text-navy">Empathy</h3>
              <p className="text-sm text-gray-400 font-light leading-relaxed">A gentle approach designed to soothe anxiety and prioritize patient comfort.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
