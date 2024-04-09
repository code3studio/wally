import { Menu } from "@mui/icons-material";
import {
  Box,
  Button,
  ButtonBase,
  Drawer,
  Grid,
  Hidden,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { useState } from "react";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children?: React.ReactElement;
}

const Header = (_props: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const scrollToAboutMe = (id: string) => {
    const aboutMeSection = document.getElementById(id);
    if (aboutMeSection) {
      aboutMeSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* <HideOnScroll> */}

      {/* <AppBar
    position="absolute"
      sx={{
        backgroundColor:"transparent",
        // background:"linear-gradient(0deg, rgba(133,214,247,1) 0%, rgba(190,236,255,1) 43%)",
        // border:"1px solid #38B3D7",
        // borderRadius: 30,
        top:0,
        boxShadow: "none",
        // top: 30,
      }}
    >
      <Toolbar sx={{height:100}}> */}
      <Hidden mdDown>
        <Box sx={{ position: "absolute", top: 36, left: 30 }}>
          <ButtonBase
            sx={{ mr: {xl: 4,lg:2,md:1}, color: "white" }}
            onClick={() => scrollToAboutMe("raffle")}
          >
            Raffle
          </ButtonBase>
          <ButtonBase
            sx={{ mr:{xl: 4,lg:2,md:1}, color: "white" }}
            onClick={() => scrollToAboutMe("wallynomics")}
          >
            Wallynomics
          </ButtonBase>
          <ButtonBase
            sx={{ mr: {xl: 4,lg:2,md:1}, color: "white" }}
            onClick={() => scrollToAboutMe("roadmap")}
          >
            Roadmap
          </ButtonBase>
          <ButtonBase
            sx={{ mr: {xl: 4,lg:2,md:1}, color: "white" }}
            onClick={() => scrollToAboutMe("how_to_buy")}
          >
            How to Buy
          </ButtonBase>
          <ButtonBase
            sx={{ mr:{xl: 4,lg:2,md:1}, color: "white" }}
            onClick={() => scrollToAboutMe("about")}
          >
            About Me
          </ButtonBase>
          <ButtonBase
            sx={{ mr: {xl: 4,lg:2,md:1}, color: "white" }}
            onClick={() =>scrollToAboutMe("memes")}
          >
            memes
          </ButtonBase>
        </Box>
      </Hidden>
      <Grid container justifyContent={"center"}>
        <Typography
          variant="h2"
          color={"white"}
          sx={{ position: "absolute", top: 26, textShadow: "1px 1px 2px black, -1px -1px 2px black, 1px -1px 2px black, -1px 1px 2px black",}}
        >
          Wally{" "}
        </Typography>
        {/* <Box flexGrow={1} /> */}
      </Grid>
      <Hidden mdDown>
        <Box sx={{ position: "absolute", top: 32, right: 30 }}>
          <Button component="a"
            target="_blank"
            href="https://twitter.com/WallyDaWhale">
            <img src="assets/svg/x.svg" width={20} />
          </Button>
          <Button
            sx={{ ml: 2 }}
            component="a"
            target="_blank"
            href="https://t.me/wallyonsolana"
          >
            <img src="assets/svg/te.svg" width={20} />
          </Button>
        </Box>
      </Hidden>
      {/* <Box flexGrow={1}/> */}

      <Hidden mdUp>
        <Button
          onClick={() => {
            setOpen(true);
          }}
          sx={{ position: "absolute", top: 32, right: 30 }}
        >
          <Menu />
        </Button>
      </Hidden>
      {/* </Toolbar>
    </AppBar> */}
      {/* </HideOnScroll> */}

      <Drawer
        open={open}
        anchor="right"
        PaperProps={{ sx: { backgroundColor: "#BEECFF" } }}
        onClose={() => {
          setOpen(false);
        }}
      >
        <Box
          sx={{ width: 150, display: "flex", justifyContent: "center" }}
          role="presentation"
        >
          <List sx={{ mt: 6 }}>
            <ListItemButton onClick={() =>{ scrollToAboutMe("raffle");  setOpen(false);}}>
              <ListItemText sx={{textShadow:'none'}}>Raffle</ListItemText>
            </ListItemButton>
            <ListItemButton onClick={() => {scrollToAboutMe("wallynomics"); setOpen(false);}}>
              <ListItemText sx={{textShadow:'none'}}>Wallynomics</ListItemText>
            </ListItemButton>
            <ListItemButton onClick={() => {scrollToAboutMe("roadmap"); setOpen(false);}}>
              <ListItemText sx={{textShadow:'none'}}>Roadmap</ListItemText>
            </ListItemButton>
            <ListItemButton onClick={() => {scrollToAboutMe("how_to_buy"); setOpen(false);}}>
              <ListItemText sx={{textShadow:'none'}}>How to buy</ListItemText>
            </ListItemButton>
            <ListItemButton onClick={() =>{ scrollToAboutMe("about");  setOpen(false);}}>
              <ListItemText sx={{textShadow:'none'}}>About Me</ListItemText>
            </ListItemButton>
            <ListItemButton onClick={() =>{ scrollToAboutMe("memes");  setOpen(false);}}>
              <ListItemText sx={{textShadow:'none'}}>memes</ListItemText>
            </ListItemButton>
          </List>
        </Box>
        <Box>
          <Button  component="a"
            target="_blank"
            href="https://twitter.com/WallyDaWhale"
            >
            <img src="assets/svg/x.svg" width={20} />
          </Button>
          <Button
            sx={{ ml: 1 }}
            component="a"
            target="_blank"
            href="https://t.me/wallyonsolana"
          >
            <img src="assets/svg/te.svg" width={20} />
          </Button>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
