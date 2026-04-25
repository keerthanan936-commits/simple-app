async function bookRide() {
    const pickup = document.getElementById("pickup").value;
    const drop = document.getElementById("drop").value;

    if (!pickup || !drop) {
        alert("Please enter both locations!");
        return;
    }

    document.getElementById("result").innerText = "Booking...";

    try {
        const res = await fetch("http://localhost:3000/book", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ pickup, drop })
        });

        const data = await res.json();

        document.getElementById("result").innerHTML = `
            ✅ Ride Confirmed!<br><br>
            📍 From: ${data.pickup}<br>
            📍 To: ${data.drop}<br><br>
            🚗 Driver: ${data.driver}<br>
            🚘 Car: ${data.car}<br>
            💰 Fare: ₹${data.fare}<br>
            ⏱️ Time: ${data.time} mins
        `;
    } catch (err) {
        document.getElementById("result").innerText = "Error connecting to server!";
    }
}