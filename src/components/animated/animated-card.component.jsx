import { motion } from 'framer-motion'


const animations = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
}

const projectVariant = () => {
  return {
    hidden: {
      y: 150,
      opacity: 0.5,
    },

    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.1,
        ease: "easeOut",
      },
    },
  };
};

const AnimatedCard = ({ children }) => (
  <motion.div
    // variants={animations}
    // initial="initial"
    // animate="animate"
    // exit="exit"
    // transition={{ duration: 1 }}
    initial={`hidden`}
    whileInView={"visible"}
    viewport={{ once: true }}
    variants={projectVariant()}
  >
    { children }
  </motion.div>
)

export default AnimatedCard