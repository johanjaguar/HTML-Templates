// Vanilla
function presentacion(icono){
    var cntArticle = document.getElementById("cntArticle");
    var txtCnt = "<p>Los profesionales de la Contaduría Pública han sido reconocidos por el Estado para brindar fe pública (función fedante) sobre hechos propios del ámbito de la profesión que comprometen la responsabilidad en los servicios calificados ofrecidos al conglomerado en general, con la exigencia legal del cumplimiento de las obligaciones, funciones y deberes contenidos en el Código de Ética Profesional, con el objeto de preservar la confianza social.</p>";
    
    txtCnt += "<p>La Unidad Administrativa Especial Junta Central de Contadores como organismo rector de la profesión de la Contaduría Pública responsable del Registro, Inspección y Vigilancia de los Contadores Públicos y de las entidades que presten servicios propios de la ciencia contable y, a su vez, en calidad de Tribunal Disciplinario, con el objeto de facilitar el entendimiento de las funciones misionales de la Entidad, hace entrega a la comunidad de una cartilla de los trámites y servicios brindados.</p>";
    txtCnt += "<p>En virtud de lo anterior, la cartilla tiene tres (3) propósitos especiales: el primero atañe conmemorar los sesenta (60) años de funcionamiento de la Unidad Administrativa Especial Junta Central de Contadores. El segundo, pretende reseñar brevemente la estructura de la Unidad como organismo rector de la profesión de la Contaduría Pública. Por último, el tercero se dirige a contextualizar las funciones misionales de la entidad a través de los trámites del área de Registro y Procesos Disciplinarios, con el propósito de servir como herramienta a los usuarios.</p>";
    txtCnt += "<p>Con el fin de llevar a cabo lo anterior, los Líderes de cada área efectuaron recopilación, de forma clara, sucinta y concisa, de los trámites y servicios brindados que esperamos sea de su agrado y sea una herramienta de orientación para la comunidad. </p><br/>";
    txtCnt += "<p class='dirjcc'><b>Oscar Eduardo Fuentes Peña<br/> Director General<br/> UAE Junta Central de Contadores</b></p>";
    txtCnt += '<table style="width:100%" class="tableAsideContenido"></table>';
    
    cntArticle.innerHTML= txtCnt;

    var cntTabla = document.querySelector('.tableAsideContenido');
    var tabla ='<tr><th colspan="2">SIGLAS Y ACRÓNIMOS</th></tr>';
    tabla += '<tr>';
    tabla +=    '<td><b>UAE JCC</b></td>';
    tabla +=    '<td>Unidad Administrativa Especial Junta Central de Contadores</td>'; 
    tabla +=  '</tr>';
    tabla +=  '<tr>';
    tabla +=    '<td><b>TD</b></td>';
    tabla +=    '<td>Tribunal Disciplinario</td>';
    tabla +=  '</tr>';

    var asideH = document.querySelector('h2.asideh');
    asideH.innerHTML = 'PRESENTACIÓN';

    cntTabla.innerHTML= tabla;    
    icono.src = "img/presentacionIcoW.png";    
}

function antecedentes(icono){
    var cntArticle = document.getElementById("cntArticle");
    var txtCnt = "<p class='reconocimientos'>Agradecemos a todas las personas que contribuyeron con su labor y sus aportes en la elaboración de esta cartilla, en especial a Oscar Eduardo Fuentes Peña, Astrid del Pilar Acevedo Camacho, Danilo Andrés Escobar Sánchez, Magaly Alejandra Manzano Mejía, Oscar Alfonso Hernández Moreno, Sandra Liliana Duarte Cuadros, Eric Jesús Flórez Arias, Pedro Emilio Vargas Buitrago, Tilcia Rosa Vergel Lafaurie y Katheryn Martínez. </p>";
    txtCnt += "<p>Así mismo, aquellos funcionarios y contratistas que con su compromiso, pertenencia y empeño han contribuido al fortalecimiento de la Entidad, en especial, hacemos un reconocimiento a los Dignatarios del Tribunal Disciplinario que a lo largo de estos 60 años han garantizado que el ejercicio de la profesión contable se desarrolle con un alto sentido de responsabilidad social y ética profesional. </p>";
    cntArticle.innerHTML= txtCnt;

    var cntTabla = document.querySelector('.tableAsideContenido');
    var tabla =' ';

    var asideH = document.querySelector('h2.asideh');
    asideH.innerHTML = 'AGRADECIMIENTOS Y RECONOCIMIENTOS';

    //cntTabla.innerHTML= tabla;    
    icono.src = "img/antecedentesIcoW.png";    
}

