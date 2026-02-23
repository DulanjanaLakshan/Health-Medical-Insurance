import React from 'react';
import { Navbar, Footer } from '@/components/Layout';
import { Phone, MessageSquare, Video, Mail, ChevronDown, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-vitalis-sage font-sans text-vitalis-navy">
      <Navbar />
      
      <main className="pt-32 pb-20 container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">How can we help you today?</h1>
          <div className="max-w-xl mx-auto relative">
            <input 
              type="text" 
              placeholder="Search FAQs, topics, or ask a question..." 
              className="w-full px-6 py-4 rounded-full border border-gray-200 shadow-sm focus:border-vitalis-teal focus:ring-2 focus:ring-vitalis-teal/20 outline-none text-lg"
            />
          </div>
        </div>

        {/* Support Options */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {[
            { icon: Phone, title: "24/7 Phone Support", sub: "1-800-VITALIS", action: "Call Now", color: "bg-blue-50 text-blue-600" },
            { icon: MessageSquare, title: "Live Chat", sub: "Wait time: < 2 min", action: "Start Chat", color: "bg-green-50 text-green-600" },
            { icon: Video, title: "Video Appointment", sub: "Face-to-face help", action: "Book Call", color: "bg-purple-50 text-purple-600" },
            { icon: Mail, title: "Email Support", sub: "Response in 24h", action: "Send Message", color: "bg-amber-50 text-amber-600" }
          ].map((opt, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow text-center group">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform ${opt.color}`}>
                <opt.icon className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-xl mb-1">{opt.title}</h3>
              <p className="text-vitalis-grey mb-6">{opt.sub}</p>
              <button className="w-full border border-gray-200 py-2 rounded-xl font-medium hover:bg-vitalis-navy hover:text-white transition-colors">
                {opt.action}
              </button>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* FAQ */}
          <div>
            <h2 className="font-serif text-3xl font-bold mb-8">Common Questions</h2>
            <div className="space-y-4">
              {[
                "How do I add a new baby to my plan?",
                "What's covered under preventive care?",
                "How do I find a therapist?",
                "Can I keep my current doctor?",
                "What if I can't pay my premium?"
              ].map((q, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-sm cursor-pointer hover:bg-gray-50 transition-colors flex justify-between items-center group">
                  <span className="font-medium">{q}</span>
                  <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-vitalis-teal" />
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-3xl shadow-sm">
            <h2 className="font-serif text-3xl font-bold mb-8">Send us a message</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-vitalis-grey mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-vitalis-teal outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-vitalis-grey mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-vitalis-teal outline-none" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-vitalis-grey mb-2">Reason for contact</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-vitalis-teal outline-none bg-white">
                  <option>General Inquiry</option>
                  <option>Billing Question</option>
                  <option>Technical Support</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-vitalis-grey mb-2">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-vitalis-teal outline-none"></textarea>
              </div>
              <button className="w-full bg-vitalis-teal text-white py-4 rounded-xl font-bold hover:bg-opacity-90 transition-colors flex items-center justify-center gap-2">
                Send Message <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
