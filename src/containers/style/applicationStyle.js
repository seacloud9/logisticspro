import { createMuiTheme } from 'material-ui/styles'
export default createMuiTheme({
  palette: {
    primary: { main: '#304268' },
    secondary: { main: '#68304a' },
    error: { main: '#683030' }
  },
  overrides: {
    MuiList: {
      root: {
        display: 'flex',
        flex: 1,
        background: '#47131d'
      }
    },
    MuiDrawer: {
      paperAnchorTop: {
        background: '#47131d'
      }
    },
    MuiBackdrop: {
      root: {
        backgroundColor: 'hsla(209, 76%, 43%, 0.5)'
      }
    },
    MuiListItemIcon: {
      root: {
        color: '#ff0057'
      }
    },
    MuiTypography: {
      subheading: {
        color: '#ff0057'
      }
    }
  }
})
