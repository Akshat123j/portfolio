const contactinfo = document.getElementsByClassName("description")[0]

const text = [
    "Akshat Jain",
    "Bhopal, Madhya Pradesh"

];

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

async function typeWriter(message, contactinfo) {
    for (let char of message) {
        contactinfo.innerHTML += char;
        await new Promise(resolve => setTimeout(resolve, 50)); // Typing speed
    }
    contactinfo.innerHTML += "<br>"; // Move to next line
}
async function display() {
    for (const item of text) {
        await delay(300); // suspense between messages
        await typeWriter(item, contactinfo);
    }

}
async function name() {
    await delay(2000)
    display();
}
name();
const container = document.querySelector('.container');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const animatedIcons = container.querySelectorAll('.language > div');
      animatedIcons.forEach(icon => {
        icon.style.animationPlayState = 'running';
      });

      observer.unobserve(container); // Optional: only trigger once
    }
  });
}, {
  threshold: 0.5
});

observer.observe(container);