import { motion } from "framer-motion";

export function LoadingSpinner() {
  return (
    <div className="relative w-24 h-24">
      {/* Neural network nodes */}
      {[0, 1, 2].map((row) => (
        <div key={row} className="flex justify-center space-x-4">
          {[0, 1, 2].map((col) => (
            <motion.div
              key={`${row}-${col}`}
              className="w-2 h-2 bg-[#B86EFF] rounded-full"
              initial={{ opacity: 0.3 }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: (row + col) * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      ))}

      {/* Connecting lines */}
      <motion.div
        className="absolute inset-0 bg-[#B86EFF]/20"
        style={{
          maskImage: "linear-gradient(45deg, transparent 40%, white 60%, transparent 80%)",
          WebkitMaskImage: "linear-gradient(45deg, transparent 40%, white 60%, transparent 80%)",
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}