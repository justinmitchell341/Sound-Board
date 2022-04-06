const allVideos = document.querySelectorAll("video");
const allAudios = document.querySelectorAll("audio");
function stopAllAudio() {
  allAudios.forEach(function (audio) {
    audio.pause();
  });
}
const playVideo = (e) => {
  let keyCode;
  if (e.type === "keydown") {
    keyCode = e.keyCode;
  } else {
    keyCode =
      e.target.getAttribute("data-key") ||
      e.target.parentNode.getAttribute("data-key");
  }
  const key = document.querySelector(`div[data-key="${keyCode}"]`);
  const videos = document.querySelector(`video[data-key="${keyCode}"]`);
  const allVideos = document.querySelector("video");

  Array.from(document.querySelectorAll("video")).forEach(function (allVideos) {
    allVideos.classList.remove("playing");
  });

  allVideos.classList.remove("playing");
  videos.classList.add("playing");
  videos.currentTime = 0;
};

const playSound = (e) => {
  let keyCode;
  if (e.type === "keydown") {
    keyCode = e.keyCode;
  } else {
    keyCode =
      e.target.getAttribute("data-key") ||
      e.target.parentNode.getAttribute("data-key");
  }
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const key = document.querySelector(`div[data-key="${keyCode}"]`);


  if (!audio) return;

  stopAllAudio();
  key.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
};
const removeTransition = (e) => {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("playing");
};

const keys = Array.from(document.querySelectorAll(".key"));
keys.forEach((key) => {
  key.addEventListener("transitionend", removeTransition);
});

window.addEventListener("keydown", playSound);
window.addEventListener("touchstart", playSound);
window.addEventListener("click", playSound);
window.addEventListener("keydown", playVideo);
window.addEventListener("touchstart", playVideo);
window.addEventListener("click", playVideo);
