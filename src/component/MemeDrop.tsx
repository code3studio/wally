import {motion} from 'framer-motion'
type Props = {
    x:number,
    x1:number,
    y:number,
    y1:number,
    delay?:number
}

const MemeDrop = ({x,x1,y,delay,y1}: Props) => {
  return (
        <motion.img src='assets/bubble.webp' initial={{
            x,
            y,
            opacity:1,
            scale:0.1
        }}
        animate={{
            x:x+x1,
            y: y-y1,
            opacity:0,
            scale:0.3
          }}
          transition={{
            duration: 1,
            ease: "easeIn",
            repeat: Infinity,

            delay
          }} style={{position:'absolute'}}/>
  )
}

export default MemeDrop