// Vanilla
function presentacion(icono){
    var cntArticle = document.getElementById("cntArticle");
    var txtCnt = "<div class='asterisco'>"
        txtCnt += '<span class="fa-stack fa-lg">';
            txtCnt += '<i class="fa fa-circle fa-stack-2x"></i>';
            txtCnt += '<i class="fa fa-asterisk fa-stack-1x fa-inverse"></i>';
            txtCnt += '</span><p>';
    txtCnt += 'A través del proceso de inscripción y registro profesional de la UAE JCC se reciben, verifican y gestionan las solicitudes de tarjeta profesional de Contador Público y tarjeta de registro de Entidades Prestadoras de Servicios Contables.';
    txtCnt += "</p></div>";
    
    txtCnt += "<h3>¿Cuáles son los trámites de registro e inscripción profesional?</h3>";
    
    txtCnt += "<div class='preguntasCajas'>";
        txtCnt += "<div class='preguntaBox pregunta1Box'>";
            txtCnt += "<img class='imgPreguntaBox' src='img/preguntas1.png'/>"; 
            txtCnt += "<p>1. Solicitud de inscripción y expedición de tarjeta profesional de Contador Público.</p>"; 
        txtCnt += "</div>";
    txtCnt += "</div>";
    txtCnt += "<div class='preguntasCajas'>";
        txtCnt += "<div class='preguntaBox pregunta2Box'>";
            txtCnt += "<img class='imgPreguntaBox' src='img/preguntas2.png'/>"; 
            txtCnt += "<p>2. Solicitud de inscripción y expedición de tarjeta de registro de Entidades Prestadoras de Servicios Contables.</p>"; 
        txtCnt += "</div>";
    txtCnt += "</div>";
    txtCnt += "<div class='preguntasCajas'>";
        txtCnt += "<div class='preguntaBox pregunta3Box'>";
            txtCnt += "<img class='imgPreguntaBox' src='img/preguntas3.png'/>"; 
            txtCnt += "<p>3. Solicitud de duplicado de tarjeta profesional de Contador Público.</p>"; 
        txtCnt += "</div>";
    txtCnt += "</div>";
    txtCnt += "<div class='preguntasCajas'>";
        txtCnt += "<div class='preguntaBox pregunta4Box'>";
            txtCnt += "<img class='imgPreguntaBox' src='img/preguntas4.png'/>"; 
            txtCnt += "<p>4. Solicitud de duplicado de tarjeta de registro de Entidades Prestadoras de Servicios Contables.</p>"; 
        txtCnt += "</div>";
    txtCnt += "</div>";
    txtCnt += "<div class='preguntasCajas'>";
        txtCnt += "<div class='preguntaBox pregunta5Box'>";
            txtCnt += "<img class='imgPreguntaBox' src='img/preguntas5.png'/>"; 
            txtCnt += "<p>5. Solicitud de sustitución de matrícula profesional de Contador Público.</p>"; 
        txtCnt += "</div>";
    txtCnt += "</div>";
    txtCnt += "<div class='preguntasCajas'>";
        txtCnt += "<div class='preguntaBox pregunta6Box'>";
            txtCnt += "<img class='imgPreguntaBox' src='img/preguntas6.png'/>"; 
            txtCnt += "<p>6. Solicitud de modificación del registro profesional de Entidades Prestadoras de Servicios Contables.</p>"; 
        txtCnt += "</div>";
    txtCnt += "</div>";
    
    cntArticle.innerHTML= txtCnt;

    var asideH = document.querySelector('h2.asideh');
    asideH.innerHTML = 'PREGUNTAS CLAVE';
  
    icono.src = "img/preguntasIco.png";    
}

function preguntaBox1(){
    var cntArticle = document.getElementById("cntArticle");
    var txtCnt = "<h3>¿Dónde puedo realizar los trámites de registro e inscripción profesional??</h3>";
        txtCnt += "<div class='asterisco asteriscoLeft'>";

        txtCnt += '<span class="fa-stack fa-lg">';
            txtCnt += '<i class="fa fa-circle fa-stack-2x"></i>';
            txtCnt += '<i class="fa fa-asterisk fa-stack-1x fa-inverse"></i>';
            txtCnt += '</span><p>';
    txtCnt += 'Los trámites antes mencionados se realizan <B>ÚNICAMENTE</B> a través del formulario electrónico dispuesto en la página web de la entidad.';
    txtCnt += "</p><a href='http://www.jcc.gov.co'>www.jcc.gov.co</a></div>";
    txtCnt += "<img src='img/preguntaImg1.png' class='asteriscoImgRight' />";

    cntArticle.innerHTML= txtCnt;

    var asideH = document.querySelector('h2.asideh');
    asideH.innerHTML = 'PREGUNTA 1';
    icono.src = "img/preguntasIco.png";    
}
function mueveAbajo(){
    var contenido = document.getElementById('cntArticle');
    contenido.scrollTop += 50;
  
}
function veAtras() {
    window.history.back();
}
document.addEventListener('DOMContentLoaded', function() {
    var anchoVentana = window.innerWidth;
    var altoVentana =  window.innerHeight;
    var inicioLink = document.querySelector(".iniciolink");
    var icono = document.querySelector(".imgAsideContenido");
    document.getElementById("contenido").classList.add('pantalla2');  
    
    var flechaDown = document.querySelector(".botonScrollDown");
    flechaDown.onclick = function(){
       mueveAbajo();
       return false;
    };
    
    var pregunta1Box = document.querySelector(".pregunta1Box");
    pregunta1Box.onclick = function(){
        window.location = "tramites1.html";
    };
    var pregunta2Box = document.querySelector(".pregunta2Box");
    pregunta2Box.onclick = function(){
        window.location = "tramites2.html";
    };
    var pregunta3Box = document.querySelector(".pregunta3Box");
    pregunta3Box.onclick = function(){
        window.location = "tramites3.html";
    };
    var pregunta4Box = document.querySelector(".pregunta4Box");
    pregunta4Box.onclick = function(){
        window.location = "tramites4.html";
    };
    var pregunta5Box = document.querySelector(".pregunta5Box");
    pregunta5Box.onclick = function(){
        window.location = "tramites5.html";
    };
    var pregunta6Box = document.querySelector(".pregunta6Box");
    pregunta6Box.onclick = function(){
        window.location = "tramites6.html";
    };
    var pregunta7Box = document.querySelector(".pregunta7Box");
    pregunta7Box.onclick = function(){
        window.location = "tramites7.html";
    };


    var botonCerrar = document.querySelector(".botonClose");
    botonCerrar.onclick = function(){
       veAtras();
       return false;
    };
});



