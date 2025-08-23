const file = document.getElementsByClassName("file")[0];
const content = document.getElementsByClassName("content")[0];
const cupboard = document.getElementById("cupboard");

cupboard.style.animationPlayState = "paused";

cupboard.addEventListener("dblclick", () => {
    open();
    cupboard.style.animationPlayState = "running";
    file.style.display = 'block';
    document.querySelector("h1").textContent = "Thank U";
});

async function open() {
    try {
        await delay(3000);
        file.style.animation = "none";
        file.style.backgroundImage = 'url("2.png")';
        file.style.transform = `rotateY(30deg) rotateX(0deg) rotateZ(30deg)`;

        content.style.display = "block";
        content.style.transform = "rotateZ(0deg)";

        await delay(2000);
        window.location.href = "content.htm";
        content.style.display="none";
        cupboard.style.display="none";
        file.style.display="none";
        document.body.innerHTML=`<a href="https://akshat123j.github.io/portfolio/content.htm"> click</a>`;
    } catch (error) {
        console.error("Error during animation or navigation:", error);
        // Optional: show a fallback message or visual cue
        content.innerText = "Something went wrong. Please try again.";
        content.style.display = "block";
        content.style.color = "red";
    }
}

async function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
