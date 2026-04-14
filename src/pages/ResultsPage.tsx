import { Trophy, Star, TrendingUp } from "lucide-react";
import PageHead from "@/components/PageHead";

const stats = [
  { label: "Top 500 Rankers", value: "9+", icon: <Trophy size={24} /> },
  { label: "Consecutive Years", value: "2", icon: <TrendingUp size={24} /> },
  { label: "Best Rank", value: "AIR 4", icon: <Star size={24} /> },
];

const results2025 = [
  { air: 4, name: "Raghav Jhunjhunwala", emoji: "🎓" },
  { air: 108, name: "Dhwanihs", emoji: "🌟" },
  { air: 183, name: "Daisy Chhabra", emoji: "💫" },
  { air: 200, name: "Tanya Singh", emoji: "✨" },
  { air: 237, name: "Nitish Kumar", emoji: "🏅" },
];

const results2024 = [
  { air: 61, name: "Aastha Singh", emoji: "🎓" },
  { air: 91, name: "Aditi Chapparia", emoji: "🌟" },
  { air: 386, name: "Tanishi", emoji: "💫" },
  { air: 423, name: "Daisy", emoji: "✨" },
  { air: 723, name: "Nitish Kumar", emoji: "🏅" },
];

interface ResultCardProps {
  air: number;
  name: string;
  emoji: string;
  year: number;
}

function ResultCard({ air, name, emoji, year }: ResultCardProps) {
  return (
    <div className="bg-[#1E293B] border border-[#D4AF37]/30 rounded-2xl p-6 flex flex-col items-center gap-3 hover:border-[#D4AF37] hover:-translate-y-1 transition-all duration-300">
      <div className="w-20 h-20 rounded-full bg-[#D4AF37]/10 border-2 border-[#D4AF37] flex items-center justify-center">
        <span className="text-[#D4AF37] font-bold text-xl">AIR {air}</span>
      </div>
      <span className="text-3xl">{emoji}</span>
      <h3 className="text-white font-semibold text-lg text-center">{name}</h3>
      <span className="text-[#94A3B8] text-sm">UPSC CSE {year}</span>
    </div>
  );
}

function YearSection({ year, results }: { year: number; results: typeof results2025 }) {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center">
            UPSC CSE {year} — Our Toppers
          </h2>
          <span className="bg-[#D4AF37] text-[#0F172A] font-bold text-sm px-3 py-1 rounded-full">
            {year}
          </span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {results.map((r) => (
            <ResultCard key={r.name + year} air={r.air} name={r.name} emoji={r.emoji} year={year} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ResultsPage() {
  return (
    <div className="min-h-screen bg-[#0F172A]">
      <PageHead title="UPSC Toppers — Genuine IAS | AIR 4, 61, 91 and more" description="Proven track record with top UPSC ranks. 9+ Top 500 rankers across consecutive years." />
      {/* Hero */}
      <section className="relative py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/5 to-transparent" />
        <div className="relative max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full px-4 py-1.5 mb-6">
            <Trophy size={16} className="text-[#D4AF37]" />
            <span className="text-[#D4AF37] text-sm font-medium">Proven Track Record</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Our Results Speak <span className="text-[#D4AF37]">For Themselves</span>
          </h1>
          <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto mb-12">
            Year after year, Genuine IAS students achieve top ranks in UPSC CSE
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {stats.map((s) => (
              <div key={s.label} className="bg-[#1E293B] border border-[#D4AF37]/20 rounded-xl p-6 flex flex-col items-center gap-2">
                <div className="text-[#D4AF37]">{s.icon}</div>
                <span className="text-3xl font-bold text-[#D4AF37]">{s.value}</span>
                <span className="text-[#94A3B8] text-sm">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
      </div>

      <YearSection year={2025} results={results2025} />

      <div className="max-w-6xl mx-auto px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
      </div>

      <YearSection year={2024} results={results2024} />

      {/* CTA Banner */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-[#D4AF37] to-[#B8960F] rounded-2xl p-10 sm:p-14 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-3">
            Join the Genuine IAS Family
          </h2>
          <p className="text-[#0F172A]/80 text-lg mb-8 max-w-xl mx-auto">
            Be the next success story — start your preparation today
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-[#0F172A] text-white font-bold px-8 py-3 rounded-xl hover:bg-[#1E293B] transition-colors">
              Start Preparation
            </button>
            <a
              href="https://wa.me/918920867614?text=Hi%20I%20want%20to%20know%20more%20about%20Genuine%20IAS"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-[#0F172A] text-[#0F172A] font-bold px-8 py-3 rounded-xl hover:bg-[#0F172A]/10 transition-colors"
            >
              Talk to Us on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
