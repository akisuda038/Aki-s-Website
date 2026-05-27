function showprojects(){
    $("#projects_container").css("display","inherit");
    $("#projects_container").addClass("animated slideInDown");
    setTimeout(function(){
        $("#projects_container").removeClass("animated slideInDown");
    },800);
}
function closeprojects(){
    $("#projects_container").addClass("animated slideOutUp");
    setTimeout(function(){
        $("#projects_container").removeClass("animated slideOutUp");
        $("#projects_container").css("display","none");
    },800);
}
function showabout(){
    $("#about_container").css("display","inherit");
    $("#about_container").addClass("animated slideInLeft");
    setTimeout(function(){
        $("#about_container").removeClass("animated slideInLeft");
    },800);
}
function closeabout(){
    $("#about_container").addClass("animated slideOutLeft");
    setTimeout(function(){
        $("#about_container").removeClass("animated slideOutLeft");
        $("#about_container").css("display","none");
    },800);
}
function showwork(){
    $("#work_container").css("display","inherit");
    $("#work_container").addClass("animated slideInRight");
    setTimeout(function(){
        $("#work_container").removeClass("animated slideInRight");
    },800);
}
function closework(){
    $("#work_container").addClass("animated slideOutRight");
    setTimeout(function(){
        $("#work_container").removeClass("animated slideOutRight");
        $("#work_container").css("display","none");
    },800);
}
function showcontact(){
    $("#contact_container").css("display","inherit");
    $("#contact_container").addClass("animated slideInUp");
    setTimeout(function(){
        $("#contact_container").removeClass("animated slideInUp");
    },800);
}
function closecontact(){
    $("#contact_container").addClass("animated slideOutDown");
    setTimeout(function(){
        $("#contact_container").removeClass("animated slideOutDown");
        $("#contact_container").css("display","none");
    },800);
}
var audioTracks = [
    {src: './Godbless.mp3', label: 'God Bless America'},
    {src: './Donald J Trump . America.mp3', label: 'Donald J Trump . America'}
];
var currentTrackIndex = 0;

function updateAudioLabel() {
    var label = document.getElementById('song-label');
    var toggle = document.getElementById('toggle-song');
    if (!label || !toggle) return;
    label.textContent = 'Now playing: ' + audioTracks[currentTrackIndex].label;
    toggle.textContent = 'Switch to "' + audioTracks[(currentTrackIndex + 1) % audioTracks.length].label + '"';
}

function setSong(index) {
    var audio = document.getElementById('background-audio');
    currentTrackIndex = index % audioTracks.length;
    audio.pause();
    console.log('setSong -> switching to index', currentTrackIndex, audioTracks[currentTrackIndex].src);
    audio.src = audioTracks[currentTrackIndex].src;
    audio.load();
    audio.play().then(function(){
        console.log('Playback started for', audio.src);
    }).catch(function(error) {
        console.log('Audio play prevented:', error);
    });
    updateAudioLabel();
}

function toggleSong() {
    var next = (currentTrackIndex + 1) % audioTracks.length;
    console.log('toggleSong -> next index', next);
    setSong(next);
}

window.addEventListener('load', function() {
    var audio = document.getElementById('background-audio');
    // initialize first track so audio.src is set before attempting to play
    setSong(0);
    audio.volume = 1;
    audio.preload = 'auto';
    
    var toggleButton = document.getElementById('toggle-song');
    if (toggleButton) {
        toggleButton.addEventListener('click', function(event) {
            event.preventDefault();
            toggleSong();
        });
    }
    audio.play().catch(function(error) {
        console.log('Autoplay prevented, waiting for user interaction');
    });
});
document.addEventListener('click', function() {
    var audio = document.getElementById('background-audio');
    if (audio.paused) {
        audio.play();
    }
});
setTimeout(function(){
    $("#loading").addClass("animated fadeOut");
    setTimeout(function(){
      $("#loading").removeClass("animated fadeOut");
      $("#loading").css("display","none");
      $("#box").css("display","none");
      $("#projects").removeClass("animated fadeIn");
      $("#about").removeClass("animated fadeIn");
      $("#contact").removeClass("animated fadeIn");
      $("#work").removeClass("animated fadeIn");
    },1000);
},1500);
