/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
// @ts-nocheck

import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import MenuItem from '@mui/material/MenuItem';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import { Autocomplete, Badge, TextField } from '@mui/material';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../App/store/store';
import type { RootState } from '../../App/store/store';
import { loadCarts } from '../Cart/cartSlice';
import img from '../../App/assets/img/Logo.svg';
import imgGreen from '../../App/assets/img/logo-green.svg';
import ModalWindow from '../../shared/Modal/ModalWindow';
import RegistrationPage from '../Auth/RegistrationPage';
import AuthorizationPage from '../Auth/AuthorizationPage';

const pages = [
  { title: 'Каталог', link: 'catalog' },
  { title: 'Новинки', link: 'new' },
  { title: 'Хиты', link: 'hit' },
  { title: 'Скидки', link: 'sale' },
  { title: 'Контакты', link: 'contacts' },
];

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));
const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledAutoComplete = styled(Autocomplete)(({ theme }) => ({
  color: '#121711',
  width: '100%',
  fontFamily: 'Aneliza',
  '& .MuiInputBase-root ': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
  },
  '& .Mui-focused fieldset': {
    borderColor: '#f3eece !important',
  },
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    minWidth: '0 !important',
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    '&:focus': {
      width: '30ch',
    },
  },
}));

type NavProps = {
  color: string;
};

function NavBar({ color }: NavProps): JSX.Element {
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useAppDispatch();
  const books = useSelector((state: RootState) => state.book.books);
  useEffect(() => {
    if (user) dispatch(loadCarts(user.id)).catch(console.log);
  }, [dispatch, user, books]);
  const carts = useSelector((state: RootState) => state.cart.carts);
  const cart = carts.find((cart) => cart.userId === user?.id && !cart.cartStatus);
  const count = cart?.CartLines?.reduce((acc, cartline) => acc + cartline.count, 0);
  const [showModal, setShowModal] = useState(false);
  const [showModalA, setShowModalA] = useState(false);

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const handleOpenNavMenu: (e: React.MouseEvent<HTMLElement>) => void = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu: () => void = () => {
    setAnchorElNav(null);
  };

  const [open, setOpen] = React.useState(false);

  const navigate = useNavigate();

  function changePage(e: React.SyntheticEvent<Element, Event>, value: unknown): void {
    e.preventDefault();
    const book = books.filter((el) => el.title === value);
    navigate(`/books/${book[0].id}`);
  }

  return (
    <AppBar
      position="fixed"
      sx={{
        background: 'none',
        color: { color },
        paddingTop: '1rem',
        paddingBottom: '1rem',
        backdropFilter: 'blur(10px)',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ display: { xs: 'flex' }, justifyContent: 'space-between' }}>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
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
                <MenuItem key={page.link} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" component={Link} to={`/${page.link}`}>
                    {page.title}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              maxWidth: '500px',
            }}
          >
            {pages.map((page) => (
              <Typography
                key={page.link}
                component={Link}
                to={`/${page.link}`}
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'Aneliza',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                {page.title}
              </Typography>
            ))}
          </Box>
          <Typography variant="h6" noWrap sx={{}} component={Link} to="/">
            {color === '#547050' ? <img src={imgGreen} alt="logo" /> : <img src={img} alt="logo" />}
          </Typography>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledAutoComplete
              open={open}
              onInputChange={(_, value) => {
                if (value.length === 0) {
                  if (open) setOpen(false);
                } else if (!open) setOpen(true);
              }}
              onClose={() => setOpen(false)}
              onChange={(e, value) => changePage(e, value)}
              freeSolo
              id="free-solo-2-demo"
              disableClearable
              renderOption={(props, option) => (
                // props.key = props.id;
                <li {...props} key={option}>
                  {option}
                </li>
              )}
              options={books.map((book) => book.title)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  InputProps={{
                    ...params.InputProps,
                    type: 'search',
                  }}
                />
              )}
            />
          </Search>
          <Box sx={{ flexGrow: 0 }}>
            {user ? (
              <IconButton
                sx={{ p: 0, margin: '0 10px' }}
                color="inherit"
                component={Link}
                to="/user"
              >
                <AccountCircleIcon />
              </IconButton>
            ) : (
              <IconButton
                sx={{ p: 0, margin: '0 10px' }}
                color="inherit"
                onClick={() => setShowModal((prev) => !prev)}
              >
                <AccountCircleIcon />
              </IconButton>
            )}

            {user && (
              <>
                <IconButton
                  sx={{ p: 0, marginRight: '10px' }}
                  color="inherit"
                  component={Link}
                  to="/bookmark"
                >
                  <BookmarkBorderIcon />
                </IconButton>
                <Badge
                  badgeContent={count || 0}
                  color="primary"
                  sx={{
                    '& .MuiBadge-badge': {
                      color: 'white',
                      backgroundColor: '#81a67c',
                    },
                  }}
                >
                  <IconButton sx={{ p: 0 }} color="inherit" component={Link} to="/cart">
                    <LocalMallIcon />
                  </IconButton>
                </Badge>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>

      <ModalWindow active={showModal} setActive={setShowModal}>
        <RegistrationPage setShowModalR={setShowModal} setShowModalA={setShowModalA} />
      </ModalWindow>

      <ModalWindow active={showModalA} setActive={setShowModalA}>
        <AuthorizationPage setShowModalR={setShowModal} setShowModalA={setShowModalA} />
      </ModalWindow>
    </AppBar>
  );
}

export default NavBar;
