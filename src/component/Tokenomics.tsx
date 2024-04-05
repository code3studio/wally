import { Grid, Typography } from "@mui/material";
import TokenomicCard from "./TokenomicCard";
type Props = {};

const Tokenomics = (_props: Props) => {
  return (
    <div className="tokenomics" id="wallynomics">
       <Grid container justifyContent={"center"} mt={2}>

          <Typography color={"azure"} variant="h2" textAlign={"center"}>Wallynomics</Typography>
      </Grid>
      {/* <Grid container alignItems={"center"}>
        <Grid item md={6} sm={12} xs={12}>

      <img src="assets/img/hero/1.png" width={"80%"}/>
        </Grid>
        <Grid item md={6} sm={12} xs={12}> */} 
          {/* <Grid container> */}

          {/* <Box sx={{position:'relative'}}>

          <Typography variant="h2" textAlign={"center"}>Total Supply:   1T</Typography>
          <Typography variant="h2" textAlign={"center"} mt={2}>LP:    Burned</Typography>
          <Typography variant="h2" textAlign={"center"} mt={2}>Taxes:    0</Typography>
          <Typography variant="h2" textAlign={"center"} mt={2}>Mint:    Revoked</Typography>
         

          <img src="assets/solos/2.png" width={"30%"} style={{position:'absolute',bottom:-80,right:10,transform:'scaleX(-1)'}}/>
      
          </Box> */}
          {/* </Grid> */}
        {/* </Grid>
      </Grid> */}
      {/* <img src="assets/banner/banner1.png" /> */}
      {/* <div className="tokenomics__container container"> */}
        
        {/* <motion.div
          animate={{
            y: [-30, 0, -30],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.5, 1],
            repeat: Infinity,
          }}
        > */}
          {/* <img src="assets/website assets/3.png" alt="" /> */}
          {/* <img
            className="tokenomics__boat"
            src="/assets/img/tokenomics/1.png"
            // width={"30%"}
            alt=""
          />
        </motion.div> */}

        {/* <div className="tokenomics__col">
          <span className="tokenomics__badge">Total supply: 1 T</span>
          <h2 className="tokenomics__title">Wallynomics</h2>
          <div className="tokenomics__items">
            <div className="tokenomics__star">
              <img src="/assets/img/tokenomics/tokenomics-star.svg" alt="" />
              <span>
                0%
                <br />
                TAX
              </span>
            </div>
            <img
              className="tokenomics__items-bg"
              src="/assets/img/tokenomics/tokenomics-items-bg.png"
              alt=""
            />
            <div className="tokenomics__items-inner">
              <div className="tokenomics__item">
                <span className="tokenomics__label"> LP </span>
                <strong className="tokenomics__value">Burned</strong>
              </div>
              <div className="tokenomics__item">
                <span className="tokenomics__label"> MINT </span>
                <strong className="tokenomics__value">Revoked</strong>
              </div>
              <div className="tokenomics__item">
                <span className="tokenomics__label"> LP </span>
                <strong className="tokenomics__value">20 SOL</strong>
              </div>
            </div>
          </div>
        </div> */}
      {/* </div> */}
<Grid container mb={4} spacing={4} mt={4}>
  <Grid item md={3} sm={6}  xs={12} zIndex={10}> <TokenomicCard id={2} text="Total Supply: 1T" x={20}/></Grid>
  <Grid item md={3} sm={6}   xs={12} zIndex={10}> <TokenomicCard id={1} text="LP: Burned" x={0}/></Grid>
  <Grid item md={3} sm={6}   xs={12} zIndex={10}> <TokenomicCard id={4}  text="Mint: Revoked" x={20}/></Grid>
  <Grid item md={3} sm={6}   xs={12} zIndex={10}> <TokenomicCard id={3} text="Taxes: 0" x={0}/></Grid>
  {/* <Grid item md={4}></Grid>
  <Grid item md={4}></Grid>
  <Grid item md={4}></Grid> */}
</Grid>
     
      {/* <div className="marque tokenomics__marque tokenomics__marque_bottom">
        <Divider />
      </div> */}
    </div>
  );
};

export default Tokenomics;
