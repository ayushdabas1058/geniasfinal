import { useState, useEffect } from "react";
import { ChevronRight, Trophy, RotateCcw, CheckCircle, XCircle } from "lucide-react";
import { supabase } from "../lib/supabase";
import PageHead from "@/components/PageHead";

const subjects = ["History", "Geography", "Polity", "Economy", "Science & Tech", "Environment"];

const questionBank: Record<string, { q: string; options: string[]; answer: number; explanation: string }[]> = {
  History: [
    { q: "Who founded the Indian National Congress in 1885?", options: ["Allan Octavian Hume", "Bal Gangadhar Tilak", "Dadabhai Naoroji", "Gopal Krishna Gokhale"], answer: 0, explanation: "A.O. Hume, a retired British civil servant, founded the INC in 1885 with the aim of providing a platform for civil and political dialogue." },
    { q: "The Battle of Plassey was fought in which year?", options: ["1761", "1757", "1764", "1749"], answer: 1, explanation: "The Battle of Plassey was fought on 23 June 1757, where the British East India Company defeated Siraj ud-Daulah, the Nawab of Bengal." },
    { q: "Who gave the slogan 'Swaraj is my birthright'?", options: ["Mahatma Gandhi", "Subhas Chandra Bose", "Bal Gangadhar Tilak", "Lala Lajpat Rai"], answer: 2, explanation: "Bal Gangadhar Tilak gave the famous slogan 'Swaraj is my birthright and I shall have it' which became a rallying cry for Indian independence." },
    { q: "The Quit India Movement was launched in which year?", options: ["1940", "1942", "1944", "1945"], answer: 1, explanation: "The Quit India Movement was launched by Mahatma Gandhi on 8 August 1942 at the Bombay session of the All India Congress Committee." },
    { q: "Who was the first Governor-General of independent India?", options: ["Dr. Rajendra Prasad", "Lord Mountbatten", "C. Rajagopalachari", "Sardar Patel"], answer: 1, explanation: "Lord Mountbatten served as the first Governor-General of independent India from August 1947 to June 1948." },
  ],
  Geography: [
    { q: "Which is the longest river in India?", options: ["Yamuna", "Ganga", "Godavari", "Krishna"], answer: 1, explanation: "The Ganga is the longest river in India, stretching approximately 2,525 km from its source in the Gangotri Glacier to the Bay of Bengal." },
    { q: "The Thar Desert is located in which state?", options: ["Gujarat", "Rajasthan", "Haryana", "Punjab"], answer: 1, explanation: "The Thar Desert, also known as the Great Indian Desert, is primarily located in Rajasthan, though it also extends into Gujarat, Punjab and Haryana." },
    { q: "Which mountain pass connects India and China in Sikkim?", options: ["Rohtang Pass", "Nathu La", "Banihal Pass", "Zoji La"], answer: 1, explanation: "Nathu La is a mountain pass in the Himalayas connecting India and China on the border of Sikkim. It was reopened for trade in 2006." },
    { q: "The Deccan Plateau is bounded by which rivers on east and west?", options: ["Ganga and Yamuna", "Eastern and Western Ghats", "Mahanadi and Tapti", "Krishna and Godavari"], answer: 1, explanation: "The Deccan Plateau is bounded by the Eastern Ghats on the east and the Western Ghats on the west." },
    { q: "Which Indian state has the largest coastline?", options: ["Maharashtra", "Tamil Nadu", "Andhra Pradesh", "Gujarat"], answer: 3, explanation: "Gujarat has the longest coastline among Indian states, stretching approximately 1,600 km along the Arabian Sea." },
  ],
  Polity: [
    { q: "How many Fundamental Rights are guaranteed by the Indian Constitution?", options: ["5", "6", "7", "8"], answer: 1, explanation: "The Indian Constitution originally guaranteed 7 Fundamental Rights, but after the 44th Amendment (1978), the Right to Property was removed, leaving 6 Fundamental Rights." },
    { q: "The Preamble of the Indian Constitution was amended in which year?", options: ["1971", "1976", "1978", "1985"], answer: 1, explanation: "The Preamble was amended in 1976 by the 42nd Constitutional Amendment, which added the words 'Socialist', 'Secular', and 'Integrity'." },
    { q: "Who is called the 'Father of Indian Constitution'?", options: ["Jawaharlal Nehru", "Mahatma Gandhi", "B.R. Ambedkar", "Sardar Patel"], answer: 2, explanation: "Dr. B.R. Ambedkar is known as the Father of the Indian Constitution as he was the Chairman of the Drafting Committee." },
    { q: "The President of India is elected by:", options: ["Lok Sabha only", "Rajya Sabha only", "Both Houses of Parliament", "Elected members of Parliament and State Assemblies"], answer: 3, explanation: "The President is elected by an Electoral College consisting of elected members of both Houses of Parliament and elected members of Legislative Assemblies of all States and UTs with legislatures." },
    { q: "Which Article of the Constitution deals with Right to Education?", options: ["Article 19", "Article 21", "Article 21A", "Article 24"], answer: 2, explanation: "Article 21A, inserted by the 86th Constitutional Amendment Act 2002, provides free and compulsory education to all children aged 6 to 14 years." },
  ],
  Economy: [
    { q: "What does GDP stand for?", options: ["Gross Domestic Product", "General Development Plan", "Gross Development Progress", "General Domestic Production"], answer: 0, explanation: "GDP stands for Gross Domestic Product — the total monetary value of all goods and services produced within a country's borders in a specific time period." },
    { q: "Which body presents the Union Budget in India?", options: ["RBI", "NITI Aayog", "Ministry of Finance", "Planning Commission"], answer: 2, explanation: "The Union Budget is presented by the Ministry of Finance, specifically by the Finance Minister, in the Lok Sabha usually on February 1 every year." },
    { q: "NABARD is associated with which sector?", options: ["Industrial finance", "Rural and agricultural finance", "Export finance", "Urban housing finance"], answer: 1, explanation: "NABARD (National Bank for Agriculture and Rural Development) is the apex institution for agricultural and rural development finance in India." },
    { q: "The base year for current GDP calculation in India is:", options: ["2004-05", "2011-12", "2014-15", "2017-18"], answer: 1, explanation: "India revised its GDP base year to 2011-12 from 2004-05 in January 2015, along with adopting a new methodology aligned with international standards." },
    { q: "Which index measures inflation at the wholesale level?", options: ["CPI", "WPI", "PPI", "SPI"], answer: 1, explanation: "WPI (Wholesale Price Index) measures the average change in prices of goods at the wholesale level, before they reach the retail market." },
  ],
  "Science & Tech": [
    { q: "ISRO's first satellite was named:", options: ["Bhaskara", "Aryabhata", "Rohini", "Apple"], answer: 1, explanation: "Aryabhata was India's first satellite, launched on 19 April 1975 by the Soviet Union from Kapustin Yar, named after the ancient Indian mathematician." },
    { q: "Which mission successfully landed India on the Moon's south pole?", options: ["Chandrayaan-1", "Chandrayaan-2", "Chandrayaan-3", "Mangalyaan"], answer: 2, explanation: "Chandrayaan-3 successfully soft-landed on the Moon's south polar region on 23 August 2023, making India the first country to land near the lunar south pole." },
    { q: "DNA stands for:", options: ["Deoxyribonucleic Acid", "Dinitrogen Acid", "Deoxyribose Nitrogen Acid", "Dinucleic Acid"], answer: 0, explanation: "DNA stands for Deoxyribonucleic Acid — the molecule that carries genetic information in all living organisms." },
    { q: "5G technology primarily operates on which spectrum?", options: ["Low frequency only", "Sub-6 GHz and mmWave bands", "AM radio bands", "Satellite bands only"], answer: 1, explanation: "5G operates across sub-6 GHz bands (for wide coverage) and millimeter wave (mmWave) bands above 24 GHz (for ultra-high speed in dense areas)." },
    { q: "What is the full form of AI in technology?", options: ["Automated Intelligence", "Artificial Intelligence", "Advanced Integration", "Algorithmic Interface"], answer: 1, explanation: "AI stands for Artificial Intelligence — the simulation of human intelligence processes by computer systems, including learning, reasoning and self-correction." },
  ],
  Environment: [
    { q: "The Kyoto Protocol is related to:", options: ["Biodiversity conservation", "Reduction of greenhouse gas emissions", "Ocean pollution control", "Deforestation prevention"], answer: 1, explanation: "The Kyoto Protocol (1997) is an international treaty that commits state parties to reduce greenhouse gas emissions, based on the scientific consensus that global warming is occurring." },
    { q: "Which gas is primarily responsible for the greenhouse effect?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], answer: 2, explanation: "Carbon Dioxide (CO₂) is the primary greenhouse gas responsible for the enhanced greenhouse effect, largely due to fossil fuel combustion and deforestation." },
    { q: "Project Tiger was launched in which year?", options: ["1970", "1973", "1980", "1985"], answer: 1, explanation: "Project Tiger was launched in 1973 under Prime Minister Indira Gandhi's government to protect Bengal tigers. India now has the highest tiger population in the world." },
    { q: "The Ramsar Convention deals with conservation of:", options: ["Forests", "Wetlands", "Coral reefs", "Migratory birds"], answer: 1, explanation: "The Ramsar Convention (1971) is an international treaty for the conservation and sustainable use of wetlands, recognizing their ecological, botanical, zoological and hydrological importance." },
    { q: "Which is the largest national park in India by area?", options: ["Jim Corbett", "Sundarbans", "Hemis", "Kaziranga"], answer: 2, explanation: "Hemis National Park in Ladakh is the largest national park in India, covering approximately 4,400 sq km. It is also the largest national park in South Asia." },
  ],
};

export default function QuizPage() {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [saved, setSaved] = useState(false);

  const questions = selectedSubject ? questionBank[selectedSubject] : [];
  const q = questions[currentQ];

  // Auto-save score when quiz finishes
  useEffect(() => {
    if (!finished || saved || !selectedSubject) return;
    const saveScore = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session?.user) return;
      await supabase.from("quiz_scores").insert({
        user_id: session.user.id,
        subject: selectedSubject,
        score,
        total_questions: questions.length,
      });
      setSaved(true);
    };
    saveScore();
  }, [finished, saved, selectedSubject, score, questions.length]);

  const handleAnswer = (idx: number) => {
    if (selected !== null) return;
    setSelected(idx);
    setShowExplanation(true);
    const correct = idx === q.answer;
    if (correct) setScore((s) => s + 1);
    setAnswers((a) => [...a, correct]);
  };

  const handleNext = () => {
    if (currentQ + 1 >= questions.length) {
      setFinished(true);
    } else {
      setCurrentQ((q) => q + 1);
      setSelected(null);
      setShowExplanation(false);
    }
  };

  const handleRestart = () => {
    setSelectedSubject(null);
    setCurrentQ(0);
    setSelected(null);
    setShowExplanation(false);
    setScore(0);
    setFinished(false);
    setAnswers([]);
    setSaved(false);
  };

  if (!selectedSubject) {
    return (
      <div className="min-h-screen bg-[#0F172A] px-4 py-12">
        <PageHead title="UPSC Mock Tests & Quiz — Genuine IAS" description="Practice UPSC mock quizzes with instant explanations and score tracking." />
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              UPSC Mock Quiz
            </h1>
            <p className="text-[#D4AF37]/70 text-base sm:text-lg">5 questions per subject · Instant explanations · Track your score</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {subjects.map((sub) => (
              <button
                key={sub}
                onClick={() => setSelectedSubject(sub)}
                className="group relative bg-[#1E293B] border border-[#D4AF37]/20 rounded-2xl p-4 sm:p-6 text-left hover:border-[#D4AF37]/60 hover:bg-[#1E293B]/80 transition-all duration-300"
              >
                <div className="w-2 h-2 rounded-full bg-[#D4AF37] mb-3 sm:mb-4 group-hover:scale-150 transition-transform" />
                <p className="text-white font-semibold text-sm sm:text-lg">{sub}</p>
                <p className="text-[#94A3B8] text-xs sm:text-sm mt-1">5 questions</p>
                <ChevronRight className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-[#D4AF37]/40 group-hover:text-[#D4AF37] group-hover:translate-x-1 transition-all" size={20} />
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (finished) {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <div className="min-h-screen bg-[#0F172A] flex items-center justify-center px-4">
        <PageHead title="UPSC Mock Tests & Quiz — Genuine IAS" description="Practice UPSC mock quizzes with instant explanations and score tracking." />
        <div className="max-w-md w-full text-center">
          <Trophy className="mx-auto text-[#D4AF37] mb-6" size={64} />
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Quiz Complete!</h2>
          <p className="text-[#94A3B8] mb-8">{selectedSubject}</p>
          <div className="bg-[#1E293B] border border-[#D4AF37]/30 rounded-2xl p-6 sm:p-8 mb-8">
            <p className="text-5xl sm:text-6xl font-bold text-[#D4AF37] mb-2">{score}/{questions.length}</p>
            <p className="text-[#94A3B8]">{pct}% correct</p>
            <div className="flex justify-center gap-2 mt-6">
              {answers.map((a, i) => (
                a
                  ? <CheckCircle key={i} className="text-emerald-400" size={24} />
                  : <XCircle key={i} className="text-red-400" size={24} />
              ))}
            </div>
            {saved && <p className="text-emerald-400 text-xs mt-4">✓ Score saved to your dashboard</p>}
          </div>
          <p className="text-white mb-6 font-medium">
            {pct >= 80 ? "🏆 Excellent! Keep it up!" : pct >= 60 ? "👍 Good effort! Review the explanations." : "📚 Keep practicing — you'll get there!"}
          </p>
          <button
            onClick={handleRestart}
            className="flex items-center gap-2 mx-auto bg-[#D4AF37] text-[#0F172A] px-8 py-3 rounded-xl font-semibold hover:bg-[#D4AF37]/90 transition-colors"
          >
            <RotateCcw size={18} /> Try Another Subject
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0F172A] px-4 py-8 sm:py-12">
      <PageHead title="UPSC Mock Tests & Quiz — Genuine IAS" description="Practice UPSC mock quizzes with instant explanations and score tracking." />
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <button onClick={handleRestart} className="text-[#D4AF37]/60 hover:text-[#D4AF37] text-sm transition-colors">← Back</button>
          <span className="text-[#94A3B8] text-xs sm:text-sm">{selectedSubject} · Q{currentQ + 1}/{questions.length}</span>
          <span className="text-[#D4AF37] font-semibold text-sm">Score: {score}</span>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-[#1E293B] rounded-full h-1.5 mb-6 sm:mb-8">
          <div
            className="bg-[#D4AF37] h-1.5 rounded-full transition-all duration-500"
            style={{ width: `${((currentQ) / questions.length) * 100}%` }}
          />
        </div>

        <div className="bg-[#1E293B] border border-[#D4AF37]/20 rounded-2xl p-5 sm:p-8 mb-6">
          <p className="text-white text-lg sm:text-xl font-semibold leading-relaxed mb-6 sm:mb-8">{q.q}</p>
          <div className="space-y-3">
            {q.options.map((opt, i) => {
              let cls = "w-full text-left px-4 sm:px-5 py-3 sm:py-4 rounded-xl border transition-all duration-200 text-sm font-medium ";
              if (selected === null) {
                cls += "border-[#334155] text-[#CBD5E1] hover:border-[#D4AF37]/50 hover:text-white hover:bg-[#D4AF37]/5";
              } else if (i === q.answer) {
                cls += "border-emerald-400 bg-emerald-400/10 text-emerald-300";
              } else if (i === selected && selected !== q.answer) {
                cls += "border-red-400 bg-red-400/10 text-red-300";
              } else {
                cls += "border-[#334155] text-[#475569]";
              }
              return (
                <button key={i} className={cls} onClick={() => handleAnswer(i)}>
                  <span className="mr-3 text-[#D4AF37]/50 font-mono">{String.fromCharCode(65 + i)}.</span>
                  {opt}
                </button>
              );
            })}
          </div>
        </div>

        {showExplanation && (
          <div className="bg-[#1E293B] border border-[#D4AF37]/30 rounded-2xl p-5 sm:p-6 mb-6">
            <p className="text-[#D4AF37] text-xs font-semibold uppercase tracking-wider mb-2">Explanation</p>
            <p className="text-[#CBD5E1] text-sm leading-relaxed">{q.explanation}</p>
          </div>
        )}

        {selected !== null && (
          <button
            onClick={handleNext}
            className="w-full bg-[#D4AF37] text-[#0F172A] py-3 sm:py-4 rounded-xl font-bold hover:bg-[#D4AF37]/90 transition-colors flex items-center justify-center gap-2"
          >
            {currentQ + 1 >= questions.length ? "See Results" : "Next Question"}
            <ChevronRight size={20} />
          </button>
        )}
      </div>
    </div>
  );
}
