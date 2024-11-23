var video;

window.addEventListener("load", function () {
  console.log("Good job opening the window");
  video = document.querySelector("#player1");
  video.autoplay = false;
  video.loop = false;
  console.log("Autoplay and Loop is off");
});

document.querySelector("#play").addEventListener("click", function () {
  video.play();
  console.log("Play Video");
  document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
  console.log("Volume is updated!");
});

document.querySelector("#pause").addEventListener("click", function () {
  video.pause();
  console.log("Pause Video");
});

document.querySelector("#slower").addEventListener("click", function () {
  video.playbackRate *= 0.9;
  console.log("New speed is 10% slower than the original speed");
});

document.querySelector("#faster").addEventListener("click", function () {
  video.playbackRate += 0.1;
  console.log("New speed");
});

document.querySelector("#skip").addEventListener("click", function () {
  if (video.currentTime + 10 > video.duration) {
    video.currentTime = 0;
    console.log("Video starts from the beginning");
  } else {
    video.currentTime += 10;
    console.log("Current time of the video is updated");
  }
});

document.querySelector("#mute").addEventListener("click", function () {
  if (video.muted) {
    video.muted = false;
    document.querySelector("#mute").innerHTML = "Mute";
    console.log("Unmuted");
  } else {
    video.muted = true;
    document.querySelector("#mute").innerHTML = "Unmute";
    console.log("Muted");
  }
});

document.querySelector("#slider").addEventListener("change", function () {
  video.volume = this.value / 100;
  document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
  console.log("Volume is updated using slider!");
});

document.querySelector("#vintage").addEventListener("click", function () {
  video.classList.add("oldSchool");
  console.log("Old School filter is added");
});

document.querySelector("#orig").addEventListener("click", function () {
  video.classList.remove("oldSchool");
  console.log("Back to original");
});
// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });
