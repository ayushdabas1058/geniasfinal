import { Clock, CheckCircle, MessageCircle, Video, Radio } from "lucide-react";
import PageHead from "@/components/PageHead";

const courses = [
  {
    title: "Economics Optional — Foundation Live 2027",
    badge: "Starting 28th June 2026",
    duration: "8-9 Months",
    faculty: "Rohit Sehrawat | Economics Optional",
    fee: "₹50,000",
    availability: "1.5 years",
    color: "#3B82F6",
    liveBatch: true,
    icon: Radio,
    features: [
      "8/9 month comprehensive foundation course — thorough & systematic coverage of the entire Economics optional syllabus",
      "Special focus on core economical themes, major economists' perspectives, and their application in UPSC-oriented answers",
      "PYQs discussion with Model Answers and Mindmaps",
      "Everyday doubt resolution after class, fine-tune preparation strategy and personalized mentorship",
      "PYQs Assignment writing with checking + 9 full length tests with evaluation",
    ],
  },
  {
    title: "Economics Optional — Recorded Course",
    badge: "Available Now",
    duration: "Self-Paced",
    faculty: "Rohit Sehrawat | Economics Optional",
    fee: "₹30,000",
    availability: null,
    color: "#10B981",
    liveBatch: false,
    icon: Video,
    features: [
      "Complete recorded lecture series covering full Economics optional syllabus",
      
      "Doubt resolving sessions",
      "Content enrichment material",
    ],
  },
];

const WHATSAPP_LINK =
  "https://wa.me/918920867614?text=Hi%20Genuine%20IAS%2C%20I%20want%20to%20know%20more%20about%20your%20courses";

export default function CoursesPage() {
  return (
    <div className="bg-[#0F172A] text-white min-h-screen py-20">
      <PageHead title="UPSC Courses — Genuine IAS | Economics Optional Foundation & Recorded" description="Expert-led Economics Optional courses for UPSC CSE. Foundation Live and Recorded courses by Rohit Sehrawat." />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-[#D4AF37]">Courses</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Expert-led Economics Optional programs designed to maximize your UPSC score
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {courses.map((course) => {
            const Icon = course.icon;
            return (
              <div
                key={course.title}
                className="bg-[#1E293B] border border-[#334155] rounded-2xl p-8 flex flex-col hover:border-[#D4AF37]/50 hover:shadow-2xl transition-all duration-300 relative"
              >
                {course.liveBatch && (
                  <div className="absolute top-4 right-4 bg-[#D4AF37] text-[#0F172A] text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full">
                    Live Batch
                  </div>
                )}

                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${course.color}20`, color: course.color }}
                >
                  <Icon size={28} />
                </div>

                <h2 className="text-2xl font-bold text-white mb-3 pr-24 lg:pr-20">
                  {course.title}
                </h2>

                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span
                    className="inline-flex items-center text-sm font-semibold px-3 py-1 rounded-full"
                    style={{ backgroundColor: `${course.color}20`, color: course.color }}
                  >
                    {course.badge}
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-[#D4AF37]/10 text-[#D4AF37] text-sm font-semibold px-3 py-1 rounded-full">
                    <Clock size={14} />
                    {course.duration}
                  </span>
                </div>

                <div className="bg-[#0F172A]/60 rounded-xl p-5 mb-6 space-y-2">
                  <p className="text-gray-400 text-sm">Faculty</p>
                  <p className="text-white font-semibold">{course.faculty}</p>
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 pt-2 border-t border-[#334155]">
                    <div>
                      <span className="text-gray-400 text-sm">Course Fee: </span>
                      <span className="text-[#D4AF37] text-xl font-bold">{course.fee}</span>
                    </div>
                    {course.availability && (
                      <div>
                        <span className="text-gray-400 text-sm">Availability: </span>
                        <span className="text-white font-semibold">{course.availability}</span>
                      </div>
                    )}
                  </div>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {course.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-gray-300 text-sm leading-relaxed">
                      <CheckCircle size={18} className="text-[#D4AF37] mt-0.5 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#D4AF37] text-[#0F172A] py-3.5 rounded-xl font-bold text-sm hover:bg-[#C4A037] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#D4AF37]/30 transition-all duration-200"
                >
                  <MessageCircle size={18} />
                  Enquire Now
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
