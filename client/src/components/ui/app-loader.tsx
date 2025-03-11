import { motion } from "framer-motion";
import { LoadingSpinner } from "./loading-spinner";

export function AppLoader() {
  return (
    <div className="fixed inset-0 bg-[#020B1C] flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="text-center space-y-6"
      >
        <LoadingSpinner />
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-[#E6F1FF]/80 text-lg"
        >
          Initializing...
        </motion.p>
      </motion.div>
    </div>
  );
}
