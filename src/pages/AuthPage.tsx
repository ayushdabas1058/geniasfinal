import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Mail, Lock, User, Eye, EyeOff, ShieldCheck } from "lucide-react";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";

type AuthStep = "form" | "otp";

export default function AuthPage({ onSuccess }: { onSuccess: () => void }) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [step, setStep] = useState<AuthStep>("form");
  const [otp, setOtp] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    if (isLogin) {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) setError(error.message);
      else onSuccess();
    } else {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: { data: { full_name: fullName } },
      });
      if (error) setError(error.message);
      else onSuccess();
    }
    setLoading(false);
  };

  const handleVerifyOtp = async () => {
    if (otp.length !== 6) {
      setError("Please enter the full 6-digit code.");
      return;
    }
    setLoading(true);
    setError("");
    setSuccess("");

    const { error } = await supabase.auth.verifyOtp({
      email,
      token: otp,
      type: "signup",
    });

    if (error) {
      setError(error.message);
    } else {
      onSuccess();
    }
    setLoading(false);
  };

  const handleResendOtp = async () => {
    setLoading(true);
    setError("");
    setSuccess("");
    const { error } = await supabase.auth.resend({ type: "signup", email });
    if (error) setError(error.message);
    else setSuccess("Verification code resent! Check your email.");
    setLoading(false);
  };

  if (step === "otp") {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-[#1E293B] rounded-2xl p-8 shadow-2xl border border-[#334155]">
          <div className="text-center mb-8">
            <div className="w-14 h-14 bg-[#D4AF37] rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <ShieldCheck className="text-[#0F172A]" size={28} />
            </div>
            <h1 className="text-2xl font-bold text-white">Verify Your Email</h1>
            <p className="text-[#94A3B8] text-sm mt-2">
              Enter the 6-digit code sent to
            </p>
            <p className="text-[#D4AF37] font-semibold text-sm mt-1">{email}</p>
          </div>

          <div className="flex justify-center mb-6">
            <InputOTP
              maxLength={6}
              value={otp}
              onChange={(value) => setOtp(value)}
            >
              <InputOTPGroup>
                {[0, 1, 2, 3, 4, 5].map((index) => (
                  <InputOTPSlot
                    key={index}
                    index={index}
                    className="w-12 h-14 text-lg font-bold text-white bg-[#0F172A] border-[#334155] first:rounded-l-xl last:rounded-r-xl focus-within:border-[#D4AF37] focus-within:ring-[#D4AF37]/30"
                  />
                ))}
              </InputOTPGroup>
            </InputOTP>
          </div>

          {error && <p className="text-red-400 text-sm text-center mb-4">{error}</p>}
          {success && <p className="text-green-400 text-sm text-center mb-4">{success}</p>}

          <button
            onClick={handleVerifyOtp}
            disabled={loading || otp.length !== 6}
            className="w-full py-3 bg-[#D4AF37] text-[#0F172A] rounded-xl font-bold text-sm hover:bg-[#C4A037] transition-colors disabled:opacity-50 mb-3"
          >
            {loading ? "Verifying..." : "Verify & Sign In"}
          </button>

          <div className="text-center">
            <button
              onClick={handleResendOtp}
              disabled={loading}
              className="text-[#94A3B8] text-sm hover:text-[#D4AF37] transition-colors disabled:opacity-50"
            >
              Didn't receive the code? <span className="font-semibold text-[#D4AF37]">Resend</span>
            </button>
          </div>

          <div className="text-center mt-4">
            <button
              onClick={() => { setStep("form"); setOtp(""); setError(""); setSuccess(""); }}
              className="text-[#64748B] text-xs hover:text-[#94A3B8] transition-colors"
            >
              ← Back to sign up
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-[#1E293B] rounded-2xl p-8 shadow-2xl border border-[#334155]">
        <div className="text-center mb-8">
          <div className="w-14 h-14 bg-[#D4AF37] rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
            <span className="text-[#0F172A] font-bold text-2xl">G</span>
          </div>
          <h1 className="text-2xl font-bold text-white">
            {isLogin ? "Welcome Back" : "Create Account"}
          </h1>
          <p className="text-[#94A3B8] text-sm mt-1">
            {isLogin ? "Sign in to continue your preparation" : "Start your IAS preparation journey"}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
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
          )}

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

          {error && <p className="text-red-400 text-sm">{error}</p>}
          {success && <p className="text-green-400 text-sm">{success}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-[#D4AF37] text-[#0F172A] rounded-xl font-bold text-sm hover:bg-[#C4A037] transition-colors disabled:opacity-50"
          >
            {loading ? "Please wait..." : isLogin ? "Sign In" : "Create Account"}
          </button>
        </form>

        <p className="text-center text-[#94A3B8] text-sm mt-6">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={() => { setIsLogin(!isLogin); setError(""); setSuccess(""); }}
            className="text-[#D4AF37] font-semibold hover:underline"
          >
            {isLogin ? "Sign Up" : "Sign In"}
          </button>
        </p>
      </div>
    </div>
  );
}