function preguntas(icono){
    var cntArticle = document.getElementById("cntArticle");
    var txtCnt = "<p>Agradecemos a todas las personas que contribuyeron con su labor y sus aportes en la elaboración de esta cartilla, en especial a Oscar Eduardo Fuentes Peña, Astrid del Pilar Acevedo Camacho, Danilo Andrés Escobar Sánchez, Magaly Alejandra Manzano Mejía, Oscar Alfonso Hernández Moreno, Sandra Liliana Duarte Cuadros, Eric Jesús Flórez Arias, Pedro Emilio Vargas Buitrago, Tilcia Rosa Vergel Lafaurie y Katheryn Martínez. </p>";
    txtCnt += "<p>Así mismo, aquellos funcionarios y contratistas que con su compromiso, pertenencia y empeño han contribuido al fortalecimiento de la Entidad, en especial, hacemos un reconocimiento a los Dignatarios del Tribunal Disciplinario que a lo largo de estos 60 años han garantizado que el ejercicio de la profesión contable se desarrolle con un alto sentido de responsabilidad social y ética profesional. </p>";
    cntArticle.innerHTML= txtCnt;

    var cntTabla = document.querySelector('.tableAsideContenido');
    var tabla =' ';

    var asideH = document.querySelector('h2.asideh');
    asideH.innerHTML = 'PREGUNTAS FRECUENTES';

    cntTabla.innerHTML= tabla;    
    icono.src = "img/antecedentesIcoW.png";    
}

function registro(icono){
    var cntArticle = document.getElementById("cntArticle");
    var txtCnt = "<div class='registro1left'><p>La UAE JCC tiene la función de efectuar la inscripción de los Contadores Públicos y el registro de las entidades prestadoras de servicios propios de la ciencia contable para otorgar la respectiva tarjeta profesional o de registro. </p>";
    
    txtCnt += "<p>Para el cabal cumplimiento de la función indicada en el párrafo anterior, la misma ley le ha otorgado facultades para comprobar la veracidad de la información aportada por el solicitante para el trámite de la tarjeta profesional (persona natural) o de registro (persona jurídica). </p>";

    txtCnt += "<p>Las disposiciones normativas vigentes que rigen la función de inscripción y registro corresponden a:</p>";
    txtCnt += "</div>";
    txtCnt += "<div class='registro2right'><a href='preguntas.html' class='preguntasFrecuentes'>";
    txtCnt +=   "<img src='img/preguntasicono.png'/>";
    txtCnt +=   "<p class='tituloRegistroBox'>PREGUNTAS CLAVE</p>";
    txtCnt +=   "<hr/>";
    txtCnt +=   "<p class='mensajeRegistroBox'>DA CLICK AQUÍ</p>";
    txtCnt += "</a></div>"
    txtCnt += "<img src='img/tablaRegistro.jpg' class='tablaRegistro'/>";
    cntArticle.innerHTML= txtCnt;

    var cntTabla = document.querySelector('.tableAsideContenido');
    var tabla =' ';

    var asideH = document.querySelector('h2.asideh');
    asideH.innerHTML = 'INSCRIPCIÓN Y REGISTRO PROFESIONAL';

   // cntTabla.innerHTML= tabla;    
    icono.src = "img/inspeccionIcoW.png";    
}

