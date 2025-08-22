import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'next-themes';
import { Toaster } from '@/components/ui/sonner';
import './App.css';

// Lazy load the Home page for better performance
const Home = lazy(() => import('@/pages/Home'));
const PrivacyPolicy = lazy(() => import('@/pages/stockmap/privacy'));
const AboutUs = lazy(() => import('@/pages/stockmap/about'));
const NaturePrivacy = lazy(() => import('@/pages/nature/privacy'));
const SynergeticsPrivacy = lazy(() => import('@/pages/synergetics/privacy'));

function App() {
  return (
    <ThemeProvider defaultTheme="system" enableSystem>
      <Router>
        <Suspense fallback={<div className="h-screen w-screen flex items-center justify-center">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stockmap/privacy" element={<PrivacyPolicy />} />
            <Route path="/stockmap/about" element={<AboutUs />} />
            <Route path="/nature/privacy" element={<NaturePrivacy />} />
            <Route path="/synergetics/privacy" element={<SynergeticsPrivacy />} />
          </Routes>
        </Suspense>
      </Router>
      <Toaster position="bottom-right" />
    </ThemeProvider>
  );
}

export default App;

