"use client";

import { useState, useEffect } from "react"; // ✅ Added useEffect
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const [isRegister, setIsRegister] = useState(false);
  const [role, setRole] = useState<"user" | "admin">("user");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("admin3");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("123");

  // ✅ Auto-clear alerts after 5 seconds
  useEffect(() => {
    if (success || error) {
      const timer = setTimeout(() => {
        setSuccess("");
        setError("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [success, error]);

  const resetFields = () => {
    setName("");
    setUsername("admin3");
    setEmail("");
    setPassword("123");
    setRole("user");
    setError("");
    setSuccess("");
  };

  const showAlert = (message: string, isSuccess: boolean) => {
    if (isSuccess) {
      setSuccess(message);
      setError("");
    } else {
      setError(message);
      setSuccess("");
    }
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  // ✅ Clear states FIRST, then loading
  setError("");
  setSuccess("");
  setLoading(true);

    try {
      const body = isRegister
        ? {
            name: name.trim(),
            username: username.trim(),
            email: email.trim(),
            password: password.trim(),
            role: role
          }
        : {
            username: username.trim(),
            password: password.trim()
          };

      const endpoint = isRegister ? 'register' : 'login';
      const res = await fetch(
        `https://streetpaws-4.onrender.com/auth/${endpoint}`,
        {
          method: "POST",
          headers: { 
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify(body)
        }
      );

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        showAlert(errorData.message || `HTTP ${res.status}`, false);
        setLoading(false);
        return;
      }

      const data = await res.json();
      
      const token = data.access_token || data.token;
      if (token) {
        localStorage.setItem("token", token);
        
        const userData = {
          username: data.user?.username || username.trim(),
          role: data.user?.role || role || "User",
          user_id: data.user?.user_id || data.user?.id
        };
        
        localStorage.setItem("streetpaws_user", JSON.stringify(userData));
        
        console.log("✅ SAVED:", { token: token.slice(0, 20) + "...", user: userData });
        
        showAlert(`✅ Welcome ${userData.username}! (${userData.role})`, true);
        setLoading(false); // ✅ Set loading false immediately
        
        // FIXED: Correct redirect logic
        if (!isRegister) {
          const savedUser = localStorage.getItem("streetpaws_user");
          const currentUser = savedUser ? JSON.parse(savedUser) : userData;
          // Admin goes to admin dashboard, user goes to user dashboard
          if (currentUser.role?.toLowerCase().includes("admin")) {
            router.push("/userdashboard");
          } else {
            router.push("/admindashboard");
          }
        } else {
          setIsRegister(false);
          resetFields();
          showAlert("✅ Account created! Please sign in.", true);
          setLoading(false); // ✅ Set loading false immediately
        }
        return;
      }

      showAlert(data.message || data.error || "Login failed", false);
      setLoading(false); // ✅ Set loading false for non-token cases
      
    } catch (err: any) {
      console.error("Error:", err);
      showAlert("Network error", false);
      setLoading(false); // ✅ Set loading false on error
    }
    // ✅ REMOVED finally block to prevent race condition
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-3xl p-10 lg:p-12 space-y-8 border border-emerald-100/50 backdrop-blur-xl">
        
        {/* Header */}
        <Link href="/" className="flex items-center space-x-4 group hover:scale-105 transition-all">
          <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl shadow-xl flex items-center justify-center animate-[glow_4s_ease-in-out_infinite]">
            <span className="text-2xl drop-shadow-lg">🐾</span>
          </div>
          <span className="text-2xl font-black bg-gradient-to-r from-emerald-800 to-teal-700 bg-clip-text text-transparent">Home</span>
        </Link>
        <div className="text-center">
          <div className="w-24 h-24 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl mx-auto mb-8 flex items-center justify-center shadow-2xl text-4xl animate-[glow_3s_ease-in-out_infinite] border-4 border-white/50">
            🐾
          </div>
          <h1 className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-gray-800 via-gray-700 to-emerald-800 bg-clip-text text-transparent drop-shadow-2xl mb-2">
            Street Paws Naga
          </h1>
          <p className="text-2xl text-emerald-600 font-bold drop-shadow-lg">Choose Your Role</p>
        </div>

        {/* Role Selection Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8 p-6 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-3xl border-4 border-white/30 shadow-xl">
          <button
            type="button"
            onClick={() => setRole("user")}
            className={`group relative p-8 rounded-3xl shadow-2xl border-4 border-transparent hover:shadow-3xl hover:-translate-y-2 hover:scale-105 transition-all duration-500 overflow-hidden cursor-pointer backdrop-blur-xl ${
              role === "user" 
                ? "bg-gradient-to-br from-blue-400/20 to-cyan-400/20 border-blue-300 shadow-blue-300/50" 
                : "bg-white/80 hover:border-emerald-300 hover:bg-gradient-to-br hover:from-blue-50 hover:to-cyan-50"
            }`}
          >
            <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-500">
              {role === "user" ? "🐕" : "👤"}
            </div>
            <h3 className={`text-2xl lg:text-3xl font-black mb-4 transition-all ${
              role === "user" ? "bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent drop-shadow-lg" : "text-gray-800 group-hover:text-emerald-600"
            }`}>
              Community User
            </h3>
          </button>

          <button
            type="button"
            onClick={() => setRole("admin")}
            className={`group relative p-8 rounded-3xl shadow-2xl border-4 border-transparent hover:shadow-3xl hover:-translate-y-2 hover:scale-105 transition-all duration-500 overflow-hidden cursor-pointer backdrop-blur-xl ${
              role === "admin" 
                ? "bg-gradient-to-br from-orange-400/20 to-amber-400/20 border-orange-300 shadow-orange-300/50" 
                : "bg-white/80 hover:border-emerald-300 hover:bg-gradient-to-br hover:from-orange-50 hover:to-amber-50"
            }`}
          >
            <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-500">
              {role === "admin" ? "👨‍💼" : "🔧"}
            </div>
            <h3 className={`text-2xl lg:text-3xl font-black mb-4 transition-all ${
              role === "admin" ? "bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent drop-shadow-lg" : "text-gray-800 group-hover:text-emerald-600"
            }`}>
              Admin/Staff
            </h3>
          </button>
        </div>

        {/* Toggle Buttons */}
        <div className="grid grid-cols-2 gap-2 bg-gradient-to-r from-gray-100 to-gray-200 p-1 rounded-2xl shadow-inner">
          <button
            type="button"
            onClick={() => setIsRegister(false)}
            className={`py-4 px-4 font-bold text-sm rounded-xl transition-all shadow-sm ${
              !isRegister
                ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md" 
                : "text-gray-700 hover:bg-white hover:shadow-md"
            }`}
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => setIsRegister(true)}
            className={`py-4 px-4 font-bold text-sm rounded-xl transition-all shadow-sm ${
              isRegister
                ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md" 
                : "text-gray-700 hover:bg-white hover:shadow-md"
            }`}
          >
            Sign Up
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {isRegister && (
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3 bg-gradient-to-r from-gray-100 to-gray-200 px-4 py-2 rounded-xl inline-block">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-5 border-2 border-gray-200 rounded-2xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100/50 transition-all shadow-xl text-lg placeholder-gray-400"
                disabled={loading}
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3 bg-gradient-to-r from-gray-100 to-gray-200 px-4 py-2 rounded-xl inline-block">
              Username <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter username (e.g. admin3)"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-5 border-2 border-gray-200 rounded-2xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100/50 transition-all shadow-xl text-lg placeholder-gray-400"
              disabled={loading}
            />
          </div>

          {isRegister && (
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3 bg-gradient-to-r from-gray-100 to-gray-200 px-4 py-2 rounded-xl inline-block">
                Email
              </label>
              <input
                type="email"
                placeholder="user@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-5 border-2 border-gray-200 rounded-2xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100/50 transition-all shadow-xl text-lg placeholder-gray-400"
                disabled={loading}
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3 bg-gradient-to-r from-gray-100 to-gray-200 px-4 py-2 rounded-xl inline-block">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-5 border-2 border-gray-200 rounded-2xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100/50 transition-all shadow-xl text-lg placeholder-gray-400"
              disabled={loading}
            />
          </div>

          {/* ✅ FIXED: Success Alert - GREEN */}
          {success && (
            <div className="p-6 bg-emerald-50 border-2 border-emerald-200 rounded-3xl text-emerald-700 text-lg font-semibold shadow-xl animate-pulse flex items-center space-x-3">
              <span className="text-2xl">✅</span>
              <span>{success}</span>
            </div>
          )}

          {/* ❌ FIXED: Error Alert - RED */}
          {error && (
            <div className="p-6 bg-rose-50 border-2 border-rose-200 rounded-3xl text-rose-700 text-lg font-semibold shadow-xl animate-pulse flex items-center space-x-3">
              <span className="text-2xl">❌</span>
              <span>{error}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white py-6 px-12 rounded-3xl font-bold text-xl shadow-3xl hover:shadow-4xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-500 flex items-center justify-center space-x-3 border-4 border-white/30 backdrop-blur-xl"
          >
            {loading ? (
              <>
                <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin" />
                <span>{isRegister ? "Creating Account..." : "Signing In..."}</span>
              </>
            ) : (
              <>
                <span>{role === "admin" ? "👨‍💼" : "🐕"}</span>
                <span>{isRegister ? `Create ${role === "admin" ? "Admin" : "User"} Account` : "Sign In"}</span>
              </>
            )}
          </button>
        </form>

        <div className="text-center space-y-4 pt-8 border-t border-gray-100">
          <p className="text-sm text-gray-500">Forgot password? Contact admin@nagapaws.com</p>
          <Link 
            href="/" 
            className="block w-full bg-gradient-to-r from-gray-500 to-gray-600 text-white py-4 px-8 rounded-3xl font-bold text-lg shadow-xl hover:shadow-2xl hover:from-gray-600 hover:to-gray-700 transition-all hover:scale-105 transform"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}