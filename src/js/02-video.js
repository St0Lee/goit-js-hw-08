import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

// _.throttle(func, [wait=0], [options={}])
player.on('timeupdate', throttle(function (event) {
    saveCurrentTime(event.seconds);
}, 1000));

function saveCurrentTime(seconds) {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(seconds));
}

const localCurrentTime = JSON.parse(localStorage.getItem("videoplayer-current-time"));


 player.setCurrentTime(localCurrentTime).then(function (seconds) {
            // seconds = the actual time that the player seeked to
        }).catch(function (error) {
            switch (error.name) {
                case 'RangeError':
                    console.log ("the time was less than 0 or greater than the video’s duration");
                    break;

                default:
                    console.log ("some other error occurred");
                    break;
            }
        });
    