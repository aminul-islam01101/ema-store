import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { StyledBadge } from '~/assets/styles/styledComponent';
import LoginImage from '../assets/images/LoginImage.png';
import Logo from '../assets/images/logo.svg';

import { useShoppingCart } from '~/Contexts/ShoppingCardContext';
// nav-link name /page name
const pages = [
  { pageName: 'Home', link: 'home', id: 0 },
  { pageName: 'Shop', link: 'shop', id: 1 },
  { pageName: 'Orders', link: 'orders', id: 2 },
  { pageName: 'Inventory', link: 'inventory', id: 3 },
  { pageName: 'Login', link: 'login', id: 4 },
];
// avatar menu options
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Header = () => {
  const { cartQuantity } = useShoppingCart();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position='sticky' className='bg-[#1C2B35]'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          {/* Logo */}
          <Box>
            <Link to='./' className='no-underline hidden md:block'>
              <img src={Logo} alt='logo' />
            </Link>
          </Box>
          {/* hamburger */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                  <Typography textAlign='center'>{page.pageName}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* logo middle */}
          <Box className='flex grow md:hidden'>
            <Link to='./' className='no-underline '>
              <img src={Logo} alt='logo' />
            </Link>
          </Box>
          {/* Nav link */}
          <Box className='justify-end' sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <NavLink
                to={page.link}
                key={page.id}
                className={({ isActive }) =>
                  isActive ? 'bg-sky-700 no-underline' : 'no-underline '
                }
              >
                <Button
                  className='capitalize'
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page.pageName}
                </Button>
              </NavLink>
            ))}
          </Box>
          {/* right avatar menu */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title='Open settings'>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <img src={LoginImage} alt='img' className='w-6 h-6 rounded-full' />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id='menu-appbar'
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign='center'>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* cart icon */}
          {cartQuantity > 0 && (
            <Link to={'/orders'}>
              <IconButton className='text-white' aria-label='cart'>
                <StyledBadge badgeContent={cartQuantity} color='primary'>
                  <ShoppingCartIcon />
                </StyledBadge>
              </IconButton>
            </Link>
          )}

          {/* drawer */}

          {/*  */}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
