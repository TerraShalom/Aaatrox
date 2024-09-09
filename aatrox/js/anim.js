$(document).ready(function() {

    // Efecto hover para los íconos de habilidades
    $(".ability-icon").hover(
        function() {
            $(this).css("transform", "scale(1.2)"); // Agranda el ícono
            $(this).css("transition", "transform 0.3s ease"); // Transición suave
        },
        function() {
            $(this).css("transform", "scale(1)"); // Vuelve al tamaño normal
        }
    );
});

$(document).ready(function() {
    // Efecto hover para las imágenes de las skins
    $(".skin-img").hover(
        function() {
            $(this).css("transform", "scale(1.1)"); // Agranda la imagen
            $(this).css("transition", "transform 0.3s ease"); // Transición suave
        },
        function() {
            $(this).css("transform", "scale(1)"); // Vuelve al tamaño normal
        }
    );

    // Mostrar la imagen completa en un modal al hacer clic
    $(".skin-img").click(function() {
        // Obtener la fuente de la imagen que se ha hecho clic
        let imgSrc = $(this).attr("src");
        
        // Asignar la fuente de la imagen al modal
        $("#modalSkinImage").attr("src", imgSrc);
        
        // Mostrar el modal
        $("#skinModal").modal("show");
    });
});
