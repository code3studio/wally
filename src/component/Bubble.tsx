import { motion } from "framer-motion";

type Props = {
    x:number,
    x1:number,
    y:number,
    y1:number,
    delay?:number
}

const Bubble = ({x,x1,y,delay,y1}: Props) => {
  return (
    <motion.div className="bubble"
    initial={{
        x,
        y,
        opacity:1,
        scale:1
    }}
    animate={{
        x:x+x1,
        y: y-y1,
        opacity:0,
        scale:4
      }}
      transition={{
        duration: 1,
        ease: "easeIn",
        repeat: Infinity,
        delay
      }}></motion.div>
  )
}

export default Bubble