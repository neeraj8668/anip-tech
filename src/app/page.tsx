import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#18191d] min-h-screen w-full text-white relative overflow-x-hidden">
      {/* Animated Gradient Overlay */}
      <div className="pointer-events-none fixed inset-0 z-0 animate-gradient-move bg-gradient-to-tr from-pink-500/20 via-yellow-400/10 to-indigo-500/20 blur-2xl opacity-70" />
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[80vh] px-4 pt-40 pb-16 z-10">
        <div className="flex flex-col items-center justify-center w-full">
          <h1 className="text-6xl md:text-8xl font-extrabold text-center bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent uppercase tracking-tight animate-gradient-text">
            A DIGITAL <br /> AGENCY.
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-gray-200 font-medium text-center max-w-2xl drop-shadow-lg">
            We build brands, products, and experiences that make a difference.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-4 rounded-lg font-bold text-lg bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 text-white shadow-lg hover:from-yellow-400 hover:to-pink-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
            >
              Get Started
          </a>
          <a
              href="#portfolio"
              className="px-8 py-4 rounded-lg font-bold text-lg border border-white/30 text-white bg-white/10 hover:bg-white/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
            >
              Our Work
            </a>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="w-full max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 py-16">
        <div className="flex flex-col items-center text-center flex-1 bg-white/5 rounded-2xl p-8">
          <div className="mb-4">
            <svg className="w-12 h-12 text-pink-500 mx-auto" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="14" rx="2" /><path d="M8 2v4M16 2v4" /></svg>
          </div>
          <h3 className="text-xl font-semibold mb-2 text-white">Business Strategy</h3>
          <p className="text-gray-300">There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
        </div>
        <div className="flex flex-col items-center text-center flex-1 bg-white/5 rounded-2xl p-8">
          <div className="mb-4">
            <svg className="w-12 h-12 text-pink-500 mx-auto" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" /></svg>
          </div>
          <h3 className="text-xl font-semibold mb-2 text-white">Website Development</h3>
          <p className="text-gray-300">There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
        </div>
        <div className="flex flex-col items-center text-center flex-1 bg-white/5 rounded-2xl p-8">
          <div className="mb-4">
            <svg className="w-12 h-12 text-pink-500 mx-auto" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M12 8v8M8 12h8" /></svg>
          </div>
          <h3 className="text-xl font-semibold mb-2 text-white">Marketing & Reporting</h3>
          <p className="text-gray-300">There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full bg-[#23242a] text-white py-24 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 flex justify-center">
            <div className="rounded-2xl overflow-hidden shadow-lg w-[350px] h-[450px] bg-white/5">
              <Image src="/work1.jpg" alt="About" width={350} height={450} className="object-cover w-full h-full" />
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent">About</h2>
            <p className="mb-6 text-lg text-gray-300">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum,</p>
            <div className="flex flex-col md:flex-row gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-2 text-white">Who we are</h3>
                <p className="text-gray-400">There are many vitions of passages of Lorem Ipsum available, but the majority have suffered.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-white">Who we are</h3>
                <p className="text-gray-400">There are many vitions of passages of Lorem Ipsum available, but the majority have suffered.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="w-full bg-[#18191d] text-white py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent">Services</h2>
          <p className="mb-8 text-lg text-gray-300">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
          <a href="#" className="text-pink-500 font-semibold border-b-2 border-pink-500 inline-block mb-12">Request Custom Service</a>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/5 rounded-lg shadow p-6 flex flex-col items-center">
              <svg className="w-10 h-10 text-pink-500 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="14" rx="2" /><path d="M8 2v4M16 2v4" /></svg>
              <h3 className="font-bold text-lg mb-2 text-white">Business Strategy</h3>
              <p className="text-gray-400">I throw myself down among the tall grass by the stream as I lie close to the earth.</p>
            </div>
            <div className="bg-white/5 rounded-lg shadow p-6 flex flex-col items-center">
              <svg className="w-10 h-10 text-pink-500 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" /></svg>
              <h3 className="font-bold text-lg mb-2 text-white">Website Development</h3>
              <p className="text-gray-400">I throw myself down among the tall grass by the stream as I lie close to the earth.</p>
            </div>
            <div className="bg-white/5 rounded-lg shadow p-6 flex flex-col items-center">
              <svg className="w-10 h-10 text-pink-500 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M12 8v8M8 12h8" /></svg>
              <h3 className="font-bold text-lg mb-2 text-white">Marketing & Reporting</h3>
              <p className="text-gray-400">I throw myself down among the tall grass by the stream as I lie close to the earth.</p>
            </div>
            <div className="bg-white/5 rounded-lg shadow p-6 flex flex-col items-center">
              <svg className="w-10 h-10 text-pink-500 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M16 12H8m4-4v8" /></svg>
              <h3 className="font-bold text-lg mb-2 text-white">Mobile App Development</h3>
              <p className="text-gray-400">I throw myself down among the tall grass by the stream as I lie close to the earth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio/Works Section */}
      <section id="portfolio" className="w-full bg-[#23242a] text-white py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent">Our Works</h2>
          <p className="mb-8 text-lg text-gray-300">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1,2,3,4].map((i) => (
              <div key={i} className="relative rounded-2xl overflow-hidden shadow-lg group bg-white/5">
                <Image src={`/work${i}.jpg`} alt="Work" width={400} height={500} className="object-cover w-full h-80 group-hover:scale-105 transition" />
                <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition">
                  <span className="text-sm text-white mb-2">Development</span>
                  <h3 className="text-xl font-bold text-white mb-2">Getting tickets to the big show</h3>
                  <a href="#" className="border border-white text-white px-4 py-2 rounded hover:bg-white/10 hover:text-pink-500 transition">CASE STUDY</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fun Facts/Counters */}
      <section className="w-full bg-[#18191d] text-white py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent">Our Fun Facts</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-12">
            <div className="flex flex-col items-center">
              <span className="text-5xl font-extrabold text-pink-500">199+</span>
              <p className="text-gray-300 text-center mt-2">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-5xl font-extrabold text-pink-500">575+</span>
              <p className="text-gray-300 text-center mt-2">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-5xl font-extrabold text-pink-500">69+</span>
              <p className="text-gray-300 text-center mt-2">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="w-full bg-[#23242a] text-white py-24 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <blockquote className="text-2xl md:text-3xl font-bold mb-8 text-white">Aklima The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.</blockquote>
          <span className="block text-lg font-semibold text-gray-400 mb-8">AKLIMA - COO, AMERIMAR ENTERPRISES, INC.</span>
          <div className="flex justify-center gap-4">
            {[1,2,3,4,5].map((i) => (
              <Image key={i} src={`/avatar${i}.jpg`} alt="Avatar" width={60} height={60} className="rounded-full border-2 border-pink-500" />
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="w-full bg-[#18191d] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center items-center gap-8">
          {[1,2,3,4,5,6,7,8].map((i) => (
            <Image key={i} src={`/client${i}.png`} alt="Client Logo" width={120} height={60} className="object-contain grayscale hover:grayscale-0 transition" />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white py-24 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="uppercase tracking-widest text-sm font-semibold">Ready to do this</span>
            <h2 className="text-4xl md:text-5xl font-extrabold mt-2 mb-6">Let's get to work</h2>
            <a href="#contact" className="border border-white px-6 py-3 rounded text-lg font-bold hover:bg-white hover:text-pink-500 transition">Contact Us</a>
          </div>
          <div className="hidden md:block">
            <Image src="/cta-image.png" alt="CTA" width={300} height={200} className="rounded-2xl" />
          </div>
        </div>
      </section>
    </div>
  );
}

/* Add this to your globals.css or tailwind config for animation */
/*
@keyframes gradient-move {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
.animate-gradient-move {
  background-size: 200% 200%;
  animation: gradient-move 8s ease-in-out infinite;
}
@keyframes gradient-text {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
.animate-gradient-text {
  background-size: 200% 200%;
  animation: gradient-text 4s ease-in-out infinite;
}
*/
