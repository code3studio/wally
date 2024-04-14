import { Fab, Grid, Typography } from "@mui/material";
import BarImg from "../assets/bar.webp";
type Props = {};

const Raffle = (_props: Props) => {
  return (
    <section className="raffle" id="raffle">
      <Grid container justifyContent={"center"} mt={4}>
        <Typography color={"azure"} variant="h2" textAlign={"center"}>
          Raffle
        </Typography>
      </Grid>
      <Grid
        container
        justifyContent={"center"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <Grid item mb={4}>
          <Grid container columnGap={4} >
            <Grid item md={"auto"} xs={12}>
              <Typography textAlign={"center"} variant="h5" color={"azure"} mt={4}>
                Total Burn: 0.19%
              </Typography>
            </Grid>
            <Grid item md="auto" xs={12}>
              <Typography variant="h5" textAlign={"center"} color={"azure"} mt={4}>
                Goal: burn 10% supply
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <img src={BarImg} alt="bar" />
        <Fab
          sx={{ my: 4 }}
          variant="extended"
          style={{
            color: "azure",
            fontSize: "2.3rem",
            backgroundColor: "#FFBB01",
          }}
          href="https://wof.wallythewhale.xyz/"
          target="_blank"
        >
          Enter Raffle
        </Fab>

        {/* <img src={BarImg} alt="bar"/> */}
      </Grid>
    </section>
  );
};

export default Raffle;
