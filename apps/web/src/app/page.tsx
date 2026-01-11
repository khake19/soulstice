import Image from 'next/image';
import { Button } from '@soulstice/ui';

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] overflow-hidden">
        {/* Background Image */}
        <Image
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&h=1080&fit=crop"
          alt="Solar panels on modern home"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-green-900/50" />

        {/* Header/Navigation */}
        <nav className="relative z-10 backdrop-blur-md">
          <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/40 to-white/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <Image
              src="/logo.png"
              alt="Logo"
              width={200}
              height={64}
              className="h-12 sm:h-16 w-auto drop-shadow-md"
            />
            <div className="hidden md:flex gap-8 text-white font-medium drop-shadow-md">
              <a href="#features" className="hover:text-green-400 transition-colors">Features</a>
              <a href="#pricing" className="hover:text-green-400 transition-colors">Pricing</a>
              <a href="#about" className="hover:text-green-400 transition-colors">About</a>
              <a href="#contact" className="hover:text-green-400 transition-colors">Contact</a>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
                Power Your Home with{' '}
                <span className="text-green-400">Clean Energy</span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-100 mb-8">
                Save money, reduce your carbon footprint, and gain energy independence
                with premium solar panel installations tailored to your home.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold shadow-lg hover:shadow-xl"
                >
                  Get Free Quote
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-4 bg-white hover:bg-gray-50 text-green-600 font-semibold shadow-md hover:shadow-lg border-2 border-white"
                >
                  Calculate Savings
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg">
                <div>
                  <div className="text-3xl sm:text-4xl font-bold text-green-400">10+</div>
                  <div className="text-sm text-gray-200">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-bold text-green-400">5000+</div>
                  <div className="text-sm text-gray-200">Installations</div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-bold text-green-400">98%</div>
                  <div className="text-sm text-gray-200">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
