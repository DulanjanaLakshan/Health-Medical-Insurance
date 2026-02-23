import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Activity, Heart, Shield, Users, Play, Star, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Video/Image Placeholder */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/vitalis-hero/1920/1080?blur=2" 
          alt="Happy family in park" 
          className="w-full h-full object-cover opacity-90"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-vitalis-sage/90 via-vitalis-sage/60 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/40">
              <Star className="w-4 h-4 text-vitalis-amber fill-current" />
              <span className="text-sm font-medium text-vitalis-teal">J.D. Power Award Winner 2026</span>
            </div>
            
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-vitalis-navy leading-[1.1] mb-6">
              Health isn't just coverage. <br />
              <span className="text-vitalis-coral italic">It's confidence.</span>
            </h1>
            
            <p className="text-xl text-vitalis-navy/80 mb-8 leading-relaxed max-w-lg">
              Personalized health insurance that grows with you. From preventive care to critical moments, we're here.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/plans"
                className="bg-vitalis-coral text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2 group"
              >
                Find Your Plan
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="px-8 py-4 rounded-full font-semibold text-lg text-vitalis-teal border-2 border-vitalis-teal hover:bg-vitalis-teal hover:text-white transition-all">
                See If You Qualify
              </button>
            </div>
          </motion.div>
        </div>

        {/* Member Quick Access Portal */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden md:block justify-self-end"
        >
          <div className="bg-white/60 backdrop-blur-xl border border-white/40 p-8 rounded-3xl shadow-2xl max-w-sm w-full">
            <h3 className="font-serif text-2xl font-bold text-vitalis-navy mb-6">Member Login</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-vitalis-grey mb-1">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 rounded-xl border border-vitalis-blue bg-white/50 focus:outline-none focus:ring-2 focus:ring-vitalis-teal/20 focus:border-vitalis-teal transition-all"
                  placeholder="name@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-vitalis-grey mb-1">Password</label>
                <input 
                  type="password" 
                  className="w-full px-4 py-3 rounded-xl border border-vitalis-blue bg-white/50 focus:outline-none focus:ring-2 focus:ring-vitalis-teal/20 focus:border-vitalis-teal transition-all"
                  placeholder="••••••••"
                />
              </div>
              <div className="flex justify-between items-center text-sm">
                <label className="flex items-center gap-2 text-vitalis-grey cursor-pointer">
                  <input type="checkbox" className="rounded text-vitalis-teal focus:ring-vitalis-teal" />
                  Remember me
                </label>
                <a href="#" className="text-vitalis-teal hover:underline">Forgot?</a>
              </div>
              <button className="w-full bg-vitalis-teal text-white py-3 rounded-xl font-semibold hover:bg-vitalis-teal/90 transition-colors shadow-lg">
                Sign In
              </button>
            </form>
            <div className="mt-6 pt-6 border-t border-vitalis-navy/10 text-center">
              <p className="text-sm text-vitalis-grey">New to Vitalis?</p>
              <Link to="/plans" className="text-vitalis-coral font-semibold hover:underline">Create an account</Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function LiveWellnessTracker() {
  return (
    <div className="bg-vitalis-navy text-white py-6 overflow-hidden relative">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        <div className="flex items-center gap-3 min-w-max z-10 bg-vitalis-navy pr-8">
          <div className="w-3 h-3 bg-vitalis-green rounded-full animate-pulse" />
          <span className="font-mono text-sm tracking-widest uppercase text-vitalis-blue">Vitalis Community Live</span>
        </div>
        
        <div className="flex-1 overflow-hidden relative mask-linear-fade">
          <motion.div 
            className="flex gap-12 whitespace-nowrap"
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          >
            {[...Array(3)].map((_, i) => (
              <React.Fragment key={i}>
                <div className="flex items-center gap-3">
                  <Activity className="w-5 h-5 text-vitalis-coral" />
                  <span className="text-2xl font-light font-mono">2,410,392</span>
                  <span className="text-sm text-gray-400 uppercase">Steps Today</span>
                </div>
                <div className="flex items-center gap-3">
                  <Heart className="w-5 h-5 text-vitalis-coral" />
                  <span className="text-2xl font-light font-mono">184,201</span>
                  <span className="text-sm text-gray-400 uppercase">Active Mins</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-vitalis-coral" />
                  <span className="text-2xl font-light font-mono">843</span>
                  <span className="text-sm text-gray-400 uppercase">Virtual Visits</span>
                </div>
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export function PlanCategories() {
  const plans = [
    {
      title: "Individual & Family",
      price: "$287",
      desc: "Preventive care, pediatric dental, maternity.",
      image: "https://picsum.photos/seed/family/600/400",
      badge: "Most Popular",
      colSpan: "md:col-span-2"
    },
    {
      title: "Medicare Advantage",
      price: "$0",
      desc: "Part D included, $0 copay options.",
      image: "https://picsum.photos/seed/senior/600/400",
      colSpan: "md:col-span-1"
    },
    {
      title: "Employer & Groups",
      price: "Custom",
      desc: "Wellness incentives, HR dashboard.",
      image: "https://picsum.photos/seed/office/600/400",
      colSpan: "md:col-span-1"
    },
    {
      title: "Dental & Vision",
      price: "$15",
      desc: "No waiting periods, nationwide networks.",
      image: "https://picsum.photos/seed/smile/600/400",
      colSpan: "md:col-span-2"
    }
  ];

  return (
    <section className="py-24 bg-vitalis-ivory">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-vitalis-navy mb-4">Plans designed for real life</h2>
          <p className="text-xl text-vitalis-grey">Whether you're starting out, raising a family, or planning for the future.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={cn(
                "group relative overflow-hidden rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer h-[400px]",
                plan.colSpan
              )}
            >
              <img 
                src={plan.image} 
                alt={plan.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-vitalis-navy/90 via-vitalis-navy/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 p-8 w-full">
                {plan.badge && (
                  <span className="inline-block bg-vitalis-coral text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                    {plan.badge}
                  </span>
                )}
                <h3 className="font-serif text-3xl text-white mb-2">{plan.title}</h3>
                <p className="text-white/80 mb-4">{plan.desc}</p>
                <div className="flex items-center justify-between">
                  <div className="text-white">
                    <span className="text-xs uppercase opacity-70 block">Starting at</span>
                    <span className="font-mono text-xl">{plan.price}<span className="text-sm">/mo</span></span>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:bg-vitalis-coral transition-colors">
                    <ArrowRight className="text-white w-5 h-5" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyVitalis() {
  const features = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: "24/7 Virtual Care",
      desc: "Board-certified doctors available in minutes. No copay for virtual visits."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Predictable Costs",
      desc: "No surprise bills. See your costs before you care."
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Precision Prevention",
      desc: "AI-powered health insights and personalized wellness plans."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Whole-Person Support",
      desc: "Mental health, nutrition, and social services included."
    }
  ];

  return (
    <section className="py-24 bg-vitalis-sage/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold text-vitalis-navy">More than insurance. A partner.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-vitalis-sage"
            >
              <div className="w-16 h-16 bg-vitalis-sage rounded-2xl flex items-center justify-center text-vitalis-teal mb-6">
                {feature.icon}
              </div>
              <h3 className="font-serif text-xl font-bold text-vitalis-navy mb-3">{feature.title}</h3>
              <p className="text-vitalis-grey leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
