import { useState } from "react";
import { BookOpen, ChevronRight, ArrowLeft, Clock, Star } from "lucide-react";
import PageHead from "@/components/PageHead";

const subjects = [
  {
    name: "History",
    color: "from-amber-500/20 to-amber-600/5",
    accent: "#F59E0B",
    topics: [
      {
        title: "Ancient India",
        readTime: "12 min",
        content: `## Ancient India

**Indus Valley Civilization (3300–1300 BCE)**
One of the world's earliest urban civilizations, located in the northwestern regions of South Asia. Key features:
- Advanced city planning with grid layout (Harappa, Mohenjo-daro)
- Sophisticated drainage and sanitation systems
- Trade networks extending to Mesopotamia
- Undeciphered script system

**Vedic Period (1500–600 BCE)**
The Vedic Age is characterized by the composition of the Vedas — the oldest scriptures of Hinduism.
- Early Vedic: Rigveda composed; pastoral, semi-nomadic society
- Later Vedic: Agriculture becomes primary; caste system develops
- Upanishads composed — philosophical texts questioning ritual

**Maurya Empire (322–185 BCE)**
Founded by Chandragupta Maurya with the guidance of Kautilya (Chanakya). Key points:
- Ashoka the Great spread Buddhism after Kalinga War (261 BCE)
- First empire to unify most of Indian subcontinent
- Arthashastra by Kautilya — treatise on statecraft and economic policy

**Gupta Empire (320–550 CE)**
Known as the Golden Age of India:
- Major advances in science, mathematics, astronomy, literature
- Aryabhata calculated value of Pi; proposed Earth rotates on its axis
- Kalidasa wrote Shakuntala and Meghaduta
- Decimal system and concept of zero developed`,
      },
      {
        title: "Medieval India",
        readTime: "10 min",
        content: `## Medieval India

**Delhi Sultanate (1206–1526)**
A series of Muslim dynasties that ruled large parts of India:
- Slave Dynasty → Khilji → Tughlaq → Sayyid → Lodi
- Alauddin Khilji introduced market reforms and price controls
- Ibn Battuta visited during Muhammad bin Tughlaq's reign
- Bhakti movement flourished — Kabir, Mirabai, Ramananda

**Vijayanagara Empire (1336–1646)**
Greatest Hindu kingdom of medieval India:
- Founded by Harihara I and Bukka Raya I
- Krishnadevaraya was the most celebrated ruler
- Battle of Talikota (1565) led to the empire's decline

**Mughal Empire (1526–1857)**
Founded by Babur after the First Battle of Panipat:
- Akbar's Din-i-Ilahi — attempt at religious synthesis
- Jahangir known for justice and painting
- Shah Jahan built Taj Mahal, Red Fort, Jama Masjid
- Aurangzeb expanded empire but religious policies caused unrest
- Marathas, Sikhs, Jats rose against Mughal authority`,
      },
      {
        title: "Modern India & Freedom Struggle",
        readTime: "15 min",
        content: `## Modern India & Freedom Struggle

**British East India Company (1600–1858)**
- Battle of Plassey (1757) — British established dominance
- Permanent Settlement (1793) by Cornwallis
- Doctrine of Lapse by Dalhousie — annexation policy
- Revolt of 1857 — first major uprising against British rule

**Indian National Congress (Founded 1885)**
Key sessions and developments:
- Surat Split (1907): Moderates vs Extremists
- Lucknow Pact (1916): Congress-Muslim League unity
- Non-Cooperation Movement (1920–22)
- Civil Disobedience Movement (1930): Dandi March
- Quit India Movement (1942): "Do or Die"

**Key Leaders & Contributions**
| Leader | Contribution |
|--------|-------------|
| Mahatma Gandhi | Non-violence, mass mobilization |
| B.R. Ambedkar | Dalit rights, Constitution drafting |
| Subhas Chandra Bose | INA, armed struggle |
| Jawaharlal Nehru | Modern India's vision |
| Sardar Patel | Integration of princely states |

**Independence & Partition (1947)**
- Mountbatten Plan accepted — India and Pakistan created
- Radcliffe Line divided Punjab and Bengal
- 14–15 August 1947 — India became independent`,
      },
    ],
  },
  {
    name: "Polity",
    color: "from-blue-500/20 to-blue-600/5",
    accent: "#3B82F6",
    topics: [
      {
        title: "Indian Constitution — Key Features",
        readTime: "10 min",
        content: `## Indian Constitution — Key Features

**Background**
- Constituent Assembly set up under Cabinet Mission Plan (1946)
- Dr. B.R. Ambedkar — Chairman of Drafting Committee
- Constitution adopted: 26 November 1949
- Came into effect: 26 January 1950

**Unique Features**
1. **Lengthiest written constitution** — originally 395 articles, 8 schedules
2. **Partly rigid, partly flexible** — different amendment procedures
3. **Federal with unitary bias** — strong Centre in emergencies
4. **Parliamentary system** — PM is head of government
5. **Independent judiciary** — Supreme Court as guardian of Constitution
6. **Universal adult franchise** — voting right at 18 years
7. **Secular state** — no state religion, equal respect for all

**Preamble — Key Words**
- SOVEREIGN: India is not subject to any external authority
- SOCIALIST: Social and economic equality
- SECULAR: Equal treatment of all religions
- DEMOCRATIC: Government by the people
- REPUBLIC: Elected head of state

**Schedules (Important ones)**
- Schedule 1: States and Union Territories
- Schedule 3: Oaths and affirmations
- Schedule 7: Distribution of powers (Union/State/Concurrent lists)
- Schedule 10: Anti-defection law`,
      },
      {
        title: "Fundamental Rights",
        readTime: "8 min",
        content: `## Fundamental Rights (Part III, Articles 12–35)

**Six Fundamental Rights**

**1. Right to Equality (Articles 14–18)**
- Equality before law and equal protection of laws
- No discrimination on basis of religion, race, caste, sex, place of birth
- Equality of opportunity in public employment
- Abolition of untouchability and titles

**2. Right to Freedom (Articles 19–22)**
Six freedoms under Article 19:
- Speech and expression
- Peaceful assembly
- Association or unions
- Free movement throughout India
- Reside and settle anywhere in India
- Practice any profession or carry on business

**3. Right against Exploitation (Articles 23–24)**
- Prohibition of traffic in human beings and forced labour
- Prohibition of employment of children below 14 in hazardous jobs

**4. Right to Freedom of Religion (Articles 25–28)**
- Freedom of conscience and free profession, practice, propagation of religion

**5. Cultural and Educational Rights (Articles 29–30)**
- Protection of interests of minorities
- Right of minorities to establish educational institutions

**6. Right to Constitutional Remedies (Article 32)**
- Called the "Heart and Soul" of Constitution by Ambedkar
- Five writs: Habeas Corpus, Mandamus, Prohibition, Certiorari, Quo Warranto`,
      },
    ],
  },
  {
    name: "Economy",
    color: "from-emerald-500/20 to-emerald-600/5",
    accent: "#10B981",
    topics: [
      {
        title: "Indian Economy — Basics",
        readTime: "11 min",
        content: `## Indian Economy — Basics

**Economic Planning in India**
- Planning Commission set up in 1950 (replaced by NITI Aayog in 2015)
- Five Year Plans guided development from 1951 to 2017
- NITI Aayog: Policy think tank, not a planning body

**Key Economic Indicators**
| Indicator | Description |
|-----------|-------------|
| GDP | Total value of goods and services produced |
| GNP | GDP + income from abroad |
| GVA | GDP minus net taxes on products |
| HDI | Human Development Index (UNDP) |

**Sectors of Indian Economy**
- Primary: Agriculture, forestry, fishing (~15% of GDP)
- Secondary: Manufacturing, construction (~25% of GDP)
- Tertiary: Services, IT, banking (~60% of GDP)

**Monetary Policy**
Managed by Reserve Bank of India (RBI):
- Repo Rate: Rate at which RBI lends to banks
- Reverse Repo Rate: Rate at which banks park funds with RBI
- CRR: Cash Reserve Ratio — portion banks must keep with RBI
- SLR: Statutory Liquidity Ratio — liquid assets banks must maintain

**Fiscal Policy**
Managed by Ministry of Finance:
- Union Budget presented on February 1
- Fiscal deficit = Total expenditure - Total receipts (excluding borrowings)
- Revenue deficit = Revenue expenditure - Revenue receipts`,
      },
    ],
  },
  {
    name: "Geography",
    color: "from-teal-500/20 to-teal-600/5",
    accent: "#14B8A6",
    topics: [
      {
        title: "Physical Geography of India",
        readTime: "9 min",
        content: `## Physical Geography of India

**Physiographic Divisions**
India is divided into 6 major physiographic units:

**1. The Himalayan Mountains**
- Divided into: Trans-Himalayas, Greater Himalayas (Himadri), Lesser Himalayas (Himachal), Outer Himalayas (Shivaliks)
- Highest peak in India: Kangchenjunga (8,586m)
- Young fold mountains — still rising

**2. The Northern Plains**
- Formed by alluvial deposits of Indus, Ganga, Brahmaputra systems
- Most densely populated region
- Types of soil: Bhangar (old alluvium), Khadar (new alluvium)

**3. The Peninsular Plateau**
- Oldest and most stable landmass — part of Gondwana land
- Deccan Plateau: basaltic lava rock (Deccan Traps)
- Average elevation: 600–900m

**4. The Indian Desert (Thar)**
- Located in western Rajasthan
- Luni is the only river that flows through it
- Hot and dry — less than 150mm annual rainfall

**5. The Coastal Plains**
- Western Coastal Plain: Narrow, divided into Konkan, Goa, Malabar coasts
- Eastern Coastal Plain: Wider, Coromandel and Northern Circars

**6. The Islands**
- Andaman & Nicobar: Bay of Bengal (volcanic + coral islands)
- Lakshadweep: Arabian Sea (coral islands)`,
      },
    ],
  },
];

