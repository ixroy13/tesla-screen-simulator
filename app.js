// LEFT TEMP
const decTempOne = document.querySelector(".temp1 .arrow-left");
const tempOne = document.querySelector(".temperature1");
const incTempOne = document.querySelector(".temp1 .arrow-right");
// RIGHT TEMP
const decTempTwo = document.querySelector(".temp2 .arrow-left");
const tempTwo = document.querySelector(".temperature2");
const incTempTwo = document.querySelector(".temp2 .arrow-right");

let leftTemp = 20.0;
decTempOne.addEventListener("click", () => {
  if (leftTemp > 15) {
    leftTemp -= 0.5;
    tempOne.innerHTML = leftTemp.toFixed(1);
  }
});

incTempOne.addEventListener("click", () => {
  if (leftTemp < 28) {
    leftTemp += 0.5;
    tempOne.innerHTML = leftTemp.toFixed(1);
  }
});

let rightTemp = 19;
decTempTwo.addEventListener("click", () => {
  if (rightTemp > 15) {
    rightTemp -= 0.5;
    tempTwo.innerHTML = rightTemp.toFixed(1);
  }
});

incTempTwo.addEventListener("click", () => {
  if (rightTemp < 28) {
    rightTemp += 0.5;
    tempTwo.innerHTML = rightTemp.toFixed(1);
  }
});

// VOLUME
const volumeIcon = document.querySelector(".volume-icon");
const volumeLevel = document.querySelector(".volume-level");
const volumeDown = document.querySelector(".volume .arrow-left");
const volumeUp = document.querySelector(".volume .arrow-right");
let volumeInput = document.querySelector("#range").value;

// console.log(volumeInput)

volumeIcon.addEventListener("click", () => {
  volumeLevel.classList.toggle("open");
});

volumeDown,
  volumeUp.addEventListener("click", () => {
    volumeLevel.classList.add("open");
  });

// FRUNK

const openFrunk = document.querySelector(".car-model .frunk");
const frunkText = document.querySelector("#open-frunk");

let fOpen = false;

openFrunk.onclick = () => {
  if (fOpen == false) {
    frunkText.innerHTML = "close";
    fOpen = true;
  } else {
    frunkText.innerHTML = "open";
    fOpen = false;
  }
};

// TRUNK

const openTrunk = document.querySelector(".trunk");
const trunkText = document.querySelector("#open-trunk");
let tOpen = false;

openTrunk.onclick = () => {
  if (tOpen == false) {
    trunkText.innerHTML = "close";
    tOpen = true;
  } else {
    trunkText.innerHTML = "open";
    tOpen = false;
  }
};

// CHARGE BUTTON

const chargeBtn = document.querySelector(".charge-btn");

//GEAR SWITCH 
const reverseIcon = document.querySelector("#r");
const parkingIcon = document.querySelector("#p");
const neutralIcon = document.querySelector("#n");
const driveIcon = document.querySelector("#d");

const map = document.querySelector("iframe");
const mapDiv = document.querySelector(".map");
const reverseCamera = document.querySelector(".reverse-camera");
const driveBar = document.querySelector(".top-bar");
const carButtons = document.querySelector(".car-model")

const parkMode = document.querySelector(".park-mode")
const reverseMode = document.querySelector(".reverse-mode")

const carReverseSpeed = document.querySelector(".rev-speed")


window.addEventListener("keydown", (event) => {
  if (event.defaultPrevented) {
    return;
  }

  switch (event.key) {
    case "r":
        openFrunk.style.visibility = "hidden";
        openTrunk.style.visibility = "hidden";
        chargeBtn.style.visibility = "hidden";
        map.style.display = "none";
        mapDiv.style.background = "#fff";
        reverseCamera.style.display = 'block';
        carButtons.classList.add("hidden");
        parkingIcon.classList.remove('active')
        driveIcon.classList.remove('active');
        reverseIcon.classList.add('active');
      break;
      case "p":
        openFrunk.style.visibility = "visible";
        openTrunk.style.visibility = "visible";
        chargeBtn.style.visibility = "visible";
        map.style.display = "block";
        reverseCamera.style.display = 'none';
        carButtons.classList.remove("hidden");
        reverseIcon.classList.remove('active');
        driveIcon.classList.remove('active');
        parkingIcon.classList.add('active');
        break;
      case "d":
        parkingIcon.classList.remove('active');
        reverseIcon.classList.remove('active');
        driveIcon.classList.add('active');
        break;
  }})

  // CAR SETTINGS 

  const carSettings = document.querySelector(".main");
  const mainScreen = document.querySelector(".main-screen")

  carSettings.addEventListener("click", () => {
    mainScreen.style.background = "black";
  })