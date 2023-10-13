import {gsap} from 'gsap'

export const animateTitle = () => {
    const tl = gsap.timeline({
        defaults: {
            ease: 'expo.out',
            duration: 2
        }
    });

    tl.to('[data-hero-line]', {
        scaleX: 1
    })

    return tl;
}