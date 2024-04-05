import {
  Box,
  Grid,
  LinearProgress,
  Typography,
  linearProgressClasses,
  styled,
} from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
type Props = {
  loading: boolean;
};
const BorderLinearProgress = styled(LinearProgress)(() => ({
  height: 36,
  borderRadius: 24,
  border: "3px solid black",
  [`&.${linearProgressClasses.root}`]: {
    backgroundColor: "transparent !important",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 24,
    borderRight: "3px solid black",
    backgroundColor: "#5BE1E3",
  },
}));

const ProgressLabel = styled(Typography)(() => ({
  position: "absolute",
  left: "52%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  fontWeight: "bold",
  color: "#1F559E",
}));

const Loading = ({ loading }: Props) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(timer);
          return 100; 
        }
        return Math.round(Math.min(oldProgress + 6.67, 100));
      });
    }, 150);
  
    return () => {
      clearInterval(timer);
    };
  }, []);
  
  return (
    <Grid
      container
      justifyContent={"center"}
      flexDirection={"column"}
      alignItems={"center"}
      sx={{ height: "100vh", display: loading ? "flex" : "none" }}
    >
      <motion.img
        animate={{ rotate: [10, 0, 10] }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          times: [0, 0.5, 1],
          repeat: Infinity,
        }}
        src="assets/website assets/1.png"
        style={{ height: 400, width: 350 }}
      />

      <Box position={"relative"}>
        <BorderLinearProgress
          sx={{ width: 300 }}
          color="secondary"
          variant="determinate"
          value={progress}
        />
        <ProgressLabel color="#FFAF59" variant="subtitle1">
          {progress}%
        </ProgressLabel>
      </Box>
    </Grid>
    
  );
};

export default Loading;
