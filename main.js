const header = document.querySelector('#header');
const menuIconContainer = document.createElement('div');
menuIconContainer.setAttribute('id', 'mobile-menu-icon');

const menuIcon = document.createElement('span');
menuIcon.setAttribute('id', 'menu-icon');
menuIcon.innerHTML = "<img src='resources/Group 7.png'>";

menuIconContainer.appendChild(menuIcon);
header.appendChild(menuIconContainer);

const overlay = document.createElement('div');
overlay.setAttribute('class', 'overlay hidden');
document.querySelector('body').appendChild(overlay);
const menu = document.createElement('div');
menu.setAttribute('id', 'mobile-menu');
overlay.appendChild(menu);
const closeBtnWrapper = document.createElement('div');
closeBtnWrapper.setAttribute('id', 'close-button-wrapper');
const closeBtn = document.createElement('span');
closeBtn.setAttribute('id', 'menu-close-button');
closeBtn.innerHTML = "<img src='resources/close.png'>";
closeBtnWrapper.appendChild(closeBtn);
menu.appendChild(closeBtnWrapper);

menuIcon.addEventListener(

    "click", 

    function(event) {

        overlay.classList.remove('hidden');
        console.log('successfully showing menu');

    }, false
);

closeBtn.addEventListener(

    'click', 

    function(event) {

        overlay.classList.add('hidden');
        console.log('successfully removed menu')

    }
)

const menuLinks = document.createElement('div');
menuLinks.setAttribute('id', 'menu-links');
menu.appendChild(menuLinks);
const links = [
    'Play online', 
    'Play on-site', 
    'The story', 
    'Contact us'
];

links.forEach((element) => {

    const link = document.createElement('a');
    link.innerText = element;
    link.setAttribute('class', 'link roboto-bold');
    menuLinks.appendChild(link);

})



