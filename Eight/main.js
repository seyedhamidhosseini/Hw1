function calculateLoan() {
    const loanAmountInMillion = parseFloat(document.getElementById("loanAmount").value);
    const interestRate = parseFloat(document.getElementById("interestRate").value);
    const loanTerm = parseInt(document.getElementById("loanTerm").value);
    const monthlyPaymentInputInThousand = document.getElementById("monthlyPayment").value;

    if (isNaN(loanAmountInMillion) || isNaN(interestRate) || isNaN(loanTerm)) {
        alert("لطفاً تمام مقادیر را به درستی وارد کنید.");
        return;
    }

    // تبدیل مبلغ وام از میلیون تومان به تومان
    const loanAmount = loanAmountInMillion * 1000000;
    // تبدیل نرخ سود سالیانه به ماهیانه
    let monthlyInterestRate = interestRate / 100 / 12;
    let monthlyPayment;

    if (monthlyPaymentInputInThousand === "") {
        // محاسبه مبلغ قسط ماهیانه
        monthlyPayment = (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -loanTerm));

        // محاسبه میلیون و هزار تومان
        const monthlyPaymentInMillion = Math.floor(monthlyPayment / 1000000);
        const monthlyPaymentInThousand = Math.floor((monthlyPayment % 1000000) / 1000);

        document.getElementById("monthlyPayment").value = (monthlyPayment / 1000).toFixed(0); // برای نمایش در ورودی به هزار تومان

        document.getElementById("result").innerText = `مبلغ قسط ماهیانه شما: ${monthlyPaymentInMillion} میلیون و ${monthlyPaymentInThousand} هزار تومان است.`;
    } else {
        // محاسبه مبلغ وام بر اساس قسط ماهیانه وارد شده
        monthlyPayment = parseFloat(monthlyPaymentInputInThousand) * 1000; // تبدیل هزار تومان به تومان
        const calculatedLoanAmount = (monthlyPayment * (1 - Math.pow(1 + monthlyInterestRate, -loanTerm))) / monthlyInterestRate;
        const calculatedLoanAmountInMillion = calculatedLoanAmount / 1000000; // تبدیل به میلیون تومان

        document.getElementById("loanAmount").value = calculatedLoanAmountInMillion.toFixed(2);
        document.getElementById("result").innerText = `مبلغ وام شما بر اساس قسط ماهیانه ${monthlyPaymentInputInThousand} هزار تومان، ${calculatedLoanAmountInMillion.toFixed(2)} میلیون تومان است.`;
    }
}