////////////////////////////////////////////////////////////////////////////////////////////////////
// Author: Adam Hagengruber
// Date Created: 11/16/2024
////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////
// * Includes
////////////////////////////////////////////////////////////////////////////////////////////////////
import styles from './Accordian.module.css'

import PropTypes from 'prop-types'
import { useState } from 'react'

////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * * A component for a single accordian section.
 * 
 * @param data            The data for the section.
 * @param isActiveSection True if the section is selected, otherwise false.
 * @param setActiveIndex  Sets the section selected to be active.
 * @param sectionIndex    The section to set active.
 */
////////////////////////////////////////////////////////////////////////////////////////////////////
function AccordianSection({ data, isActiveSection, setActiveIndex, sectionIndex })
{
  //////////////////////////////////////////////////////////////////////////////////////////////////
  // * Sets the section to display data for.
  //////////////////////////////////////////////////////////////////////////////////////////////////
  const toggleSection = () => {
    const nextIndex = isActiveSection ? null : sectionIndex;
    setActiveIndex(nextIndex);
  }

  return(
    <div>
      <div 
        className={ styles.title }
        onClick={ toggleSection }
      >
        <div>{ data.title }</div>
        <div>{ isActiveSection ? '-' : '+' }</div>
      </div>

      { isActiveSection && data.content1 && <div className={ styles.content }>
        { data.content1 }
      </div> }
      { isActiveSection && data.img1 && <img src={ data.img1 } className={ styles.img }/>}

      { isActiveSection && data.content2 && <div className={ styles.content }>
        { data.content2 }
      </div> }
      { isActiveSection && data.img2 && <img src={ data.img2 } className={ styles.img }/>}

      { isActiveSection && data.content3 && <div className={ styles.content }>
        { data.content3 }
      </div> }
      { isActiveSection && data.img3 && <img src={ data.img3 } className={ styles.img }/>}

    </div>
  );
}

////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * * A component for an accordian of data on a page.
 * 
 * @param sections The title and information for each section of the accordian 
 */
////////////////////////////////////////////////////////////////////////////////////////////////////
function Accordian({ sections })
{
  //////////////////////////////////////////////////////////////////////////////////////////////////
  // * A function to change the index of the accordian to display to the user.
  //////////////////////////////////////////////////////////////////////////////////////////////////
  const [activeIndex, setActiveIndex] = useState(-1);

  return(
    <div className={ styles.accordian }>
      { sections.map((section, index) => (
        <AccordianSection 
          data={ section }
          key={ index }
          isActiveSection={ index === activeIndex }
          setActiveIndex={ setActiveIndex }
          activeIndex={ activeIndex }
          sectionIndex={ index }
        />
      )) }
    </div>
  );
}

////////////////////////////////////////////////////////////////////////////////////////////////////
// * Accordian data types.
////////////////////////////////////////////////////////////////////////////////////////////////////
Accordian.propTypes = {
  sections: PropTypes.array,
};

////////////////////////////////////////////////////////////////////////////////////////////////////
// * AccordianSection data types.
////////////////////////////////////////////////////////////////////////////////////////////////////
AccordianSection.propTypes = {
  data:             PropTypes.object,
  isActiveSection:  PropTypes.bool,
  setActiveSection: PropTypes.bool,
  sectionIndex:     PropTypes.number,
}

export default Accordian;
