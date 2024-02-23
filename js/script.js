let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open')
};
var favSong = document.getElementById("favSong");
var icon = document.getElementById("playicon");

console.log(icon);
icon.onclick = function(){
    if(favSong.paused){
        favSong.play();
        icon.src= "img-m/icon/pause.png";
    }else{favSong.pause();
        icon.src="img-m/icon/play.png";
    }
}

const sr = ScrollReveal({
    distance: '40px'
});

sr.reveal('.logo',{delay:200, origin: 'left'});
sr.reveal('.navbar',{delay:300, origin: 'top'});
sr.reveal('.menu-btn',{delay:420, origin: 'right'});

sr.reveal('.home-text span',{delay:500, origin: 'top'});
sr.reveal('.home-text h1',{delay:580, origin: 'left'});
sr.reveal('.home-text p',{delay:650, origin: 'right'});
sr.reveal('.main-btn',{delay:760, origin: 'left'});

sr.reveal('.share',{delay:800, origin: 'bottom'});
sr.reveal('.home-img',{delay:850, origin: 'bottom'});

sr.reveal('#skill',{delay:100, origin: 'left'});
sr.reveal('.skill-text',{delay:200, origin: 'bottom'});
sr.reveal('.skillbage',{delay:150, origin: 'right'});

sr.reveal('#exp',{delay:100, origin: 'top'});
sr.reveal('.exp-text',{delay:200, origin: 'left'});
sr.reveal('.exp-img',{delay:250, origin: 'right'});

sr.reveal('#me',{delay:100, origin: 'top'});
sr.reveal('.column',{delay:200, origin: 'left'});
sr.reveal('.column2',{delay:250, origin: 'right'});
