import { Award, Star, TrendingUp, Quote } from "lucide-react";
import PageHead from "@/components/PageHead";


    const achievers = [
  {
    air: 4,
    name: "Raghav Jhunjhunwala",
    year: 2025,
    optional: "Economics",
    attempts: "3rd",
    course: "Mains Guidance Program",
    img: "/toppers/raghav.jpg",
    quote: "The structured mentorship and daily current affairs analysis made all the difference in my preparation. Genuine IAS is truly the best platform for serious UPSC aspirants.",
  },
  {
    air: 61,
    name: "Aastha Singh",
    year: 2024,
    optional: "Economics",
    attempts: "1st",
    course: "Foundation + Mains Guidance Program",
    img: "/toppers/aastha.jpg",
    quote: "Genuine IAS gave me the right direction and strategy to crack UPSC in my first attempt. The faculty's personalized attention was exceptional.",
  },
  {
    air: 91,
    name: "Aditi Chapparia",
    year: 2024,
    optional: "Economics",
    attempts: "2nd",
    course: "Foundation + Mains Guidance Program",
    img: "/toppers/aditi.jpg",
    quote: "The faculty's expertise and personalized feedback transformed my preparation completely. I owe my success to Genuine IAS.",
  },
  {
    air: 108,
    name: "Dhwanish",
    year: 2025,
    optional: "Economics",
    attempts: "2nd",
    course: "Mains Guidance Program",
    img: "/toppers/dhwanish.jpg",
    quote: "Comprehensive study material and excellent test series helped me work on my weak areas effectively.",
  },
  {
    air: 183,
    name: "Daisy Chhabra",
    year: 2025,
    optional: "Economics",
    attempts: "2nd",
    course: "Mains Guidance Program",
    img: "/toppers/daisy.jpg",
    quote: "The current affairs integration with static subjects is what sets Genuine IAS apart from every other coaching.",
  },
  {
    air: 200,
    name: "Tanya Singh",
    year: 2025,
    optional: "Economics",
    attempts: "2nd",
    course: "Mains Guidance Program",
    img: "/toppers/tanya.jpg",
    quote: "Answer writing practice and detailed feedback from faculty was a game changer for mains preparation.",
  },
  {
    air: 237,
    name: "Nitish Kumar",
    year: 2025,
    optional: "Economics",
    attempts: "2nd",
    course: "Foundation + Mains Guidance Program",
    img: "/toppers/nitish.jpg",
    quote: "The test series and performance tracking helped me identify and improve my weak areas systematically.",
  },
  {
    air: 386,
    name: "Tanishi Kalra",
    year: 2024,
    optional: "Economics",
    attempts: "6th",
    course: "Foundation + Mains Guidance Program",
    img: "/toppers/tanishi.jpg",
    quote: "Genuine IAS gave me the confidence and strategy I needed to succeed in UPSC. Forever grateful.",
  },
];

const stats = [
  { label: "Top 500 Selections", value: "8+", color: "#D4AF37" },
  { label: "Best Rank Achieved", value: "AIR 4", color: "#10B981" },
  { label: "Years of Excellence", value: "2024-25", color: "#3B82F6" },
  { label: "Students Mentored", value: "250+", color: "#8B5CF6" },
];

export default function AchieversPage() {
  return (
    <div className="min-h-screen bg-[#0F172A] px-4 py-12">
      <PageHead
        title="Our Achievers — Genuine IAS"
        description="Meet our UPSC toppers and achievers who cracked the Civil Services Examination with Genuine IAS guidance."
      />
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Award className="text-[#D4AF37]" size={22} />
            <span className="text-[#D4AF37] text-sm font-medium uppercase tracking-wider">
              Hall of Fame
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 font-serif">
            Our Achievers
          </h1>
          <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
            Meet the brilliant minds who turned their UPSC dreams into reality with Genuine IAS
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-[#1E293B] border border-[#334155] rounded-2xl p-5 text-center"
            >
              <p className="text-3xl font-bold mb-1" style={{ color: s.color }}>
                {s.value}
              </p>
              <p className="text-[#94A3B8] text-sm">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Director Message Banner */}
        <div className="bg-[#1E293B] border border-[#D4AF37]/30 rounded-2xl p-6 sm:p-8 mb-10 flex flex-col sm:flex-row items-center gap-6">
          <img
            src="/rohit.jpg"
            alt="Rohit Sehrawat"
            className="w-20 h-20 rounded-full object-cover object-top border-2 border-[#D4AF37] flex-shrink-0"
          />
          <div>
            <h3 className="text-white font-bold text-lg mb-1">Message from the Director</h3>
            <p className="text-[#94A3B8] text-sm leading-relaxed italic">
              "Every achiever on this page started exactly where you are today. At Genuine IAS, we don't just teach — we mentor, guide, and walk with you every step of the way. Your name could be next on this list."
            </p>
            <p className="text-[#D4AF37] text-sm font-semibold mt-2">— Rohit Sehrawat, Founder & Director</p>
          </div>
        </div>

        {/* Achiever Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievers.map((a) => (
            <div
              key={`${a.air}-${a.year}`}
              className="bg-[#1E293B] border border-[#334155] rounded-2xl p-6 hover:border-[#D4AF37]/40 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="relative flex-shrink-0">
                  <img
                    src={a.img}
                    alt={a.name}
                    className="w-16 h-16 rounded-full object-cover object-top border-2 border-[#D4AF37]"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                  <span className="absolute -bottom-1 -left-1 bg-[#D4AF37] text-[#0F172A] text-[10px] font-bold px-1.5 py-0.5 rounded-full leading-none">
                    AIR {a.air}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-bold text-lg leading-snug">{a.name}</h3>
                  <p className="text-[#D4AF37] text-sm font-semibold">UPSC CSE {a.year}</p>
                  <div className="flex items-center gap-3 mt-1 flex-wrap">
                    <span className="text-[#94A3B8] text-xs">{a.optional}</span>
                    <span className="text-[#475569] text-xs">•</span>
                    <span className="text-[#94A3B8] text-xs">{a.attempts} Attempt</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={12}
                    className="fill-[#D4AF37] text-[#D4AF37]"
                  />
                ))}
              </div>

              <p className="text-[#CBD5E1] text-sm italic leading-relaxed">
                "{a.quote}"
              </p>
              <span className="inline-block mt-3 px-3 py-1 text-xs rounded-full bg-[#1E293B] text-[#D4AF37] border border-[#D4AF37]/30">
  {a.course}
</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-[#D4AF37]/10 to-[#D4AF37]/5 border border-[#D4AF37]/20 rounded-2xl p-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Ready to Be Our Next Achiever?
          </h2>
          <p className="text-[#94A3B8] mb-6 max-w-lg mx-auto">
            Join the Genuine IAS family and get the mentorship that produced AIR 4, 61, 91 and many more top rankers.
          </p>
          <a
            href="/courses"
            className="inline-flex items-center gap-2 bg-[#D4AF37] text-[#0F172A] px-8 py-3 rounded-xl font-bold text-lg hover:bg-[#C4A037] hover:-translate-y-1 hover:shadow-lg hover:shadow-[#D4AF37]/30 transition-all duration-300"
          >
            <TrendingUp size={20} />
            Start Your Journey
          </a>
        </div>
      </div>
    </div>
  );
}
