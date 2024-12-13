document.getElementById("sellAccountForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del formulario

    const gameType = document.getElementById("gameType").value;
    const accountDetails = document.getElementById("accountDetails").value;
    const price = document.getElementById("price").value;
    const contactInfo = document.getElementById("contactInfo").value;
    const image = document.getElementById("image").files[0];

    // Validar que los campos no estén vacíos
    if (!gameType || !accountDetails || !price || !contactInfo) {
        alert("Por favor, completa todos los campos.");
        return; // Evita continuar si hay campos vacíos
    }

    // Simular el proceso de subir imagen y datos (esto normalmente se enviaría al servidor)
    console.log("Datos enviados:");
    console.log("Tipo de Juego:", gameType);
    console.log("Detalles de la Cuenta:", accountDetails);
    console.log("Precio:", price);
    console.log("Información de Contacto:", contactInfo);
    console.log("Imagen:", image ? image.name : "Sin imagen");

    // Aquí deberías implementar la lógica para enviar los datos a tu backend

    // Mostrar mensaje de confirmación
    alert("¡Tu cuenta ha sido publicada con éxito!");

    // Limpiar el formulario
    document.getElementById("sellAccountForm").reset();
});
