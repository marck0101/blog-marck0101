import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

interface FeaturedPostProps {
  post: {
    date: string
    description: string
    image: string
    imageLabel: string
    title: string
    link: string
  }
}

export default function FeaturedPost(props: FeaturedPostProps) {
  const { post } = props
  const url = window.location.href.split('/')[2]
  const navegacao1 = `${post.link}`
  const navigate = useNavigate()

  const navegacao = () => {
    navigate(`${navegacao1}`)
  }

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" /*href="#"*/>
        <Card sx={{ display: 'flex' }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {post.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {post.date}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {post.description}
            </Typography>
            <Typography variant="subtitle1" color="primary">
              {/* <div onClick={() => navigate(`/${post.link}`)}> */}
              <Button onClick={() => navegacao()}>Continue reading...</Button>
              {/* </div> */}
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
            image={post.image}
            alt={post.imageLabel}
          />
        </Card>
      </CardActionArea>
    </Grid>
  )
}
