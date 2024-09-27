var poems = [
    "ای که در کوچه معشوقه ما می‌گذری",
    "مژده‌ای دل که مسیحا نفسی می‌آید",
    "هر که دلارام دید از دلش آرام رفت",
    "بیا که قصر امل سخت سست بنیاد است",
    "گفتم غم تو دارم، گفتا غمت سر آید"
];

function showRandomPoem() {
    var randomIndex = Math.floor(Math.random() * poems.length);
    document.getElementById("div").innerText = poems[randomIndex];
}