// popup.js

document.addEventListener("DOMContentLoaded", function () {
  const ipAddressElement = document.getElementById("ipAddress");

  fetch("https://api.ipify.org?format=json")
    .then((response) => response.json())
    .then((data) => {
      const ipAddress = data.ip;
      ipAddressElement.textContent = ` ${ipAddress}`;
    })
    .catch((error) => {
      ipAddressElement.textContent = "Impossible de récupérer l'adresse IP.";
      console.error(error);
    });
});

