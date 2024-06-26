import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  className?: string;
  children?: ReactNode;
  id?: string;
};
export default function BoxTransition({ className, children, id }: Props) {
  return (
    <motion.div
      id={id}
      className={className}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99] }}
      exit={{ x: "100%", opacity: 0 }}
    >
      {children}
    </motion.div>
  );
}
