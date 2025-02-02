async function reviewCode() {
    const code = document.getElementById('code').value;

    const response = await fetch('http://localhost:5000/review', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code })
    });

    const data = await response.json();
    document.getElementById("feedback").innerText = data.feedback;
}
