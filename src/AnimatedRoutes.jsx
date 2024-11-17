////////////////////////////////////////////////////////////////////////////////////////////////////
// Author: Adam Hagengruber
// Date Created: 11/16/2024
////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////
// * Includes
////////////////////////////////////////////////////////////////////////////////////////////////////
//import PowerTrain from './PowerTrain/PowerTrain.jsx'
import PowerTrain from './PowerTrain/PowerTrain.jsx'
import SiteOverview from './SiteOverview/SiteOverview.jsx'
import ThisWebsite from './ThisWebsite/ThisWebsite.jsx'

import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * * This component animates transitions between pages.
 */
////////////////////////////////////////////////////////////////////////////////////////////////////
function AnimatedRoutes()
{
  // Current page: 
  const location = useLocation();

  return(
    <AnimatePresence>
      <Routes location={ location } key={ location.pathname }>
        <Route
          index path='/'
          element={ <SiteOverview /> }
        />
        <Route
          powertrain path='/powertrain'
          element={ <PowerTrain /> }
        />
        <Route
          thiswebsite path='/thiswebsite'
          element={ <ThisWebsite /> }
        />
      </Routes>  
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
