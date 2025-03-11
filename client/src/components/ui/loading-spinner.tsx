import { motion } from "framer-motion";

export function LoadingSpinner() {
  return (
    <motion.div
      className="relative w-16 h-16"
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 2.5, // Slowed down hover animation
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {/* Drone body */}
      <motion.div className="absolute top-1/2 left-1/2 w-4 h-4 -mt-2 -ml-2 bg-[#B86EFF] rounded-lg" />

      {/* Propellers */}
      {[0, 90, 180, 270].map((rotation) => (
        <motion.div
          key={rotation}
          className="absolute top-1/2 left-1/2 w-6 h-1 -mt-0.5 -ml-3 bg-[#B86EFF]/60"
          style={{
            transformOrigin: "center",
            rotate: rotation,
          }}
          animate={{
            rotate: [rotation, rotation + 360],
          }}
          transition={{
            duration: 1.5, // Slowed down propeller rotation
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </motion.div>
  );
}