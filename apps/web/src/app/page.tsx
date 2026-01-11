import Image from 'next/image';
import { Button } from '@soulstice/ui';

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 scroll-smooth">
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
              <a href="#how-it-works" className="hover:text-green-400 transition-colors">How It Works</a>
              <a href="#pricing" className="hover:text-green-400 transition-colors">Pricing</a>
              <a href="#testimonials" className="hover:text-green-400 transition-colors">Reviews</a>
              <a href="#faq" className="hover:text-green-400 transition-colors">FAQ</a>
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

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
            Why Choose Solar?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-green-50 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Save Money</h3>
              <p className="text-gray-600">
                Reduce your electricity bills by up to 70% with solar energy. Start saving from day one.
              </p>
            </div>
            <div className="p-6 bg-green-50 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Eco-Friendly</h3>
              <p className="text-gray-600">
                Reduce your carbon footprint and contribute to a cleaner, greener planet.
              </p>
            </div>
            <div className="p-6 bg-green-50 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Energy Independence</h3>
              <p className="text-gray-600">
                Generate your own clean energy and protect yourself from rising utility costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gradient-to-br from-green-600 to-emerald-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            How It Works
          </h2>
          <p className="text-center text-green-100 mb-16 max-w-2xl mx-auto">
            Our simple 4-step process makes going solar easy and stress-free
          </p>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white text-green-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Free Consultation</h3>
              <p className="text-green-100">
                Schedule a call with our solar experts to discuss your energy needs and goals.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white text-green-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">Custom Design</h3>
              <p className="text-green-100">
                We create a tailored solar system design optimized for your home and budget.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white text-green-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Professional Installation</h3>
              <p className="text-green-100">
                Our certified technicians install your system quickly and efficiently.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white text-green-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold mb-3">Start Saving</h3>
              <p className="text-green-100">
                Flip the switch and start enjoying clean energy and lower bills immediately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
            Flexible Pricing Options
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Starter</h3>
              <p className="text-4xl font-bold text-green-600 mb-4">$8,999</p>
              <ul className="space-y-3 text-gray-600">
                <li>5kW System</li>
                <li>15-20 Panels</li>
                <li>25-Year Warranty</li>
                <li>Free Installation</li>
              </ul>
            </div>
            <div className="p-8 bg-green-600 rounded-lg shadow-xl transform scale-105">
              <h3 className="text-2xl font-bold text-white mb-4">Popular</h3>
              <p className="text-4xl font-bold text-white mb-4">$14,999</p>
              <ul className="space-y-3 text-white">
                <li>10kW System</li>
                <li>30-35 Panels</li>
                <li>25-Year Warranty</li>
                <li>Free Installation + Monitoring</li>
              </ul>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Premium</h3>
              <p className="text-4xl font-bold text-green-600 mb-4">$24,999</p>
              <ul className="space-y-3 text-gray-600">
                <li>15kW+ System</li>
                <li>45+ Panels</li>
                <li>30-Year Warranty</li>
                <li>Full Service Package</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Join thousands of satisfied homeowners who made the switch to solar
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-green-50 p-8 rounded-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Best investment we've ever made! Our electricity bill dropped by 65% in the first month. The installation team was professional and finished in just two days."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  SJ
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Sarah Johnson</p>
                  <p className="text-sm text-gray-600">Homeowner, Austin TX</p>
                </div>
              </div>
            </div>
            <div className="bg-green-50 p-8 rounded-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "The whole process was seamless from start to finish. They handled all the permits and paperwork. Now I'm saving money and helping the environment!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  MC
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Michael Chen</p>
                  <p className="text-sm text-gray-600">Homeowner, San Diego CA</p>
                </div>
              </div>
            </div>
            <div className="bg-green-50 p-8 rounded-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "We were skeptical at first, but after seeing our neighbor's results, we decided to go for it. Three years later, we've saved over $8,000!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  RP
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Robert & Patricia Davis</p>
                  <p className="text-sm text-gray-600">Homeowners, Phoenix AZ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                About Soulstice
              </h2>
              <p className="text-gray-600 mb-4">
                With over 10 years of experience, we've helped thousands of homeowners transition to clean, renewable solar energy.
              </p>
              <p className="text-gray-600">
                Our team of certified professionals ensures every installation meets the highest standards of quality and efficiency.
              </p>
            </div>
            <div className="relative h-64 md:h-96">
              <Image
                src="https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=800&h=600&fit=crop"
                alt="Solar installation team"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Everything you need to know about going solar
          </p>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                How much can I save with solar panels?
              </h3>
              <p className="text-gray-600">
                Most homeowners save 40-70% on their electricity bills. The exact savings depend on your current energy usage, local electricity rates, and the size of your solar system. On average, homeowners save $20,000-$30,000 over 25 years.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                How long does installation take?
              </h3>
              <p className="text-gray-600">
                Most residential installations take 1-3 days to complete. The entire process from consultation to activation typically takes 4-8 weeks, including design, permitting, and inspection.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                What happens during cloudy days or at night?
              </h3>
              <p className="text-gray-600">
                Your solar panels produce less energy on cloudy days but still generate power. At night, you'll draw electricity from the grid. With net metering, excess energy produced during sunny days can offset nighttime usage, and you can add battery storage for complete independence.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                What kind of warranty do you offer?
              </h3>
              <p className="text-gray-600">
                All our systems come with a comprehensive warranty package: 25-30 year panel performance warranty, 10-year workmanship warranty, and manufacturer warranties on inverters and other equipment. We also offer ongoing monitoring and support.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Do you offer financing options?
              </h3>
              <p className="text-gray-600">
                Yes! We offer multiple financing options including solar loans, leases, and power purchase agreements (PPAs). Many homeowners pay less monthly for solar than they were paying for electricity. We also help you take advantage of federal tax credits and local incentives.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                How do I maintain my solar panels?
              </h3>
              <p className="text-gray-600">
                Solar panels require minimal maintenance. Rain naturally cleans them, and we recommend a professional inspection every 2-3 years. Our monitoring system alerts you to any performance issues, and our team is always available for support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section with Form */}
      <section id="contact" className="py-20 bg-gradient-to-br from-green-900 to-emerald-800 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Get Your Free Solar Consultation
            </h2>
            <p className="text-xl text-green-100">
              Fill out the form below and our solar experts will contact you within 24 hours
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="bg-white rounded-lg p-8 text-gray-900">
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-medium mb-2">
                    Home Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="monthlyBill" className="block text-sm font-medium mb-2">
                    Average Monthly Electric Bill
                  </label>
                  <select
                    id="monthlyBill"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  >
                    <option value="">Select range</option>
                    <option value="0-100">$0 - $100</option>
                    <option value="100-200">$100 - $200</option>
                    <option value="200-300">$200 - $300</option>
                    <option value="300+">$300+</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Additional Comments
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    placeholder="Tell us about your solar goals..."
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold"
                >
                  Get Free Quote
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-green-700 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-lg">Phone</p>
                      <p className="text-green-100">1-800-SOLAR-NOW</p>
                      <p className="text-sm text-green-200">Mon-Fri: 8am-8pm, Sat: 9am-5pm</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-green-700 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-lg">Email</p>
                      <p className="text-green-100">info@soulsticesolar.com</p>
                      <p className="text-sm text-green-200">We'll respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-green-700 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-lg">Office</p>
                      <p className="text-green-100">123 Solar Street</p>
                      <p className="text-green-100">Green City, CA 90210</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-800/50 rounded-lg p-6">
                <h4 className="font-semibold text-lg mb-3">Why Choose Us?</h4>
                <ul className="space-y-2 text-green-100">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    No pressure sales approach
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Free detailed energy analysis
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Certified installers with 10+ years experience
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Comprehensive warranties included
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
