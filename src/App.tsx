import Hero from "./component/Hero";
import Divider from "./component/Divider";
import Tokenomics from "./component/Tokenomics";
import Ready from "./component/Ready";
import Footer from "./component/Footer";
import { Box, Button, Container, Fade, useScrollTrigger } from "@mui/material";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import About from "./component/About";
import { useEffect, useState } from "react";
import Loading from "./component/Loading";
import MemesGallery from "./component/MemesGallery";

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

function ScrollTop(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector('#start');

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
        behavior:'smooth'
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}



function App(props:any) {
  const [loading,setLoading] = useState<boolean>(true);
  useEffect(() => {
    setInterval(() => {
      setLoading(false)
    },3000)
  },[])
  return (
    <>
    
       <Loading loading={loading} />
    <div className="wrapper" style={{display:loading ?  'none':'flex'}}>
      <Container maxWidth="xl">

      <div id="start" />
      <Hero />
      <div className="marque ">
        <Divider />
      </div>
      <Tokenomics />
      <Ready />
      <section className="about" id="about">
        <About/>
     </section>
      <section className="memes" id="memes">
        <MemesGallery/>
     </section>
      <div className="marque ">
        <Divider />
      </div>
      <Footer />
      <Box>
      </Box>
      <ScrollTop {...props}>
        <Button size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Button>
      </ScrollTop>
      </Container>
    </div>
    
    </>
  );
}

export default App;
