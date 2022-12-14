import { Box, Typography } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import CustomButton from '~/components/Button';
import HeroImage from '../assets/images/hero.jpg';

const Home = () => {
  return (
    <Box className='container items-center grid grid-cols-2 gap-5 p-16 justify-center'>
      <Box className='space-y-6 p-5' sx={{ boxShadow: 2 }}>
        <Typography sx={{ color: deepOrange[500] }} variant='subtitle1'>
          sale upto 9% off and on <h2>hello</h2>
        </Typography>
        <Typography variant='h2'>sale upto 90% off</Typography>
        <Typography variant='subtitle1'>New Collection for fall something</Typography>
        <p>Discover all the new arrivals of ready-to-wear collection.</p>
        <Link className='no-underline' to={'/shop'}>
          <CustomButton />
        </Link>
      </Box>

      <Box>
        <img className='w-full' src={HeroImage} alt='' />
      </Box>
    </Box>
  );
};

export default Home;
