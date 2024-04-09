import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";

type Props = {};

const RoadMap = (_props: Props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <section id="roadmap">
      <Grid container justifyContent={"center"} mt={2}>
        <Typography color={"azure"} variant="h2" textAlign={"center"}>
          Roadmap
        </Typography>
      </Grid>
      <Grid container justifyContent={"center"} mt={2}>
        <img src="assets/roadmap.webp" width={isMobile ? "90%":"80%"} alt="roadmap" style={{borderRadius:"12px"}}/>
      </Grid>
    </section>
  );
};

export default RoadMap;
