import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'

import Header from '../../blog/Header'
import MainFeaturedPost from '../../blog/MainFeaturedPost'
import Capa from '../../imgs/capa.jpeg'
import { Grid } from '@mui/material'

import { useEffect } from 'react'

const defaultTheme = createTheme()

const Treino = () => {
  const sections = [
    { title: 'Home', url: '/' },
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

  const url = 'https://calculadora-calorias-seven.vercel.app'
  useEffect(() => {
    console.log('iniciando a tela')
  }, [])

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Blog marck0101" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          {/* <Grid container spacing={4}>
                {featuredPosts.map((post) => (
                  <FeaturedPost key={post.title} post={post} />
                ))}
              </Grid> */}
          <Grid container spacing={5} sx={{ mt: 3 }}>
            {/* <Main title="From the firehose" posts={posts} /> */}
            <Grid container xs={12} style={{ display: 'flex' }}>
              <Grid item xs={12} style={{ display: 'flex', marginLeft: 40 }}>
                {/* <div>Aqui vem o componente de montar a dieta</div> */}
                {/* <iframe
                      src={url}
                      width="100%"
                      height="1000px"
                      title="Calculadora de calorias"
                    /> */}
              </Grid>
              {/* aqui vai um componente de calculadora de calorias */}
            </Grid>
          </Grid>
        </main>
      </Container>
      {/* <Footer
            title="Footer"
            description="Something here to give the footer a purpose!"
          /> */}
    </ThemeProvider>
  )
}
export default Treino
