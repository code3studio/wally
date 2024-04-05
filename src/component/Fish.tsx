import { useMediaQuery, useTheme } from "@mui/material";
import { MotionProps, motion } from "framer-motion";

interface Props extends  MotionProps {
    fish:number
};

const Fish = ({fish,...rest}: Props) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    return (
    <motion.img
    {...rest}
      width={isMobile?"10%":"5%"}
      src={`assets/svg/fish${fish}.gif`}
      style={{
        position: "absolute",
        overflow: "hidden",
        // zIndex: 0,
        // maxWidth: "100%",
       transform: 'rotateY(180deg)'
      }}
    ></motion.img>
    
  );
};

export default Fish;
