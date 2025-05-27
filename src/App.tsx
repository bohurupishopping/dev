import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'next-themes';
import { Toaster } from '@/components/ui/sonner';
import './App.css';

// Lazy load the Home page for better performance
const Home = lazy(() => import('@/pages/Home'));

function App() {
  return (
    <ThemeProvider defaultTheme="system" enableSystem>
      <Router>
        <Suspense fallback={<div className="h-screen w-screen flex items-center justify-center">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Suspense>
      </Router>
      <Toaster position="bottom-right" />
    </ThemeProvider>
  );
}

export default App;