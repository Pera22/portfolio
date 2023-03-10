import React from 'react'
import styles from './aboutme.module.css'
import SectionIntroduction from './SectionIntroduction'

export default function Aboutme() {
  return (
    <section id="about-me" className={styles.aboutMe}>
    <div className={styles.wrapper}>
        <SectionIntroduction>About me</SectionIntroduction>
        <div className={styles.sectionContent}>
            <p className={styles.paragraph}>I am a <strong>frontend developer</strong> with a passion for designing innovative websites with amazing aesthetics.</p>
            <p className={styles.paragraph}>I've been working with <strong> React </strong> for quite some time, and i enjoy spending time on building projects.</p>
            <p className={styles.paragraph}>I love to create and I have always been a dreamer so software development is excellent for allowing me to express my creativity
            </p></div>
            <div classname={styles.slika}>
            <img src={require('../petar.jpg')} className={styles.img} alt="ja"></img>
            </div>
            <div className={styles.sectionContent}>
            
            
        </div>
    </div>
    </section>
  )
}
