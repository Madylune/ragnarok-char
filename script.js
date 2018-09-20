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

function changeMap() {
    const selectedMap = document.querySelector('.maps').value;
    document.body.style.backgroundImage = "url('images/" + selectedMap + ".png')";
}

function putMusic() {
    const bgmOpt = document.querySelector('.bgm-option');
    const music = document.createElement("audio");
    music.src = selectedMap + ".mp3";

    if (bgmOpt.checked) {
        console.log('Music is playing...');
        music.play();
    } else {
        console.log('No music...');
        music.pause();
    }
}

function putSound() {
    const effectsOpt = document.querySelector('.effects-option');
    const sound = document.createElement("audio");
    sound.src = selectedSkill + ".mp3";

    if (effectsOpt.checked) {
        console.log('Effects sound activated');
        sound.play();
    } else {
        console.log('Effects sound desactivated');
        sound.pause();
    }
}