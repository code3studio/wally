import {  Card, CardContent, CardMedia, Typography, styled } from '@mui/material'
import {motion} from 'framer-motion'

type Props = {
  id:number,
  text:string,
  x:number
}

const Root = styled(Card)(({theme}) => ({
  border:'2px solid black',
  borderRadius:20,
  padding:10,
  margin:theme.breakpoints.down("sm") ? 20:0

}))

const TokenomicCard = ({id,text,x}: Props) => {
  return (
    <motion.div  
    animate={{
      y: [-10 + x, 0, -10 +x],
    }}
    transition={{
      duration: 2,
      ease: "easeInOut",
      times: [0, 0.5, 1],
      repeat: Infinity,
    }}>

    <Root>
      <CardMedia sx={{background: "linear-gradient(0deg, rgba(22,1,219,1) 0%, rgba(56,179,215,1) 82%, rgba(190,236,255,1) 100%)",borderRadius:4}} image={`assets/illustrations/${id}.png`} component="img"
        height="360" />
      <CardContent>
        <Typography variant='h4' textAlign={"center"}>{text}</Typography>
        
      </CardContent>
{/* 
      <img src="assets/illustrations/1.png"/> */}
      {/* </CardContent> */}
    </Root>
    </motion.div>
  )
}

export default TokenomicCard