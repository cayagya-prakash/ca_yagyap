import { Card, CardContent } from "@/components/ui/card";
import {
  Rocket,
  Search,
  Newspaper,
  CalendarDays,
  Target,
  Users,
  Handshake,
  ShieldCheck,
  LineChart,
} from "lucide-react";

export default function MissionVisionSection() {
  const mission = [
    {
      icon: <Rocket className="h-10 w-10 text-green-600" />,
      title: "Our Mission",
      text: "Our purpose is to turn knowledge into value for the benefit of our clients and associates.",
      ring: "ring-green-200",
    },
    {
      icon: <Search className="h-10 w-10 text-pink-600" />,
      title: "Our Vision",
      text: "Our mission is to provide satisfactory solutions to problems rather than creating doubts.",
      ring: "ring-pink-200",
    },
    {
      icon: <Newspaper className="h-10 w-10 text-cyan-600" />,
      title: "Our News",
      text: "Get in touch with us. Follow our latest news.",
      ring: "ring-cyan-200",
    },
    {
      icon: <CalendarDays className="h-10 w-10 text-orange-500" />,
      title: "Our Calendar",
      text: "Tax Calendar",
      ring: "ring-orange-200",
    },
  ];

  const vision = [
    { label: "GUIDANCE", icon: <Users className="h-8 w-8 text-gray-700" /> },
    { label: "GROWTH", icon: <LineChart className="h-8 w-8 text-blue-600" /> },
    {
      label: "QUALITY",
      icon: <ShieldCheck className="h-8 w-8 text-red-500" />,
    },
    {
      label: "COMMITMENT",
      icon: <Handshake className="h-8 w-8 text-purple-600" />,
    },
    { label: "CONNECTION", icon: <Users className="h-8 w-8 text-teal-600" /> },
    { label: "FOCUS", icon: <Target className="h-8 w-8 text-yellow-600" /> },
  ];
  return (
    <section className="max-w-6xl mx-auto px-4 py-12 space-y-12">
      {/* Top Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {mission.map((item, i) => (
          <Card key={i} className="shadow-sm hover:shadow-md transition">
            <CardContent className="flex flex-col items-center text-center p-6 space-y-3">
              <div className={`p-4 rounded-full ring-4 ${item.ring} bg-white`}>
                {item.icon}
              </div>
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.text}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Core Values */}
      <div className="space-y-6">
        <h3 className="text-sm tracking-widest font-bold text-gray-800">
          CORE VALUES
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
          {vision.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center space-y-2"
            >
              <div className="p-4 rounded-full ring-4 ring-gray-200 bg-white">
                {item.icon}
              </div>
              <p className="text-sm font-semibold">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
