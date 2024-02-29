/* eslint-disable react-hooks/rules-of-hooks */
import CssBaseline from '@mui/material/CssBaseline'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import GitHubIcon from '@mui/icons-material/GitHub'
import FacebookIcon from '@mui/icons-material/Facebook'
import XIcon from '@mui/icons-material/X'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Header from './Header'
import MainFeaturedPost from './MainFeaturedPost'
import FeaturedPost from './FeaturedPost'
import Sidebar from './Sidebar'
import Footer from './Footer'
import TesteMunha from './TesteMunha'
import ImgDieta from '../imgs/_38e1633d-7796-4a04-8e6b-dba58dc8b480.jpeg'
import Treino from '../imgs/back.jpg'
import Capa from '../imgs/capa.jpeg'

const sections = [
  { title: 'Dieta', url: '/dieta' },
  { title: 'Treino', url: '/treino' },
  { title: 'Músicas', url: '/musicas' },
  { title: 'Projetos de tecnologia', url: '/tech' },
  { title: 'Grupo de Danças', url: '/danca' },
]

const mainFeaturedPost = {
  title: 'Diário ou semanal',
  description:
    'Aqui tenho um diario de como está minha dieta e um poucos dos meus treinos',
  image: Capa,
  imageText: 'main image description',
  linkText: 'Continue reading…',
}

const featuredPosts = [
  {
    title: 'Dieta',
    date: 'Nov 12',
    description: 'Aqui pode-se calcular os macro nutrientes.',
    image: ImgDieta,
    imageLabel: 'Image Text',
    link: '/dieta',
  },
  {
    title: 'Treino',
    date: 'Nov 11',
    description: 'Aqui você poderá montar seus treinos.',
    image: Treino,
    imageLabel: 'Image Text',
    link: '/treino',
  },
]

const sidebar = {
  title: 'Sobre',
  description:
    'Aqui abaixo você encontra alguns projetos e informações sobre Tecnologia.',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'X', icon: XIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme()

export default function Blog() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Blog marck0101" sections={sections} />

        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            {/* <Main title="From the firehose" posts={posts} /> */}
            <Grid container xs={12} style={{ display: 'flex' }}>
              <Grid item xs={9}>
                <TesteMunha />
              </Grid>
              <Grid
                item
                xs={3}
                style={{ display: 'flex', flexDirection: 'row-reverse' }}
              >
                <Sidebar
                  title={sidebar.title}
                  description={sidebar.description}
                  archives={sidebar.archives}
                  social={sidebar.social}
                />
              </Grid>
            </Grid>
          </Grid>
        </main>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  )
}
