import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar, Footer } from '@/components/Layout';
import { ArrowRight, Check, MapPin, DollarSign, User, Users, Baby, Shield, Heart, Activity, Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

// Mock Data for Plans
const MOCK_PLANS = [
  {
    id: 1,
    name: "Vitalis Bronze Essential HMO",
    rating: 4.2,
    reviews: 1200,
    premium: 287,
    deductible: 3500,
    outOfPocket: 6500,
    network: "PPO Network - 1.2M providers",
    features: ["24/7 virtual care", "Wellness rewards", "Free generic drugs"],
    bestFor: "Best for frequent doctor visits",
    type: "HMO"
  },
  {
    id: 2,
    name: "Vitalis Silver Advantage PPO",
    rating: 4.5,
    reviews: 850,
    premium: 412,
    deductible: 1500,
    outOfPocket: 4500,
    network: "PPO Network - 1.4M providers",
    features: ["Nationwide coverage", "Specialist visits w/o referral", "Maternity covered"],
    bestFor: "Best value for families",
    type: "PPO"
  },
  {
    id: 3,
    name: "Vitalis Gold Premium EPO",
    rating: 4.8,
    reviews: 430,
    premium: 580,
    deductible: 500,
    outOfPocket: 3000,
    network: "EPO Network - 900k providers",
    features: ["$0 deductible options", "Concierge support", "Gym membership included"],
    bestFor: "Maximum coverage",
    type: "EPO"
  }
];

export default function PlanFinder() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    who: '',
    zip: '',
    needs: [] as string[],
    budget: 500
  });
  const [showResults, setShowResults] = useState(false);

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
    else setShowResults(true);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const toggleNeed = (need: string) => {
    setFormData(prev => ({
      ...prev,
      needs: prev.needs.includes(need) 
        ? prev.needs.filter(n => n !== need)
        : [...prev.needs, need]
    }));
  };

  return (
    <div className="min-h-screen bg-vitalis-sage font-sans text-vitalis-navy">
      <Navbar />
      
      <main className="pt-32 pb-20 container mx-auto px-4">
        {!showResults ? (
          <div className="max-w-2xl mx-auto">
            <div className="mb-8">
              <div className="flex justify-between text-sm font-medium text-vitalis-grey mb-2">
                <span>Step {step} of 4</span>
                <span>{Math.round((step / 4) * 100)}% completed</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-vitalis-teal"
                  initial={{ width: 0 }}
                  animate={{ width: `${(step / 4) * 100}%` }}
                />
              </div>
            </div>

            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-white p-8 rounded-3xl shadow-sm"
                >
                  <h2 className="font-serif text-3xl font-bold mb-6">Who needs coverage?</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { id: 'me', label: 'Just me', icon: User },
                      { id: 'spouse', label: 'Me + Spouse', icon: Users },
                      { id: 'child', label: 'Me + Child(ren)', icon: Baby },
                      { id: 'family', label: 'Family', icon: Users }
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => setFormData({...formData, who: opt.id})}
                        className={cn(
                          "p-6 rounded-xl border-2 text-left transition-all flex flex-col gap-3 hover:shadow-md",
                          formData.who === opt.id 
                            ? "border-vitalis-teal bg-vitalis-sage/30" 
                            : "border-gray-100 hover:border-vitalis-teal/50"
                        )}
                      >
                        <opt.icon className={cn("w-8 h-8", formData.who === opt.id ? "text-vitalis-teal" : "text-gray-400")} />
                        <span className="font-medium text-lg">{opt.label}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-white p-8 rounded-3xl shadow-sm"
                >
                  <h2 className="font-serif text-3xl font-bold mb-6">What's your zip code?</h2>
                  <div className="relative max-w-xs">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      value={formData.zip}
                      onChange={(e) => setFormData({...formData, zip: e.target.value})}
                      placeholder="Enter zip code"
                      className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:border-vitalis-teal focus:ring-2 focus:ring-vitalis-teal/20 outline-none text-lg"
                    />
                  </div>
                  <p className="mt-4 text-vitalis-grey text-sm flex items-center gap-2">
                    <Check className="w-4 h-4 text-vitalis-green" />
                    We found 12,403 providers in your area.
                  </p>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-white p-8 rounded-3xl shadow-sm"
                >
                  <h2 className="font-serif text-3xl font-bold mb-6">What's important to you?</h2>
                  <div className="flex flex-wrap gap-3">
                    {[
                      'Preventive Care', 'Prescription Drugs', 'Mental Health', 
                      'Maternity', 'Dental', 'Vision', 'Specialist Visits', 'Hospitalization'
                    ].map((need) => (
                      <button
                        key={need}
                        onClick={() => toggleNeed(need)}
                        className={cn(
                          "px-6 py-3 rounded-full border transition-all text-sm font-medium",
                          formData.needs.includes(need)
                            ? "bg-vitalis-teal text-white border-vitalis-teal"
                            : "bg-white text-vitalis-navy border-gray-200 hover:border-vitalis-teal"
                        )}
                      >
                        {need}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-white p-8 rounded-3xl shadow-sm"
                >
                  <h2 className="font-serif text-3xl font-bold mb-6">Monthly Budget Preference</h2>
                  <div className="mb-8">
                    <div className="flex justify-between mb-4">
                      <span className="text-vitalis-grey">Up to</span>
                      <span className="font-mono text-2xl font-bold">${formData.budget}</span>
                    </div>
                    <input
                      type="range"
                      min="100"
                      max="1500"
                      step="50"
                      value={formData.budget}
                      onChange={(e) => setFormData({...formData, budget: parseInt(e.target.value)})}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-vitalis-teal"
                    />
                    <div className="flex justify-between mt-2 text-xs text-gray-400">
                      <span>$100</span>
                      <span>$1500+</span>
                    </div>
                  </div>
                  
                  <label className="flex items-center gap-3 p-4 border border-gray-100 rounded-xl cursor-pointer hover:bg-gray-50">
                    <input type="checkbox" className="w-5 h-5 text-vitalis-teal rounded focus:ring-vitalis-teal" />
                    <span className="font-medium">Show plans eligible for HSA</span>
                  </label>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="mt-8 flex justify-between">
              <button
                onClick={handleBack}
                disabled={step === 1}
                className="px-6 py-3 text-vitalis-grey font-medium disabled:opacity-50 hover:text-vitalis-navy transition-colors"
              >
                Back
              </button>
              <button
                onClick={handleNext}
                className="bg-vitalis-coral text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all shadow-lg flex items-center gap-2"
              >
                {step === 4 ? 'Show My Plans' : 'Next Step'}
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="flex flex-col md:flex-row justify-between items-end mb-8">
              <div>
                <h1 className="font-serif text-4xl font-bold text-vitalis-navy mb-2">We found 3 plans for you</h1>
                <p className="text-vitalis-grey">Based on your location and preferences.</p>
              </div>
              <div className="flex gap-4 mt-4 md:mt-0">
                <select className="px-4 py-2 rounded-lg border border-gray-200 bg-white text-sm">
                  <option>Recommended</option>
                  <option>Price: Low to High</option>
                  <option>Rating: High to Low</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Filters Sidebar (Simplified) */}
              <div className="hidden lg:block space-y-8 bg-white p-6 rounded-2xl shadow-sm h-fit">
                <div>
                  <h3 className="font-serif font-bold mb-4">Plan Type</h3>
                  {['HMO', 'PPO', 'EPO', 'POS'].map(type => (
                    <label key={type} className="flex items-center gap-2 mb-2 cursor-pointer">
                      <input type="checkbox" className="rounded text-vitalis-teal" />
                      <span className="text-sm">{type}</span>
                    </label>
                  ))}
                </div>
                <div>
                  <h3 className="font-serif font-bold mb-4">Deductible</h3>
                  {['$0 - $1,000', '$1,000 - $3,000', '$3,000+'].map(range => (
                    <label key={range} className="flex items-center gap-2 mb-2 cursor-pointer">
                      <input type="checkbox" className="rounded text-vitalis-teal" />
                      <span className="text-sm">{range}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Results */}
              <div className="lg:col-span-2 space-y-6">
                {MOCK_PLANS.map((plan) => (
                  <motion.div
                    key={plan.id}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all border border-transparent hover:border-vitalis-coral/20 group relative overflow-hidden"
                  >
                    {plan.bestFor && (
                      <div className="absolute top-0 right-0 bg-vitalis-sage text-vitalis-teal text-xs font-bold px-4 py-2 rounded-bl-2xl">
                        {plan.bestFor}
                      </div>
                    )}
                    
                    <div className="flex flex-col md:flex-row justify-between gap-6 mb-6">
                      <div>
                        <h3 className="font-serif text-2xl font-bold text-vitalis-navy mb-2">{plan.name}</h3>
                        <div className="flex items-center gap-2 text-sm text-vitalis-grey mb-4">
                          <div className="flex text-vitalis-amber">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={cn("w-4 h-4 fill-current", i >= Math.floor(plan.rating) && "text-gray-300 fill-gray-300")} />
                            ))}
                          </div>
                          <span>{plan.rating} ({plan.reviews} reviews)</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {plan.features.map((feat, i) => (
                            <span key={i} className="bg-vitalis-blue/20 text-vitalis-navy text-xs px-3 py-1 rounded-full font-medium">
                              {feat}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="text-right min-w-max">
                        <div className="text-3xl font-mono font-bold text-vitalis-navy">${plan.premium}<span className="text-sm font-sans font-normal text-vitalis-grey">/mo</span></div>
                        <div className="text-xs text-vitalis-grey mt-1">Deductible: ${plan.deductible}</div>
                        <div className="text-xs text-vitalis-grey">Out-of-pocket max: ${plan.outOfPocket}</div>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
                      <div className="flex items-center gap-2 text-sm text-vitalis-grey">
                        <Shield className="w-4 h-4 text-vitalis-teal" />
                        {plan.network}
                      </div>
                      <div className="flex gap-3 w-full sm:w-auto">
                        <Link to={`/plans/${plan.id}`} className="flex-1 sm:flex-none px-6 py-2.5 rounded-full border border-vitalis-teal text-vitalis-teal font-medium hover:bg-vitalis-teal hover:text-white transition-colors text-center">
                          View Details
                        </Link>
                        <button className="flex-1 sm:flex-none px-6 py-2.5 rounded-full bg-vitalis-coral text-white font-medium hover:bg-opacity-90 transition-colors shadow-md">
                          Enroll Now
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </main>
      <Footer />
    </div>
  );
}
