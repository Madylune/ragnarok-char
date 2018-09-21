function toggleTab(event, screenName) {
    const screens = document.querySelectorAll('.screen');
    //Hide all screens
    screens.forEach(screen => screen.style.display = 'none');
    //Manage active class
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.className = tab.className.replace(' active', ''));

    document.getElementById(screenName).style.display = 'block';
    event.currentTarget.className += ' active';
}

function closeWindow() {
    const window = document.querySelector('.window');
    window.style.display = 'none';
    const char = document.querySelector('.myChar-container');
    char.style.display = 'block';
}

function openWindow() {
    const char = document.querySelector('.myChar-container');
    char.style.display = 'none';
    const window = document.querySelector('.window');
    window.style.display = 'block';
}

function changeSkin() {
    const selectedSkin = document.querySelector('.skins').value;
    const header = document.querySelector('.window-header');
    header.classList = 'window-header ' + selectedSkin;
}

function putMusic() {
    //Check if we already have <audio> if yes we delete it
    const toDeleteMusic = document.querySelector('#bgSong');
    //Delete <audio> if it is already here
    toDeleteMusic && toDeleteMusic.remove();
    //Check if bgm option is checked
    const bgmOpt = document.querySelector('.bgm-option');
    const selectedMap = document.querySelector('.maps').value;
    if (bgmOpt.checked) {
        const music = document.createElement("audio");
        music.type = "audio/mp3";
        const musicHead = document.getElementsByTagName('body')[0];
        music.src="sounds/" + selectedMap +".mp3";
        music.id="bgSong" ;
        music.autoplay = true;
        musicHead.appendChild(music);
    } else {
        console.log('No music...');
        toDeleteMusic && toDeleteMusic.remove();
    }
}

function controlVolume() {
    let bgMusic = document.querySelector('#bgSong');
    let volumeValue = document.querySelector('.music-volume').value;
    console.log(volumeValue);
    if (volumeValue == 50) {
        bgMusic.volume = 1.0;
    } else if (volumeValue < 50 && volumeValue >= 20) {
        bgMusic.volume = 0.5;
    } else if (volumeValue < 20 && volumeValue >= 5) {
        bgMusic.volume = 0.2;
    } else {
        bgMusic.volume = 0;
    }
}

function changeMap() { //Put warp sound after each teleport
    const selectedMap = document.querySelector('.maps').value;
    document.body.style.backgroundImage = "url('images/" + selectedMap + ".png')";
    //Check if we already have <audio> if yes we delete it
    const x = document.querySelector('#effectSound');
    x && x.remove();
    //If checked we create <audio>
    const effectsOpt = document.querySelector('.effects-option');
    if (effectsOpt.checked) {
        const sound = document.createElement("audio");
        sound.type = "audio/mp3";
        const soundHead = document.getElementsByTagName('body')[0];
        sound.src="sounds/warp.mp3";
        sound.id="effectSound" ;
        sound.autoplay = true;
        soundHead.appendChild(sound); 
    } else {
        x && x.remove();
    }
    //Change music when we change map
    putMusic();
}

function putSGSound() {
    document.querySelector('.skills-msg').style.opacity = 0;
    //Check if we already have <audio> if yes we delete it
    const toDeleteSound = document.querySelector('#effectSound');
    toDeleteSound && toDeleteSound.remove();
    //If checked we create <audio>
    const effectsOpt = document.querySelector('.effects-option');
    if (effectsOpt.checked) {
        const sound = document.createElement("audio");
        sound.type = "audio/mp3";
        const soundHead = document.getElementsByTagName('body')[0];
        sound.src="sounds/sg.mp3";
        sound.id="effectSound" ;
        sound.autoplay = true;
        soundHead.appendChild(sound);     
    } else {
        console.log('Sorry sound effect unavailable...');
        toDeleteSound && toDeleteSound.remove();
    }
}

function putIWSound() {
    document.querySelector('.skills-msg').style.opacity = 0;
    //Check if we already have <audio> if yes we delete it
    const toDeleteSound = document.querySelector('#effectSound');
    toDeleteSound && toDeleteSound.remove();
    
    const effectsOpt = document.querySelector('.effects-option');
    if (effectsOpt.checked) {
        const sound = document.createElement("audio");
        sound.type = "audio/mp3";
        const soundHead = document.getElementsByTagName('body')[0];
        sound.src="sounds/iw.mp3";
        sound.id="effectSound" ;
        sound.autoplay = true;
        soundHead.appendChild(sound);     
    } else {
        console.log('Sorry sound effect unavailable...');
        toDeleteSound && toDeleteSound.remove();
    }
}

function putMVPSound() {
    //Check if we already have <audio> if yes we delete it
    const toDeleteSound = document.querySelector('#effectSound');
    toDeleteSound && toDeleteSound.remove();
    //If checked we create <audio>
    const effectsOpt = document.querySelector('.effects-option');
    if (effectsOpt.checked) {
        const sound = document.createElement("audio");
        sound.type = "audio/mp3";
        const soundHead = document.getElementsByTagName('body')[0];
        sound.src="sounds/mvp.mp3";
        sound.id="effectSound" ;
        sound.autoplay = true;
        soundHead.appendChild(sound);
        document.querySelector('.skills-msg').style.opacity = 1;
    } else {
        console.log('Sorry this sound effect is unavailable...');
        toDeleteSound && toDeleteSound.remove(); //Delete sound if we check off
    }
}

function meteorStorm() {
    //Show fireball when we click on skill
    document.querySelector('.fireball').style.opacity = 1;
    //Hide fireball after 2,5s and show mvp icon
    setTimeout(function() {
        document.querySelector('.fireball').style.opacity = 0;
        document.querySelector('.mvp-icon').className = 'mvp-icon';
    }, 2500);
    //Hide mvp icon after 4s
    setTimeout(function() {
        document.querySelector('.mvp-icon').className = 'mvp-icon hidden';
    }, 4000);
}