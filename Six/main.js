const prayerTimesData = {
    tehran: {
        fajr: "05:00",
        sunrise: "06:15",
        zuhr: "12:30",
        asr: "16:00",
        maghrib: "18:30",
        isha: "20:00",
        sunset: "18:15",
        midnight: "00:30"
    },
    mashhad: {
        fajr: "04:50",
        sunrise: "06:10",
        zuhr: "12:20",
        asr: "15:50",
        maghrib: "18:20",
        isha: "19:50",
        sunset: "18:05",
        midnight: "00:20"
    },
    isfahan: {
        fajr: "05:05",
        sunrise: "06:20",
        zuhr: "12:35",
        asr: "16:05",
        maghrib: "18:35",
        isha: "20:05",
        sunset: "18:20",
        midnight: "00:35"
    },
    shiraz: {
        fajr: "05:10",
        sunrise: "06:25",
        zuhr: "12:40",
        asr: "16:10",
        maghrib: "18:40",
        isha: "20:10",
        sunset: "18:25",
        midnight: "00:40"
    },
    ilam: {
        fajr: "05:15",
        sunrise: "06:30",
        zuhr: "12:45",
        asr: "16:15",
        maghrib: "18:45",
        isha: "20:15",
        sunset: "18:30",
        midnight: "00:45"
    }
};

function getWeeklyPrayerTimes() {
    const city = document.getElementById("city").value;
    const weekBody = document.getElementById("weekBody");
    const weeklyTable = document.getElementById("weeklyTable");

    weekBody.innerHTML = ''; // پاک‌کردن جدول قبلی

    const today = new Date();
    for (let i = 0; i < 7; i++) {
        const day = new Date(today);
        day.setDate(today.getDate() + i);

        const row = document.createElement("tr");
        row.innerHTML = `
            <td onclick="showPrayerTimes('${city}', '${day.toLocaleDateString()}')">روز ${i + 1}</td>
            <td>${day.toLocaleDateString('fa-IR')}</td>
        `;
        weekBody.appendChild(row);
    }

    weeklyTable.style.display = 'table'; // نمایش جدول
}

function showPrayerTimes(city, date) {
    const times = prayerTimesData[city];
    const prayerTimesDiv = document.getElementById("prayerTimes");

    prayerTimesDiv.innerHTML = `
        <h3>اوقات نماز برای ${date}</h3>
        <p>اذان صبح: ${times.fajr}</p>
        <p>طلوع آفتاب: ${times.sunrise}</p>
        <p>اذان ظهر: ${times.zuhr}</p>
        <p>عصر: ${times.asr}</p>
        <p>اذان مغرب: ${times.maghrib}</p>
        <p>عشاء: ${times.isha}</p>
        <p>غروب آفتاب: ${times.sunset}</p>
        <p>نیمه‌شب شرعی: ${times.midnight}</p>
    `;
}