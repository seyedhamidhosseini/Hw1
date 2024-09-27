// بانک سوالات
const questions = [
    {
        question: "پایتخت ایران کدام است؟",
        options: ["مشهد", "تهران", "شیراز"],
        answer: 1
    },
    {
        question: "چه کسی اولین انسان روی ماه بود؟",
        options: ["یوری گاگارین", "بوز آلدرین", "نیل آرمسترانگ"],
        answer: 2
    },
    {
        question: "چه تعداد قاره در جهان وجود دارد؟",
        options: ["5", "6", "7"],
        answer: 2
    },
    {
        question: "کدام سیاره بزرگ‌ترین است؟",
        options: ["مریخ", "زحل", "مشتری"],
        answer: 2
    },
    {
        question: "چه کسی نقاشی مونالیزا را کشیده است؟",
        options: ["ون گوگ", "لئوناردو داوینچی", "پیکاسو"],
        answer: 1
    },
    {
        question: "چند اونس در یک پوند است؟",
        options: ["10", "12", "16"],
        answer: 2
    },
    {
        question: "کدام کشور بزرگ‌ترین جمعیت را دارد؟",
        options: ["چین", "هند", "آمریکا"],
        answer: 0
    },
    {
        question: "کدام حیوان سریع‌ترین است؟",
        options: ["چیتا", "شیر", "عقاب"],
        answer: 0
    },
    {
        question: "چه سالی کامپیوتر اختراع شد؟",
        options: ["1936", "1945", "1951"],
        answer: 0
    },
    {
        question: "کدام اختراع به توماس ادیسون نسبت داده می‌شود؟",
        options: ["لامپ", "رادیو", "تلویزیون"],
        answer: 0
    },
    {
        question: "چه کسی تئوری نسبیت را مطرح کرد؟",
        options: ["نیوتن", "انیشتین", "هاوکینگ"],
        answer: 1
    },
    {
        question: "بزرگ‌ترین اقیانوس کدام است؟",
        options: ["اقیانوس اطلس", "اقیانوس آرام", "اقیانوس هند"],
        answer: 1
    },
    {
        question: "چه کسی اولین رئیس‌جمهور آمریکا بود؟",
        options: ["توماس جفرسون", "آبراهام لینکلن", "جورج واشنگتن"],
        answer: 2
    },
    {
        question: "چه تعداد بازیکن در یک تیم فوتبال است؟",
        options: ["9", "11", "12"],
        answer: 1
    },
    {
        question: "کدام ماده شیمیایی در آب وجود دارد؟",
        options: ["هیدروژن", "اکسیژن", "هر دو"],
        answer: 2
    }
];

let selectedQuestions = [];

// شروع امتحان
function startQuiz() {
    const numQuestions = parseInt(document.getElementById('numQuestions').value);

    if (numQuestions < 1 || numQuestions > questions.length) {
        alert(`لطفا عددی بین 1 و ${questions.length} وارد کنید.`);
        return;
    }

    selectedQuestions = [];
    document.getElementById('quiz').innerHTML = ''; // پاک‌کردن سوالات قبلی

    // انتخاب سوالات تصادفی
    while (selectedQuestions.length < numQuestions) {
        const randomIndex = Math.floor(Math.random() * questions.length);
        if (!selectedQuestions.includes(questions[randomIndex])) {
            selectedQuestions.push(questions[randomIndex]);
        }
    }

    // نمایش سوالات
    selectedQuestions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        questionDiv.innerHTML = `
            <h3>سوال ${index + 1}: ${q.question}</h3>
            ${q.options.map((option, i) => `
                <label>
                    <input type="radio" name="q${index}" value="${i}">
                    ${option}
                </label>
            `).join('')}
        `;
        document.getElementById('quiz').appendChild(questionDiv);
    });

    // نمایش دکمه ارسال
    document.getElementById('submitBtn').style.display = 'inline-block';
}

// ارسال آزمون
function submitQuiz() {
    let score = 0;
    let resultText = '';

    selectedQuestions.forEach((q, index) => {
        const userAnswer = document.querySelector(`input[name="q${index}"]:checked`);
        if (userAnswer && parseInt(userAnswer.value) === q.answer) {
            score++;
            resultText += `سوال ${index + 1}: پاسخ صحیح بود.<br>`;
        } else {
            resultText += `سوال ${index + 1}: پاسخ اشتباه بود. جواب صحیح: ${q.options[q.answer]}.<br>`;
        }
    });

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `شما ${score} از ${selectedQuestions.length} سوال را درست جواب دادید.<br>` + resultText;
}