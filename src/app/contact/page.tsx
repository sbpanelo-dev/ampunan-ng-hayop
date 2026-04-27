import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 overflow-hidden relative">
      
      {/* ✨ Background & Navbar */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(16,185,129,0.15),transparent_60%)] animate-[pulse_10s_ease-in-out_infinite]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(236,72,153,0.12),transparent_60%)] animate-[pulse_12s_ease-in-out_infinite_1.5s]"></div>
      </div>

      {/* 🔝 Navbar */}
      <nav className="relative z-50 flex justify-between items-center px-6 lg:px-8 py-6 bg-white/95 backdrop-blur-3xl shadow-2xl border-b border-white/70 sticky top-0">
        <Link href="/" className="flex items-center space-x-4 group hover:scale-105 transition-all">
          <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl shadow-xl flex items-center justify-center animate-[glow_4s_ease-in-out_infinite]">
            <span className="text-2xl drop-shadow-lg">🐾</span>
          </div>
          <span className="text-2xl font-black bg-gradient-to-r from-emerald-800 to-teal-700 bg-clip-text text-transparent">Home</span>
        </Link>
        <div className="flex items-center space-x-3">
          <Link href="/about" className="px-4 py-3 text-lg font-bold text-gray-700 bg-white/80 backdrop-blur-xl rounded-3xl border border-gray-200 hover:border-emerald-300 hover:bg-emerald-50 hover:shadow-xl transition-all shadow-lg">About</Link>
          <Link href="/volunteer" className="px-4 py-3 text-lg font-bold text-gray-700 bg-white/80 backdrop-blur-xl rounded-3xl border border-gray-200 hover:border-emerald-300 hover:bg-emerald-50 hover:shadow-xl transition-all shadow-lg">Volunteer</Link>
          <Link href="/register" className="group">
            <button className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-10 py-4 rounded-3xl font-bold text-lg shadow-2xl hover:shadow-3xl hover:scale-105 transition-all">Dashboard</button>
          </Link>
        </div>
      </nav>

      <div className="relative z-40 pt-24 pb-24 px-8 max-w-5xl mx-auto">
        <div className="text-center mb-24">
          
          {/* 🏅 Badge */}
          <div className="inline-flex items-center px-8 py-4 mb-12 bg-gradient-to-r from-blue-400 to-cyan-500 text-white font-bold text-xl rounded-3xl shadow-2xl backdrop-blur-xl border-4 border-white/30 hover:scale-110 transition-all duration-500 animate-[float_8s_ease-in-out_infinite]">
            <span className="w-4 h-4 bg-white rounded-full mr-4 animate-ping"></span>
            We're Here to Help
          </div>

          {/* 🔥 COMPACT SINGLE LINE HERO TEXT */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight bg-gradient-to-r from-slate-900 via-blue-600 to-cyan-500 bg-clip-text text-transparent drop-shadow-3xl mb-12 tracking-tight px-4">
            Get In Touch
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          <div className="space-y-8">
            <div className="p-10 bg-white/90 backdrop-blur-xl rounded-4xl shadow-3xl border border-white/60 hover:shadow-4xl hover:-translate-y-4 transition-all duration-700">
              <div className="text-5xl mb-6 animate-bounce">📍</div>
              <h3 className="text-3xl lg:text-4xl font-black text-emerald-700 mb-6">Don't Visit Us</h3>
              <div className="space-y-2">
                <p className="text-xl lg:text-2xl text-gray-700 font-semibold">Naga City Animal Shelter</p>
                <p className="text-xl lg:text-2xl text-gray-700">Naga College Foundation, Naga City 4400</p>
              </div>
            </div>
            <div className="p-10 bg-white/90 backdrop-blur-xl rounded-4xl shadow-3xl border border-white/60 hover:shadow-4xl hover:-translate-y-4 transition-all duration-700">
              <div className="text-5xl mb-6 animate-pulse">📞</div>
              <h3 className="text-3xl lg:text-4xl font-black text-pink-500 mb-6">Call Us</h3>
              <div className="space-y-2">
                <p className="text-xl lg:text-2xl text-gray-700 font-semibold">+63 912 ikaw na bahala sa pito9</p>
                <p className="text-lg lg:text-xl text-emerald-600 font-bold">Mon-Sat: 2AM -4AM</p>
              </div>
            </div>
          </div>
          
          <div className="p-10 bg-white/90 backdrop-blur-xl rounded-4xl shadow-3xl border border-white/60">
            <h3 className="text-3xl lg:text-4xl font-black text-gray-800 mb-10 text-center">📧 Send Message</h3>
            <form className="space-y-6">
              <input type="text" placeholder="Your Name *" className="w-full p-6 text-xl border-2 border-gray-200 rounded-3xl focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100/50 transition-all shadow-xl placeholder-gray-400" required />
              <input type="email" placeholder="your@email.com *" className="w-full p-6 text-xl border-2 border-gray-200 rounded-3xl focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100/50 transition-all shadow-xl placeholder-gray-400" required />
              <textarea rows={5} placeholder="Tell us how we can help..." className="w-full p-6 text-xl border-2 border-gray-200 rounded-3xl focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100/50 transition-all shadow-xl resize-vertical placeholder-gray-400"></textarea>
              <button type="submit" className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-6 px-12 rounded-3xl text-2xl font-black shadow-3xl hover:shadow-4xl hover:scale-105 transition-all duration-500">
                Send Message 🚀
              </button>
            </form>
          </div>
        </div>

        <div className="text-center">
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Response within 24 hours • Weekdays 9AM-5PM
          </p>
        </div>
      </div>

      {/* 📜 Footer */}
      <footer className="relative z-50 bg-white/95 backdrop-blur-3xl border-t-4 border-emerald-100/50 shadow-2xl py-16 px-12">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xl text-gray-600 font-semibold">
            © 2026 Street Paws Naga. Always here to help. <span className="text-blue-500">💙</span>
          </p>
        </div>
      </footer>
    </div>
  );
}