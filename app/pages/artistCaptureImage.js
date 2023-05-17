import { getCurrentArtist } from "./globals.js";
import { items } from "../../data/data.js";

let liveStreamVideo = document.querySelector('#liveStream')
export const myCanvas =  document.querySelector('#myPictureCanvas')
const captureImageBtn = document.querySelector('#captureImage')
export let imageUrlInput = document.querySelector('#imageUrl')
export const takeSnapshotBtn = document.querySelector('#take-a-snapshot-div')
let cameraOn;
export let imgUrl;
export function stopStream() {
    let stream = liveStreamVideo.srcObject
    if (!stream) return
    
    const allTracks = stream.getTracks()
    allTracks.forEach(track => track.stop())
  }


export const initArtistCaptureImage = function () {
    const artistNameHeaderCapture = document.querySelector('.artistNameHeaderCapture')
    artistNameHeaderCapture.innerText = getCurrentArtist();
    myCanvas.style.display = 'none';
    takeSnapshotBtn.style.display = 'flex';
    imgUrl = '';
    
    cameraOn = true;

    navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: { ideal: 'environment' }
        }
      }).then(stream => {
        liveStreamVideo.srcObject = stream
      }).catch(err => {
        location.hash = '#artistAddNewItem'
      })

      liveStreamVideo.addEventListener('canplay', function () {
        myCanvas.width = liveStreamVideo.videoWidth
        myCanvas.height = liveStreamVideo.videoHeight
      })

      captureImageBtn.addEventListener('click', function (e) {
        e.stopImmediatePropagation();
        let ctx = myCanvas.getContext('2d')
        ctx.drawImage(liveStreamVideo, 0, 0)
        myCanvas.style.display = 'block';
        takeSnapshotBtn.style.display = 'none';
         cameraOn = false;
         stopStream()
        location.hash = '#artistAddNewItem'
         imgUrl = myCanvas.toDataURL('image/png')
         imageUrlInput.value = imgUrl
        //  imgUrl = ''
         myCanvas.addEventListener('click', function(e){
            e.stopImmediatePropagation();

            location.hash = '#artistCaptureImage';
         })
         imageUrlInput.addEventListener('keyup', function (e){
          e.stopImmediatePropagation();
             if (imageUrlInput.value != imgUrl) {
                 myCanvas.style.display = 'none';
                 takeSnapshotBtn.style.display = 'flex';
             }
             else {
               myCanvas.style.display = 'flex';
               takeSnapshotBtn.style.display = 'none';
             }

         })
        // capturedImageImg.src = imgUrl

      })
  if (cameraOn) {
    window.addEventListener('hashchange', function (){
      cameraOn = false;
      stopStream()
    })
  }
}