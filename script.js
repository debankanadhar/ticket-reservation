

document.getElementById('reservationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const route = document.getElementById('route').value;
    const date = document.getElementById('date').value;

    const routeText = {
        route1: "City A to City B",
        route2: "City C to City D",
        route3: "City E to City F"
    };

    const summaryText = `
        Name: ${name}<br>
        Email: ${email}<br>
        Route: ${routeText[route]}<br>
        Travel Date: ${date}
    `;

    document.getElementById('summaryText').innerHTML = summaryText;
    document.getElementById('reservationSummary').classList.remove('hidden');
});
