import { useState } from "react";
import { Play, Award, X } from "lucide-react";

const testimonials = [
  {
    name: "Raghav Jhunjhunwala",
    air: 4,
    year: 2025,
    emoji: "👨‍🎓",
    videoId: "VpN_u_w1Sdo",
    shortUrl: "https://youtube.com/shorts/VpN_u_w1Sdo",
    thumbnail: "https://img.youtube.com/vi/VpN_u_w1Sdo/maxresdefault.jpg",
  },
  {
    name: "Dhwanish",
    air: 108,
    year: 2025,
    emoji: "👨‍🎓",
    videoId: "3j_oQoK_Exw",
    shortUrl: "https://youtube.com/shorts/3j_oQoK_Exw",
    thumbnail: "https://img.youtube.com/vi/3j_oQoK_Exw/maxresdefault.jpg",
  },
  {
    name: "Daisy Chhabra",
    air: 183,
    year: 2025,
    emoji: "👩‍🎓",
    videoId: "m5jsqCr59IY",
    shortUrl: "https://youtube.com/shorts/m5jsqCr59IY",
    thumbnail: "https://img.youtube.com/vi/m5jsqCr59IY/maxresdefault.jpg",
  },
  {
    name: "Tanya Singh",
    air: 200,
    year: 2025,
    emoji: "👩‍🎓",
    videoId: "5dxR3vm3WMA",
    shortUrl: "https://youtube.com/shorts/5dxR3vm3WMA",
    thumbnail: "https://img.youtube.com/vi/5dxR3vm3WMA/maxresdefault.jpg",
  },
  {
    name: "Nitish Kumar",
    air: 237,
    year: 2025,
    emoji: "👨‍🎓",
    videoId: "GybPrfT-Cg0",
    shortUrl: "https://youtube.com/shorts/GybPrfT-Cg0",
    thumbnail: "https://img.youtube.com/vi/GybPrfT-Cg0/maxresdefault.jpg",
  },
];

export default function VideoTestimonials() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className="py-20 bg-[#0A1020]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full px-4 py-2 mb-4">
            <Play size={14} className="text-[#D4AF37]" />
            <span className="text-[#D4AF37] text-sm font-medium">In Their Own Words</span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            Hear From Our <span className="text-[#D4AF37]">2025 Toppers</span>
          </h2>
          <p className="text-gray-400 text-lg">Real students, real results — watch their journeys</p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {testimonials.map((t) => (
            <div
              key={t.videoId}
              className="group cursor-pointer"
              onClick={() => setActiveVideo(t.videoId)}
            >
              {/* Video Card — portrait ratio for Shorts */}
              <div className="relative rounded-2xl overflow-hidden border border-[#334155] group-hover:border-[#D4AF37]/60 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl group-hover:shadow-[#D4AF37]/10"
                style={{ aspectRatio: "9/16" }}
              >
                {/* Thumbnail */}
                <img
                  src={t.thumbnail}
                  alt={t.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${t.videoId}/hqdefault.jpg`;
                  }}
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/40 to-transparent" />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 bg-[#D4AF37] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Play size={22} className="text-[#0F172A] ml-1" fill="#0F172A" />
                  </div>
                </div>

                {/* AIR badge */}
                <div className="absolute top-3 left-3">
                  <div className="bg-[#D4AF37] rounded-full px-2.5 py-1 flex items-center gap-1">
                    <Award size={10} className="text-[#0F172A]" />
                    <span className="text-[#0F172A] text-xs font-bold">AIR {t.air}</span>
                  </div>
                </div>

                {/* Student info at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <p className="text-white font-bold text-sm leading-tight">{t.name}</p>
                  <p className="text-[#D4AF37] text-xs font-medium">UPSC CSE {t.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Modal */}
        {activeVideo && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
            onClick={() => setActiveVideo(null)}
          >
            <div
              className="relative w-full max-w-sm"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute -top-12 right-0 w-10 h-10 bg-[#1E293B] border border-[#334155] rounded-full flex items-center justify-center text-white hover:border-[#D4AF37] transition-colors z-10"
              >
                <X size={18} />
              </button>

              {/* Student info above video */}
              {(() => {
                const t = testimonials.find(v => v.videoId === activeVideo);
                return t ? (
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-[#D4AF37] rounded-full flex flex-col items-center justify-center flex-shrink-0">
                      <span className="text-[#0F172A] text-xs font-bold leading-none">AIR</span>
                      <span className="text-[#0F172A] text-sm font-bold leading-none">{t.air}</span>
                    </div>
                    <div>
                      <p className="text-white font-bold">{t.name}</p>
                      <p className="text-[#D4AF37] text-xs">UPSC CSE {t.year}</p>
                    </div>
                  </div>
                ) : null;
              })()}

              {/* YouTube Shorts iframe — portrait */}
              <div className="rounded-2xl overflow-hidden border border-[#334155] shadow-2xl"
                style={{ aspectRatio: "9/16" }}
              >
                <iframe
                  src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&rel=0&modestbranding=1`}
                  title="Topper Testimonial"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>

              {/* Watch on YouTube link */}
              <a
                href={testimonials.find(v => v.videoId === activeVideo)?.shortUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex items-center justify-center gap-2 text-gray-400 text-sm hover:text-[#D4AF37] transition-colors"
              >
                <Play size={14} /> Watch on YouTube
              </a>
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <p className="text-gray-400 mb-4">Join the students who made it to the top</p>
          <button className="bg-[#D4AF37] text-[#0F172A] px-8 py-3 rounded-xl font-bold hover:bg-[#C4A037] hover:-translate-y-1 transition-all duration-300">
            Start Your Preparation Today
          </button>
        </div>
      </div>
    </section>
  );
}