function estructura(icono){
    var cntArticle = document.getElementById("cntArticle");
    var txtCnt = "<p><p>Previo a contextualizar la función misional de la UAE JCC, es importante recordar brevemente los antecedentes normativos de la Entidad como organismo rector de la profesión de la Contaduría Pública.</p>";
    
    txtCnt += "<p>La Entidad se constituyó como establecimiento público con competencia para efectuar el registro de la profesión de la Contaduría Pública, otorgar la Tarjeta Profesional y operar como Tribunal de la profesión para garantizar el correcto ejercicio contable y la ética profesional, adscrita al Ministerio de Educación Nacional, de conformidad con lo reglado en el Decreto 2373 de 1956.</p>";
    txtCnt += "<p>Con la expedición de la Ley 145 de 1960, el Estado reglamentó el ejercicio de la profesión contable y, posteriormente, con la promulgación de la Ley 43 de 1990, se establecieron las funciones y atribuciones legales de la Junta Central de Contadores y el Concejo Técnico de la Contaduría Pública como órgano de la profesión, al igual que se promulgó el Código de Ética Profesional.</p>";
    txtCnt += "<p>Con la Ley 43 de 1990, la Junta Central de Contadores adquiere la función de ejercer la inspección y vigilancia de la profesión de la Contaduría Pública para garantizar que la misma sólo sea ejercida por quienes se encuentren debidamente inscritos ante esta Entidad, conforme a las prescripciones legales vigentes; al igual que la función de inscribir y expedir la Tarjeta Profesional de Contador y la Tarjeta de Registro para personas jurídicas, en virtud de lo señalado en el artículo 3 y 20 de la citada Ley. </p>";
    txtCnt += "<p>Con la incorporación del concepto de Estado Social de Derecho en la Constitución del 1991, la Ley 145 de 1960 y la Ley 43 de 1990, han sido reglamentadas para ajustarse a los postulados constitucionales a través del Decreto 1235 de 1991, en el cual se estableció que la inscripción de Contador Público se acreditará por medio de la Tarjeta Profesional, la cual será expedida por la Junta Central de Contadores previo cumplimiento de los requisitos exigidos por ley; igualmente, con el Decreto 1510 de 1998, se establecieron los parámetros para la expedición de la Tarjeta Profesional para las personas naturales y, de registro para las personas jurídicas que desarrollen actividades propias de la ciencia contable.</p>";
    txtCnt += "<p>Con la Ley 1151 de 2007, la Junta Central de Contadores fue dotada de personería jurídica, autonomía administrativa y patrimonio propio, otorgándole jerarquía de Unidad Administrativa Especial del orden nacional descentralizada por servicios, adscrita al Ministerio de Comercio, Industria y Turismo.</p>";
    txtCnt += "<p>Por medio de la Ley 1314 de 2009, se modificó la estructura orgánica de la UAE JCC separando al Consejo Técnico de la Contaduría Pública de la Entidad al tiempo que estableció que la Unidad “continuará actuando como Tribunal Disciplinario y Órgano de Registro de la profesión contable, incluyendo dentro del ámbito de su competencia a los Contadores Públicos y a las demás entidades que presten sus servicios al público en general propios de la ciencia contable como profesión liberal”. Seguidamente para el desarrollo del artículo 9 de la ley citada, se promulgó el Decreto 1955 de 2010 que modificó la estructura del Tribunal Disciplinario de la Entidad.</p>";

    cntArticle.innerHTML= txtCnt;

    var cntTabla = document.querySelector('.tableAsideContenido');
    var tabla =' ';

    var asideH = document.querySelector('h2.asideh');
    asideH.innerHTML = 'Prólogo';

    //cntTabla.innerHTML= tabla;    
    icono.src = "img/estructuraIcoW.png";    
}

