const messages = [
    "Andrés",
    "Oscar",
    "María Jose",
    "Rosa",
    "Ana",
    "Laura",
    "José"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];

    console.log(message);
};

module.exports = { randomMsg };