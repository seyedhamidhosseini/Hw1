const exchangeRates = {
    usd: 1.00, // دلار آمریکا به عنوان واحد مرجع
    eur: 1.41544, // 1 دلار آمریکا = 1.41544 یورو
    gbp: 2.03032, // 1 دلار آمریکا = 2.03032 پوند
    cad: 1.01941, // 1 دلار آمریکا = 1.01941 دلار کانادا
    aud: 0.88297 // 1 دلار آمریکا = 0.88297 دلار استرالیا
};

function convertCurrency() {
    const amount = document.getElementById("amount").value;
    const currency = document.getElementById("currency").value;

    if (amount === '' || amount <= 0) {
        document.getElementById("result").innerText = "لطفاً مقدار صحیحی را وارد کنید.";
        return;
    }

    const result = amount * exchangeRates[currency];

    document.getElementById("result").innerText = `مقدار تبدیل شده: ${result.toFixed(2)} ${currency.toUpperCase()}`;
}