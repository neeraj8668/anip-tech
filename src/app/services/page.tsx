import Image from 'next/image';

export default function Services() {
  return (
    <div className="bg-[#18191d] min-h-screen w-full text-white relative overflow-x-hidden">
      {/* Animated Gradient Overlay */}
      <div className="pointer-events-none fixed inset-0 z-0 animate-gradient-move bg-gradient-to-tr from-pink-500/20 via-yellow-400/10 to-indigo-500/20 blur-2xl opacity-70" />
      
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[60vh] px-4 pt-40 pb-16 z-10">
        <div className="flex flex-col items-center justify-center w-full">
          <h1 className="text-6xl md:text-8xl font-extrabold text-center bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent uppercase tracking-tight animate-gradient-text">
            Our Services
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-gray-200 font-medium text-center max-w-2xl drop-shadow-lg">
            Comprehensive technology solutions tailored to your business needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="w-full py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Web Development',
                description: 'Custom web applications and responsive websites built with modern technologies.',
                features: [
                  'Responsive Design',
                  'Progressive Web Apps',
                  'E-commerce Solutions',
                  'Content Management Systems',
                ],
                icon: '🌐'
              },
              {
                title: 'Mobile App Development',
                description: 'Native and cross-platform mobile applications for iOS and Android.',
                features: [
                  'iOS Development',
                  'Android Development',
                  'Cross-platform Solutions',
                  'App Store Optimization',
                ],
                icon: '📱'
              },
              {
                title: 'Cloud Solutions',
                description: 'Scalable cloud infrastructure and deployment solutions.',
                features: [
                  'Cloud Migration',
                  'Serverless Architecture',
                  'DevOps Automation',
                  'Cloud Security',
                ],
                icon: '☁️'
              },
              {
                title: 'Digital Marketing',
                description: 'Strategic digital marketing solutions to grow your online presence.',
                features: [
                  'SEO Optimization',
                  'Social Media Marketing',
                  'Content Marketing',
                  'Analytics & Reporting',
                ],
                icon: '📈'
              },
              {
                title: 'UI/UX Design',
                description: 'User-centered design solutions that enhance user experience.',
                features: [
                  'User Research',
                  'Wireframing',
                  'Prototyping',
                  'Usability Testing',
                ],
                icon: '🎨'
              },
              {
                title: 'IT Consulting',
                description: 'Expert technology consulting to drive your business forward.',
                features: [
                  'Technology Strategy',
                  'Digital Transformation',
                  'IT Infrastructure',
                  'Security Assessment',
                ],
                icon: '💡'
              },
            ].map((service) => (
              <div key={service.title} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                <span className="text-4xl mb-6 block">{service.icon}</span>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-300">
                      <svg className="w-5 h-5 text-pink-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full bg-white/5 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent">Our Process</h2>
          <div className="grid gap-8 md:grid-cols-4">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'We begin by understanding your business goals and requirements.'
              },
              {
                step: '02',
                title: 'Planning',
                description: 'We create a detailed roadmap for your project implementation.'
              },
              {
                step: '03',
                title: 'Development',
                description: 'Our team builds your solution using cutting-edge technologies.'
              },
              {
                step: '04',
                title: 'Launch',
                description: 'We ensure a smooth deployment and provide ongoing support.'
              }
            ].map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-pink-500 to-yellow-500 flex items-center justify-center">
                  <span className="text-2xl font-bold">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white py-24 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="uppercase tracking-widest text-sm font-semibold">Ready to get started?</span>
            <h2 className="text-4xl md:text-5xl font-extrabold mt-2 mb-6">Let's discuss your project</h2>
            <a href="/contact" className="border border-white px-6 py-3 rounded text-lg font-bold hover:bg-white hover:text-pink-500 transition">Contact Us</a>
          </div>
          <div className="hidden md:block">
            <Image src="/cta-image.png" alt="CTA" width={300} height={200} className="rounded-2xl" />
          </div>
        </div>
      </section>
    </div>
  );
} 