export default function StudyMaterialPage() {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<{ title: string; content: string; readTime: string } | null>(null);

  const subject = subjects.find((s) => s.name === selectedSubject);

  if (selectedTopic) {
    return (
      <div className="min-h-screen bg-[#0F172A] px-4 py-10">
        <PageHead title="UPSC Study Material — Genuine IAS" description="Comprehensive study notes for UPSC Prelims & Mains preparation." />
        <div className="max-w-3xl mx-auto">
          <button
            onClick={() => setSelectedTopic(null)}
            className="flex items-center gap-2 text-[#D4AF37]/60 hover:text-[#D4AF37] mb-8 transition-colors text-sm"
          >
            <ArrowLeft size={16} /> Back to topics
          </button>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs text-[#94A3B8] bg-[#1E293B] px-3 py-1 rounded-full border border-[#334155]">{selectedSubject}</span>
            <span className="flex items-center gap-1 text-xs text-[#94A3B8]"><Clock size={12} /> {selectedTopic.readTime} read</span>
          </div>
          <div className="prose prose-invert max-w-none mt-6">
            {selectedTopic.content.split("\n").map((line, i) => {
              if (line.startsWith("## ")) return <h2 key={i} className="text-2xl font-bold text-white font-serif mt-8 mb-4">{line.replace("## ", "")}</h2>;
              if (line.startsWith("**") && line.endsWith("**")) return <p key={i} className="text-[#D4AF37] font-semibold mt-6 mb-2">{line.replace(/\*\*/g, "")}</p>;
              if (line.startsWith("- ")) return <li key={i} className="text-[#CBD5E1] ml-4 mb-1 text-sm leading-relaxed list-disc">{line.replace("- ", "").replace(/\*\*/g, "")}</li>;
              if (line.startsWith("| ") && line.includes("|")) {
                const cells = line.split("|").filter(Boolean).map((c) => c.trim());
                return <div key={i} className="flex gap-4 border-b border-[#1E293B] py-2">{cells.map((c, j) => <span key={j} className={`flex-1 text-sm ${i === 0 ? "text-[#D4AF37] font-semibold" : "text-[#CBD5E1]"}`}>{c}</span>)}</div>;
              }
              if (line.match(/^\d\./)) return <p key={i} className="text-[#CBD5E1] text-sm mb-2 ml-2">{line}</p>;
              if (line === "") return <div key={i} className="h-2" />;
              return <p key={i} className="text-[#94A3B8] text-sm leading-relaxed">{line.replace(/\*\*/g, "")}</p>;
            })}
          </div>
        </div>
      </div>
    );
  }

  if (selectedSubject && subject) {
    return (
      <div className="min-h-screen bg-[#0F172A] px-4 py-10">
        <PageHead title="UPSC Study Material — Genuine IAS" description="Comprehensive study notes for UPSC Prelims & Mains preparation." />
        <div className="max-w-3xl mx-auto">
          <button
            onClick={() => setSelectedSubject(null)}
            className="flex items-center gap-2 text-[#D4AF37]/60 hover:text-[#D4AF37] mb-8 transition-colors text-sm"
          >
            <ArrowLeft size={16} /> All subjects
          </button>
          <h2 className="text-3xl font-bold text-white mb-2 font-serif">{subject.name}</h2>
          <p className="text-[#94A3B8] mb-8">{subject.topics.length} topics available</p>
          <div className="space-y-4">
            {subject.topics.map((topic) => (
              <button
                key={topic.title}
                onClick={() => setSelectedTopic(topic)}
                className="w-full text-left bg-[#1E293B] border border-[#334155] hover:border-[#D4AF37]/40 rounded-2xl p-6 transition-all duration-200 group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-semibold text-lg group-hover:text-[#D4AF37] transition-colors">{topic.title}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <span className="flex items-center gap-1 text-xs text-[#94A3B8]"><Clock size={12} /> {topic.readTime}</span>
                      <span className="flex items-center gap-1 text-xs text-[#D4AF37]/60"><Star size={12} /> UPSC relevant</span>
                    </div>
                  </div>
                  <ChevronRight className="text-[#D4AF37]/30 group-hover:text-[#D4AF37] group-hover:translate-x-1 transition-all" size={24} />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0F172A] px-4 py-12">
      <PageHead title="UPSC Study Material — Genuine IAS" description="Comprehensive study notes for UPSC Prelims & Mains preparation." />
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif">Study Material</h1>
          <p className="text-[#D4AF37]/70 text-lg">Comprehensive notes for UPSC Prelims & Mains</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {subjects.map((sub) => (
            <button
              key={sub.name}
              onClick={() => setSelectedSubject(sub.name)}
              className={`group text-left bg-gradient-to-br ${sub.color} border border-[#334155] hover:border-[#D4AF37]/40 rounded-2xl p-6 transition-all duration-300`}
            >
              <BookOpen style={{ color: sub.accent }} size={28} className="mb-4" />
              <p className="text-white font-bold text-xl mb-1">{sub.name}</p>
              <p className="text-[#94A3B8] text-sm">{sub.topics.length} topics · Prelims + Mains</p>
              <div className="flex items-center gap-1 mt-4" style={{ color: sub.accent }}>
                <span className="text-sm font-medium">Start reading</span>
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
