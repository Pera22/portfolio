import React from 'react'

import SectionIntroduction from './SectionIntroduction'
import styles from './aboutme.module.css'


export default function Projects() {
  return (
    <section id="projects">
    <div className={styles.wrapper}>
      <SectionIntroduction>Projects</SectionIntroduction>
      {/* <div className={styles.sectionContent}>
        <div className={styles.imgDisplay}>
        <img className={styles.img} src="" alt=""></img>
              <div className={styles.overlay}>
              </div>
        </div>
      </div> */}
    </div>
    <p className={styles.paragraph}> In progess...</p>
    </section>
  )
}
