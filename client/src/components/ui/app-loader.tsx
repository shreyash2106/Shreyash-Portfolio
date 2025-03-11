import { motion } from "framer-motion";
import { LoadingSpinner } from "./loading-spinner";

export function AppLoader() {
  return (
    <div className="fixed inset-0 bg-[#020B1C] flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <div className="flex flex-col items-center justify-center">
          <LoadingSpinner />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-[#E6F1FF]/80 text-lg mt-8"
          >
            Tokenizing Profile...
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}
