import { useState, useEffect } from "react";
import { Trophy, Target, Flame, BookOpen, TrendingUp, CheckCircle, Clock, Star } from "lucide-react";
import { supabase } from "../lib/supabase";
import PageHead from "@/components/PageHead";

interface QuizScore {
  subject: string;
  score: number;
  total_questions: number;
  created_at: string;
}

export default function DashboardPage() {
  const [tab, setTab] = useState<"overview" | "scores" | "activity">("overview");
  const [quizScores, setQuizScores] = useState<QuizScore[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchScores = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session?.user) { setLoading(false); return; }
      const { data } = await supabase
        .from("quiz_scores")
        .select("subject, score, total_questions, created_at")
        .eq("user_id", session.user.id)
        .order("created_at", { ascending: false });
      if (data) setQuizScores(data);
      setLoading(false);
    };
    fetchScores();
  }, []);

  // Aggregate scores by subject
  const subjectMap = new Map<string, { attempted: number; correct: number }>();
  quizScores.forEach((s) => {
    const existing = subjectMap.get(s.subject) || { attempted: 0, correct: 0 };
    existing.attempted += s.total_questions;
    existing.correct += s.score;
    subjectMap.set(s.subject, existing);
  });

  const allSubjects = ["History", "Geography", "Polity", "Economy", "Science & Tech", "Environment"];
  const subjectScores = allSubjects.map((subject) => {
    const data = subjectMap.get(subject) || { attempted: 0, correct: 0 };
    return {
      subject,
      attempted: data.attempted,
      correct: data.correct,
      pct: data.attempted > 0 ? Math.round((data.correct / data.attempted) * 100) : 0,
    };
  });

  const totalAttempted = subjectScores.reduce((a, s) => a + s.attempted, 0);
  const totalCorrect = subjectScores.reduce((a, s) => a + s.correct, 0);
  const overallPct = totalAttempted > 0 ? Math.round((totalCorrect / totalAttempted) * 100) : 0;

  const bestSubject = subjectScores.filter(s => s.attempted > 0).sort((a, b) => b.pct - a.pct)[0];

  // Recent activity from quiz scores
  const recentActivity = quizScores.slice(0, 5).map((s) => ({
    label: `${s.subject} Quiz`,
    detail: `${s.score}/${s.total_questions} correct`,
    time: new Date(s.created_at).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }),
    icon: s.subject === "History" ? "🏛️" : s.subject === "Polity" ? "⚖️" : s.subject === "Geography" ? "🗺️" : s.subject === "Economy" ? "💰" : s.subject === "Environment" ? "🌿" : "🔬",
  }));

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0F172A] flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-[#D4AF37] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0F172A] px-4 py-8 sm:py-12">
      <PageHead title="My Dashboard — Genuine IAS" description="Track your UPSC preparation progress, quiz scores, and study streaks." />
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 sm:mb-10">
          <div>
            <p className="text-[#D4AF37] text-sm mb-1">Welcome back 👋</p>
            <h1 className="text-2xl sm:text-3xl font-bold text-white">Your Dashboard</h1>
          </div>
          <div className="bg-[#1E293B] border border-[#D4AF37]/30 rounded-2xl px-4 sm:px-5 py-3 text-center">
            <div className="flex items-center gap-2">
              <Flame className="text-orange-400" size={20} />
              <span className="text-2xl font-bold text-white">{quizScores.length}</span>
            </div>
            <p className="text-[#94A3B8] text-xs mt-0.5">quizzes taken</p>
          </div>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8">
          {[
            { icon: <Target size={20} className="text-[#D4AF37]" />, label: "Overall Score", value: totalAttempted > 0 ? `${overallPct}%` : "—", sub: totalAttempted > 0 ? `${totalCorrect}/${totalAttempted} correct` : "No quizzes yet" },
            { icon: <Trophy size={20} className="text-emerald-400" />, label: "Best Subject", value: bestSubject?.subject || "—", sub: bestSubject ? `${bestSubject.pct}% accuracy` : "Take a quiz!" },
            { icon: <BookOpen size={20} className="text-blue-400" />, label: "Quizzes Taken", value: String(quizScores.length), sub: `across ${subjectMap.size} subjects` },
            { icon: <Clock size={20} className="text-purple-400" />, label: "Questions", value: String(totalAttempted), sub: "total attempted" },
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
          {(["overview", "scores", "activity"] as const).map((t) => (
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
          <div className="space-y-6">
            {quizScores.length === 0 ? (
              <div className="bg-[#1E293B] border border-[#334155] rounded-2xl p-8 sm:p-12 text-center">
                <BookOpen className="mx-auto text-[#D4AF37]/40 mb-4" size={48} />
                <h3 className="text-white font-semibold text-lg mb-2">No quizzes taken yet</h3>
                <p className="text-[#94A3B8] text-sm">Head to the Quiz section and start practicing! Your scores will appear here automatically.</p>
              </div>
            ) : (
              <>
                {/* Subject breakdown */}
                <div className="bg-[#1E293B] border border-[#334155] rounded-2xl p-5 sm:p-6">
                  <div className="flex items-center gap-2 mb-6">
                    <TrendingUp size={18} className="text-[#D4AF37]" />
                    <h3 className="text-white font-semibold">Subject Performance</h3>
                  </div>
                  <div className="space-y-4">
                    {subjectScores.filter(s => s.attempted > 0).map((s) => (
                      <div key={s.subject}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[#CBD5E1] text-sm font-medium">{s.subject}</span>
                          <span className="text-sm font-bold" style={{ color: s.pct >= 70 ? "#10B981" : s.pct >= 50 ? "#F59E0B" : "#EF4444" }}>
                            {s.pct}%
                          </span>
                        </div>
                        <div className="w-full bg-[#0F172A] rounded-full h-2">
                          <div className="h-2 rounded-full transition-all duration-700" style={{ width: `${s.pct}%`, background: s.pct >= 70 ? "#10B981" : s.pct >= 50 ? "#F59E0B" : "#EF4444" }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent scores */}
                <div className="bg-[#1E293B] border border-[#334155] rounded-2xl p-5 sm:p-6">
                  <h3 className="text-white font-semibold mb-4">Recent Quiz Scores</h3>
                  <div className="space-y-3">
                    {quizScores.slice(0, 8).map((s, i) => (
                      <div key={i} className="flex items-center justify-between py-2 border-b border-[#334155] last:border-0">
                        <div>
                          <p className="text-[#CBD5E1] text-sm font-medium">{s.subject}</p>
                          <p className="text-[#475569] text-xs">{new Date(s.created_at).toLocaleDateString("en-IN", { day: "numeric", month: "short" })}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-white font-bold">{s.score}/{s.total_questions}</p>
                          <p className="text-xs" style={{ color: (s.score / s.total_questions) >= 0.7 ? "#10B981" : (s.score / s.total_questions) >= 0.5 ? "#F59E0B" : "#EF4444" }}>
                            {Math.round((s.score / s.total_questions) * 100)}%
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        )}

        {/* Scores tab */}
        {tab === "scores" && (
          <div className="bg-[#1E293B] border border-[#334155] rounded-2xl p-5 sm:p-6">
            <h3 className="text-white font-semibold mb-6">Quiz Performance by Subject</h3>
            <div className="space-y-5">
              {subjectScores.map((s) => (
                <div key={s.subject}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[#CBD5E1] text-sm font-medium">{s.subject}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-[#475569] text-xs">{s.correct}/{s.attempted}</span>
                      <span className="text-sm font-bold w-10 text-right" style={{ color: s.pct >= 70 ? "#10B981" : s.pct >= 50 ? "#F59E0B" : s.attempted === 0 ? "#475569" : "#EF4444" }}>
                        {s.attempted === 0 ? "—" : `${s.pct}%`}
                      </span>
                    </div>
                  </div>
                  <div className="w-full bg-[#0F172A] rounded-full h-2">
                    <div className="h-2 rounded-full transition-all duration-700" style={{ width: `${s.pct}%`, background: s.pct >= 70 ? "#10B981" : s.pct >= 50 ? "#F59E0B" : "#EF4444" }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-[#334155] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <p className="text-[#94A3B8] text-sm">Overall accuracy</p>
                <p className="text-3xl font-bold text-[#D4AF37]">{totalAttempted > 0 ? `${overallPct}%` : "—"}</p>
              </div>
              <div className="flex items-center gap-2">
                <Star size={16} className="text-[#D4AF37]" />
                <span className="text-[#CBD5E1] text-sm">{totalAttempted === 0 ? "Take your first quiz!" : overallPct >= 70 ? "On track for Prelims!" : "Keep practicing daily"}</span>
              </div>
            </div>
          </div>
        )}

        {/* Activity tab */}
        {tab === "activity" && (
          <div className="bg-[#1E293B] border border-[#334155] rounded-2xl p-5 sm:p-6">
            <h3 className="text-white font-semibold mb-6">Recent Activity</h3>
            {recentActivity.length === 0 ? (
              <p className="text-[#94A3B8] text-sm text-center py-8">No activity yet. Start a quiz to see your history here!</p>
            ) : (
              <div className="space-y-4">
                {recentActivity.map((item, i) => (
                  <div key={i} className="flex items-center gap-4 py-3 border-b border-[#334155] last:border-0">
                    <span className="text-2xl">{item.icon}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-sm font-medium truncate">{item.label}</p>
                      <p className="text-[#94A3B8] text-xs">{item.detail}</p>
                    </div>
                    <span className="text-[#475569] text-xs text-right whitespace-nowrap">{item.time}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
