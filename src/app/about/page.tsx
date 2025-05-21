import Image from 'next/image';

export default function About() {
  return (
    <div className="bg-[#18191d] min-h-screen w-full text-white relative overflow-x-hidden">
      {/* Animated Gradient Overlay */}
      <div className="pointer-events-none fixed inset-0 z-0 animate-gradient-move bg-gradient-to-tr from-pink-500/20 via-yellow-400/10 to-indigo-500/20 blur-2xl opacity-70" />
      
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[60vh] px-4 pt-40 pb-16 z-10">
        <div className="flex flex-col items-center justify-center w-full">
          <h1 className="text-6xl md:text-8xl font-extrabold text-center bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent uppercase tracking-tight animate-gradient-text">
            About Us
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-gray-200 font-medium text-center max-w-2xl drop-shadow-lg">
            We are a team of passionate technologists dedicated to helping businesses succeed in the digital age.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="w-full py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent">Our Story</h2>
              <p className="text-lg text-gray-300">
                Founded in 2020, Anip Technologies has grown from a small startup to a leading technology solutions provider. 
                Our journey has been marked by innovation, dedication, and a commitment to excellence.
              </p>
              <p className="text-lg text-gray-300">
                We believe in creating technology solutions that not only solve problems but also drive growth and 
                create lasting value for our clients.
              </p>
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent">Our Mission</h2>
              <p className="text-lg text-gray-300">
                To empower businesses with innovative technology solutions that drive growth and success in the 
                digital landscape.
              </p>
              <p className="text-lg text-gray-300">
                We strive to be at the forefront of technological innovation while maintaining a strong focus on 
                delivering practical, scalable solutions that meet our clients' needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full bg-white/5 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent">Our Team</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                name: 'John Doe',
                role: 'CEO & Founder',
                bio: 'Visionary leader with 15+ years of experience in technology and business.',
                image: '/team1.jpg'
              },
              {
                name: 'Jane Smith',
                role: 'CTO',
                bio: 'Technical expert specializing in cloud architecture and software development.',
                image: '/team2.jpg'
              },
              {
                name: 'Mike Johnson',
                role: 'Head of Design',
                bio: 'Creative director with a passion for user-centered design and innovation.',
                image: '/team3.jpg'
              },
            ].map((member) => (
              <div key={member.name} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                  <Image src={member.image} alt={member.name} width={128} height={128} className="object-cover" />
                </div>
                <h3 className="text-xl font-bold text-center text-white">{member.name}</h3>
                <p className="text-pink-500 text-center mb-4">{member.role}</p>
                <p className="text-gray-300 text-center">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent">Our Values</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: 'Innovation',
                description: 'We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.',
                icon: '💡'
              },
              {
                title: 'Excellence',
                description: 'We maintain the highest standards in everything we do, from code quality to customer service.',
                icon: '⭐'
              },
              {
                title: 'Integrity',
                description: 'We believe in honest, transparent relationships with our clients and partners.',
                icon: '🤝'
              },
            ].map((value) => (
              <div key={value.title} className="text-center p-6 bg-white/10 backdrop-blur-lg rounded-2xl hover:bg-white/20 transition-all duration-300">
                <span className="text-4xl mb-4 block">{value.icon}</span>
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white py-24 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="uppercase tracking-widest text-sm font-semibold">Ready to work with us?</span>
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