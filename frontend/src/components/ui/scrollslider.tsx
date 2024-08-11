import { motion, useScroll, useSpring } from "framer-motion";


export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <motion.div className="progress-bar fixed top-0 left-0 right-0 h-3 bg-red-600 " style={{ scaleX }} />
      <h1>
        <code>useScroll</code> with spring smoothing
      </h1>
    </>
  );
}
