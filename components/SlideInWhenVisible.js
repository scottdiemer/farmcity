import { floor, random } from "mathjs";
import { motion } from "framer-motion";

/******************************************************
 * Component wrapper to cause sliding in when visible
 * from different directions depending on whether
 * number is even or odd
 *******************************************************/
function SlideInWhenVisible({ number, children }) {
  const direction = number % 2 === 0 ? -150 : 150;
  const randomDelay = floor(random() * 6) * 0.3;
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      variants={{
        visible: { opacity: 1, translateX: 0, translateY: 0 },
        hidden: {
          opacity: 0,
          translateX: direction,
          translateY: 150,
          delay: randomDelay,
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export default SlideInWhenVisible;
