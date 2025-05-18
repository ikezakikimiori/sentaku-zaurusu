
const hamburgerMenu = document.querySelector('.hamburger-menu');
const slideMenu = document.querySelector('.slide-menu');
const hamburgerSpans = document.querySelectorAll('.hamburger-menu span');
const slideMenuLinks = document.querySelectorAll('.slide-menu__link');

const tl = gsap.timeline({ paused: true });

// スライドメニューのアニメーション
tl.to(slideMenu, {
    right: 0,
    duration: 0.001,
    ease: "none", 
});

// ハンバーガーアイコンのアニメーション（開いたとき）
tl.to(hamburgerSpans[0], {
    y: 8,
    rotate: 45,
    duration: 0.001,
    ease: "none", 
}, "<");

tl.to(hamburgerSpans[1], {
    opacity: 0,
    duration: 0.001,
    ease: "none", 
}, "<");

tl.to(hamburgerSpans[2], {
    y: -8,
    rotate: -45,
    duration: 0.001,
    ease: "none",
}, "<");

// ハンバーガーメニューのクリックイベント
hamburgerMenu.addEventListener('click', (event) => {
    event.stopPropagation();
    // アニメーションの再生/逆再生
    if (tl.reversed()) {
        tl.play();
    } else {
        tl.reverse();
    }
    // activeクラスの付与/削除
    hamburgerMenu.classList.toggle('active');
});

// ドキュメントのクリックイベント（メニューを閉じる）
document.addEventListener('click', (event) => {
    if (!slideMenu.contains(event.target) && !hamburgerMenu.contains(event.target) && !tl.reversed()) {
        tl.reverse();
        hamburgerMenu.classList.remove('active');
    }
});


// スライドメニュー内のリンクをクリックしたときのイベント
slideMenuLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // デフォルトのリンク動作をキャンセル
        const targetId = link.getAttribute('href'); // リンクのhref属性からターゲットのIDを取得
        const targetElement = document.querySelector(targetId); // ターゲットの要素を取得

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' }); // スムーズスクロール
        }

        // メニューを閉じる
        if (!tl.reversed()) {
            tl.reverse();
            hamburgerMenu.classList.remove('active');
        }
    });
});

// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
// GSAPアニメーション

gsap.from('.main-title', {
    scrollTrigger: '.main-title',
    x: 0,
    duration:1,
    opacity: 0,
    scrollTrigger: {
        trigger: '.main-title',
        scroller: 'body',
        // markers: true,
        start: 'top 75%',

    },

});

gsap.from('.sub-title ', {
    scrollTrigger: '.sub-title',
    x:50,
    duration:0.5,
    opacity: 0,
    scrollTrigger: {
        trigger: '.sub-title',
        scroller: 'body',
        // markers: true,
        start: 'top 75%',

    },
});

gsap.from('.top-section__text', {
    scrollTrigger: '.top-section__text',
    x:50,
    delay: 0.5,
    duration:0.25,
    opacity:0,
    scrollTrigger: {
        trigger: '.top-section__text',
        scroller: 'body',
        // markers: true,
        start: 'top 75%',

    },
});
// ----------------------------------------------
gsap.from('.concept-section__title', {
    scrollTrigger: '.concept-section__title',
    y: -50,
    duration:0.5,
    opacity:0,
    scrollTrigger: {
        trigger: '.concept-section__title',
        scroller: 'body',
        // markers: true,
        start: 'top 80%',
    },
});

gsap.from('.feature-title--01', {
    scrollTrigger: '.feature-title--01',
    y: -50,
    duration:0.5,
    // duration:0.25,
    opacity:0,
    scrollTrigger: {
        trigger: '.feature-title--01',
        scroller: 'body',
        // markers: true,
        start: 'top 80%',
    },
});

gsap.from('.section__text--01', {
    scrollTrigger: '.section__text--01',
    y: -50,
    duration:0.5,
    // duration:0.35,
    opacity:0,
    scrollTrigger: {
        trigger: '.section__text--01',
        scroller: 'body',
        // markers: true,
        start: 'top 80%',
    },
});

gsap.from('.feature-title--02', {
    scrollTrigger: '.feature-title--02',
    y: -50,
    duration:0.5,
    // duration:0.45,
    opacity:0,
    scrollTrigger: {
        trigger: '.feature-title--02',
        scroller: 'body',
        // markers: true,
        start: 'top 80%',
    },
});

gsap.from('.section__text--02', {
    scrollTrigger: '.section__text--02',
    y: -50,
    duration:0.5,
    // duration:0.55,    
    opacity:0,
    scrollTrigger: {
        trigger: '.section__text--02',
        scroller: 'body',
        // markers: true,
        start: 'top 80%',
    },
});

