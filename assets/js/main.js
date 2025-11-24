// Render Home (cards)
if (document.getElementById("cardContainer")) {
    const container = document.getElementById("cardContainer");

    ciudades.forEach(ciudad => {
        container.innerHTML += `
            <div class="col-12 col-md-4 mb-4">
                <div class="card shadow" onclick="verDetalle(${ciudad.id})" style="cursor:pointer;">
                    <div class="card-body text-center">
                        <h5 class="card-title">${ciudad.nombre}</h5>
                        <p class="display-4">${ciudad.temp}°C</p>
                        <span class="badge badge-info">${ciudad.estado}</span>
                    </div>
                </div>
            </div>
        `;
    });
}

function verDetalle(id) {
    localStorage.setItem("ciudadSeleccionada", id);
    window.location = "detalle.html";
}


if (document.getElementById("detalleContainer")) {
    const id = localStorage.getItem("ciudadSeleccionada");
    const ciudad = ciudades.find(c => c.id == id);

    const detalle = document.getElementById("detalleContainer");

    detalle.innerHTML = `
        <h2 class="mb-3">${ciudad.nombre}</h2>

        <div class="card p-3 mb-4">
            <h4>Clima actual</h4>
            <p><strong>Temperatura:</strong> ${ciudad.temp}°C</p>
            <p><strong>Estado:</strong> ${ciudad.estado}</p>
            <p><strong>Humedad:</strong> ${ciudad.humedad}%</p>
            <p><strong>Viento:</strong> ${ciudad.viento}</p>
        </div>

        <h4>Pronóstico semanal</h4>
        <div class="row">
            ${ciudad.semana.map((t, i) => `
                <div class="col-6 col-md-3 mb-3">
                    <div class="card text-center p-3">
                        <strong>Día ${i+1}</strong>
                        <p class="mt-2">${t}°C</p>
                    </div>
                </div>
            `).join("")}
        </div>

        <a href="index.html" class="btn btn-primary mt-3">Volver al inicio</a>
    `;
}
