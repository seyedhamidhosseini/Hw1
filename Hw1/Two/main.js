function calculateAge() {
    const birthdateInput = document.getElementById("birthdate").value;
    const birthdate = new Date(birthdateInput);
    const today = new Date();

    if (birthdate > today) {
        document.getElementById("result").innerText = " تاریخ تولد وارد شده نادرست است. لطفاً تاریخ تولد واقعی خود را وارد کنید ";
        return;
    }

    let age = today.getFullYear() - birthdate.getFullYear();
    const monthDifference = today.getMonth() - birthdate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthdate.getDate())) {
        age--;
    }

    document.getElementById("result").innerText = "سن شما: " + age + " سال است";
}