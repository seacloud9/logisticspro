import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import { Link } from 'react-router-dom'
import { HideAt, ShowAt } from 'react-with-breakpoints'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Button from 'material-ui/Button'
import Drawer from 'material-ui/Drawer'
import List from 'material-ui/List'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import navItems from '../data/nav'

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  list: {
    width: 250
  },
  listFull: {
    width: 'auto'
  }
}

class MaterialNavBar extends React.Component {
  // { classes } = props
  constructor (props) {
    super(props)
    this.state = {
      top: false,
      left: false,
      bottom: false,
      right: false,
      drawerAnimation: ''
    }
  }

componentDidMount = () => {
  window.addEventListener('scroll', this.toggleDrawerIfOpen)
}

componentWillReceiveProps = (props) => {
  if (window.location.hash !== '' && this.props.onHash) this.props.onHash(window.location.hash)
}

componentWillUnmount = () => {
  window.removeEventListener('scroll', this.toggleDrawerIfOpen)
}

toggleDrawerIfOpen = () => {
  if (this.state.isOpen) {
    this.toggleDrawer('top', false)
  }
}

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
      isOpen: open,
      drawerAnimation: (open ? 'menuLogoList' : '')
    })
  }

  goToBlog () {
    history.push({
      pathname: '/blog'
    })
  }

  render () {
    // TODO alter scroll so that is uses anchors tags and can be triggerd from other pages
    const navList = (
      <div style={{ flex: 1, display: 'flex', opacity: 0.9 }}>
        <List color='secondary' className={this.state.drawerAnimation}>{navItems}</List>
      </div>
    )
    return (
      <div className={this.props.classes.root}>
        <Drawer anchor='top' open={this.state.top} onClose={this.toggleDrawer('top', false)}>
          <div
            style={{ display: 'flex', flex: 1 }}
            tabIndex={0}
            role='button'
            onClick={this.toggleDrawer('top', false)}
            onKeyDown={this.toggleDrawer('top', false)}
          >
            {navList}
          </div>
        </Drawer>
        <AppBar position='fixed' >
          <Toolbar className='toolBar' style={{ opacity: (this.state.isOpen ? 0 : 0.8), boxShadow: (this.state.isOpen ? 'none' : ' 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)') }}>
            <HideAt breakpoint='mediumAndBelow'>
              <Button color='inherit' component={Link} to='/blue#home'>Home</Button>
              <Button color='inherit' component={Link} to='/blue#about'>About</Button>
              <Button color='inherit' component={Link} to='/blue#skills'>Skills</Button>
              <Button color='inherit' component={Link} to='/blue#visuals'>Visuals</Button>
              <Button component={Link} color='inherit' to='/blog'>Blog</Button>
              <a href={`mailto:brendonsmith@seacloud9.org`}>
                <Button color='inherit'>Contact</Button>
              </a>
            </HideAt>
            <ShowAt breakpoint='mediumAndBelow'>
              <IconButton className={this.props.classes.menuButton} color='inherit' aria-label='Menu' onClick={this.toggleDrawer('top', true)}>
                <MenuIcon />
              </IconButton>
            </ShowAt>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

MaterialNavBar.propTypes = {
  onHash: PropTypes.func,
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired
}

export default withStyles(styles)(MaterialNavBar)
