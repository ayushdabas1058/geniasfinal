import { useState } from "react";
import { BookOpen, Clock, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PageHead from "@/components/PageHead";

const allSubjects = ["History", "Geography", "Polity", "Economy", "Science & Tech", "Environment"];

export default function DashboardPage() {
  const [tab, setTab] = useState<"overview" | "progress" | "activity">("overview");
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0F172A] px-4 py-8 sm:py-12">
      <PageHead title="My Dashboard — Genuine IAS" description="Track your UPSC preparation progress and study streaks." />
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 sm:mb-10">
          <div>
            <p className="text-[#D4AF37] text-sm mb-1">Welcome back 👋</p>
            <h1 className="text-2xl sm:text-3xl font-bold text-white">Your Dashboard</h1>
          </div>
          <div className="bg-[#1E293B] border border-[#D4AF37]/30 rounded-2xl px-4 sm:px-5 py-3 text-center">
            <div className="flex items-center gap-2">
              <Star className="text-[#D4AF37]" size={20} />
              <span className="text-2xl font-bold text-white">0</span>
            </div>
            <p className="text-[#94A3B8] text-xs mt-0.5">chapters read</p>
          </div>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8">
          {[
            { icon: <span className="text-xl">📚</span>, label: "Study Streak", value: "0 days", sub: "Start today!" },
            { icon: <span className="text-xl">🎯</span>, label: "Subjects Covered", value: "0 / 6", sub: "Track your progress" },
            { icon: <span className="text-xl">📖</span>, label: "Materials Read", value: "0", sub: "chapters completed" },
            { icon: <span className="text-xl">⏱️</span>, label: "Study Time", value: "0 hrs", sub: "this week" },
          ].map((card) => (
            <div key={card.label} className="bg-[#1E293B] border border-[#334155] rounded-2xl p-4 sm:p-5">
              <div className="mb-3">{card.icon}</div>
              <p className="text-xl sm:text-2xl font-bold text-white mb-0.5">{card.value}</p>
              <p className="text-[#94A3B8] text-xs">{card.sub}</p>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-1 bg-[#1E293B] rounded-xl p-1 mb-6 w-fit overflow-x-auto">
          {(["overview", "progress", "activity"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className="px-4 sm:px-5 py-2 rounded-lg text-sm font-medium capitalize transition-all whitespace-nowrap"
              style={{
                background: tab === t ? "#D4AF37" : "transparent",
                color: tab === t ? "#0F172A" : "#94A3B8",
              }}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Overview tab */}
        {tab === "overview" && (
          <div className="bg-[#1E293B] border border-[#334155] rounded-2xl p-8 sm:p-12 text-center">
            <BookOpen className="mx-auto text-[#D4AF37]/40 mb-4" size={48} />
            <h3 className="text-white font-semibold text-lg mb-2">Start your UPSC journey</h3>
            <p className="text-[#94A3B8] text-sm mb-6">Your study progress, streaks, and performance will appear here as you use the platform.</p>
            <button
              onClick={() => navigate("/study")}
              className="bg-[#D4AF37] text-[#0F172A] px-6 py-3 rounded-xl font-bold text-sm hover:bg-[#C4A037] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#D4AF37]/30 transition-all duration-200"
            >
              Go to Study Material
            </button>
          </div>
        )}

        {/* Progress tab */}
        {tab === "progress" && (
          <div className="bg-[#1E293B] border border-[#334155] rounded-2xl p-5 sm:p-6">
            <h3 className="text-white font-semibold mb-6">Subject Progress</h3>
            <div className="space-y-5">
              {allSubjects.map((subject) => (
                <div key={subject}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[#CBD5E1] text-sm font-medium">{subject}</span>
                    <span className="text-[#475569] text-sm font-bold">Not started</span>
                  </div>
                  <div className="w-full bg-[#0F172A] rounded-full h-2">
                    <div className="h-2 rounded-full transition-all duration-700 bg-[#475569]" style={{ width: "0%" }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Activity tab */}
        {tab === "activity" && (
          <div className="bg-[#1E293B] border border-[#334155] rounded-2xl p-5 sm:p-6">
            <h3 className="text-white font-semibold mb-6">Recent Activity</h3>
            <p className="text-[#94A3B8] text-sm text-center py-8">No activity yet. Start studying to see your history here!</p>
          </div>
        )}
      </div>
    </div>
  );
}
