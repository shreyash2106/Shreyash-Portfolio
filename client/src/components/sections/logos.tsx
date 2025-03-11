import { motion } from "framer-motion";

// Custom SVG components for institutions
const BerkeleyLogo = () => (
  <svg viewBox="0 0 300 50" className="w-32 h-8">
    <text
      x="0"
      y="35"
      className="font-serif"
      style={{
        fill: "currentColor",
        fontSize: "32px",
        fontWeight: "bold"
      }}
    >
      Berkeley
    </text>
  </svg>
);

const PurdueLogo = () => (
  <svg viewBox="0 0 300 50" className="w-32 h-8">
    <text
      x="0"
      y="35"
      className="font-serif"
      style={{
        fill: "currentColor",
        fontSize: "32px",
        fontWeight: "bold"
      }}
    >
      PURDUE
    </text>
    <text
      x="0"
      y="48"
      style={{
        fill: "currentColor",
        fontSize: "14px"
      }}
    >
      UNIVERSITY
    </text>
  </svg>
);

const HPELogo = () => (
  <svg viewBox="0 0 100 32" className="w-32 h-8">
    <text
      x="0"
      y="25"
      style={{
        fill: "currentColor",
        fontSize: "24px",
        fontWeight: "bold"
      }}
    >
      HPE
    </text>
  </svg>
);

const AWSAILogo = () => (
  <svg viewBox="0 0 100 32" className="w-32 h-8">
    <text
      x="0"
      y="25"
      style={{
        fill: "currentColor",
        fontSize: "24px",
        fontWeight: "bold"
      }}
    >
      AWS AI
    </text>
  </svg>
);

export default function Logos() {
  const logos = [
    { Icon: BerkeleyLogo, name: "UC Berkeley" },
    { Icon: HPELogo, name: "Hewlett Packard Enterprise" },
    { Icon: AWSAILogo, name: "AWS AI" },
    { Icon: PurdueLogo, name: "Purdue University" },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-16 md:gap-24">
          {logos.map(({ Icon, name }, index) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-32 mx-auto flex items-center justify-center text-[#B86EFF] hover:text-[#B86EFF]/80 transition-colors duration-300">
                <Icon />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}