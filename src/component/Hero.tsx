import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import Header from "./Header";

function Hero() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const handleCopyText = () => {
    const textToCopy = import.meta.env.VITE_CONTRACT_ADDRESS;

    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        console.log("Text copied successfully");
      })
      .catch((err) => {
        console.error("Unable to copy text: ", err);
      });
  };

  function abbreviateString(str: string, maxLength = 10) {
    if (str.length <= maxLength) {
      return str; //
    }
    const firstPart = str.substring(0, 10);
    const lastPart = str.substring(str.length - 10);
    return `${firstPart} ... ${lastPart}`;
  }
  return (
    <section className="hero">
      <Header />
      <img src="assets/img/ready/website 4.png" style={{ borderRadius: 4 }} />
      {/* <Grid container justifyContent={"center"}> */}
      {!matches ? (
        <Box
          sx={{
            position: "absolute",
            top: "35%",
            right: "16%",
          }}
        >
          <Box sx={{ position: "relative" }}>
            <img
              src="assets/img/ready/ready-contract-background.svg"
              style={{
                maxWidth: matches ? "200px" : "560px",
                height: matches ? "60px" : "120px",
              }}
            />

            <Grid container justifyContent={"center"}>
              {!matches && (
                <Typography
                  className="ca"
                  sx={{
                    position: "absolute",
                    top: 20,
                    textTransform: "capitalize",
                  }}
                  variant="h4"
                >
                  Contract Address:{" "}
                </Typography>
              )}
              <Typography
                variant={matches ? "caption" : "h6"}
                className="ca"
                sx={{ position: "absolute", top: matches ? 10 : 60, left: 20 }}
              >
                {import.meta.env.VITE_CONTRACT_ADDRESS}
              </Typography>
            </Grid>
            <button
              onClick={handleCopyText}
              style={{
                background:
                  ' url("assets/img/ready/ready-copy-button-background.svg") center center no-repeat',
                backgroundSize: "contain",
                transform: "rotate(-4deg)",
                right: "-20px",
                bottom: "-24px",
                position: "absolute",
                padding: "16px 32px",
                border: "none",
              }}
            >
              Copy
            </button>
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            pt: 4,
            px: 1,
            pb: 4,
            backgroundColor: "#3A8FC9",
          }}
        >
          <Box>
            <Typography variant="h5" color={"azure"}>
              Contract Address:
            </Typography>
            <Typography variant="caption" color={"azure"}>
              {abbreviateString(import.meta.env.VITE_CONTRACT_ADDRESS)}
            </Typography>
          </Box>
          <button
            onClick={handleCopyText}
            style={{
              background:
                ' url("assets/img/ready/ready-copy-button-background.svg") center center no-repeat',
              backgroundSize: "contain",
              transform: "rotate(-4deg)",
              padding: "16px 32px",
              border: "none",
            }}
          >
            Copy
          </button>
        </Box>
      )}
    </section>
  );
}

export default Hero;