function inspeccion(icono){
    var cntArticle = document.getElementById("cntArticle");
    var txtCnt = "<p>El proceso de Inspección y Vigilancia se compone de dos subprocesos:</p>";
    txtCnt +="<div class='cajaProcesos'><ul class='procesoSubProcesosBox'>";
    txtCnt +="  <li><b>LOS PROCESOS DISCIPLINARIOS</b><p>Adelantados por el Tribunal Disciplinario de la Junta Central de Contadores.</p></li>";
    txtCnt +="  <li><b>EL DE INSPECCIÓN Y VIGILANCIA</b><p>Realizado por otro grupo de trabajo que le reporta a la Dirección General.</p></li></ul></div>";
    txtCnt += "<p class='punteado'>Como ya se dijo,  la UAE JCC es la encargada de realizar la función de inspección y vigilancia del ejercicio de la profesión de la ciencia contable en satisfacción de las necesidades básicas del conglomerado general.  Esta atribución legal a cargo de la Entidad fue objeto de pronunciamiento por parte del máximo órgano constitucional en sentencia C- 530 de 2000</p>";
    txtCnt += "<div class='sentencia'><h4 class='sentenciaLink'>LEER APARTE DE LA SENTENCIA</h4>";
    txtCnt +=       "<p>“…En resumen, la función de inspección y vigilancia de la Superintendencia de Sociedades sobre las sociedades de contadores está dirigida a verificar la información que de manera ocasional ella requiera sobre la situación jurídica, contable, económica y administrativa, y a velar porque dichas sociedades, en su formación y funcionamiento y en el desarrollo de su objeto social se ajusten a la ley y a los estatutos. Pero indudablemente, dicha inspección y vigilancia opera en sí  sobre la sociedad como institución, mas no en cuanto a la actividad profesional que desarrolla, en cuanto ciertamente agrupa a profesionales de la contaduría, y que se contrae específicamente a las actividades relacionadas con la ciencia contable, como se encuentran definidas por el art. 2° de la Ley 43/90 que dice (…)</p>";
    txtCnt +=       "<p>Se justifica, <u><b>por consiguiente, la vigilancia y control de la Junta Central de contadores sobre este tipo de sociedades, en la medida en que desarrollan una actividad profesional, asimilable a la que individualmente ejerce el contador público, que está facultado para dar fe pública de hechos propios del ámbito de su profesión, aspectos en relación con los cuales no tiene ninguna injerencia la Superintendencia de Sociedades.</b></u></p>";
    txtCnt +=       "<p>Por lo anterior, no resulta un despropósito la existencia de controles concurrentes entre la Superintendencia de Sociedades y la Junta Central de Contadores, pues cada uno de ellos tiene su propio objetivo y ámbito de operación. Y si eventualmente pudiere presentar una colisión de competencia, para ello el ordenamiento jurídico cuenta con los remedios apropiados…” (Negrilla y subrayado fuera de texto)</p>";
    txtCnt += "</div>";
    
    txtCnt += "<p class='punteado'>Se colige de lo transcrito varios aspectos. En primer lugar, que las facultades de inspección y vigilancia otorgadas a la UAE JCC difieren de las facultades de la Superintendencia de Sociedades. En segundo lugar, que la facultad de inspección y vigilancia de la UAE se enfoca en el ejercicio de la profesión de la ciencia contable por parte de los Contadores Públicos y de las entidades que prestan servicios propios de la ciencia contable.<br/><br/>En último lugar, se concluye que la Superintendencia de Sociedades tiene por objeto verifica que la sociedad de contadores cumpla con las disposiciones legales que rigen su constitución y funcionamiento, además de contar con amplias facultades sobre los órganos de dirección, administración y control de ese ente económico, función que dista de la otorgada a la UAE JCC.</p>";
    txtCnt += "<p class='punteado'>En ese orden de ideas, el ejercicio de la función de inspección y vigilancia del ejercicio de la profesión de la ciencia contable tiene como finalidad garantizar que la contaduría pública solo sea ejercida por Contadores Públicos y entidades debidamente registradas ante la UAE JCC, de conformidad con las normas legales.</p>";
    
    txtCnt += "<div><img src='img/inspeccionTabla.png'/></div>";
    txtCnt += "<div><img src='img/inspeccion1.png'/></div>";
    txtCnt += "<div><img src='img/inspeccion2.png'/></div>";
    

    cntArticle.innerHTML= txtCnt;


    var asideH = document.querySelector('h2.asideh');
    asideH.innerHTML = 'Procedimiento del área de inspección y vigilancia';

    //cntTabla.innerHTML= tabla;    
    icono.src = "img/inspeccionIcoW.png";    
}
function iconoSelect( icono, link ){
    switch ( link ) {
        case 'presentacionLink':
            presentacion( icono );
        break;
        case 'antecedentesLink':
            antecedentes( icono );
        break;
        case 'estructuraLink':
            estructura( icono );
        break;
        case 'inspeccionLink':
            //window.location = "inspeccion.html";
            inspeccion( icono );
        break;
        case 'registroLink':
            registro( icono );
        break;
        case 'procesosLink':
            window.location = "tramites.html";
        break;
        case 'presentacionImg':
            presentacion( icono );
        break;
        case 'agradecimientoImg':
            antecedentes( icono );
        break;
        case 'prologoImg':
            estructura( icono );
        break;
        case 'registroImg':
            //window.location = "inspeccion.html";
            registro( icono );
        break;
        case 'inspeccionImg':
            inspeccion( icono );
        break;
        case 'disciplinarioImg':
            window.location = "tramites.html";
        break;
    }
}
function mueveAbajo(){
    var contenido = document.getElementById('cntArticle');
    contenido.scrollTop += 50;
  
}
document.addEventListener('DOMContentLoaded', function() {
    var fila1 = document.getElementById("fila1" );

    

    var anchoVentana = window.innerWidth;
    var altoVentana =  window.innerHeight;
    fila1.style.height = altoVentana + 'px';
    var inicioLink = document.querySelector(".iniciolink");
    var icono = document.querySelector(".imgAsideContenido");
    var button = document.querySelector(".button");
    var caja = document.getElementsByClassName("caja");
    for (var i = 0; i < caja.length; i++) {
        caja[i].onclick = function(){
            document.getElementById("contenido").classList.add('pantalla2');
            iconoSelect( icono , this.id);
            return false;
        };
    }

 
    button.onclick = function(){
      window.location = "index.html#menu";
    };

    var iconoSide = document.getElementsByClassName("imgAsideContenido");
    for (var i = 0; i < iconoSide.length; i++) {
        iconoSide[i].onclick = function(){
            document.getElementById("contenido").classList.add('pantalla2');
            console.log('id ' + this.id );
            iconoSelect( icono , this.id);
            return false;
        };
    }

    inicioLink.onclick = function(){
       document.getElementById("contenido").classList.remove('pantalla2');
       return false;
    };
    /*var preguntasFrecuentes = document.querySelector(".preguntasFrecuentes");
    preguntasFrecuentes.onclick = function(){
        document.getElementById("contenido").classList.add('pantalla2');
        console.log('id ' + this.id);
        preguntas( 'preguntas.png' );


        return false;
    };*/
    var flechaDown = document.querySelector(".botonScrollDown");
    flechaDown.onclick = function(){
       mueveAbajo();
       return false;
    };
    document.onkeydown = function(evt) {
        evt = evt || window.event;
        var isEscape = false;
        if ("key" in evt) {
            isEscape = (evt.key == "Escape" || evt.key == "Esc");
        } else {
            isEscape = (evt.keyCode == 27);
        }
        if (isEscape) {
            document.getElementById("contenido").classList.remove('pantalla2');
        }
    };
});

