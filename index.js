const b4 = "20vw";

gsap.config({ trialWarn: false });
gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MotionPathPlugin);
gsap.defaults({ ease: "none" });
const main = gsap.timeline({
    defaults: { duration: 0.7 },
    scrollTrigger: {
        trigger: "#svg",
        scrub: true,
        start: "top center",
    }
})
    .from(".theLine", {
        drawSVG: 0, onComplete: () => {

            main.to("#rainbow", {
                duration: 1,
                width: b4
            })

        }
    }, 0)
    .to("#prisma", { duration: 1, autoAlpha: 1 })
