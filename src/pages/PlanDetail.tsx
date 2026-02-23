import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Navbar, Footer } from '@/components/Layout';
import { Star, Shield, Check, Info, FileText, Download, ArrowRight, Activity, Pill, Stethoscope } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function PlanDetail() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('medical');
  const [estimator, setEstimator] = useState({ visits: 5, prescriptions: 'generic' });

  // Mock Plan Data (In a real app, fetch based on ID)
  const plan = {
    name: "Vitalis Silver Advantage PPO",
    rating: 4.5,
    reviews: 1247,
    price: 412,
    deductible: 1500,
    outOfPocket: 4500,
    networkSize: "1.4M",
    hospitals: 5800,
    description: "Balanced coverage for growing families with extensive network access."
  };

  const estimatedCost = (plan.price * 12) + (estimator.visits * 30) + (estimator.prescriptions === 'brand' ? 500 : 100);

  return (
    <div className="min-h-screen bg-vitalis-sage font-sans text-vitalis-navy">
      <Navbar />
      
      <main className="pt-24 pb-20">
        {/* Hero */}
        <div className="bg-vitalis-navy text-white py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <div className="flex items-center gap-2 text-vitalis-amber mb-2">
                  <Star className="w-5 h-5 fill-current" />
                  <span className="font-bold">{plan.rating}</span>
                  <span className="text-white/60">({plan.reviews} reviews)</span>
                </div>
                <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">{plan.name}</h1>
                <p className="text-xl text-white/80 max-w-2xl">{plan.description}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl min-w-[280px]">
                <div className="text-sm text-white/60 uppercase tracking-wider mb-1">Estimated Monthly</div>
                <div className="text-4xl font-mono font-bold mb-4">${plan.price}</div>
                <button className="w-full bg-vitalis-coral text-white py-3 rounded-full font-bold hover:bg-opacity-90 transition-all shadow-lg">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="bg-white border-b border-gray-100">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
              {[
                { label: 'Monthly Premium', value: `$${plan.price}` },
                { label: 'Deductible', value: `$${plan.deductible}/ind` },
                { label: 'Out-of-Pocket Max', value: `$${plan.outOfPocket}/ind` },
                { label: 'Network Size', value: `${plan.networkSize}+` },
              ].map((stat, i) => (
                <div key={i} className="p-6 text-center">
                  <div className="text-xs text-vitalis-grey uppercase tracking-wider mb-1">{stat.label}</div>
                  <div className="text-xl font-bold font-mono">{stat.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Tabs */}
            <div>
              <div className="flex border-b border-gray-200 mb-8 overflow-x-auto">
                {[
                  { id: 'medical', label: 'Medical', icon: Stethoscope },
                  { id: 'rx', label: 'Prescriptions', icon: Pill },
                  { id: 'dental', label: 'Dental & Vision', icon: Activity },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={cn(
                      "flex items-center gap-2 px-6 py-4 font-medium border-b-2 transition-colors whitespace-nowrap",
                      activeTab === tab.id 
                        ? "border-vitalis-teal text-vitalis-teal" 
                        : "border-transparent text-vitalis-grey hover:text-vitalis-navy"
                    )}
                  >
                    <tab.icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                ))}
              </div>

              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white p-8 rounded-3xl shadow-sm space-y-6"
              >
                {activeTab === 'medical' && (
                  <div className="space-y-6">
                    {[
                      { label: 'Primary Care Visit', cost: '$25 copay', note: 'No deductible' },
                      { label: 'Specialist Visit', cost: '$50 copay', note: 'No deductible' },
                      { label: 'Urgent Care', cost: '$40 copay', note: '' },
                      { label: 'Emergency Room', cost: '$250 copay + 20%', note: 'Waived if admitted' },
                      { label: 'Hospital Stay', cost: '20% after deductible', note: '' },
                    ].map((item, i) => (
                      <div key={i} className="flex justify-between items-center py-4 border-b border-gray-50 last:border-0">
                        <span className="font-medium text-lg">{item.label}</span>
                        <div className="text-right">
                          <div className="font-bold text-vitalis-teal">{item.cost}</div>
                          {item.note && <div className="text-xs text-vitalis-grey">{item.note}</div>}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                {activeTab === 'rx' && (
                  <div className="space-y-6">
                    <div className="p-4 bg-vitalis-sage/30 rounded-xl flex gap-4 items-start">
                      <Info className="w-5 h-5 text-vitalis-teal shrink-0 mt-0.5" />
                      <p className="text-sm text-vitalis-navy">Mail order available: Get a 90-day supply for just 2.5x your monthly copay.</p>
                    </div>
                    {[
                      { label: 'Tier 1 (Preferred Generic)', cost: '$10' },
                      { label: 'Tier 2 (Generic)', cost: '$25' },
                      { label: 'Tier 3 (Preferred Brand)', cost: '$45' },
                      { label: 'Tier 4 (Non-Preferred Brand)', cost: '$75' },
                    ].map((item, i) => (
                      <div key={i} className="flex justify-between items-center py-4 border-b border-gray-50 last:border-0">
                        <span className="font-medium text-lg">{item.label}</span>
                        <div className="font-bold text-vitalis-teal">{item.cost}</div>
                      </div>
                    ))}
                  </div>
                )}
                {activeTab === 'dental' && (
                   <div className="text-center py-12 text-vitalis-grey">
                     <p>Dental and Vision coverage is available as an add-on for $15/mo.</p>
                     <button className="mt-4 text-vitalis-coral font-medium hover:underline">View Add-on Details</button>
                   </div>
                )}
              </motion.div>
            </div>

            {/* Cost Estimator */}
            <div className="bg-vitalis-navy text-white p-8 rounded-3xl overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-vitalis-teal rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2" />
              
              <h2 className="font-serif text-3xl font-bold mb-6 relative z-10">Estimate your annual costs</h2>
              
              <div className="grid md:grid-cols-2 gap-8 relative z-10">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm text-vitalis-blue mb-2">Doctor visits per year: {estimator.visits}</label>
                    <input 
                      type="range" min="0" max="20" 
                      value={estimator.visits}
                      onChange={(e) => setEstimator({...estimator, visits: parseInt(e.target.value)})}
                      className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-vitalis-coral"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-vitalis-blue mb-2">Prescriptions</label>
                    <select 
                      value={estimator.prescriptions}
                      onChange={(e) => setEstimator({...estimator, prescriptions: e.target.value})}
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-vitalis-coral"
                    >
                      <option value="none">None</option>
                      <option value="generic">Mostly Generics</option>
                      <option value="brand">Brand Name</option>
                    </select>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 flex flex-col justify-center items-center text-center border border-white/10">
                  <div className="text-sm text-vitalis-blue uppercase tracking-wider mb-2">Estimated Annual Cost</div>
                  <div className="text-4xl font-mono font-bold mb-2">${estimatedCost.toLocaleString()}</div>
                  <div className="text-xs text-white/60">Includes premiums, deductibles, and copays</div>
                </div>
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-3xl shadow-sm">
              <h3 className="font-serif text-xl font-bold mb-4">Plan Documents</h3>
              <ul className="space-y-3">
                {[
                  'Summary of Benefits',
                  'Evidence of Coverage',
                  'Provider Directory',
                  'Drug List (Formulary)'
                ].map((doc) => (
                  <li key={doc}>
                    <a href="#" className="flex items-center gap-3 text-vitalis-grey hover:text-vitalis-teal transition-colors group">
                      <div className="w-8 h-8 bg-vitalis-sage rounded-lg flex items-center justify-center group-hover:bg-vitalis-teal group-hover:text-white transition-colors">
                        <FileText className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-medium">{doc}</span>
                      <Download className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-vitalis-ivory p-6 rounded-3xl border border-vitalis-sage">
              <h3 className="font-serif text-xl font-bold mb-4">Need help deciding?</h3>
              <p className="text-vitalis-grey text-sm mb-6">Our licensed agents can walk you through the details.</p>
              <button className="w-full bg-white border border-vitalis-teal text-vitalis-teal py-3 rounded-full font-bold hover:bg-vitalis-teal hover:text-white transition-colors mb-3">
                Schedule a Call
              </button>
              <div className="text-center text-sm text-vitalis-grey">
                or call <span className="font-bold text-vitalis-navy">1-800-VITALIS</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
