import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import About from './pages/About';
import Journals from './pages/Journals';
import WhyPublishUs from './pages/WhyPublishUs';
import Reviewer from './pages/Reviewer';
import EditorsInformation from './pages/EditorsInformation';
import Contact from './pages/Contact';
import Authors from './pages/Authors';
import Indexing from './pages/Indexing';
import News from './pages/News';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/journals" element={<Journals />} />
        <Route path="/why-publish-us" element={<WhyPublishUs />} />
        <Route path="/reviewer" element={<Reviewer />} />
        <Route path="/editors-information" element={<EditorsInformation />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/indexing" element={<Indexing />} />
        <Route path="/news" element={<News />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
