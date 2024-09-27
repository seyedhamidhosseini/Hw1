let likeCount = 50;

function likePost() {
    likeCount++;
    document.getElementById("likeCount").innerText = likeCount + " لایک";
}

function bookmarkPost() {
    alert("بلاگ به لیست نشانه‌گذاری‌ها اضافه شد.");
}

function sharePost() {
    const postTitle = "آشنایی با برنامه‌نویسی وب";
    const shareURL = window.location.href;
    const message = `به اشتراک بگذارید: ${postTitle} - ${shareURL}`;
    alert(message);
}