let catalogTab = document.querySelectorAll('.catalog__tab'),
    catalogContent = document.querySelectorAll('.catalog__content'),
    arrowPrev = document.querySelector('.catalog__back'),
    arrowNext = document.querySelector('.catalog__next'),
    count = 0,
    next = document.querySelector('.slick-next'),
    prev = document.querySelector('.slick-prev'),
    content = document.querySelector('.promo'),
    dots = document.querySelector('.slick-active'),
    num = 0;


    
function removeClasses(changeElem, classChangeElem) {
    changeElem.forEach(item => item.classList.remove(classChangeElem));
}

catalogTab.forEach(item => {
    item.addEventListener('click', () => {
        removeClasses(catalogTab, "catalog__tab-active");
        removeClasses(catalogContent, "catalog__content-active");
        count = item.getAttribute('data-target');
        item.classList.add("catalog__tab-active");
        catalogContent[count].classList.add('catalog__content-active');
    });
});

arrowNext.addEventListener("click", () => {
    if(count == 5) {
        return;
    } else {
        catalogContent[count].classList.remove('catalog__content-active');
        catalogTab[count].classList.remove('catalog__tab-active');
        count++;
        catalogContent[count].classList.add('catalog__content-active');
        catalogTab[count].classList.add('catalog__tab-active');
    }
});

arrowPrev.addEventListener("click", () => {
    if(count == 0) {
        return;
    } else {
        catalogContent[count].classList.remove('catalog__content-active');
        catalogTab[count].classList.remove('catalog__tab-active');
        count--;
        catalogContent[count].classList.add('catalog__content-active');
        catalogTab[count].classList.add('catalog__tab-active');
    }
});

window.addEventListener('DOMContentLoaded', () => {
    const navigation = document.querySelector('.navigation'),
          hamburger = document.querySelector('.hamburger');
          overlay = document.querySelector('.overlay');
          mc = new Hammer(navigation);

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        navigation.classList.toggle('navigation_active');
    });

    overlay.addEventListener('click', () => {
        hamburger.classList.remove('hamburger_active');
        navigation.classList.remove('navigation_active');
    });

    mc.on("swipeleft", () => {
        hamburger.classList.toggle('hamburger_active');
        navigation.classList.toggle('navigation_active');
    });
});

next.addEventListener("click", () => {
    if(num == 5) {
        return;
    } else {
        content[num].classList.remove('slick-active');
        dots[num].classList.remove('slick-active');
        num++;
        content[num].classList.add('slick-active');
        dots[num].classList.add('slick-active');
    }
});

prev.addEventListener("click", () => {
    if(num == 0) {
        return;
    } else {
        content[num].classList.remove('slick-active');
        dots[num].classList.remove('slick-active');
        num--;
        content[num].classList.add('slick-active');
        dots[num].classList.add('slick-active');
    }
});