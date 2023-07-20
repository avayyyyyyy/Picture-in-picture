const videoElement = document.getElementById("video");
const button = document.getElementById("button");

async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (e) {
    console.log(e);
  }
}

button.addEventListener("click", async () => {
  button.disable = true;
  // Start Picture in picture
  await videoElement.requestPictureInPicture();
  // reset button
  button.disable = false;
});

// On load
selectMediaStream();
