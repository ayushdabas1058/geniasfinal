import React from "react";
import { ChevronRight, Download, Star, Quote, BookOpen, LayoutDashboard, Users, Award, TrendingUp, Clock, Phone, Mail, MapPin } from "lucide-react";
import VideoTestimonials from "@/components/VideoTestimonials";
import PageHead from "@/components/PageHead";

const toppers = [
  { air: 4,   name: "Raghav Jhunjhunwala", year: 2025, img: "/toppers/raghav.jpg", quote: "The structured mentorship and daily current affairs analysis made all the difference." },
  { air: 61,  name: "Aastha Singh",         year: 2024, img: "/toppers/aastha.jpg", quote: "Genuine IAS gave me the right direction and strategy to crack UPSC in my first attempt." },
  { air: 91,  name: "Aditi Chapparia",      year: 2024, img: "/toppers/aditi.jpg", quote: "The faculty's expertise and personalized feedback transformed my preparation completely." },
  { air: 108, name: "Dhwanish",             year: 2025, img: "/toppers/dhwanish.jpg", quote: "Comprehensive study material and excellent test series helped me work on my weak areas." },
  { air: 183, name: "Daisy Chhabra",        year: 2025, img: "/toppers/daisy.jpg", quote: "The current affairs integration with static subjects is what sets Genuine IAS apart." },
  { air: 200, name: "Tanya Singh",          year: 2025, img: "/toppers/tanya.jpg", quote: "Answer writing practice and detailed feedback from faculty was a game changer for mains." },
  { air: 237, name: "Nitish Kumar Yadav",   year: 2025, img: "/toppers/nitish.jpg", quote: "The test series and performance tracking helped me identify and improve my weak areas." },
  { air: 386, name: "Tanishi Kalra",        year: 2024, img: "/toppers/tanishi.jpg", quote: "Genuine IAS gave me the confidence and strategy I needed to succeed in UPSC." },
];

const features = [
  { icon: <BookOpen size={24} />, title: "Comprehensive Notes", desc: "Subject-wise notes for Prelims & Mains covering the entire UPSC syllabus" },
  { icon: <Award size={24} />, title: "Our Achievers", desc: "Meet our UPSC toppers and their inspiring success stories" },
  { icon: <LayoutDashboard size={24} />, title: "Progress Dashboard", desc: "Track your preparation with detailed analytics and study streaks" },
];

const faculty = [
  { name: "Rohit Sehrawat", subject: "Economics Optional", exp: "Expert faculty with proven results", qual: "Specialized in Economics Optional for UPSC Mains", emoji: "👨‍🏫" },
];

