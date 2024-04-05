import { Box, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Bubble from "./Bubble";
import Fish from "./Fish";

type Props = {};

const About = (_props: Props) => {
  return (
    <>
      <Grid container justifyContent={"center"} mt={2}>
        <Typography color={"azure"} variant="h2" textAlign={"center"}>
          About me
        </Typography>
      </Grid>
      <Grid container alignItems={"center"}   >
        <Grid item md={6} sm={12} xs={12} sx={{zIndex:10}}>
          <Grid container justifyContent={"center"}>
            <div style={{ position: "relative" }}>
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
                <img src="assets/wally_nice_guy.png" width={"80%"} />
              </motion.div>
            </div>
          </Grid>
        </Grid>
        <Grid item md={6} sm={12} xs={12} sx={{zIndex:10}}>
          <Grid container justifyContent={"center"}>
            <Grid item md={9} sm={10} xs={10}>
              <Box sx={{ backgroundColor: "white",  p: {sm:8,xs:4},mb:{sm:0,xs:4}, borderRadius: 20,textAlign:'center' }}>
                <Typography variant="h5" sx={{ mb: 2, }}>
                  Hi, I am Wally the whale, the leader of the sea! With my
                  presence in the Solana water, I will guide my fellow ocean
                  creatures to success.
                </Typography>
                <Typography variant="h5" sx={{ mb: 2 }}>
                  From the smallest fish to the mighty sharks, all can look to
                  me for protection and guidance.
                </Typography>
                <Typography variant="h5" sx={{ mb: 2 }}>
                  My deep, rumbling voice echoes through the ocean depths.
                  Calming storms and bringing harmony to our aquatic community.
                  As the guardian of these waters. I take great pride in
                  ensuring peace and balance in our magnificent realm.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Fish
        fish={2}
        initial={{ scale: 0.8 }}
        animate={{
          x: [window.innerWidth - 200, window.innerWidth * 0.5, -100],
          y: [-100, -300, -550],
        }}
        transition={{
          duration: 8,
          ease: "easeInOut",
          times: [0, 0.3, 1],
          repeat: Infinity,
        }}
      />
      <Fish
        fish={5}
        initial={{ scale: 1.4, opacity: 0.7 }}
        animate={{
          rotateY: [180, 180],
          x: [100, window.innerWidth - 200],
          y: [-50, -50],
        }}
        transition={{
          duration: 12,
          ease: "easeInOut",
          times: [0, 1],
          repeat: Infinity,
        }}
      />
      {/* <img src="assets/svg/seaweed1.gif" width={"2%"}  style={{position:'absolute',bottom:0,right:window.innerWidth*0.1}}/>
      <img src="assets/svg/seaweed2.gif" style={{position:'absolute',bottom:0,right:window.innerWidth*0.18}}/>
      <img src="assets/svg/seaweed3.gif" width={"8%"} style={{position:'absolute',bottom:0,left:window.innerWidth*0.6}}/>
      <img src="assets/svg/seaweed3.gif" width={"6%"} style={{position:'absolute',bottom:0,left:window.innerWidth*0.1}}/>
      <img src="assets/svg/seaweed4.gif" style={{position:'absolute',bottom:0,left:window.innerWidth*0.4}}/>
      <img src="assets/svg/seaweed4.gif"width={"6%"} style={{position:'absolute',bottom:0,left:window.innerWidth*0.6}}/>
      <img src="assets/svg/seaweed4.gif" style={{position:'absolute',bottom:0,left:window.innerWidth*0.7}}/>
      <img src="assets/svg/seaweed4.gif"  style={{position:'absolute',bottom:0,left:window.innerWidth*0.2}}/>
      <img src="assets/svg/seaweed4.gif" style={{position:'absolute',bottom:0,left:window.innerWidth*0.5}}/>
      <img src="assets/svg/seaweed4.gif" width={"5%"} style={{position:'absolute',bottom:0,left:window.innerWidth*0.1}}/>
      <img src="assets/svg/seaweed5.gif" style={{position:'absolute',bottom:0,right:window.innerWidth*0.7}}/> */}
    </>
  );
};

export default About;
