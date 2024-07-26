const rexImgMain = document.querySelector(".rexImgMain");

rexImgMain.addEventListener('animationend', () => {
    rexImgMain.style.animation = "rexImgMainWiggle 4s ease-in-out infinite";
    console.log("hi");
})