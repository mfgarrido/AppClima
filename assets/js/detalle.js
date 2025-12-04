// Obtener ID desde localStorage
const idSeleccionado = localStorage.getItem("ciudadSeleccionada");

// Si no hay ID, volver al index
if (!idSeleccionado) {
    window.location.href = "index.html";
}

// Buscar la ciudad correspondiente
const ciudad = ciudades.find(c => c.id == idSeleccionado);

// Contenedor del detalle
const detalleContainer = document.getElementById("detalleContainer");

if (!ciudad) {
    detalleContainer.innerHTML = `
        <div class="alert alert-danger">Ciudad no encontrada.</div>
    `;
} else {
    const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

detalleContainer.innerHTML = `
    <div class="card shadow p-4">
        <h2 class="text-center mb-3">${ciudad.nombre}</h2>
        <p><strong>Temperatura:</strong> ${ciudad.temp}°C</p>
        <p><strong>Estado:</strong> ${ciudad.estado}</p>
        <p><strong>Humedad:</strong> ${ciudad.humedad}%</p>
        <p><strong>Viento:</strong> ${ciudad.viento}</p>

        <h4 class="mt-4">Temperaturas de la semana</h4>

        <ul>
            ${ciudad.semana.map((t, i) => `
                <li><strong>${dias[i]}:</strong> ${t}°C</li>
            `).join("")}
        </ul>

        <a href="index.html" class="btn btn-primary mt-3">Volver</a>
    </div>
`;

}
