window.addEventListener('load', () => {
    document.body.style.opacity = 1;
    document.body.style.backgroundColor = '#35383A';
});


let scrollTimer;
function moveElements() {
    const elements = document.querySelectorAll('.move-up');
    elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight * 0.8) {
            element.style.opacity = 1;
            element.style.transform = 'translateY(0)';
        }
    });
}
window.addEventListener('scroll', () => {
    clearTimeout(scrollTimer);

    scrollTimer = setTimeout(moveElements, 40); 
});
window.addEventListener('load', moveElements);

let scrollTimer1
function moveElements1() {
    const elements = document.querySelectorAll('.move-up1');
    elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight * 0.8) {
            element.style.opacity = 1;
            element.style.transform = 'translateY(0)';
        }
    });
}
window.addEventListener('scroll', () => {
    clearTimeout(scrollTimer1);

    scrollTimer1 = setTimeout(moveElements1, 60); 
});
window.addEventListener('load', moveElements1);

let scrollTimer2
function moveElements2() {
    const elements = document.querySelectorAll('.move-up2');
    elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight * 0.8) {
            element.style.opacity = 1;
            element.style.transform = 'translateY(0)';
        }
    });
}
window.addEventListener('scroll', () => {
    clearTimeout(scrollTimer2);

    scrollTimer2 = setTimeout(moveElements2, 80); 
});
window.addEventListener('load', moveElements2);

let scrollTimer3
function moveElements3() {
    const elements = document.querySelectorAll('.move-up3');
    elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight * 0.8) {
            element.style.opacity = 1;
            element.style.transform = 'translateY(0)';
        }
    });
}
window.addEventListener('scroll', () => {
    clearTimeout(scrollTimer3);

    scrollTimer3 = setTimeout(moveElements3, 40); 
});
window.addEventListener('load', moveElements3);




