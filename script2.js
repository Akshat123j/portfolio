const contactinfo=document.getElementsByClassName("contact-info")[0]

const text = [
   "Akshat Jain",
   "Bhopal, Madhya Pradesh, India"
   
];

function randomDelay(min = 500, max = 1000) {
    let rand = Math.random() * (max - min) + min;
    console.log(rand)
    return new Promise(resolve => setTimeout(resolve, rand));
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
        await randomDelay(); // suspense between messages
        await typeWriter(item, contactinfo);
    }

}

display(); 