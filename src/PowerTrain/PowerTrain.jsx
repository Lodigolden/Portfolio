////////////////////////////////////////////////////////////////////////////////////////////////////
// Author: Adam Hagengruber
// Date Created: 11/16/2024
////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////
// * Includes
////////////////////////////////////////////////////////////////////////////////////////////////////
import Accordian from '../Components/Accordian/Accordian.jsx'
import BackButton from '../Components/BackButton/BackButton.jsx'
import TextBlock from '../Components/TextBlock/TextBlock.jsx'
import Title from '../Components/Title/Title.jsx'

import Full_Bridge_Rectifier_Img from './Assets/Full_Bridge_Rectifier/Full_Bridge_Rectifier.png'
import Full_Bridge_Rectifier_Calulcations_Img from './Assets/Full_Bridge_Rectifier/Full_Bridge_Rectifier_Calculations.png'
import Full_Bridge_Rectifier_Simulation from './Assets/Full_Bridge_Rectifier/Full_Bridge_Rectifier_Simulation.png'

import { motion } from 'framer-motion'

////////////////////////////////////////////////////////////////////////////////////////////////////
// * Information about the project.
////////////////////////////////////////////////////////////////////////////////////////////////////
const basic_info = `I attempted to design, simulate, and lay-out a bug-regulator power supply. I 
                    haven't taken classes on power converter design, so a lot of the design was 
                    self-taught.`

////////////////////////////////////////////////////////////////////////////////////////////////////
// * Data for the accordian.
////////////////////////////////////////////////////////////////////////////////////////////////////
const accordian_data = [
  {
    title: 'Full-Bridge Rectifier',

    content1: 'The first thing to design was a full-bridge rectifier connected to a step-down ' + 
              'transformer.',
    img1: Full_Bridge_Rectifier_Img,

    content2: 'First, I started by calculating the transformer ratio I\'d need, and how to ' + 
              'handle the ripple voltage.',
    img2: Full_Bridge_Rectifier_Calulcations_Img,

    content3: 'After simulating this circuit, I was satisfied with the results.',
    img3: Full_Bridge_Rectifier_Simulation,
  },
];

////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * * A component for the power train info.
 * 
 * ! This component is not done yet. 
 */
////////////////////////////////////////////////////////////////////////////////////////////////////
function PowerTrain()
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
          title={ 'Power Train' }
        />
        <TextBlock 
          text={ basic_info }
        />
        <Accordian 
          sections={ accordian_data }
        />
      </motion.div>
    </>
  );
}

export default PowerTrain;
