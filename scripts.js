document.getElementById('start-delivery').addEventListener('click', () => {
    fetch('/start_delivery', {
        method: 'POST',
    })
    .then(response => {
        if (response.ok) {
            console.log("Delivery started");
        } else {
            console.error("Failed to start delivery");
        }
    })
    .catch(error => console.error("Error: ", error));
});
