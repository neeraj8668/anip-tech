import Image from 'next/image';

export default function Portfolio() {
  const projects = [
    {
      title: 'E-commerce Platform',
      category: 'Web Development',
      description: 'A modern e-commerce platform built with Next.js and Shopify integration.',
      technologies: ['Next.js', 'Shopify', 'Tailwind CSS', 'Stripe'],
      image: '/work1.jpg',
    },
    {
      title: 'Mobile Banking App',
      category: 'Mobile Development',
      description: 'A secure and user-friendly mobile banking application for iOS and Android.',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'AWS'],
      image: '/work2.jpg',
    },
    {
      title: 'Cloud Migration',
      category: 'Cloud Solutions',
      description: 'Successful migration of legacy systems to cloud infrastructure.',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
      image: '/work3.jpg',
    },
    {
      title: 'Healthcare Portal',
      category: 'Web Development',
      description: 'A comprehensive healthcare management system for clinics.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis'],
      image: '/work4.jpg',
    },
    {
      title: 'AI-Powered Analytics',
      category: 'Data Science',
      description: 'Machine learning solution for business analytics and predictions.',
      technologies: ['Python', 'TensorFlow', 'AWS', 'Docker'],
      image: '/work5.jpg',
    },
    {
      title: 'Digital Marketing Campaign',
      category: 'Digital Marketing',
      description: 'Successful digital marketing campaign for a retail brand.',
      technologies: ['SEO', 'Social Media', 'Content Marketing', 'Analytics'],
      image: '/work6.jpg',
    },
  ];

  return (
    <div className="bg-[#18191d] min-h-screen w-full text-white relative overflow-x-hidden">
      {/* Animated Gradient Overlay */}
      <div className="pointer-events-none fixed inset-0 z-0 animate-gradient-move bg-gradient-to-tr from-pink-500/20 via-yellow-400/10 to-indigo-500/20 blur-2xl opacity-70" />
      
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[60vh] px-4 pt-40 pb-16 z-10">
        <div className="flex flex-col items-center justify-center w-full">
          <h1 className="text-6xl md:text-8xl font-extrabold text-center bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent uppercase tracking-tight animate-gradient-text">
            Our Portfolio
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-gray-200 font-medium text-center max-w-2xl drop-shadow-lg">
            Explore our recent projects and success stories
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="w-full py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.title}
                className="flex flex-col h-full rounded-2xl overflow-hidden bg-white/10 backdrop-blur-lg hover:bg-white/20 transition-all duration-300 shadow-lg"
              >
                <div className="relative w-full aspect-[16/10]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="flex flex-col flex-1 p-6">
                  <span className="inline-block px-3 py-1 text-sm font-semibold text-pink-500 bg-pink-500/10 rounded-full mb-4">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4 flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-sm bg-white/10 text-gray-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="w-full bg-white/5 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent">Featured Case Studies</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                title: 'Digital Transformation Success',
                client: 'Global Retail Chain',
                challenge: 'Legacy systems limiting growth and innovation',
                solution: 'Implemented cloud-based infrastructure and modern e-commerce platform',
                results: '50% increase in online sales, 30% reduction in operational costs',
                image: '/case-study1.jpg'
              },
              {
                title: 'Mobile App Launch',
                client: 'Financial Services Provider',
                challenge: 'Need for secure, user-friendly mobile banking solution',
                solution: 'Developed cross-platform mobile app with advanced security features',
                results: '100,000+ downloads, 4.8/5 app store rating',
                image: '/case-study2.jpg'
              },
            ].map((caseStudy) => (
              <div key={caseStudy.title} className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden hover:bg-white/20 transition-all duration-300">
                <div className="aspect-w-16 aspect-h-9">
                  <Image
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{caseStudy.title}</h3>
                  <p className="text-pink-500 mb-6">{caseStudy.client}</p>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-1">Challenge</h4>
                      <p className="text-gray-300">{caseStudy.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-1">Solution</h4>
                      <p className="text-gray-300">{caseStudy.solution}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-1">Results</h4>
                      <p className="text-gray-300">{caseStudy.results}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white py-24 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="uppercase tracking-widest text-sm font-semibold">Want to work with us?</span>
            <h2 className="text-4xl md:text-5xl font-extrabold mt-2 mb-6">Let's create something amazing</h2>
            <a href="/contact" className="border border-white px-6 py-3 rounded text-lg font-bold hover:bg-white hover:text-pink-500 transition">Get in Touch</a>
          </div>
          <div className="hidden md:block">
            <Image src="/cta-image.png" alt="CTA" width={300} height={200} className="rounded-2xl" />
          </div>
        </div>
      </section>
    </div>
  );
} 