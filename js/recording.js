const recordingBox = document.getElementById("recording");
const record = document.getElementById("record");
const stop = document.getElementById("stop");
const soundClips = document.getElementById("sound-clips");
const audioCtx = new (window.AudioContext || window.webkitAudioContext)(); // 오디오 컨텍스트 정의

const analyser = audioCtx.createAnalyser();
function makeSound(stream) {
  const source = audioCtx.createMediaStreamSource(stream);

  source.connect(analyser);
  analyser.connect(audioCtx.destination);
}

if (navigator.mediaDevices) {
  console.log("getUserMedia supported.");
  const constraints = {
    audio: true,
  };
  let chunks = [];
  navigator.mediaDevices
    .getUserMedia(constraints)
    .then((stream) => {
      const mediaRecorder = new MediaRecorder(stream);

      record.onclick = () => {
        mediaRecorder.start();
        console.log(mediaRecorder.state);
        console.log("recorder started");
        record.style.background = "#f85a2a";
        record.style.color = "white";
      };

      stop.onclick = () => {
        mediaRecorder.stop();
        console.log(mediaRecorder.state);
        console.log("recorder stopped");
        record.style.background = "";
        record.style.color = "";
      };

      mediaRecorder.onstop = (e) => {
        console.log("data available after MediaRecorder.stop() called.");

        const clipName = prompt(
          "오디오 파일 제목을 입력하세요.",
          `Music created by ${localStorage.getItem("username")}(${String(
            new Date().getFullYear()
          ).padStart(4, "0")}-${String(new Date().getMonth()).padStart(
            2,
            "0"
          )}-${String(new Date().getDate()).padStart(2, "0")})`
        );

        const clipContainer = document.createElement("article");
        const clipLabel = document.createElement("p");
        const audio = document.createElement("audio");
        const deleteButton = document.createElement("button");

        clipLabel.classList.add("recorded-audio__text");
        deleteButton.classList.add("recorded-audio__delete");

        clipContainer.classList.add("clip");
        audio.setAttribute("controls", "");
        deleteButton.innerHTML = "삭제";
        clipLabel.innerHTML = clipName;

        clipContainer.appendChild(audio);
        clipContainer.appendChild(clipLabel);
        clipContainer.appendChild(deleteButton);
        soundClips.appendChild(clipContainer);

        audio.controls = true;
        const blob = new Blob(chunks, {
          type: "audio/ogg codecs=opus",
        });
        chunks = [];
        const audioURL = URL.createObjectURL(blob);
        audio.src = audioURL;
        console.log("recorder stopped");

        deleteButton.onclick = (e) => {
          evtTgt = e.target;
          evtTgt.parentNode.parentNode.removeChild(evtTgt.parentNode);
        };
      };

      mediaRecorder.ondataavailable = (e) => {
        chunks.push(e.data);
      };
    })
    .catch((err) => {
      console.log("The following error occurred: " + err);
    });
}
