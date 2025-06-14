import { motion } from "framer-motion";

export default function Badge({ caption }) {
  return (
    <motion.span
      initial={{ scale: [1, 1.2, 1] }}
      transition={{ duration: 0.3 }}
      className="badge"
    >
      {caption}
    </motion.span>
  );
}
