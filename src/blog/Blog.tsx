import * as React from 'react'
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
// import Main from './Main'
// import post1 from './blog-post1.md'
// import post2 from './blog-post2.md'
// import post3 from './blog-post3.md'

const sections = [
  { title: 'Dieta', url: '#' },
  { title: 'Treino', url: '#' },
  { title: 'Músicas', url: '#' },
  { title: 'Projetos de tecnologia', url: '#' },
  // { title: 'Politics', url: '#' },
  // { title: 'Opinion', url: '#' },
  // { title: 'Science', url: '#' },
  // { title: 'Health', url: '#' },
  // { title: 'Style', url: '#' },
  // { title: 'Travel', url: '#' },
]

const mainFeaturedPost = {
  title: 'Diário ou semanal',
  description:
    'Aqui tenho um diario de como está minha dieta e um poucos dos meus treinos',
  image: 'https://source.unsplash.com/random?wallpapers',
  imageText: 'main image description',
  linkText: 'Continue reading…',
}

const featuredPosts = [
  {
    title: 'Dieta',
    date: 'Nov 12',
    description: 'Aqui pode-se calcular os macro nutrientes.',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
  },
  {
    title: 'Treino',
    date: 'Nov 11',
    description: 'Aqui você poderá montar seus treinos.',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
  },
]

// const posts = [post1, post2, post3]

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
