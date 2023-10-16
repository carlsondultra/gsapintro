import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

import styles from "./Hero.module.scss";

import { animateTitle, animateImage, revealMenu } from "./animations";

const Hero = () => {

  const heroRef = useRef(null);
  const timeline = useRef(gsap.timeline());

  useEffect(() => {
    const context = gsap.context(() => {
      const tl = timeline.current;
      

      tl.add(animateTitle()).add(animateImage(), 0).add(revealMenu(), 0);
    })

    return () => context.revert()
  }, heroRef)

  return (
    <section className={styles.hero} ref={heroRef}>
      <div className={styles.hero__top}>
        <div data-menu-item data-hidden>
          <p>Hello!</p>
        </div>
        <span data-menu-item data-hidden>about</span>
        <span data-menu-item data-hidden>contact</span>
      </div>

      <h1 className={styles.hero__title}>
        <span data-title-first data-hidden>gsap</span>
        <span data-hero-line className={styles.hero__line}></span>
        <span data-title-last data-hidden>intro</span>
      </h1>

      <div className={styles.hero__image}>
        <div data-image-overlay className={styles.hero__imageOverlay}></div>
        <Image
          // data-hidden
          data-image
          src="/images/blob.jpg"
          width={1728}
          height={650}
          alt="Blob"
          style={{ objectFit: "cover" }}
        />
      </div>
    </section>
  );
};

export default Hero;