import { Award, Star, TrendingUp, Calendar } from "lucide-react";
import PageHead from "@/components/PageHead";

const achievers = [
  {
    air: 4,
    name: "Raghav Jhunjhunwala",
    year: 2025,
    optional: "Economics",
    attempts: "2nd",
    quote: "The structured mentorship and daily current affairs analysis made all the difference in my preparation. Genuine IAS is truly the best platform for serious UPSC aspirants.",
    emoji: "👨‍🎓",
  },
  {
    air: 61,
    name: "Aastha Singh",
    year: 2024,
    optional: "Sociology",
    attempts: "1st",
    quote: "Genuine IAS gave me the right direction and strategy to crack UPSC in my first attempt. The faculty's personalized attention was exceptional.",
    emoji: "👩‍🎓",
  },
  {
    air: 91,
    name: "Aditi Chapparia",
    year: 2024,
    optional: "Political Science",
    attempts: "2nd",
    quote: "The faculty's expertise and personalized feedback transformed my preparation completely. I owe my success to Genuine IAS.",
    emoji: "👩‍🎓",
  },
  {
    air: 108,
    name: "Dhwanihs",
    year: 2025,
    optional: "Geography",
    attempts: "2nd",
    quote: "Comprehensive study material and excellent test series helped me work on my weak areas effectively.",
    emoji: "👩‍🎓",
  },
  {
    air: 183,
    name: "Daisy Chhabra",
    year: 2025,
    optional: "Anthropology",
    attempts: "3rd",
    quote: "The current affairs integration with static subjects is what sets Genuine IAS apart from every other coaching.",
    emoji: "👩‍🎓",
  },
  {
    air: 200,
    name: "Tanya Singh",
    year: 2025,
    optional: "Public Administration",
    attempts: "2nd",
    quote: "Answer writing practice and detailed feedback from faculty was a game changer for mains preparation.",
    emoji: "👩‍🎓",
  },
  {
    air: 237,
    name: "Nitish Kumar",
    year: 2025,
    optional: "History",
    attempts: "3rd",
    quote: "The test series and performance tracking helped me identify and improve my weak areas systematically.",
    emoji: "👨‍🎓",
  },
  {
    air: 386,
    name: "Tanishi",
    year: 2024,
    optional: "Sociology",
    attempts: "2nd",
    quote: "Genuine IAS gave me the confidence and strategy I needed to succeed in UPSC. Forever grateful.",
    emoji: "👩‍🎓",
  },
];

const stats = [
  { label: "Top 500 Selections", value: "9+", color: "#D4AF37" },
  { label: "Best Rank Achieved", value: "AIR 4", color: "#10B981" },
  { label: "Years of Excellence", value: "2024-25", color: "#3B82F6" },
  { label: "Students Mentored", value: "1000+", color: "#8B5CF6" },
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

        {/* Achiever Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievers.map((a) => (
            <div
              key={`${a.air}-${a.year}`}
              className="bg-[#1E293B] border border-[#334155] rounded-2xl p-6 hover:border-[#D4AF37]/40 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex-shrink-0 flex flex-col items-center justify-center">
                  <span className="text-[#0F172A] text-[10px] font-bold leading-none">AIR</span>
                  <span className="text-[#0F172A] text-xl font-bold leading-none">{a.air}</span>
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
