import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { AuthProvider } from './context/AuthContext.jsx';
import ProtectedRoute from './components/admin/ProtectedRoute.jsx';

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
import SubmitManuscript from "./pages/SubmitManuscript";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";

import AdminLogin from './pages/admin/AdminLogin.jsx';
import AdminDashboard from './pages/admin/AdminDashboard.jsx';
import AdminJournalsList from './pages/admin/AdminJournalsList.jsx';
import AdminJournalForm from './pages/admin/AdminJournalForm.jsx';
import AdminJournalView from './pages/admin/AdminJournalView.jsx';
import AdminManuscriptsList from './pages/admin/AdminManuscriptsList.jsx';
import AdminManuscriptView from './pages/admin/AdminManuscriptView.jsx';
import AdminEnquiriesList from './pages/admin/AdminEnquiriesList.jsx';
import AdminEnquiryView from './pages/admin/AdminEnquiryView.jsx';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/journals" element={<Journals />} />
          <Route path="/why-publish-us" element={<WhyPublishUs />} />
          <Route path="/reviewer" element={<Reviewer />} />
          <Route path="/editors-information" element={<EditorsInformation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsConditions />}
          />
          <Route path="/indexing" element={<Indexing />} />
          <Route path="/news" element={<News />} />
          <Route
            path="/submit-manuscript"
            element={<SubmitManuscript />}
          />
          <Route path="/authors" element={<Authors />} />

          {/* ===================================================
              ADMIN ROUTES
          ==================================================== */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/journals"
            element={
              <ProtectedRoute>
                <AdminJournalsList />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/journals/add"
            element={
              <ProtectedRoute>
                <AdminJournalForm />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/journals/edit/:id"
            element={
              <ProtectedRoute>
                <AdminJournalForm />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/journals/view/:id"
            element={
              <ProtectedRoute>
                <AdminJournalView />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/manuscripts"
            element={
              <ProtectedRoute>
                <AdminManuscriptsList />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/manuscripts/view/:id"
            element={
              <ProtectedRoute>
                <AdminManuscriptView />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/enquiries"
            element={
              <ProtectedRoute>
                <AdminEnquiriesList />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/enquiries/view/:id"
            element={
              <ProtectedRoute>
                <AdminEnquiryView />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}
