// ELEMENTS
const btnInitCam = document.querySelector("[data-video-btn]");
const cameraContainer = document.querySelector("[data-camera]");
const video = document.querySelector("[data-video]");
const btnTakePhoto = document.querySelector("[data-take-photo]");
const messageContainer = document.querySelector("[data-mensagem]");
const canvas = document.querySelector("[data-video-canvas]");
const imageDisplay = document.querySelector(".form-photo--image_display");

let stream = null;

// 1. OPEN CAMERA
btnInitCam.addEventListener("click", async () => {
  try {
    stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: false,
    });

    video.srcObject = stream;

    // UI
    imageDisplay.style.display = "none";
    cameraContainer.style.display = "flex";
  } catch (error) {
    console.error("Camera error:", error);
    alert("Você precisa permitir o acesso à câmera.");
  }
});

// 2. TAKE PHOTO
btnTakePhoto.addEventListener("click", () => {
  const ctx = canvas.getContext("2d");

  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

  // parar câmera
  stream.getTracks().forEach((track) => track.stop());

  // UI
  cameraContainer.style.display = "none";
  messageContainer.style.display = "flex";
});