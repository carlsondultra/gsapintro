import {gsap} from "gsap";

export const introAnimation = (wordGroupsRef) => {

    const tl = gsap.timeline();

    gsap.to(wordGroupsRef.current, {
        yPercent: -80,
        duration: 5,
        ease: "power3.inOut",
    })
    
    return tl;

}

export const progressAnimation = (progressRef, progressNumberRef) => {

    const tl = gsap.timeline();

    gsap.to(progressRef.current, {
        scaleX: 1,
        duration: 5,
        ease: "power3.inOut"
    })
    
    return tl;

}
