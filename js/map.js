import { stamps }
from "./stamps.js";


const map = L.map('map').setView(
    [51.7, 10.6],
    9
);
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
{
    attribution:
        '&copy; OpenStreetMap'
}).addTo(map);
stamps.forEach(stamp => {

    const color =
        stamp.visited
        ? "green"
        : "gray";

});
stamps.forEach(stamp => {

    const color =
        stamp.visited
        ? "green"
        : "gray";

    L.circleMarker(
        [stamp.lat, stamp.lng],
        {
            radius: 8,
            color: color,
            fillColor: color,
            fillOpacity: 1
        }
    )
    .addTo(map)

    .bindPopup(`
        <b>${stamp.name}</b><br>
        Nr. ${stamp.id}<br>
        ${stamp.lat}<br>
        ${stamp.lng}
         <a
         href="https://www.google.com/maps?q=${stamp.lat},${stamp.lng}"
         target="_blank">
         Navigation
        </a>
    `);
const group = [];

stamps.forEach(stamp => {
    group.push([
        stamp.lat,
        stamp.lng
    ]);
});

map.fitBounds(group);
});