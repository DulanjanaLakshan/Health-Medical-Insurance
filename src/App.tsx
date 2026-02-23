/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PlanFinder from './pages/PlanFinder';
import PlanDetail from './pages/PlanDetail';
import MemberPortal from './pages/MemberPortal';
import ProviderSearch from './pages/ProviderSearch';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import { ScrollToTop } from './components/ScrollToTop';
import { Chatbot } from './components/Chatbot';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Chatbot />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plans" element={<PlanFinder />} />
        <Route path="/plans/:id" element={<PlanDetail />} />
        <Route path="/portal" element={<MemberPortal />} />
        <Route path="/providers" element={<ProviderSearch />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
