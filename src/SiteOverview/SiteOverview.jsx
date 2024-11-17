////////////////////////////////////////////////////////////////////////////////////////////////////
// Author: Adam Hagengruber
// Date Created: 11/14/2024
////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////
// * Includes
////////////////////////////////////////////////////////////////////////////////////////////////////
import Card from '../Components/Card/Card.jsx'
import Title from '../Components/Title/Title.jsx'

import powerSupplyImage from './Assets/Power_Supply_Icon/Power_Supply_Icon.svg'
import websiteImage from './Assets/Website_Icon/Website_Icon.svg'

import { motion } from 'framer-motion'

////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * * A component for the home page of the portfolio.
 * 
 * ! This component is not done yet. 
 */
////////////////////////////////////////////////////////////////////////////////////////////////////
function SiteOverview()
{
  return(
    <>
      <motion.div
        initial={ { opacity: 0 } }
        animate={ { opacity: 1 } }
        exit={ { opacity: 1 } }
      >
        <Title />
        <Card
          title='Power Train'
          image={ powerSupplyImage }
          path='powertrain'
        />
        <Card
          title='This Website'
          image={ websiteImage }
          path='thiswebsite'
        />
      </motion.div>
    </>
  );
};

export default SiteOverview;
