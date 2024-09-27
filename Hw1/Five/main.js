function calculatePrice() {
    const basePrice = parseFloat(document.getElementById("basePrice").value) * 1000000; // تبدیل به تومان
    const yearInput = document.getElementById("year").value;
    const year = new Date(yearInput).getFullYear(); // گرفتن سال از ورودی تایم
    const mileage = parseInt(document.getElementById("mileage").value);
    const accidents = parseInt(document.getElementById("accidents").value);
    const insurance = parseInt(document.getElementById("insurance").value);
    const color = document.getElementById("color").value;

    if (isNaN(basePrice) || isNaN(year) || isNaN(mileage) || isNaN(accidents) || isNaN(insurance) || !yearInput) {
        alert("لطفاً تمام مقادیر را به درستی وارد کنید.");
        return;
    }

    const currentYear = new Date().getFullYear();
    let price = basePrice;

    // کاهش قیمت بر اساس سال ساخت (5% کاهش برای هر سال)
    const age = currentYear - year;
    price -= price * (age * 0.05);

    // کاهش قیمت بر اساس کارکرد (هر 10,000 کیلومتر 1% کاهش)
    price -= price * (Math.floor(mileage / 10000) * 0.01);

    // کاهش قیمت بر اساس تعداد تصادفات (هر تصادف 2% کاهش)
    price -= price * (accidents * 0.02);

    // افزایش قیمت بر اساس ماه‌های باقی‌مانده از بیمه (هر ماه 0.5% افزایش)
    price += price * (insurance * 0.005);

    // تاثیر رنگ خودرو
    if (color === "black" || color === "white") {
        price += 5000000; // رنگ‌های محبوب 5 میلیون افزایش
    } else if (color === "red") {
        price -= 3000000; // رنگ‌های کمتر محبوب 3 میلیون کاهش
    }

    const finalPriceInMillions = price / 1000000; // تبدیل به میلیون تومان
    document.getElementById("result").innerText = `قیمت نهایی خودرو: ${finalPriceInMillions.toFixed(2)} میلیون تومان`;
}