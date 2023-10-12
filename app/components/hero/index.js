import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__top} data-hidden>
        <div data-menu-item>
          <p>Hello!</p>
        </div>
        <span data-menu-item>about</span>
        <span data-menu-item>contact</span>
      </div>

      <h1 className={styles.hero__title}>
        <span data-title-first hidden>gsap</span>
        <span data-hero-line className={styles.hero__line}></span>
        <span data-title-last hidden>intro</span>
      </h1>

      <div className={styles.hero__image}>
        <div data-image-overlay className={styles.hero__imageOverlay}></div>
        <Image
          data-hidden
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