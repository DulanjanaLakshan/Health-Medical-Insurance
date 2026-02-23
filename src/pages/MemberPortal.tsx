import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Navbar, Footer } from '@/components/Layout';
import { User, Bell, Calendar, Pill, FileText, Activity, Shield, Video, Search, Zap, AlertCircle, CreditCard, ChevronRight, QrCode, Download } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

export default function MemberPortal() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="min-h-screen bg-vitalis-sage font-sans text-vitalis-navy">
      <Navbar />
      
      <main className="pt-28 pb-20 container mx-auto px-4">
        {/* Welcome Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h1 className="font-serif text-4xl font-bold text-vitalis-navy mb-2">Welcome back, Sarah</h1>
            <p className="text-vitalis-grey">Thursday, February 23, 2026</p>
          </div>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow">
              <Bell className="w-4 h-4 text-vitalis-coral" />
              <span>2 New Messages</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow">
              <User className="w-4 h-4 text-vitalis-teal" />
              <span>Profile</span>
            </button>
          </div>
        </div>

        {/* Health Snapshot Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Coverage */}
          <div className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 bg-vitalis-blue/30 rounded-full flex items-center justify-center text-vitalis-navy">
                <Shield className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold bg-vitalis-green/10 text-vitalis-green px-2 py-1 rounded-full">Active</span>
            </div>
            <h3 className="font-bold text-lg mb-1">Silver Advantage</h3>
            <p className="text-sm text-vitalis-grey mb-4">Family Plan • You + 3</p>
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span>Deductible</span>
                <span className="font-bold">$1,500 / $3,000</span>
              </div>
              <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-vitalis-teal w-1/2" />
              </div>
            </div>
          </div>

          {/* Appointments */}
          <div className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 bg-vitalis-coral/20 rounded-full flex items-center justify-center text-vitalis-coral">
                <Calendar className="w-5 h-5" />
              </div>
              <button className="text-xs font-bold text-vitalis-teal hover:underline">+ New</button>
            </div>
            <h3 className="font-bold text-lg mb-1">Next Visit</h3>
            <div className="bg-vitalis-sage/30 p-3 rounded-xl mb-3">
              <div className="text-sm font-bold">Dr. Miller</div>
              <div className="text-xs text-vitalis-grey">Tomorrow, 10:00 AM</div>
            </div>
            <button className="w-full text-center text-sm font-medium text-vitalis-teal border border-vitalis-teal/20 rounded-lg py-2 hover:bg-vitalis-teal hover:text-white transition-colors">
              Join Virtual Waiting Room
            </button>
          </div>

          {/* Prescriptions */}
          <div className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
                <Pill className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold bg-vitalis-amber/10 text-vitalis-amber px-2 py-1 rounded-full">1 Action</span>
            </div>
            <h3 className="font-bold text-lg mb-1">Prescriptions</h3>
            <p className="text-sm text-vitalis-grey mb-4">3 Active • 1 Refill Ready</p>
            <div className="flex items-center justify-between p-3 border border-gray-100 rounded-xl">
              <div className="text-sm font-medium">Lisinopril</div>
              <button className="text-xs bg-vitalis-navy text-white px-3 py-1.5 rounded-full hover:bg-opacity-90">Refill</button>
            </div>
          </div>

          {/* Claims */}
          <div className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                <FileText className="w-5 h-5" />
              </div>
            </div>
            <h3 className="font-bold text-lg mb-1">Recent Claim</h3>
            <div className="text-2xl font-mono font-bold text-vitalis-navy mb-1">$45.23</div>
            <p className="text-xs text-vitalis-grey mb-4">Processed • Feb 15</p>
            <Link to="#" className="flex items-center gap-1 text-sm font-medium text-vitalis-teal hover:underline">
              View all claims <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Care Navigation Hub */}
            <section>
              <h2 className="font-serif text-2xl font-bold mb-6">Find Care</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: Video, label: 'Virtual Visit', desc: 'Avg 8 min wait', color: 'bg-blue-50 text-blue-600' },
                  { icon: Search, label: 'Find Doctor', desc: 'Specialists near you', color: 'bg-teal-50 text-teal-600' },
                  { icon: Zap, label: 'Urgent Care', desc: 'Walk-in clinics', color: 'bg-amber-50 text-amber-600' },
                  { icon: AlertCircle, label: 'Emergency', desc: 'Symptom checker', color: 'bg-red-50 text-red-600' },
                ].map((item, i) => (
                  <button key={i} className="bg-white p-4 rounded-2xl shadow-sm hover:shadow-md transition-all text-left group">
                    <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform", item.color)}>
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div className="font-bold text-vitalis-navy">{item.label}</div>
                    <div className="text-xs text-vitalis-grey">{item.desc}</div>
                  </button>
                ))}
              </div>
            </section>

            {/* Wellness Feed */}
            <section className="bg-white p-8 rounded-3xl shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-serif text-2xl font-bold">Wellness Activity</h2>
                <span className="text-vitalis-teal font-medium">1,200 Points</span>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-vitalis-sage rounded-full flex items-center justify-center text-vitalis-teal">
                    <Activity className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Daily Steps Goal</span>
                      <span className="text-sm text-vitalis-grey">6,842 / 8,000</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-vitalis-coral w-[85%]" />
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-vitalis-ivory rounded-2xl border border-vitalis-sage flex gap-4">
                  <div className="w-20 h-20 bg-gray-200 rounded-xl shrink-0 overflow-hidden">
                    <img src="https://picsum.photos/seed/salad/200/200" alt="Recipe" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-vitalis-coral uppercase tracking-wider mb-1">Nutrition</div>
                    <h3 className="font-bold mb-1">5 Heart-Healthy Recipes for Spring</h3>
                    <p className="text-sm text-vitalis-grey line-clamp-1">Fresh ingredients that lower cholesterol and boost energy.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar - ID Card */}
          <div className="lg:col-span-1">
            <h2 className="font-serif text-2xl font-bold mb-6">Digital ID Card</h2>
            
            <div className="perspective-1000 h-56 cursor-pointer group" onClick={() => setFlipped(!flipped)}>
              <motion.div 
                className="relative w-full h-full transition-all duration-500 preserve-3d"
                animate={{ rotateY: flipped ? 180 : 0 }}
              >
                {/* Front */}
                <div className="absolute inset-0 backface-hidden bg-gradient-to-br from-vitalis-teal to-vitalis-navy rounded-2xl p-6 text-white shadow-xl overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
                  
                  <div className="flex justify-between items-start mb-6">
                    <div className="font-serif font-bold text-xl tracking-wider">VITALIS</div>
                    <QrCode className="w-8 h-8 opacity-80" />
                  </div>
                  
                  <div className="space-y-4 relative z-10">
                    <div>
                      <div className="text-[10px] uppercase opacity-60">Member Name</div>
                      <div className="font-mono font-medium text-lg">SARAH JENKINS</div>
                    </div>
                    <div className="flex justify-between">
                      <div>
                        <div className="text-[10px] uppercase opacity-60">Member ID</div>
                        <div className="font-mono">VH-892-442-01</div>
                      </div>
                      <div className="text-right">
                        <div className="text-[10px] uppercase opacity-60">Group #</div>
                        <div className="font-mono">99421</div>
                      </div>
                    </div>
                    <div className="pt-2 border-t border-white/20 flex justify-between items-end">
                      <div className="text-xs bg-white/20 px-2 py-1 rounded">Silver Advantage PPO</div>
                      <div className="text-[10px] opacity-60">Flip for details ↻</div>
                    </div>
                  </div>
                </div>

                {/* Back */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 bg-white rounded-2xl p-6 shadow-xl border border-gray-200">
                  <div className="space-y-3 text-xs text-vitalis-navy">
                    <div>
                      <div className="font-bold mb-1">Member Services</div>
                      <div className="font-mono">1-800-VITALIS</div>
                    </div>
                    <div>
                      <div className="font-bold mb-1">24/7 Nurse Line</div>
                      <div className="font-mono">1-888-NURSE-24</div>
                    </div>
                    <div>
                      <div className="font-bold mb-1">Pharmacist Help</div>
                      <div className="font-mono">1-800-RX-HELP</div>
                    </div>
                    <div className="pt-2 border-t border-gray-100 text-[10px] text-gray-500">
                      Submit claims to: PO Box 1234, Healthcare City, US 90210
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="mt-6 space-y-3">
              <button className="w-full flex items-center justify-center gap-2 bg-vitalis-navy text-white py-3 rounded-xl font-medium hover:bg-opacity-90 transition-colors">
                <Download className="w-4 h-4" /> Download PDF
              </button>
              <button className="w-full flex items-center justify-center gap-2 bg-white border border-gray-200 text-vitalis-navy py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors">
                Add to Apple Wallet
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
