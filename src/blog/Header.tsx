import * as React from 'react'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
// import Link from '@mui/material/Link'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

interface HeaderProps {
  sections: ReadonlyArray<{
    title: string
    url: string
  }>
  title: string
}

export default function Header(props: HeaderProps) {
  const { sections, title } = props
  const navigate = useNavigate()

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          <div onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
            {title}
          </div>
        </Typography>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
      >
        {sections.map((section) => (
          <>
            <Button
              color="inherit"
              key={section.title}
              onClick={() => navigate(`${section.url}`)}
              sx={{ p: 1, flexShrink: 0 }}
            >
              {section.title}
            </Button>
          </>
        ))}
      </Toolbar>
    </React.Fragment>
  )
}
