import { motion } from "framer-motion";

export default function Logos() {
  const logos = [
    { Icon: BerkeleyLogo, name: "UC Berkeley" },
    { Icon: HPELogo, name: "Hewlett Packard Enterprise" },
    { Icon: AWSAILogo, name: "AWS AI" },
    { Icon: PurdueLogo, name: "Purdue University" },
  ];

  return (
    <section className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-center items-center gap-8 md:gap-12">
          {logos.map(({ Icon, name }, index) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <div
                className={`${
                  name === "UC Berkeley" || name === "Purdue University"
                    ? "w-24"
                    : "w-20"
                } mx-auto flex items-center justify-center text-[#B86EFF] hover:text-[#B86EFF]/80 transition-colors duration-300`}
              >
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
  <img
    src="/images/berkeley.png"
    alt="UC Berkeley Logo"
    className="h-10 w-auto object-contain"
  />
);

const PurdueLogo = () => (
  <img
    src="/images/purdue.png"
    alt="Purdue University Logo"
    className="h-10 w-auto object-contain"
  />
);

const HPELogo = () => (
  <img
    src="/images/hpe.png"
    alt="Hewlett Packard Enterprise Logo"
    className="h-6 w-auto object-contain"
  />
);

const AWSAILogo = () => (
  <img
    src="/images/aws-ai.png"
    alt="AWS AI Logo"
    className="h-6 w-auto object-contain"
  />
);