const testimonials = [
  { name: "Raghav Jhunjhunwala", air: 4,   year: 2025, img: "/toppers/raghav.jpg", stars: 5, quote: "The structured mentorship and daily current affairs analysis made all the difference in my preparation. Genuine IAS is truly the best platform for serious UPSC aspirants." },
  { name: "Aastha Singh",         air: 61,  year: 2024, img: "/toppers/aastha.jpg", stars: 5, quote: "Genuine IAS gave me the right direction and strategy to crack UPSC. The faculty's personalized attention and comprehensive study material were exceptional." },
  { name: "Daisy Chhabra",        air: 183, year: 2025, img: "/toppers/daisy.jpg", stars: 5, quote: "What sets Genuine IAS apart is their focus on integrating current affairs with static subjects. The answer writing program transformed my mains preparation completely." },
];
function RohitBio() {
  const [expanded, setExpanded] = React.useState(false);
  const short = "Rohit Sehrawat Sir has worked as an Assistant Professor of Economics in Delhi University and served as an Economic Consultant in the Ministry of Finance.";
  const full = `Rohit Sehrawat Sir has worked as an Assistant Professor of Economics in Delhi University. He has also served as an Economic Consultant in the Ministry of Finance and has written multiple research papers. With a dream of making Economics Optional the most popular optional, he left his job in 2022 and founded Genuine IAS to cater to the needs of Economics Optional students.

In recent years, the landscape of Economics Optional preparation has witnessed a significant transformation, largely driven by his dedicated efforts. Known for his clear conceptual approach and student-centric teaching methodology, he has emerged as a prominent faculty guiding aspirants through the complexities of the subject.

Rohit Sir's emphasis on strengthening foundational understanding and providing well-structured, exam-oriented study material has played a crucial role in reshaping how students perceive Economics Optional. His approach goes beyond rote learning, focusing instead on analytical clarity and application.

As a result of these consistent efforts, the popularity of Economics Optional is rapidly increasing among aspirants — recognizing its potential as a scoring and intellectually rewarding subject. With continuous refinement of study resources under Rohit Sir's guidance, Economics Optional is well on its way to becoming one of the most preferred choices in the coming years.`;

  return (
    <div className="text-left mt-2">
      <p className="text-gray-400 text-sm leading-relaxed whitespace-pre-line">
        {expanded ? full : short}
      </p>
      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-3 flex items-center gap-1 text-[#D4AF37] text-sm font-semibold hover:underline transition-all"
      >
        {expanded ? "Show less ▲" : "Read more ▼"}
      </button>
    </div>
  );
}

export default function HomePage({ onNavigate }: { onNavigate?: (page: string) => void }) {
  const scrollToToppers = () => {
    document.getElementById("toppers-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#0F172A] text-white">
      <PageHead title="Genuine IAS — India's Most Trusted UPSC Platform" description="Join thousands of UPSC aspirants. Expert mentorship, study material, mock tests, current affairs and live courses." />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden py-24 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A]">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/G%3E%3C/svg%3E")` }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full px-4 py-2 mb-6">
                <Award size={14} className="text-[#D4AF37]" />
                <span className="text-[#D4AF37] text-sm font-medium">India's Most Trusted UPSC Platform</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Dominate Economics Optional with<br />
                <span className="text-[#D4AF37]">Genuine IAS</span>
              </h1>
              <p className="text-lg mb-10 leading-tight max-w-md">
              <span className="block text-gray-400">Hard to find.</span>
              <span className="block text-gray-300">Harder to leave.</span>
              <span className="block text-[#D4AF37] font-semibold">Impossible to forget.</span>
</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => onNavigate?.("/courses")} className="bg-[#D4AF37] text-[#0F172A] px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-[#C4A037] hover:-translate-y-1 hover:shadow-lg hover:shadow-[#D4AF37]/30 transition-all duration-300 group">
                  Start Preparation <ChevronRight className="group-hover:translate-x-1 transition-transform" size={22} />
                </button>
                <button onClick={() => onNavigate?.("/study")} className="border-2 border-[#D4AF37] text-[#D4AF37] px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-[#D4AF37] hover:text-[#0F172A] hover:-translate-y-1 transition-all duration-300">
                  <Download size={20} /> Download Free Notes
                </button>
              </div>
              <a href="https://play.google.com/store/apps/details?id=co.penny.pynpa" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 mt-2 bg-[#0F172A] border-2 border-[#D4AF37] text-[#D4AF37] px-6 py-3 rounded-xl font-bold hover:bg-[#D4AF37]/10 hover:-translate-y-1 transition-all duration-300">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" className="h-8" />
              </a>
              <button
                onClick={() => onNavigate?.("/get-started")}
                className="mt-2 inline-flex items-center gap-2 text-[#D4AF37] border border-[#D4AF37]/40 px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-[#D4AF37]/10 transition-all duration-300"
              >
                🍎 iOS Users — Click Here
              </button>
            </div>

            {/* Floating topper cards — stacked cleanly */}
            <div className="hidden md:grid grid-cols-2 gap-4">
              {[
                { air: 4,   name: "Raghav Jhunjhunwala", year: 2025, img: "/toppers/raghav.jpg" },
                { air: 61,  name: "Aastha Singh",         year: 2024, img: "/toppers/aastha.jpg" },
                { air: 91,  name: "Aditi Chapparia",      year: 2024, img: "/toppers/aditi.jpg" },
                { air: 108, name: "Dhwanish",             year: 2025, img: "/toppers/dhwanish.jpg" },
                { air: 183, name: "Daisy Chhabra",        year: 2025, img: "/toppers/daisy.jpg" },
                { air: 200, name: "Tanya Singh",          year: 2025, img: "/toppers/tanya.jpg" },
                { air: 237, name: "Nitish Kumar Yadav",        year: 2025, img: "/toppers/nitish.jpg" },
                { air: 386, name: "Tanishi Kalra",          year: 2024, img: "/toppers/tanishi.jpg" },
              ].map((t) => (
                <div key={t.air} onClick={scrollToToppers} className="bg-white text-[#0F172A] px-5 py-4 rounded-2xl shadow-2xl flex items-center gap-4 w-full lg:hover:scale-105 lg:hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                  <img src={t.img} alt={t.name} className="w-14 h-14 rounded-full object-cover object-top border-2 border-[#D4AF37] flex-shrink-0" />
                  <div>
                    <p className="font-bold text-base">{t.name}</p>
                    <p className="text-[#D4AF37] text-xs font-semibold">AIR {t.air} — UPSC CSE {t.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-12 border-t border-b border-[#334155] bg-[#0A1020]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Users size={28} />,     value: "250+",  label: "Students Mentored", color: "#3B82F6" },
              { icon: <Award size={28} />,     value: "8+",     label: "Top 500 Rankers",   color: "#10B981" },
              { icon: <TrendingUp size={28} />,value: "AIR 4",  label: "Best Rank — 2025",  color: "#D4AF37" },
              { icon: <Clock size={28} />,     value: "2024-25",label: "Proven Results",    color: "#8B5CF6" },
            ].map((s) => (
              <div key={s.label} className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 text-center lg:hover:bg-white/10 lg:hover:scale-105 transition-all duration-300">
                <div className="flex justify-center mb-3" style={{ color: s.color }}>{s.icon}</div>
                <p className="text-3xl font-bold mb-1" style={{ color: s.color }}>{s.value}</p>
                <p className="text-gray-400 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-20 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-4">Everything You Need to <span className="text-[#D4AF37]">Dominate Economics Optional</span></h2>
            <p className="text-gray-400 text-lg">A complete ecosystem for your IAS preparation</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-[#1E293B] border border-[#334155] rounded-2xl p-6 lg:hover:border-[#D4AF37]/40 lg:hover:-translate-y-2 lg:hover:shadow-xl transition-all duration-300 group">
                <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center mb-4 text-[#D4AF37] group-hover:bg-[#D4AF37]/20 transition-colors">
                  {f.icon}
                </div>
                <h3 className="font-bold text-white text-lg mb-2">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TOPPERS ── */}
      <section id="toppers-section" className="py-20 bg-[#0A1020]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Award className="text-[#D4AF37]" size={28} />
              <h2 className="text-4xl font-bold">Our Toppers' Success Stories</h2>
            </div>
            <p className="text-gray-400 text-lg">Real results from real students — year after year</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {toppers.map((t) => (
              <div key={`${t.air}-${t.year}`} className="bg-[#1E293B] border border-[#334155] rounded-2xl p-6 text-center lg:hover:border-[#D4AF37]/50 lg:hover:-translate-y-2 lg:hover:shadow-xl transition-all duration-300" onClick={scrollToToppers}>
                <img src={t.img} alt={t.name} className="w-20 h-20 rounded-full object-cover object-top border-2 border-[#D4AF37] mx-auto mb-2" />
                <div className="text-[#D4AF37] font-bold text-sm my-3">AIR {t.air}</div>
                <p className="font-bold text-white text-base mb-1">{t.name}</p>
                <p className="text-[#D4AF37] text-xs font-semibold mb-3">UPSC CSE {t.year}</p>
                <p className="text-gray-400 text-xs italic leading-relaxed">"{t.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FACULTY ── */}
      <section className="py-20 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-3xl">🎓</span>
              <h2 className="text-4xl font-bold">Meet Our Expert Faculty</h2>
            </div>
            <p className="text-gray-400 text-lg">Learn from the best mentors with proven track records</p>
          </div>
          <div className="flex justify-center">
            {faculty.map((f) => (
              <div key={f.name} className="bg-[#1E293B] border border-[#334155] rounded-2xl p-10 text-center lg:hover:border-[#D4AF37]/40 lg:hover:-translate-y-1 transition-all duration-300 max-w-sm w-full">
           <img src="/rohit.jpg" alt={f.name} className="w-28 h-28 rounded-full object-cover object-top border-3 border-[#D4AF37] mx-auto mb-3" />
                <h3 className="font-bold text-white text-2xl mb-3">{f.name}</h3>
                <span className="inline-block bg-[#D4AF37] text-[#0F172A] text-sm font-bold px-4 py-1.5 rounded-full mb-4">{f.subject}</span>
                <RohitBio />
                <div className="mt-6 pt-6 border-t border-[#334155] flex flex-col gap-2">
                  <a href="tel:8920867614" className="flex items-center justify-center gap-2 text-[#D4AF37] text-sm hover:underline">
                    <Phone size={14} /> +91 8920867614
                  </a>
                  <a href="mailto:Rohitsehrawat1389@gmail.com" className="flex items-center justify-center gap-2 text-[#D4AF37] text-sm hover:underline">
                    <Mail size={14} /> Rohitsehrawat1389@gmail.com
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VIDEO TESTIMONIALS ── */}
      <VideoTestimonials />

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 bg-[#0A1020]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-4">What Our Students Say</h2>
            <p className="text-gray-400 text-lg">In their own words — straight from our toppers</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-[#1E293B] border border-[#334155] rounded-2xl p-6 lg:hover:border-[#D4AF37]/40 lg:hover:-translate-y-1 transition-all duration-300">
                <Quote className="text-[#D4AF37] mb-3" size={28} />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} size={14} className="fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>
                <p className="text-gray-300 italic leading-relaxed mb-6 text-sm">"{t.quote}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-[#334155]">
                  <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover object-top border-2 border-[#D4AF37]" />
                  <div>
                    <p className="font-bold text-white">{t.name}</p>
                    <p className="text-[#D4AF37] text-sm font-semibold">AIR {t.air} — UPSC CSE {t.year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-gradient-to-r from-[#D4AF37] to-[#C4A037]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-6">Your UPSC Journey Starts Here</h2>
          <p className="text-[#0F172A]/80 text-lg mb-10 max-w-2xl mx-auto">
            Join the Genuine IAS family and get the mentorship, strategy and study material that produced AIR 4, 61, 91 and hundreds of selections.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <button onClick={() => onNavigate?.("/courses")} className="bg-[#0F172A] text-white px-10 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-[#1E293B] hover:-translate-y-1 transition-all group">
               Enroll Now <ChevronRight className="group-hover:translate-x-1 transition-transform" size={22} />
             </button>
            <a href="tel:+918920867614" className="border-2 border-[#0F172A] text-[#0F172A] px-10 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-[#0F172A] hover:text-white hover:-translate-y-1 transition-all">
              <Phone size={20} /> Call Us Now
            </a>
          </div>
          <p className="mt-8 text-[#0F172A]/60 font-medium">📞 +91 8920867614 &nbsp;·&nbsp; ✉️ Rohitsehrawat1389@gmail.com</p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#0A1020] text-white pt-14 pb-6 border-t border-[#1E293B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-[#D4AF37] rounded-lg flex items-center justify-center">
                  <span className="text-[#0F172A] font-bold text-xl">G</span>
                </div>
                <span className="text-xl font-bold">Genuine IAS</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">India's trusted UPSC coaching with a proven track record — AIR 4, 61, 91 and many more top rankers.</p>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-[#D4AF37]">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                {["Home", "Study Material", "Achievers", "Dashboard"].map(l => (
                  <li key={l}><a href="#" className="hover:text-[#D4AF37] transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-[#D4AF37]">Resources</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                {["Achievers", "Free Notes", "Test Series", "Previous Papers", "Our Results"].map(l => (
                  <li key={l}><a href="#" className="hover:text-[#D4AF37] transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-[#D4AF37]">Contact Us</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <Phone size={14} className="text-[#D4AF37] mt-0.5 flex-shrink-0" />
                  <a href="tel:8920867614" className="hover:text-[#D4AF37] transition-colors">+91 8920867614</a>
                </li>
                <li className="flex items-start gap-2">
                  <Mail size={14} className="text-[#D4AF37] mt-0.5 flex-shrink-0" />
                  <a href="mailto:Rohitsehrawat1389@gmail.com" className="hover:text-[#D4AF37] transition-colors break-all">Rohitsehrawat1389@gmail.com</a>
                </li>
              </ul>
                <div className="flex gap-3 mt-4">
                {["FB", "TW", "IG", "YT"].map(s => (
                  <a key={s} href="#" className="w-8 h-8 bg-[#1E293B] rounded-lg flex items-center justify-center text-gray-400 hover:text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all text-xs font-bold">{s}</a>
                ))}
              </div>
              <a href="https://play.google.com/store/apps/details?id=co.penny.pynpa" target="_blank" rel="noopener noreferrer" className="inline-block mt-4 border border-[#D4AF37] rounded-lg p-1 hover:bg-[#D4AF37]/10 transition-all">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" className="h-8" />
              </a>
            </div>
          </div>
          <div className="border-t border-[#1E293B] pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">© 2026 Genuine IAS. All rights reserved. Protected under Indian Copyright Act 1957.</p>
            <p className="text-gray-600 text-xs">Built for UPSC aspirants across India</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
