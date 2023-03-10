import React from 'react'
import styles from './experience.module.css'
import ListEntry from './ListEntry'
import SectionIntroduction from './SectionIntroduction'

export default function Experience () {
  return (
  <section id="experience">
    <div className={styles.wrapper}>
      <SectionIntroduction dark={true}>Experience</SectionIntroduction>
      <div className={styles.sectionContent}>
      <ListEntry title={"Gymnasium of Krusevac"} date={"September 2015 - June 2019."}>
          <li>Department for natural science and mathematics</li>
        </ListEntry>
        
        <ListEntry title={"The School of Electrical and Computer Engineering of Applied Studies"} date={"October 2019. - present"}>
          <li>New Computer Tehnologies</li>
        </ListEntry>
      </div>

    </div>
  </section>
  )
}
