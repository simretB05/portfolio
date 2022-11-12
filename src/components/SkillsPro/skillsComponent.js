import React from 'react';
import SkillsPro from './skillsPro';
import classes from "../SkillsPro/skillsPro.module.scss"

import {useTheme} from  "../ThemeContext"


function SkillsComponent() {
  const isDarkTheme = useTheme();

  return (
    <div className={isDarkTheme? classes.skills__dark: classes.skills}>
      {/* <div className={classes.skillsGrid}> */}
                <SkillsPro source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="The logo icon for react" title="React"/>
                <SkillsPro source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" alt="The logo icon for HTML 5" title="HTML 5"/>
                <SkillsPro source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt="The logo icon for CSS3" title="CSS 3"/>
                <SkillsPro source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" alt="The logo icon for GitHub" title="GitHub" />
                <SkillsPro source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"alt="The logo icon for JavaScript" title="JavaScript"/>
                <SkillsPro source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt="The logo icon for Sass" title="Sass" />
                <SkillsPro source= "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="The logo icon for Python" title="Python" />
              
            {/* </div>             */}
        </div>
  )
}

export default SkillsComponent;