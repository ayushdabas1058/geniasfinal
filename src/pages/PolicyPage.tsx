import { useState } from "react";
import { Shield, FileText, RotateCcw, Phone } from "lucide-react";
import PageHead from "@/components/PageHead";

const tabs = [
  { id: "refund", label: "Refund Policy", icon: <RotateCcw size={16} /> },
  { id: "privacy", label: "Privacy Policy", icon: <Shield size={16} /> },
  { id: "terms", label: "Terms of Service", icon: <FileText size={16} /> },
] as const;

type Tab = (typeof tabs)[number]["id"];

function RefundPolicy() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Refund &amp; Cancellation Policy</h2>
        <p className="text-gray-400 text-sm">Effective Date: April 2026 · Last Updated: April 2026</p>
      </div>

      <div className="bg-[#1E293B] border border-[#334155] rounded-2xl p-6 md:p-8 space-y-6">
        <div>
          <h3 className="text-lg font-bold text-[#D4AF37] mb-3">Foundation Live Course — Refund Policy</h3>
          <p className="text-gray-300 leading-relaxed text-sm">
            We offer a 70% refund on the Foundation Live Course fee if a cancellation request is raised within 30 days of the date of purchase. After 30 days, no refund will be issued under any circumstances. To request a refund, contact us on WhatsApp at +91 8920867614 or email us with your enrollment details.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold text-[#D4AF37] mb-3">Recorded Course — Refund Policy</h3>
          <p className="text-gray-300 leading-relaxed text-sm">
            The Recorded Course is strictly non-refundable. Due to the nature of digital content and immediate access granted upon purchase, no refund will be issued for the Recorded Course under any circumstances.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold text-[#D4AF37] mb-3">General Conditions</h3>
          <ul className="space-y-3 text-gray-300 text-sm">
            {[
              "Refund requests must include proof of payment and enrollment details",
              "Refunds, where applicable, will be processed within 7–10 business days to the original payment method",
              "Genuine IAS reserves the right to modify this refund policy at any time without prior notice",
              "In case of any dispute, the decision of Genuine IAS management shall be final",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-[#D4AF37] mt-1">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function PrivacyPolicy() {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl md:text-3xl font-bold text-white">Privacy Policy</h2>
      <div className="bg-[#1E293B] border border-[#334155] rounded-2xl p-6 md:p-8">
        <ul className="space-y-4 text-gray-300 text-sm leading-relaxed">
          {[
            "We collect: name, email address, and usage data when you register or use our platform",
            "Your data is used solely to provide and improve our services, send course-related communications, and track your learning progress",
            "We do not sell, rent, or share your personal information with third parties",
            "We use Supabase for secure data storage. All data is encrypted in transit and at rest",
            "You may request deletion of your account and data at any time by contacting us",
            "We may update this policy periodically. Continued use of the platform implies acceptance of the updated policy",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="text-[#D4AF37] mt-1">•</span>
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-6 pt-6 border-t border-[#334155] flex items-center gap-2 text-[#D4AF37] text-sm">
          <Phone size={14} />
          Contact for privacy concerns: +91 8920867614
        </div>
      </div>
    </div>
  );
}

function TermsOfService() {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl md:text-3xl font-bold text-white">Terms of Service</h2>
      <div className="bg-[#1E293B] border border-[#334155] rounded-2xl p-6 md:p-8">
        <ul className="space-y-4 text-gray-300 text-sm leading-relaxed">
          {[
            "By accessing or using Genuine IAS, you agree to these terms",
            "All course content including videos, notes, test series, and materials is the intellectual property of Genuine IAS and may not be copied, shared, or redistributed",
            "You may not share your account credentials with others. Each subscription is for individual use only",
            "Genuine IAS reserves the right to suspend or terminate accounts that violate these terms without refund",
            "The platform is intended for educational purposes only. We do not guarantee any specific exam result or selection",
            "Genuine IAS is not responsible for any technical issues caused by third-party platforms (Supabase, Classplus, etc.)",
            "These terms are governed by the laws of India. Any disputes shall be subject to the jurisdiction of courts in Delhi",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="text-[#D4AF37] mt-1">•</span>
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-6 pt-6 border-t border-[#334155] text-gray-400 text-sm">
          For any queries contact: <span className="text-white font-semibold">Rohit Sehrawat</span> | <span className="text-[#D4AF37]">+91 8920867614</span>
        </div>
      </div>
    </div>
  );
}

export default function PolicyPage() {
  const [activeTab, setActiveTab] = useState<Tab>("refund");

  return (
    <div className="bg-[#0F172A] text-white min-h-screen py-20">
      <PageHead title="Privacy Policy & Terms — Genuine IAS" description="Refund policy, privacy policy and terms of service for Genuine IAS." />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Legal &amp; <span className="text-[#D4AF37]">Policies</span>
          </h1>
          <p className="text-gray-400 text-lg">Transparency is at the core of everything we do</p>
        </div>

        {/* Tabs */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 bg-[#1E293B] rounded-xl p-1.5 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-[#D4AF37] text-[#0F172A]"
                  : "text-gray-400 hover:text-white hover:bg-[#334155]"
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        {activeTab === "refund" && <RefundPolicy />}
        {activeTab === "privacy" && <PrivacyPolicy />}
        {activeTab === "terms" && <TermsOfService />}
      </div>
    </div>
  );
}
