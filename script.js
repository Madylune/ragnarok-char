function toggleTab(event, screenName) {
    const screens = document.querySelectorAll('.screen');
    for (i=0; i<screens.length; i++) {
        screens[i].style.display = 'none';
    }
    const tabs = document.querySelectorAll('.tab');
    for (i=0; i<tabs.length; i++) {
        tabs[i].className = tabs[i].className.replace(' active', '');
    }
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
    if (toDeleteMusic) {
        toDeleteMusic.remove();
    }
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
        if (toDeleteMusic) {
            toDeleteMusic.remove();
        }
    }
}

function changeMap() {
    const selectedMap = document.querySelector('.maps').value;
    document.body.style.backgroundImage = "url('images/" + selectedMap + ".png')";
    //Change music when we change map
    putMusic();
}

function putSGSound() {
    document.querySelector('.skills-msg').style.opacity = 0;
    //Check if we already have <audio> if yes we delete it
    const toDeleteSound = document.querySelector('#effectSound');
    if (toDeleteSound) {
        toDeleteSound.remove();
    }
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
        if (toDeleteSound) {
            toDeleteSound.remove();
        }
    }
}

function putIWSound() {
    document.querySelector('.skills-msg').style.opacity = 0;
    //Check if we already have <audio> if yes we delete it
    const toDeleteSound = document.querySelector('#effectSound');
    if (toDeleteSound) {
        toDeleteSound.remove();
    }
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
        if (toDeleteSound) {
            toDeleteSound.remove();
        }
    }
}

function putMVPSound() {
    //Check if we already have <audio> if yes we delete it
    const toDeleteSound = document.querySelector('#effectSound');
    if (toDeleteSound) {
        toDeleteSound.remove();
    }
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
        if (toDeleteSound) {
            toDeleteSound.remove();
        }
    }
}