import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Mail, Lock, User, Eye, EyeOff, ArrowLeft } from "lucide-react";

type AuthStep = "login" | "signup" | "forgot" | "reset";

export default function AuthPage({ onSuccess }: { onSuccess: () => void }) {
  const [step, setStep] = useState<AuthStep>("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Detect password recovery token in URL when user clicks reset link in email
  // line 21
useEffect(() => {
  const hash = window.location.hash;
  const params = new URLSearchParams(window.location.search);
  if (
    hash.includes("type=recovery") ||
    hash.includes("access_token") ||
    params.get("type") === "recovery"
  ) {
    setStep("reset");
  }

  const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
    if (event === "PASSWORD_RECOVERY") {
      setStep("reset");
    }
  });
  return () => subscription.unsubscribe();
}, []);

  const resetForm = () => {
    setError("");
    setSuccess("");
    setEmail("");
    setPassword("");
    setFullName("");
    setNewPassword("");
    setConfirmPassword("");
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      if (error.message.toLowerCase().includes("email not confirmed")) {
        setError("Please verify your email first. Check your inbox for the confirmation link.");
      } else if (error.message.toLowerCase().includes("invalid login credentials")) {
        setError("Incorrect email or password. Please try again.");
      } else {
        setError(error.message);
      }
    } else {
      onSuccess();
    }
    setLoading(false);
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { full_name: fullName } },
    });
    if (error) {
      setError(error.message);
    } else if (data.user?.identities?.length === 0) {
      setError("An account with this email already exists. Please sign in instead.");
    } else {
      setSuccess("Account created! Please check your email and click the verification link to activate your account.");
    }
    setLoading(false);
  };

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: window.location.origin + "/auth",
    });
    if (error) {
      setError(error.message);
    } else {
      setSuccess("Password reset link sent! Check your inbox and click the link to reset your password.");
    }
    setLoading(false);
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match. Please try again.");
      return;
    }
    if (newPassword.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    setLoading(true);
    setError("");
    const { error } = await supabase.auth.updateUser({ password: newPassword });
    if (error) {
      setError(error.message);
    } else {
      setSuccess("Password updated successfully! You can now sign in with your new password.");
      // Clear the hash from URL
      window.history.replaceState(null, "", window.location.pathname);
      setTimeout(() => {
        resetForm();
        setStep("login");
      }, 2000);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-[#1E293B] rounded-2xl p-8 shadow-2xl border border-[#334155]">
        <div className="text-center mb-8">
          <div className="w-14 h-14 bg-[#D4AF37] rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
            <span className="text-[#0F172A] font-bold text-2xl">G</span>
          </div>
          <h1 className="text-2xl font-bold text-white">
            {step === "login" ? "Welcome Back"
              : step === "signup" ? "Create Account"
              : step === "forgot" ? "Forgot Password"
              : "Set New Password"}
          </h1>
          <p className="text-[#94A3B8] text-sm mt-1">
            {step === "login" ? "Sign in to continue your preparation"
              : step === "signup" ? "Start your IAS preparation journey"
              : step === "forgot" ? "Enter your email to receive a reset link"
              : "Enter and confirm your new password"}
          </p>
        </div>

        {/* RESET PASSWORD — shown when user clicks link from email */}
        {step === "reset" && (
          <form onSubmit={handleResetPassword} className="space-y-4">
            <div className="relative">
              <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]" />
              <input
                type={showNewPassword ? "text" : "password"}
                placeholder="New Password (min 6 characters)"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
                minLength={6}
                className="w-full pl-10 pr-12 py-3 bg-[#0F172A] border border-[#334155] rounded-xl text-white placeholder-[#64748B] focus:outline-none focus:border-[#D4AF37] transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowNewPassword(!showNewPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#94A3B8] hover:text-white"
              >
                {showNewPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            <div className="relative">
              <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]" />
              <input
                type="password"
                placeholder="Confirm New Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                minLength={6}
                className="w-full pl-10 pr-4 py-3 bg-[#0F172A] border border-[#334155] rounded-xl text-white placeholder-[#64748B] focus:outline-none focus:border-[#D4AF37] transition-colors"
              />
            </div>
            {error && <p className="text-red-400 text-sm">{error}</p>}
            {success && <p className="text-green-400 text-sm">{success}</p>}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-[#D4AF37] text-[#0F172A] rounded-xl font-bold text-sm hover:bg-[#C4A037] transition-colors disabled:opacity-50"
            >
              {loading ? "Updating..." : "Update Password"}
            </button>
          </form>
        )}

        {/* FORGOT PASSWORD */}
        {step === "forgot" && (
          <form onSubmit={handleForgotPassword} className="space-y-4">
            <div className="relative">
              <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]" />
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-10 pr-4 py-3 bg-[#0F172A] border border-[#334155] rounded-xl text-white placeholder-[#64748B] focus:outline-none focus:border-[#D4AF37] transition-colors"
              />
            </div>
            {error && <p className="text-red-400 text-sm">{error}</p>}
            {success && <p className="text-green-400 text-sm">{success}</p>}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-[#D4AF37] text-[#0F172A] rounded-xl font-bold text-sm hover:bg-[#C4A037] transition-colors disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Reset Link"}
            </button>
            <button
              type="button"
              onClick={() => { resetForm(); setStep("login"); }}
              className="w-full flex items-center justify-center gap-2 text-[#94A3B8] hover:text-white text-sm transition-colors mt-2"
            >
              <ArrowLeft size={16} /> Back to Sign In
            </button>
          </form>
        )}

        {/* LOGIN */}
        {step === "login" && (
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="relative">
              <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]" />
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-10 pr-4 py-3 bg-[#0F172A] border border-[#334155] rounded-xl text-white placeholder-[#64748B] focus:outline-none focus:border-[#D4AF37] transition-colors"
              />
            </div>
            <div className="relative">
              <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
                className="w-full pl-10 pr-12 py-3 bg-[#0F172A] border border-[#334155] rounded-xl text-white placeholder-[#64748B] focus:outline-none focus:border-[#D4AF37] transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#94A3B8] hover:text-white"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            <div className="text-right">
              <button
                type="button"
                onClick={() => { resetForm(); setStep("forgot"); }}
                className="text-[#D4AF37] text-sm hover:underline"
              >
                Forgot Password?
              </button>
            </div>
            {error && <p className="text-red-400 text-sm">{error}</p>}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-[#D4AF37] text-[#0F172A] rounded-xl font-bold text-sm hover:bg-[#C4A037] transition-colors disabled:opacity-50"
            >
              {loading ? "Please wait..." : "Sign In"}
            </button>
          </form>
        )}

        {/* SIGNUP */}
        {step === "signup" && (
          <form onSubmit={handleSignup} className="space-y-4">
            <div className="relative">
              <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]" />
              <input
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                className="w-full pl-10 pr-4 py-3 bg-[#0F172A] border border-[#334155] rounded-xl text-white placeholder-[#64748B] focus:outline-none focus:border-[#D4AF37] transition-colors"
              />
            </div>
            <div className="relative">
              <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]" />
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-10 pr-4 py-3 bg-[#0F172A] border border-[#334155] rounded-xl text-white placeholder-[#64748B] focus:outline-none focus:border-[#D4AF37] transition-colors"
              />
            </div>
            <div className="relative">
              <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password (min 6 characters)"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
                className="w-full pl-10 pr-12 py-3 bg-[#0F172A] border border-[#334155] rounded-xl text-white placeholder-[#64748B] focus:outline-none focus:border-[#D4AF37] transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#94A3B8] hover:text-white"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {error && <p className="text-red-400 text-sm">{error}</p>}
            {success && <p className="text-green-400 text-sm">{success}</p>}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-[#D4AF37] text-[#0F172A] rounded-xl font-bold text-sm hover:bg-[#C4A037] transition-colors disabled:opacity-50"
            >
              {loading ? "Please wait..." : "Create Account"}
            </button>
          </form>
        )}

        {step !== "forgot" && step !== "reset" && (
          <p className="text-center text-[#94A3B8] text-sm mt-6">
            {step === "login" ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              onClick={() => { resetForm(); setStep(step === "login" ? "signup" : "login"); }}
              className="text-[#D4AF37] font-semibold hover:underline"
            >
              {step === "login" ? "Sign Up" : "Sign In"}
            </button>
          </p>
        )}
      </div>
    </div>
  );
}
