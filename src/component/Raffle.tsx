import { Grid, Typography } from "@mui/material";

type Props = {};

const Raffle = (_props: Props) => {
  return (
    <section className="raffle" id="raffle">
      <Grid container justifyContent={"center"}>
        <Typography color={"azure"} variant="h2" textAlign={"center"}>
          Raffle
        </Typography>
      </Grid>
    </section>
  );
};

export default Raffle;