gsap.from('.feature-title--03', {
    scrollTrigger: '.feature-title--03',
    y: -50,
    duration:0.5,
    // duration:0.65,
    opacity:0,
    scrollTrigger: {
        trigger: '.feature-title--03',
        scroller: 'body',
        // markers: true,
        start: 'top 80%',
    },
});

gsap.from('.section__text--03', {
    scrollTrigger: '.section__text--03',
    y: -50,
    duration:0.5,
    // duration:0.75,
    opacity:0,
    scrollTrigger: {
        trigger: '.section__text--03',
        scroller: 'body',
        // markers: true,
        start: 'top 80%',
    },
});


// -----------------------------------------

gsap.from('.service-section__title--main', {
    scrollTrigger: '.service-section__title--main',
    x:-50,
    delay: 0.5,
    duration:0.3,
    opacity: 0,
    scrollTrigger: {
        trigger: '.service-section__title--main',
        scroller: 'body',
        // markers: true,
        start: 'top 80%',
    },

});

gsap.from('.card__01', {
    scrollTrigger: '.card__01',
    y: 100,
    duration:0.5,
    opacity: 0,
    scrollTrigger: {
        trigger: '.card__01',
        scroller: 'body',
        // markers: true,
        start: 'top 80%',
    },

});

gsap.from('.card__02', {
    scrollTrigger: '.card__02',
    y: 100,
    duration:0.5,
    opacity: 0,
    scrollTrigger: {
        trigger: '.card__02',
        scroller: 'body',
        // markers: true,
        start: 'top 80%',
    },

});

gsap.from('.card__03', {
    scrollTrigger: '.card__03',
    y: 100,
    duration:0.5,
    opacity: 0,
    scrollTrigger: {
        trigger: '.card__03',
        scroller: 'body',
        // markers: true,
        start: 'top 80%',
    },

});

gsap.from('.card__04', {
    scrollTrigger: '.card__04',
    y: 100,
    duration:0.5,
    opacity: 0,
    scrollTrigger: {
        trigger: '.card__04',
        scroller: 'body',
        // markers: true,
        start: 'top 80%',
    },

});

gsap.from('.card__05', {
    scrollTrigger: '.card__05',
    y: 100,
    duration:0.5,
    opacity: 0,
    scrollTrigger: {
        trigger: '.card__05',
        scroller: 'body',
        // markers: true,
        start: 'top 80%',
    },

});

gsap.from('.card__06', {
    scrollTrigger: '.card__06',
    y: 100,
    duration:0.5,
    opacity: 0,
    scrollTrigger: {
        trigger: '.card__06 ',
        scroller: 'body',
        // markers: true,
        start: 'top 80%',
    },

});

// -------------------------------------------------

gsap.from('.contact-section__title', {
    scrollTrigger: '.contact-section__title',
    x:-50,
    delay: 0.5,
    duration:0.3,
    opacity: 0,
    scrollTrigger: {
        trigger: '.contact-section__title',
        scroller: 'body',
        // markers: true,
        start: 'top 80%',
    },

});

// -----------------------------------------

gsap.from('.contact-section__media-body', {
    scrollTrigger: '.contact-section__media-body',
    x:-50,
    delay: 0.5,
    duration:0.5,
    opacity:0,
    scrollTrigger: {
        trigger: '.contact-section__media-body',
        scroller: 'body',
        // markers: true,
        start: 'top 80%',
    },

});

// --------------------------------------------

gsap.from('.contact-section__map', {
    scrollTrigger: '.contact-section__map',
    scale: 1.2,
    delay: 0.5,
    duration:0.5,
    opacity: 0,
    scrollTrigger: {
        trigger: '.contact-section__map',
        scroller: 'body',
        // markers: true,
        start: 'top 80%',
    },
  });

//   --------------------------------

gsap.from('.about-section__title', {
    scrollTrigger: '.about-section__title',
    x:-50,
    delay: 0.5,
    duration:0.3,
    opacity: 0,
    scrollTrigger: {
        trigger: '.about-section__title',
        scroller: 'body',
        // markers: true,
        start: 'top 80%',
    },

});

gsap.from('.about-container', {
    scrollTrigger: '.about-container',
    scale: 1.2,
    delay: 0.5,
    duration:0.5,
    opacity: 0,
    scrollTrigger: {
        trigger: '.about-container',
        scroller: 'body',
        // markers: true,
        start: 'top 80%',
    },

});