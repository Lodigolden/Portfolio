////////////////////////////////////////////////////////////////////////////////////////////////////
// Author: Adam Hagengruber
// Date Created: 11/16/2024
////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////
// * Includes
////////////////////////////////////////////////////////////////////////////////////////////////////
import BackButton from '../Components/BackButton/BackButton.jsx'
import TextBlock from '../Components/TextBlock/TextBlock.jsx'
import Title from '../Components/Title/Title.jsx'

import { motion } from 'framer-motion'

////////////////////////////////////////////////////////////////////////////////////////////////////
// * Information about the website as a whole.
////////////////////////////////////////////////////////////////////////////////////////////////////
const basic_info = `I designed this whole website using Javascript and React, and created a lot of
                    the components myself. It's a fun way to showcase some of the different stuff
                    I've worked on, and to learn a little bit about front-end web development.`

////////////////////////////////////////////////////////////////////////////////////////////////////
// * Information about the Raspberry Pi and the Apache2 server.
////////////////////////////////////////////////////////////////////////////////////////////////////
const site_info = `I am running this website on a Raspberry Pi used as an Apache2 server. I've had
                   to configure the Pi to run on a local port, and wrote a Python script using Vim
                   that pulls in updates to the site from Git, re-builds the react project, then
                   restarts the Apache server.`

////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * * A component describing the work on this website.
 */
////////////////////////////////////////////////////////////////////////////////////////////////////
function ThisWebsite()
{
  return(
    <>
      <motion.div
        initial={ { opacity: 0 } }
        animate={ { opacity: 1 } }
        exit={ { opacity: 1 } }
      >
        <BackButton />
        <Title 
          title={ 'This Website' }
        />
        <h1/>
        <TextBlock 
          text={ basic_info }
        />
        <h1/>
        <TextBlock
          text={ site_info }
        />
      </motion.div>
    </>
  )
}

export default ThisWebsite;
