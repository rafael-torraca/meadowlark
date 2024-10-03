const fortuneCookies = [
    "Conquer your fears or they will conquer you.",
    "Rivers need springs.",
    "Do not fear what you don't know.",
    "You will have a pleasant surprase.",
    "Whenever possible, keep it simple.",
];

export default function getFortune() {
    const index = Math.floor(Math.random() * fortuneCookies.length);
    return fortuneCookies[index];
}
