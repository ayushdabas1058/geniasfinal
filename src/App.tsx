import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation, Link } from "react-router-dom";
import { BookOpen, LayoutDashboard, Menu, X, Home, LogOut, GraduationCap, Trophy, Award } from "lucide-react";
import { supabase } from "./lib/supabase";
import type { User } from "@supabase/supabase-js";

import HomePage from "./pages/HomePage";

import StudyMaterialPage from "./pages/StudyMaterialPage";
import AchieversPage from "./pages/AchieversPage";
import DashboardPage from "./pages/DashboardPage";
import CoursesPage from "./pages/CoursesPage";
import ResultsPage from "./pages/ResultsPage";
import GetStartedPage from "./pages/GetStartedPage";
import AuthPage from "./pages/AuthPage";
import PolicyPage from "./pages/PolicyPage";
import ProtectedRoute from "./components/ProtectedRoute";
import NotFound from "./pages/NotFound";

const navLinks = [
  { to: "/",              label: "Home",            icon: <Home size={16} /> },
  { to: "/courses",       label: "Courses",         icon: <GraduationCap size={16} /> },
  { to: "/results",       label: "Results",         icon: <Trophy size={16} /> },
  { to: "/study",         label: "Study Material",  icon: <BookOpen size={16} /> },
  { to: "/achievers",     label: "Achievers",       icon: <Award size={16} /> },
  { to: "/dashboard",     label: "Dashboard",       icon: <LayoutDashboard size={16} /> },
  { to: "/get-started",   label: "Get Started",     icon: <GraduationCap size={16} /> },
];

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [profileName, setProfileName] = useState("");
  const [authLoading, setAuthLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
  window.scrollTo({ top: 0, behavior: "instant" });
}, [location.pathname]);

  useEffect(() => {
  supabase.auth.getSession().then(({ data: { session } }) => {
    // If this is a password recovery link, don't set the user — let the reset form handle it
    const hash = window.location.hash;
    const params = new URLSearchParams(window.location.search);
    const isRecovery =
      hash.includes("type=recovery") ||
      params.get("type") === "recovery";

    if (!isRecovery) {
      setUser(session?.user ?? null);
      if (session?.user) fetchProfile(session.user.id);
    }
    setAuthLoading(false);
  });

    // line 48
const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
  if (event === "PASSWORD_RECOVERY") {
    navigate("/auth", { replace: true });
    return;
  }
  setUser(session?.user ?? null);
  if (session?.user) fetchProfile(session.user.id);
  else setProfileName("");
});

    return () => subscription.unsubscribe();
  }, []);

  const fetchProfile = async (userId: string) => {
    const { data } = await supabase
      .from("profiles")
      .select("full_name")
      .eq("user_id", userId)
      .single();
    if (data?.full_name) setProfileName(data.full_name);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setProfileName("");
    navigate("/");
  };

  const handleAuthSuccess = () => {
    const from = (location.state as { from?: string })?.from || "/";
    navigate(from, { replace: true });
  };

  if (authLoading) {
    return (
      <div className="min-h-screen bg-[#0F172A] flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-[#D4AF37] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const isActive = (to: string) => (to === "/" ? location.pathname === "/" : location.pathname.startsWith(to));

  return (
    <div className="min-h-screen bg-[#0F172A]">
      {/* ── NAVBAR ── */}
      <nav className="sticky top-0 z-50 bg-[#0F172A]/95 backdrop-blur-md border-b border-[#1E293B] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            <Link to="/" className="flex items-center gap-2 sm:gap-2.5 hover:opacity-90 transition-opacity">
  <img src="/logo.png" alt="Genuine IAS" className="h-10 sm:h-12 w-auto object-contain" />
</Link>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="flex items-center gap-1.5 px-3 xl:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                  style={{
                    color: isActive(link.to) ? "#D4AF37" : "#94A3B8",
                    background: isActive(link.to) ? "rgba(212,175,55,0.1)" : "transparent",
                    borderBottom: isActive(link.to) ? "2px solid #D4AF37" : "2px solid transparent",
                  }}
                >
                  {link.icon}
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              {user ? (
                <div className="hidden lg:flex items-center gap-3">
                  <span className="text-[#D4AF37] font-semibold text-sm max-w-[150px] truncate">
                    {profileName || user.email}
                  </span>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-1.5 text-[#94A3B8] hover:text-red-400 text-sm transition-colors"
                  >
                    <LogOut size={16} />
                    Logout
                  </button>
                </div>
              ) : (
                <Link
                  to="/auth"
                  className="hidden lg:flex items-center gap-2 bg-[#D4AF37] text-[#0F172A] px-5 py-2 rounded-lg font-bold text-sm hover:bg-[#C4A037] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#D4AF37]/30 transition-all duration-200"
                >
                  Sign In
                </Link>
              )}
              <button
                className="lg:hidden text-[#94A3B8] hover:text-white transition-colors p-1"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden border-t border-[#1E293B] bg-[#0F172A] px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all"
                style={{
                  background: isActive(link.to) ? "rgba(212,175,55,0.1)" : "transparent",
                  color: isActive(link.to) ? "#D4AF37" : "#94A3B8",
                }}
              >
                {link.icon} {link.label}
              </Link>
            ))}
            {user ? (
              <>
                <div className="px-4 py-3 text-[#D4AF37] font-semibold text-sm truncate">
                  {profileName || user.email}
                </div>
                <button
                  onClick={() => { handleLogout(); setMobileOpen(false); }}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-400"
                >
                  <LogOut size={16} /> Logout
                </button>
              </>
            ) : (
              <Link
                to="/auth"
                onClick={() => setMobileOpen(false)}
                className="w-full mt-2 bg-[#D4AF37] text-[#0F172A] py-3 rounded-xl font-bold text-sm block text-center"
              >
                Sign In
              </Link>
            )}
          </div>
        )}
      </nav>

      {/* ── ROUTES ── */}
      <main>
        <Routes>
          <Route path="/" element={<HomePage onNavigate={(p: string) => navigate(p)} />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/achievers" element={<AchieversPage />} />
          <Route path="/get-started" element={<GetStartedPage />} />
          <Route path="/auth" element={<AuthPage onSuccess={handleAuthSuccess} />} />
          <Route path="/policy" element={<PolicyPage />} />
          <Route path="/study" element={<ProtectedRoute user={user}><StudyMaterialPage /></ProtectedRoute>} />
          
          <Route path="/dashboard" element={<ProtectedRoute user={user}><DashboardPage /></ProtectedRoute>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* ── FOOTER ── */}
      <footer className="bg-[#0A1020] border-t border-[#1E293B] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
          <p className="text-gray-500">© 2026 Genuine IAS. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link to="/policy" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
              Privacy &amp; Terms
            </Link>
            <a href="tel:+918920867614" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
