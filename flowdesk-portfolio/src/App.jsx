import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import Features from './components/Features';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="min-h-screen bg-brand-bg text-white relative select-none">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-6 lg:px-8">
        <Hero />
        <Ticker />
        <Features />
        <Testimonials />
      </main>
    </div>
  );
}

export default App;