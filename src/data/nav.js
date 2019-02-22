
import React from 'react'
import { ListItem, ListItemText } from 'material-ui/List'
import { Link } from 'react-router-dom'

const svgTag = `
<svg  width="50px"  viewBox="0 0 572 600" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">
    <g id="mainLogo">
        <path d="M9.142,303.054c0.011,-23.203 115.628,-226.076 135.447,-237.668c19.819,-11.593 250.867,-11.487 270.675,0.124c19.808,11.61 135.239,214.59 135.228,237.793c-0.01,23.202 -115.627,226.076 -135.446,237.668c-19.819,11.592 -250.867,11.486 -270.675,-0.124c-19.809,-11.611 -135.239,-214.59 -135.229,-237.793Zm268.029,-211.823c117.852,0 213.533,95.156 213.533,212.362c0,117.205 -95.681,212.362 -213.533,212.362c-117.852,0 -213.533,-95.157 -213.533,-212.362c0,-117.206 95.681,-212.362 213.533,-212.362Z" style="fill:#ff0057;" />
    </g>
    <clipPath id="_clip1">
        <ellipse id="Shape" cx="283.952" cy="297.193" rx="223.233" ry="222.009" />
    </clipPath>
    <g clip-path="url(#_clip1)">
        <path d="M198.408,77.82c-22.995,0 -50.833,16.047 -62.289,35.903l-88.244,153.129c-11.462,19.866 -11.456,51.95 0,71.806l88.244,153.129c11.461,19.866 39.338,35.903 62.289,35.903l176.488,0c22.995,0 50.834,-16.047 62.29,-35.903l88.244,-153.129c11.461,-19.866 11.455,-51.95 0,-71.806l-88.244,-153.129c-11.462,-19.866 -39.338,-35.903 -62.29,-35.903l-176.488,0Zm100.572,47.474c28.071,0 51.552,18.529 57.856,43.365c2.292,-0.391 4.709,-0.649 7.138,-0.649c19.739,0 35.686,13.686 35.686,30.604c0,6.57 -2.382,12.646 -6.488,17.628l-248.943,0c-0.064,-0.609 -0.108,-1.208 -0.108,-1.839c0,-11.276 10.632,-20.439 23.791,-20.439c6.511,0 12.462,2.322 16.762,5.948c3.149,-18.455 22.342,-32.125 44.447,-30.928c4.005,0.217 7.858,0.959 11.463,2.054c4.958,-24.133 26.008,-42.816 52.124,-45.419c2.071,-0.211 4.145,-0.325 6.272,-0.325Zm-189.897,97.22l350.596,0l0,5.839l-350.596,0l0,-5.839Zm0.108,12.004l108.142,0l0,34.605l-64.885,0l0,17.303l64.885,0l0,86.513l-108.142,0l0,-34.605l64.886,0l0,-17.303l-64.886,0l0,-86.513Zm121.119,0l112.468,0l0,34.605l-69.211,0l0,69.211l69.211,0l0,34.605l-112.468,0l0,-138.421Zm125.445,0l103.816,0l0,138.421l-103.816,0l0,-34.605l60.559,0l0,-17.303l-60.559,0l0,-86.513Zm43.257,34.605l0,17.303l17.302,0l0,-17.303l-17.302,0Zm-289.929,109.872l350.596,0l0,5.84l-350.596,0l0,-5.84Z" style="fill:#ff0057;fill-rule:nonzero;" />
    </g>
</svg>
`

const navItems = (
  <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
    <ListItem button className='listItem'>
      <div dangerouslySetInnerHTML={{ __html: svgTag }} />
    </ListItem>
    <ListItem button className='listItem' component={Link} to='/blue#home'>
      <ListItemText primary='Home' />
    </ListItem>
    <ListItem button className='listItem' component={Link} to='/blue#about'>
      <ListItemText primary='About' />
    </ListItem>
    <ListItem button className='listItem' component={Link} to='/blue#skills'>
      <ListItemText primary='Skills' />
    </ListItem>
    <ListItem button className='listItem' component={Link} to='/blue#visuals'>
      <ListItemText primary='Visuals' />
    </ListItem>
    <ListItem button className='listItem' component={Link} to='/blog'>
      <ListItemText primary='Blog' />
    </ListItem>
    <ListItem button className='listItem'>
      <a href={`mailto:brendonsmith@seacloud9.org`}>
        <ListItemText primary='Contact' />
      </a>
    </ListItem>
  </div>
)

export default navItems
