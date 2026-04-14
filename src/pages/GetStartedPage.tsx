import { Download, MessageCircle, Copy, Check, Smartphone } from "lucide-react";
import { useState } from "react";
import PageHead from "@/components/PageHead";

const PLAY_STORE = "https://play.google.com/store/apps/details?id=co.penny.pynpa";
const APP_STORE = "https://apps.apple.com/in/app/classplus/id1324522260";
const WHATSAPP = "https://wa.me/918920867614?text=Hi%20I%20need%20help%20accessing%20Genuine%20IAS%20on%20the%20app";

const steps = [
  {
    num: 1,
    title: "Open Classplus App",
    desc: "Download the Classplus app from the App Store",
    hasAppStore: true,
  },
  {
    num: 2,
    title: "Enter Organisation Code",
    desc: "Type PYNPA in the organisation code field — this gives you access to Genuine IAS",
    hasCode: true,
  },
  {
    num: 3,
    title: "Create Your Account",
    desc: "Enter your phone number and verify with OTP",
  },
  {
    num: 4,
    title: "Enter Your Details",
    desc: "Fill in your name and email ID to complete your profile and access all courses",
  },
];

export default function GetStartedPage() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("PYNPA");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[#0F172A] text-white min-h-screen">
      <PageHead title="Get Started with Genuine IAS" description="Download the Genuine IAS app and start your UPSC preparation journey." />
      {/* Android Section */}
      <section className="py-20 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full px-4 py-2 mb-6">
            <Smartphone size={14} className="text-[#D4AF37]" />
            <span className="text-[#D4AF37] text-sm font-medium">Android Users</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Download Our <span className="text-[#D4AF37]">App</span>
          </h2>
          <p className="text-gray-300 text-lg mb-10">
            Direct access to all Genuine IAS content
          </p>
          <a
            href={PLAY_STORE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#0F172A] border-2 border-[#D4AF37] text-[#D4AF37] px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#D4AF37]/10 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#D4AF37]/30 transition-all duration-300"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Get it on Google Play"
              className="h-10"
            />
          </a>
        </div>
      </section>

      {/* iOS Section */}
      <section className="py-20 bg-[#0A1020] border-t border-[#334155]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full px-4 py-2 mb-6">
              <Smartphone size={14} className="text-[#D4AF37]" />
              <span className="text-[#D4AF37] text-sm font-medium">iOS Users</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Access on <span className="text-[#D4AF37]">iPhone</span>
            </h2>
            <p className="text-gray-300 text-lg">Follow these 4 simple steps</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {steps.map((step) => (
              <div
                key={step.num}
                className="bg-[#1E293B] border border-[#334155] rounded-2xl p-6 hover:border-[#D4AF37]/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-[#0F172A] font-bold text-xl">{step.num}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>

                    {step.hasAppStore && (
                      <a
                        href={APP_STORE}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-4 bg-[#0F172A] border-2 border-[#D4AF37] text-[#D4AF37] px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-[#D4AF37]/10 transition-all duration-300"
                      >
                        <Download size={16} />
                        Download from App Store
                      </a>
                    )}

                    {step.hasCode && (
                      <button
                        onClick={handleCopy}
                        className="mt-4 flex items-center gap-3 bg-[#D4AF37]/10 border-2 border-[#D4AF37] rounded-xl px-6 py-4 group hover:bg-[#D4AF37]/20 transition-all duration-300"
                      >
                        <span className="text-[#D4AF37] font-mono font-bold text-3xl tracking-[0.3em]">
                          PYNPA
                        </span>
                        {copied ? (
                          <Check size={20} className="text-green-400" />
                        ) : (
                          <Copy size={20} className="text-[#D4AF37] group-hover:scale-110 transition-transform" />
                        )}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp Help */}
      <section className="py-16 bg-[#0F172A] border-t border-[#334155]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#D4AF37] text-[#0F172A] px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#C4A037] hover:-translate-y-1 hover:shadow-lg hover:shadow-[#D4AF37]/30 transition-all duration-300"
          >
            <MessageCircle size={22} />
            Need Help? Chat on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
