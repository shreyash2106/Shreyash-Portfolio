import { motion } from "framer-motion";
import { SiAmazon, SiHp } from "react-icons/si";

// Custom SVG components for universities
const BerkeleyLogo = () => (
  <svg width="40" height="40" viewBox="0 0 100 100" className="text-[#E6F1FF]">
    <text x="50%" y="50%" fontSize="40" textAnchor="middle" dy=".3em" fill="currentColor">
      UC
    </text>
  </svg>
);

const PurdueLogo = () => (
  <svg width="40" height="40" viewBox="0 0 100 100" className="text-[#E6F1FF]">
    <text x="50%" y="50%" fontSize="40" textAnchor="middle" dy=".3em" fill="currentColor">
      P
    </text>
  </svg>
);

export default function Logos() {
  const logos = [
    { Icon: BerkeleyLogo, name: "UC Berkeley", delay: 0 },
    { Icon: SiHp, name: "HPE", delay: 0.1 },
    { Icon: SiAmazon, name: "AWS AI", delay: 0.2 },
    { Icon: PurdueLogo, name: "Purdue University", delay: 0.3 },
  ];

  return (
    <section className="py-12 border-t border-[#171738]">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
          {logos.map(({ Icon, name, delay }) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay }}
              className="text-center"
            >
              <div className="group relative">
                <div className="w-16 h-16 mx-auto flex items-center justify-center text-[#E6F1FF]/60 hover:text-[#B86EFF] transition-colors duration-300">
                  <Icon className="w-12 h-12" />
                </div>
                <p className="mt-2 text-sm text-[#E6F1FF]/60 group-hover:text-[#B86EFF] transition-colors duration-300">
                  {name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}