gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

//GSAP

gsap.from('.promo', {
    opacity: 0.2,
    duration: 3
});

gsap.from('.promo__subtitle, .promo__title, .promo__btns, .sidepanel', {
    x: -1000,
    duration: 1.5
});

gsap.from('.aboutme', {
    opacity: 0,
    y: 250,
    duration: 1,
    scrollTrigger: {
        trigger: '.aboutme__grid'
    }
});

gsap.from('.resume__header, .resume__subtitle, .resume.divider', {
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: '.resume__header'
    }
});

gsap.from('.resume__column:nth-child(1)', {
    opacity: 0,
    x: -250,
    duration: 1,
    scrollTrigger: {
        trigger: '.resume__column'
    }
});

gsap.from('.resume__column:nth-child(2)', {
    opacity: 0,
    x: 250,
    duration: 1,
    scrollTrigger: {
        trigger: '.resume__column'
    }
});

gsap.from('.skills', {
    opacity: 0,
    y: 300,
    duration: 1,
    scrollTrigger: {
        trigger: '.skills__header'
    }
});

gsap.from('.portfolio', {
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: '.portfolio__grid',
    }
});

gsap.from('.prices__header, .prices__subtitle, .prices .divider', {
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: '.prices__subtitle',
    }
});

gsap.from('.prices__item:nth-child(1), .prices__item:nth-child(2)', {
    y: 100,
    opacity: 0,
    duration: 0.5,
    scrollTrigger: {
        trigger: '.prices__item:nth-child(1)',
    }
});

gsap.from('.prices__item:nth-child(3), .prices__item:nth-child(4)', {
    y: 100,
    opacity: 0,
    duration: 0.5,
    scrollTrigger: {
        trigger: '.prices__item:nth-child(3)',
    }
});

gsap.from('.prices__item:nth-child(5), .prices__item:nth-child(6)', {
    y: 100,
    opacity: 0,
    duration: 0.5,
    scrollTrigger: {
        trigger: '.prices__item:nth-child(5)',
    }
});

gsap.from('.contacts__photo', {
    x: -200,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: '.contacts__photo',
    }
});

gsap.from('.contacts__descr', {
    x: 200,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: '.contacts__descr',
    }
});

ScrollTrigger.create({
    trigger: '.skills__grid_subgrid',
    onToggle: self => {
        const counters = document.querySelectorAll('.skills__percentage-item-text'),
        lines = document.querySelectorAll('.progress');

        counters.forEach( (item, i) => {
            lines[i].style.width = item.innerHTML;
        });
    }
})

//MENU

const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeM = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeM.addEventListener('click', () => {
    menu.classList.remove('active');
});

function scrollToSection(trig, target) {
    document.querySelector(trig).addEventListener('click', () => {  
        gsap.to(window, {
            duration: 0,
            scrollTo: target
        });
        menu.classList.remove('active');
    });
}

scrollToSection('#scrollToAbout', '#about');
scrollToSection('#scrollToAboutBtn', '#about');
scrollToSection('#scrollToResume', '#resume');
scrollToSection('#scrollToSkills', '#skills');
scrollToSection('#scrollToPortfolio', '#portfolio');
scrollToSection('#scrollToPortfolioBtn', '#portfolio');
scrollToSection('#scrollToPrices', '#prices');
scrollToSection('#scrollToContacts', '#contacts');

//VANILLA TILT

VanillaTilt.init(document.querySelectorAll('.skills__skill'), {
    max: 20,
    speed: 500,
});