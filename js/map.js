


var map = L.map("map").setView([40.4178595, -3.6963881], 14);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([40.42253, -3.695419]).addTo(map)
    .bindPopup('Nos encontramos aqui!!')
    .openPopup();
