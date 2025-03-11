import { motion } from "framer-motion";

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

// Custom image components for institutions
const BerkeleyLogo = () => (
  <img src="/client/public/images/berkeley.png" alt="UC Berkeley Logo" className="w-32 h-8" />
);

const PurdueLogo = () => (
  <img
    src="/client/public/images/purdue.png"
    alt="Purdue University Logo"
    className="w-32 h-8"
  />
);

const HPELogo = () => (
  <img
    src="/client/public/images/hpe.png"
    alt="Hewlett Packard Enterprise Logo"
    className="w-32 h-8"
  />
);

const AWSAILogo = () => (
  <img src="/client/public/images/aws-ai.png" alt="AWS AI Logo" className="w-32 h-8" />
);
