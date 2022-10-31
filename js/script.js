const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu');

hamburger.addEventListener('click',() =>{
    menu.classList.add('active');
});      

menu.addEventListener('click', e => {
    const { target } = e;

    const isCloseElem = target.closest('.menu__close'),
          isCloseOver = target.closest('.menu__overlay'),
          isMenuLink = target.closest('.menu__link');

    if (isCloseElem || isCloseOver || isMenuLink) {
        menu.classList.remove('active');
    }
});

const percent = document.querySelectorAll('.skills__percent'),
      lines = document.querySelectorAll('.skills__scale span');

percent.forEach( (item, i) =>{
    lines[i].style.width = item.innerHTML;
});

const sidepanelDivider = document.querySelector('.sidepanel__divider'),
      sidepanelText = document.querySelector('.sidepanel__text'),
      socialIcons = document.querySelectorAll('[fill="white"]');

window.addEventListener('scroll', () => {
    if (window.pageYOffset >= 400) {
        sidepanelDivider.style.backgroundColor = '#000';
        sidepanelText.style.color = '#000';
        socialIcons.forEach(icon => {
            icon.setAttribute('fill', 'black');
        })
    } else {
        sidepanelDivider.style.backgroundColor = '#fff';
        sidepanelText.style.color = '#fff';
        socialIcons.forEach(icon => {
            icon.setAttribute('fill', 'white');
        })
    }

    if (window.pageYOffset >= 954) {

        document.querySelector('.about__goup').style.right = '100px';

    } else {

        document.querySelector('.about__goup').style.right = '-100px';

    }
})

const cardList = document.querySelectorAll('.skills__card')

function flipCard(card, idx){

    card.addEventListener('click', () => {

        const back = cardList[idx].querySelector('.skills__card_back')
        const front = cardList[idx].querySelector('.skills__card_front')

        back.classList.toggle('active_back')
        front.classList.toggle('active_front')
                    
    })
    
}

cardList.forEach((card, idx) => {
    
    flipCard(card, idx)
})