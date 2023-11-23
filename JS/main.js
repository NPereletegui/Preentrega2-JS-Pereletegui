const carrito = [];

function agregarAlCarrito() {
    const nombre = prompt('Ingrese el nombre del producto:');
    const precio = parseFloat(prompt('Ingrese el precio del producto:'));

    if (isNaN(precio)) {
        alert('Por favor, ingrese un precio válido.');
        return;
    }
    const producto = {
        nombre: nombre,
        precio: precio
    };
carrito.push(producto);
    alert(`El producto "${nombre}" ha sido agregado al carrito.`);
}
function mostrarCarrito() {
    if (carrito.length === 0) {
        alert('El carrito está vacío.');
    } else {
        let mensaje = 'Carrito de Compras:\n';
        let total = 0;
        for (const producto of carrito) {
            mensaje += `${producto.nombre}: $${producto.precio.toFixed(2)}\n`;
            total += producto.precio;
        }
        mensaje += `\nTotal: $${total.toFixed(2)}`;
        alert(mensaje);
    }
}
window.onload = function () {
    while (true) {
        const accion = prompt('Elija una opción\n1. Agregar producto\n2. Ver carrito\n3. Cancelar');

        if (accion === '1') {
            agregarAlCarrito();
        } else if (accion === '2') {
            mostrarCarrito();
        } else if (accion === '3') {
            break;
        } else {
            alert('Opción inválida. Por favor, elija 1, 2 o 3.');
        }
    }
};

