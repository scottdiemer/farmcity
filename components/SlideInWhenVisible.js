import { motion } from "framer-motion";

/******************************************************
 * Component wrapper to cause sliding in when visible
 * from different directions depending on whether
 * number is even or odd
 *******************************************************/
function SlideInWhenVisible({ number, children }) {
  const direction = number % 2 === 0 ? -150 : 150;
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: 0.4 }}
      variants={{
        visible: { opacity: 1, translateX: 0, translateY: 0 },
        hidden: {
          opacity: 0,
          translateX: direction,
          translateY: 150,
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export default SlideInWhenVisible;
