import { Grid } from '@mui/material'
import MemeBubble from './MemeBubble'

type Props = {}

const MemesGallery = (_props: Props) => {
  return (
    <>
    <Grid container justifyContent={"center"} mt={2}>
        <MemeBubble/>
      </Grid>
    </>
  )
}

export default MemesGallery