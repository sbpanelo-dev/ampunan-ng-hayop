import Link from "next/link";

export default function VolunteerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 overflow-hidden relative">
      
      {/* ✨ Background & Floating Elements (same as landing) */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(16,185,129,0.15),transparent_60%)] animate-[pulse_10s_ease-in-out_infinite]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(236,72,153,0.12),transparent_60%)] animate-[pulse_12s_ease-in-out_infinite_1.5s]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_90%,rgba(59,130,246,0.08),transparent_60%)] animate-[pulse_14s_ease-in-out_infinite_3s]"></div>
      </div>
      
      <div className="fixed inset-0 pointer-events-none z-10">
        <div className="absolute top-24 left-16 w-14 h-14 bg-gradient-to-r from-emerald-400/50 to-teal-400/50 backdrop-blur-xl rounded-2xl shadow-2xl animate-[bounce_6s_ease-in-out_infinite_0.1s]"></div>
        <div className="absolute top-2/3 right-24 w-16 h-16 bg-gradient-to-r from-rose-400/40 to-pink-400/40 backdrop-blur-xl rounded-2xl shadow-2xl animate-pulse delay-700"></div>
        <div className="absolute bottom-28 left-1/3 w-12 h-12 bg-gradient-to-r from-amber-400/50 to-orange-400/50 backdrop-blur-xl rounded-2xl shadow-2xl animate-[float_8s_ease-in-out_infinite_1.4s]"></div>
      </div>

      {/* 🔝 Navbar with Back Button */}
    <nav className="relative z-50 flex justify-between items-center px-6 lg:px-8 py-6 bg-white/95 backdrop-blur-3xl shadow-2xl border-b border-white/70 sticky top-0">
        <Link href="/" className="flex items-center space-x-4 group hover:scale-105 transition-all">
          <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl shadow-xl flex items-center justify-center animate-[glow_4s_ease-in-out_infinite]">
            <span className="text-2xl drop-shadow-lg">🐾</span>
          </div>
          <span className="text-2xl font-black bg-gradient-to-r from-emerald-800 to-teal-700 bg-clip-text text-transparent">Home</span>
        </Link>
        <div className="flex items-center space-x-3">
          <Link href="/about" className="px-4 py-3 text-lg font-bold text-gray-700 bg-white/80 backdrop-blur-xl rounded-3xl border border-gray-200 hover:border-emerald-300 hover:bg-emerald-50 hover:shadow-xl transition-all shadow-lg">About</Link>
          <Link href="/contact" className="px-4 py-3 text-lg font-bold text-gray-700 bg-white/80 backdrop-blur-xl rounded-3xl border border-gray-200 hover:border-emerald-300 hover:bg-emerald-50 hover:shadow-xl transition-all shadow-lg">Contact</Link>
          <Link href="/register" className="group">
            <button className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-10 py-4 rounded-3xl font-bold text-lg shadow-2xl hover:shadow-3xl hover:scale-105 transition-all">Dashboard</button>
          </Link>
        </div>
      </nav>

      {/* 🎯 Main Content */}
      <div className="relative z-40 pt-32 pb-24 px-8 max-w-6xl mx-auto">
        <div className="text-center mb-32">
          <div className="inline-flex items-center px-10 py-4 mb-12 bg-gradient-to-r from-orange-400 to-amber-500 text-white font-black text-2xl rounded-3xl shadow-2xl backdrop-blur-xl border-4 border-white/30 hover:scale-110 transition-all duration-500 animate-[float_8s_ease-in-out_infinite]">
            <span className="w-4 h-4 bg-white rounded-full mr-4 animate-ping"></span>
            Become a Hero Today
          </div>
          <h1 className="text-7xl md:text-8xl lg:text-[10rem] font-black leading-tight bg-gradient-to-br from-slate-900 via-orange-600 to-amber-500 bg-clip-text text-transparent drop-shadow-3xl mb-8">
            Join Our
          </h1>
          <h1 className="text-7xl md:text-8xl lg:text-[10rem] font-black leading-tight bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent drop-shadow-3xl animate-[float_6s_ease-in-out_infinite]">
            Volunteers
          </h1>
        </div>

        {/* 🐾 Volunteer Cards */}
        <div className="grid lg:grid-cols-3 gap-12 mb-24">
          <VolunteerCard 
            icon="🐕" 
            title="Dog Walker" 
            desc="Give our rescued dogs the walks and love they deserve. Flexible hours!" 
            color="from-emerald-500 to-teal-500"
            time="2-3 hrs/week"
          />
          <VolunteerCard 
            icon="🍽️" 
            title="Animal Feeder" 
            desc="Prepare nutritious meals and provide daily care for our shelter animals" 
            color="from-orange-500 to-amber-500"
            time="3-4 hrs/week"
          />
          <VolunteerCard 
            icon="📸" 
            title="Social Media" 
            desc="Capture heartwarming photos/videos and help find forever homes online" 
            color="from-pink-500 to-rose-500"
            time="5-7 hrs/week"
          />
          <VolunteerCard 
            icon="🧹" 
            title="Cleaner" 
            desc="Maintain clean and comfortable living spaces for our furry friends" 
            color="from-blue-500 to-cyan-500"
            time="2-4 hrs/week"
          />
          <VolunteerCard 
            icon="🏠" 
            title="Foster Care" 
            desc="Provide temporary loving homes for animals recovering or awaiting adoption" 
            color="from-purple-500 to-violet-500"
            time="Full-time care"
          />
          <VolunteerCard 
            icon="📝" 
            title="Admin Help" 
            desc="Assist with paperwork, scheduling, and community outreach coordination" 
            color="from-indigo-500 to-blue-500"
            time="4-6 hrs/week"
          />
        </div>

        {/* 🚀 CTA Section */}
        <div className="text-center bg-white/90 backdrop-blur-xl rounded-4xl shadow-3xl border border-white/60 p-20 mx-12">
          <h2 className="text-5xl font-black text-gray-800 mb-8">Ready to Make a Difference?</h2>
          <p className="text-2xl text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed">No experience needed. Just bring your heart and we'll train you to save lives!</p>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <Link href="/register" className="group relative bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white px-20 py-10 rounded-4xl text-3xl font-black shadow-4xl hover:shadow-5xl hover:scale-110 active:scale-105 transition-all duration-700 max-w-max overflow-hidden border-4 border-white/30 backdrop-blur-xl">
              <span className="relative z-10 flex items-center space-x-6">
                🚀 Sign Up Now
                <svg className="w-10 h-10 group-hover:translate-x-4 transition-transform duration-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-cyan-600 -skew-x-12 opacity-0 group-hover:opacity-100 transition-all duration-1000 blur-sm scale-x-0 group-hover:scale-x-100 origin-left"></div>
            </Link>
            
            <Link href="/contact" className="px-20 py-10 text-3xl font-black text-gray-800 bg-white/90 backdrop-blur-3xl rounded-4xl border-4 border-gray-200 hover:border-emerald-300 hover:bg-emerald-50/90 hover:shadow-4xl hover:scale-110 transition-all duration-500 shadow-3xl">
              <span className="flex items-center space-x-4">📞 Contact Us</span>
            </Link>
          </div>
        </div>
      </div>

      {/* 📜 Footer */}
      <footer className="relative z-50 bg-white/95 backdrop-blur-3xl border-t-4 border-emerald-100/50 shadow-2xl py-16 px-12">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-12">
            <div className="flex items-center space-x-6">
              <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-4xl shadow-3xl flex items-center justify-center border-4 border-white/60 animate-[glow_4s_ease-in-out_infinite]">
                <span className="text-5xl drop-shadow-2xl">🐾</span>
              </div>
              <h3 className="text-4xl font-black bg-gradient-to-r from-emerald-800 to-teal-700 bg-clip-text text-transparent drop-shadow-xl">
                Street Paws Naga
              </h3>
            </div>
          </div>
          <p className="text-xl text-gray-600 font-semibold">
            © 2026 Street Paws Naga. Every volunteer changes a life. <span className="text-rose-500 text-2xl">❤️</span>
          </p>
        </div>
      </footer>
    </div>
  );
}

// Enhanced VolunteerCard Component
function VolunteerCard({ icon, title, desc, color, time }: any) {
  return (
    <div className="group relative p-12 rounded-4xl shadow-3xl border-4 border-white/60 bg-white/90 backdrop-blur-3xl hover:shadow-4xl hover:-translate-y-8 hover:scale-105 transition-all duration-1000 overflow-hidden cursor-pointer hover:bg-gradient-to-br hover:from-emerald-50 hover:to-teal-50 border-emerald-200/50">
      <div className="text-7xl mb-8 group-hover:scale-125 transition-transform duration-700 opacity-95">{icon}</div>
      <h3 className="text-4xl font-black bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6 group-hover:from-emerald-600 group-hover:to-teal-500 transition-all duration-700 drop-shadow-xl">{title}</h3>
      <p className="text-xl text-gray-700 leading-relaxed mb-6">{desc}</p>
      <div className="flex items-center justify-between pt-8 border-t-2 border-gray-200/50">
        <span className="text-2xl font-bold bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent drop-shadow-lg">{time}</span>
        <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-amber-400 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-all">
          <span className="text-xl">⭐</span>
        </div>
      </div>
    </div>
  );
}