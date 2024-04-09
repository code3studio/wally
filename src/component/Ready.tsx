import { Box, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Bubble from "./Bubble";
import Fish from "./Fish";

type Props = {};

const Ready = (_props: Props) => {
  // const isMobile = useMediaQuery(theme.)
  // Define the animation variant

  return (
    <section className="ready" id="how_to_buy">
      <Grid container justifyContent={"center"} mt={4}>
        <Typography color={"azure"} variant="h2" textAlign={"center"}>
          How to buy wally
        </Typography>
      </Grid>
      <Grid container mt={2} alignItems={"center"} spacing={4}>
        <Grid item md={6} sm={6} xs={12} sx={{zIndex:10}}>
          <Box style={{ position: "relative" }}>
            <Bubble y1={200} x={0} y={30} x1={0} />
            <Bubble y1={150} x={30} y={30} delay={0.5} x1={40} />
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{
                y: [-10, 0, -10],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.5, 1],
                repeat: Infinity,
              }}
            >
              <img src="assets/website assets/3.png" alt="" />
            </motion.div>
          </Box>
        </Grid>
        <Grid item md={6} sm={6} xs={12} sx={{zIndex:10}}>
          <Box style={{ position: "relative" }}>
            <Bubble y1={300} x={0} y={-50} x1={0} />
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.5, 1],
                repeat: Infinity,
              }}
            >
              <img src="assets/website assets/5.png" alt="" />
            </motion.div>
          </Box>
        </Grid>
        <Grid item md={6} sm={6} xs={12} sx={{zIndex:10}}>
          <Box style={{ position: "relative" }}>
            <Bubble y1={200} x={150} y={-130} x1={0} />

            <motion.div
              initial={{ scale: 0.9 }}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.5, 1],
                repeat: Infinity,
              }}
            >
              <img src="assets/website assets/2.png" alt="" />
            </motion.div>
          </Box>
        </Grid>
        <Grid item md={6} sm={6} xs={12} sx={{zIndex:10}}>
          <Box style={{ position: "relative" }}>
            <Bubble x={0} y={-50} x1={60} y1={300} />
            <Bubble x={30} y={-50} delay={0.5} x1={0} y1={200} />
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{
                y: [-10, 0, -10],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.5, 1],
                repeat: Infinity,
              }}
            >
              <img src="assets/website assets/4.png" alt="" />
            </motion.div>
          </Box>
        </Grid>
        <Fish
          fish={1}
          initial={{scale:0.6}}
          animate={{
            rotateY:[180,180,180],
            x: [100, window.innerWidth * 0.3,window.innerWidth - 100,],
            y: [-150, 0, -650],
          }}
          transition={{
            duration: 12,
            ease: "easeInOut",
            times: [0, 0.6, 1],
            repeat: Infinity,
          }}
        />
        <Fish
          fish={2}
          animate={{
            x: [window.innerWidth - 100, window.innerWidth * 0.5, -100],
            y: [-300, 0, -550],
          }}
          transition={{
            duration: 10,
            ease: "easeInOut",
            times: [0, 0.3, 1],
            repeat: Infinity,
          }}
        />
        <Fish
          fish={4}
          initial={{opacity:0.6}}
          animate={{
            x: [window.innerWidth - 100, window.innerWidth * 0.4, -100],
            y: [0, 300, -50],
          }}
          transition={{
            duration: 16,
            ease: "easeInOut",
            times: [0, 0.5, 1],
            repeat: Infinity,
          }}
        />
        <Fish
          fish={3}
          animate={{
            x: [-100,window.innerWidth * 0.5, window.innerWidth - 100 ],
            y: [800, 600, 850],
          }}
          transition={{
            duration: 14,
            ease: "easeInOut",
            times: [0, 0.5, 1],
            repeat: Infinity,
          }}
        />
       
        {/* <Fish x={[window.innerWidth-100,window.innerWidth*0.3,-100]} y={[900,0,-150]} times={[0,0.8,1]} duration={8} scale={0.8} fish={1}/>
              <Fish x={[window.innerWidth-100,100,-100]} y={[200,-200,50]} times={[0,0.4,1]} duration={6} scale={0.7} fish={2}/>
              <Fish x={[window.innerWidth-100,100,-100]} y={[600,-300,-650]} times={[0,0.3,1]} duration={10} fish={1} opposite={true}/> */}
      </Grid>
      {/* <img src="assets/svg/fish1.gif"  style={{
        // position: "absolute",
        // overflow: "hidden",
        // zIndex: 0,
        // maxWidth: "100%",
        transform:'rotateY(180deg)'
      }}/> */}
    </section>
  );
};

export default Ready;
