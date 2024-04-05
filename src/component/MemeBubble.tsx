import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import MemeDrop from "./MemeDrop";

type Props = {};

const MemeBubble = (_props: Props) => {
  return (
    <motion.div
      onClick={() =>
        window.open(
          "https://drive.google.com/drive/folders/1Tge7xGx7j7kko_5p-TOd5e3gTmBI3_sC"
        )
      }
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.4 }}
      className="meme-bubble"
      whileTap={{ scale: 1.2 }}
    >
      <Typography color={"azure"} variant="h4" textAlign={"center"}>
        Wally Memes
      </Typography>
      <MemeDrop x={30} y={-50} delay={0.5} x1={0} y1={200} />
      <MemeDrop x={80} y={-50} delay={0.2} x1={20} y1={250} />
      {/* <img  src="assets/bubble.webp"/> */}
    </motion.div>
  );
};

export default MemeBubble;
