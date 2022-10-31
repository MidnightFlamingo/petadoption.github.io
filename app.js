//Loadpage effects
let tween = gsap.fromTo(".hero", {opacity: 0}, {opacity: 1, duration: 8});
tween.pause(2);
tween.play();
gsap.fromTo(".hero", {height: '0%'}, {height: '90%', duration: 2});
gsap.fromTo(".title", {x: '-100%'}, {x: '-10%', duration: 5});
gsap.fromTo(".title", {opacity: 0}, {opacity: 1, duration: 10});
gsap.fromTo(".logo", {y: '-100%'}, {y: '0%', duration: 1}, "-=2");
gsap.fromTo(".nav-wrapper li", {y: '-100%'}, {y: '0%', duration: 1}, "-=2");

