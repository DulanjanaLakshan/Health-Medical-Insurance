import React from 'react';
import { Navbar, Footer } from '@/components/Layout';
import { Heart, Users, Lightbulb, Handshake, ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-vitalis-sage font-sans text-vitalis-navy">
      <Navbar />
      
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-vitalis-navy text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
             <img src="https://picsum.photos/seed/medical-team/1920/1080" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">Health insurance that actually cares.</h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Founded in 1985, Vitalis Health has grown from a small cooperative to one of America's most trusted health insurers.
            </p>
          </div>
        </section>

        {/* Purpose */}
        <section className="py-24 container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-4xl font-bold mb-6">Our Purpose</h2>
              <p className="text-lg text-vitalis-grey mb-6 leading-relaxed">
                We believe healthcare should be simple, accessible, and kind. Every decision we make starts with one question: <span className="text-vitalis-teal font-medium italic">"Is this good for our members?"</span>
              </p>
              <p className="text-lg text-vitalis-grey leading-relaxed">
                In a world of complex codes and confusing policies, we strive to be the clarity you need. We're not just paying bills; we're facilitating care.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-vitalis-coral/20 rounded-3xl rotate-3" />
              <img 
                src="https://picsum.photos/seed/laughing-call-center/600/400" 
                alt="Support team member laughing" 
                className="relative rounded-3xl shadow-xl w-full"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 bg-vitalis-teal text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { val: "4.2M", label: "Members" },
                { val: "1.2M", label: "Providers" },
                { val: "94%", label: "Satisfaction" },
                { val: "$50M", label: "Community Impact" }
              ].map((stat, i) => (
                <div key={i}>
                  <div className="font-serif text-5xl font-bold mb-2">{stat.val}</div>
                  <div className="text-white/70 uppercase tracking-widest text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-vitalis-grey max-w-2xl mx-auto">The principles that guide every interaction.</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Heart, title: "Member First", desc: "Always prioritizing your health over our bottom line." },
              { icon: Users, title: "Health Equity", desc: "Working to eliminate disparities in care access." },
              { icon: Lightbulb, title: "Innovation", desc: "Using technology to simplify, not complicate." },
              { icon: Handshake, title: "Transparency", desc: "No hidden fees. No confusing jargon." }
            ].map((val, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-vitalis-sage rounded-full flex items-center justify-center text-vitalis-teal mx-auto mb-6">
                  <val.icon className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-3">{val.title}</h3>
                <p className="text-vitalis-grey text-sm">{val.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Leadership */}
        <section className="py-24 bg-vitalis-ivory">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-4xl font-bold mb-12 text-center">Leadership Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Dr. Elena Rodriguez", role: "Chief Medical Officer", img: "https://picsum.photos/seed/ceo1/400/500" },
                { name: "James Thorne", role: "CEO", img: "https://picsum.photos/seed/ceo2/400/500" },
                { name: "Sarah Chen", role: "VP of Member Experience", img: "https://picsum.photos/seed/ceo3/400/500" }
              ].map((leader, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[3/4]">
                    <img 
                      src={leader.img} 
                      alt={leader.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-vitalis-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                      <p className="text-white text-sm">"Healthcare is a human right, not a privilege."</p>
                    </div>
                  </div>
                  <h3 className="font-serif text-xl font-bold">{leader.name}</h3>
                  <p className="text-vitalis-teal text-sm uppercase tracking-wider">{leader.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Careers CTA */}
        <section className="py-24 container mx-auto px-4">
          <div className="bg-vitalis-navy rounded-3xl p-12 text-center text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="font-serif text-4xl font-bold mb-6">Join us in reimagining healthcare</h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                We're looking for passionate people to help us build a kinder, smarter health system.
              </p>
              <button className="bg-vitalis-coral text-white px-8 py-4 rounded-full font-bold hover:bg-opacity-90 transition-all shadow-lg inline-flex items-center gap-2">
                View Open Positions <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
