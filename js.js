const animalesEnGranja = [
    {
        nombre: "Fido",
        edad: 3,
        color: "blanco",
        unidadDeEdad: "años",
        tipo: "perro",
        genero: "macho"
    },
    
    {
        nombre: "Duck",
        edad: 7,
        color: "blanco",
        unidadDeEdad: "meses",
        tipo: "pato",
        genero: "macho"
    },
    {
        nombre: "Meep",
        edad: 2,
        color: "negro",
        unidadDeEdad: "años",
        tipo: "oveja",
        genero: "macho"
    },
    {
        nombre: "Bolo",
        edad: 1,
        color: "blanco",
        unidadDeEdad: "años",
        tipo: "oveja",
        genero: "macho"
    },
    {
        nombre: "Maro",
        edad: 3,
        color: "plomo",
        unidadDeEdad: "años",
        tipo: "oveja",
        genero: "macho"
    },
    {
        nombre: "Mareen",
        edad: 3,
        color: "negro",
        unidadDeEdad: "años",
        tipo: "oveja",
        genero: "hembra"
    },
    {
        nombre: "Blanquita",
        edad: 2,
        color: "blanco",
        unidadDeEdad: "años",
        tipo: "oveja",
        genero: "hembra"
    },
    {
        nombre: "Susana",
        edad: 2,
        color: "plomo",
        unidadDeEdad: "años",
        tipo: "oveja",
        genero: "hembra"
    },
    {
        nombre: "Rita",
        edad: 2,
        color: "plomo",
        unidadDeEdad: "años",
        tipo: "oveja",
        genero: "hembra"
    },
    {
        nombre: "Boleen",
        edad: 3,
        color: "negro",
        unidadDeEdad: "años",
        tipo: "oveja",
        genero: "hembra"
    },

    {
        nombre: "Pipo",
        edad: 2,
        color: "negro",
        unidadDeEdad: "años",
        tipo: "perro",
        genero: "macho"
    },
    {
        nombre: "Pelusa",
        edad: 5,
        color: "naranja",
        unidadDeEdad: "años",
        tipo: "perro",
        genero: "hembra"
    },
    {
        nombre: "Cucu",
        edad: 18,
        color: "azul",
        unidadDeEdad: "meses",
        tipo: "pavo",
        genero: "macho"
    },
    {
        nombre: "Rurururu",
        edad: 13,
        color: "rosado",
        unidadDeEdad: "meses",
        tipo: "pavo",
        genero: "hembra"
    },
    {
        nombre: "Rooster",
        edad: 12,
        color: "naranja",
        unidadDeEdad: "meses",
        tipo: "gallo",
        genero: "macho"
    },
    {
        nombre: "Cocoroca",
        edad: 6,
        color: "negro",
        unidadDeEdad: "meses",
        tipo: "gallina",
        genero: "hembra"
    },
    {
        nombre: "Piu",
        edad: 1,
        color: "blanco",
        unidadDeEdad: "mes",
        tipo: "pollito",
        genero: "hembra"
    },
    {
        nombre: "Piu-Piu",
        edad: 1,
        color: "blanco",
        unidadDeEdad: "mes",
        tipo: "pollito",
        genero: "macho"
    },
    {
        nombre: "Horse",
        edad: 3,
        color: "negro",
        unidadDeEdad: "años",
        tipo: "caballo",
        genero: "macho"
    },
    {
        nombre: "Eponyta",
        edad: 2,
        color: "marron",
        unidadDeEdad: "años",
        tipo: "caballo",
        genero: "hembra"
    },
]

const tiempoDeVidaPorAnimales = [
    {
        animal: "perro",
        tiempo: 14,
        unidadTiempo: "años",
    },
    {
        animal: "pato",
        tiempo: 5,
        unidadTiempo: "años",
    },
    {
        animal: "oveja",
        tiempo: 7,
        unidadTiempo: "años",
    },
    {
        animal: "caballo",
        tiempo: 20,
        unidadTiempo: "años",
    },
    {
        animal: "pavo",
        tiempo: 5,
        unidadTiempo: "años",
    },
    {
        animal: "ave",
        tiempo: 5,
        unidadTiempo: "años",
    }
]


function cargarDatos(){

    const divAnimales = document.getElementById("divAnimales");
    let html="";
    for (let index = 0; index < animalesEnGranja.length; index++) {

        html += 
        `<div class="animales">
            <label> ${animalesEnGranja[index].nombre} </label>
            <label> ${animalesEnGranja[index].tipo} </label>
            <label> ${animalesEnGranja[index].color} </label>`;

            if (animalesEnGranja[index].unidadDeEdad == "años") {
                html+= `<label> ${animalesEnGranja[index].edad * 12} en meses </label>`;
            }else{
                html+= `<label> ${animalesEnGranja[index].edad} en meses </label>`;
            }
        html+=  `</div>`;
        
        // 
    }
    divAnimales.innerHTML  = html;
}

function filtrarTipo(){ 
    const filtroSelect = document.getElementById("filtro").value;
    const filtroColor = document.getElementById("filtroColor").value;
    const divAnimales = document.getElementById("divAnimales");
    let html="";
    /*
    
    escenarios
    1. que no tenga filtro
    2. filtro de tipo de animal y no color
    3. filtro de color y no animal
    4. que tenga ambos
    */

    if (!filtroSelect && !filtroColor) {
        cargarDatos();
    }
    if (filtroSelect && !filtroColor) {
        for (let index = 0; index < animalesEnGranja.length; index++) {

            if (animalesEnGranja[index].tipo.toUpperCase() == filtroSelect.toUpperCase()) {
                html +=
                `<div  class="animales">
                  <label> ${animalesEnGranja[index].nombre} </label>
                  <label> ${animalesEnGranja[index].tipo} </label>
                  <label> ${animalesEnGranja[index].color} </label>`;

                if (animalesEnGranja[index].unidadDeEdad == "años") {
                    html+= `<label> ${animalesEnGranja[index].edad * 12} en meses </label>`;
                }else{
                    html+= `<label> ${animalesEnGranja[index].edad} en meses </label>`;
                }
                html+=  `</div>`;
            
            }    
        }
        divAnimales.innerHTML  = html;
        
    }
    if (!filtroSelect && filtroColor) {
        for (let index = 0; index < animalesEnGranja.length; index++) {

            if (animalesEnGranja[index].color.toUpperCase() == filtroColor.toUpperCase()) {
                html +=
                `<div  class="animales">
                  <label> ${animalesEnGranja[index].nombre} </label>
                  <label> ${animalesEnGranja[index].tipo} </label>
                  <label> ${animalesEnGranja[index].color} </label>`;

                if (animalesEnGranja[index].unidadDeEdad == "años") {
                    html+= `<label> ${animalesEnGranja[index].edad * 12} en meses </label>`;
                }else{
                    html+= `<label> ${animalesEnGranja[index].edad} en meses </label>`;
                }
                html+=  `</div>`;
         
            }    
        }
        divAnimales.innerHTML  = html;
    }
    if (filtroSelect && filtroColor) {
        for (let index = 0; index < animalesEnGranja.length; index++) {

            if (animalesEnGranja[index].tipo.toUpperCase() == filtroSelect.toUpperCase() && animalesEnGranja[index].color.toUpperCase() == filtroColor.toUpperCase()) {
                html +=
                `<div  class="animales">
                  <label> ${animalesEnGranja[index].nombre} </label>
                  <label> ${animalesEnGranja[index].tipo} </label>
                  <label> ${animalesEnGranja[index].color} </label>`;

                if (animalesEnGranja[index].unidadDeEdad == "años") {
                    html+= `<label> ${animalesEnGranja[index].edad * 12} en meses </label>`;
                }else{
                    html+= `<label> ${animalesEnGranja[index].edad} en meses </label>`;
                }
                html+=  `</div>`;
         
            }    
        }
        divAnimales.innerHTML  = html;
    }

  

}

function filtrarColor(){
    const filtroSelect = document.getElementById("filtro").value;
    const filtroColor = document.getElementById("filtroColor").value;
    const divAnimales = document.getElementById("divAnimales");
    let html="";
    /*
    
    escenarios
    1. que no tenga filtro
    2. filtro de tipo de animal y no color
    3. filtro de color y no animal
    4. que tenga ambos
    */

    if (!filtroSelect && !filtroColor) {
        cargarDatos();
    }
    if (filtroSelect && !filtroColor) {
        for (let index = 0; index < animalesEnGranja.length; index++) {

            if (animalesEnGranja[index].tipo.toUpperCase() == filtroSelect.toUpperCase()) {
                html +=
                `<div  class="animales">
                  <label> ${animalesEnGranja[index].nombre} </label>
                  <label> ${animalesEnGranja[index].tipo} </label>
                  <label> ${animalesEnGranja[index].color} </label>`;

                if (animalesEnGranja[index].unidadDeEdad == "años") {
                    html+= `<label> ${animalesEnGranja[index].edad * 12} en meses </label>`;
                }else{
                    html+= `<label> ${animalesEnGranja[index].edad} en meses </label>`;
                }
                html+=  `</div>`;
         
            }    
        }
        divAnimales.innerHTML  = html;
        
    }
    if (!filtroSelect && filtroColor) {
        for (let index = 0; index < animalesEnGranja.length; index++) {

            if (animalesEnGranja[index].color.toUpperCase() == filtroColor.toUpperCase()) {
                html +=
                `<div  class="animales">
                  <label> ${animalesEnGranja[index].nombre} </label>
                  <label> ${animalesEnGranja[index].tipo} </label>
                  <label> ${animalesEnGranja[index].color} </label>`;

                if (animalesEnGranja[index].unidadDeEdad == "años") {
                    html+= `<label> ${animalesEnGranja[index].edad * 12} en meses </label>`;
                }else{
                    html+= `<label> ${animalesEnGranja[index].edad} en meses </label>`;
                }
                html+=  `</div>`;
         
            }    
        }
        divAnimales.innerHTML  = html;
    }
    if (filtroSelect && filtroColor) {
        for (let index = 0; index < animalesEnGranja.length; index++) {

            if (animalesEnGranja[index].tipo.toUpperCase() == filtroSelect.toUpperCase() && animalesEnGranja[index].color.toUpperCase() == filtroColor.toUpperCase()) {
                html +=
                `<div  class="animales">
                  <label> ${animalesEnGranja[index].nombre} </label>
                  <label> ${animalesEnGranja[index].tipo} </label>
                  <label> ${animalesEnGranja[index].color} </label>`;

                if (animalesEnGranja[index].unidadDeEdad == "años") {
                    html+= `<label> ${animalesEnGranja[index].edad * 12} en meses </label>`;
                }else{
                    html+= `<label> ${animalesEnGranja[index].edad} en meses </label>`;
                }
                html+=  `</div>`;
         
            }    
        }
        divAnimales.innerHTML  = html;
    }

}

function filtrarEdades(){

    const edadInicial = document.getElementById("edadInicial").value;
    const edadFinal = document.getElementById("edadFinal").value;
    const divAnimales = document.getElementById("divAnimales");
    
    let html="";

   if (edadInicial && edadFinal ) {
       for (let index = 0; index < animalesEnGranja.length; index++) {

        let edadAnimalMeses = 0;
        if (animalesEnGranja[index].unidadDeEdad == "años") {
            edadAnimalMeses = animalesEnGranja[index].edad * 12;
        }else{
            edadAnimalMeses =  animalesEnGranja[index].edad;
        }

           if (edadAnimalMeses >= edadInicial && edadAnimalMeses <= edadFinal ) {


            html += 
            `<div class="animales">
                <label> ${animalesEnGranja[index].nombre} </label>
                <label> ${animalesEnGranja[index].tipo} </label>
                <label> ${animalesEnGranja[index].color} </label>`;
    
                if (animalesEnGranja[index].unidadDeEdad == "años") {
                    html+= `<label> ${animalesEnGranja[index].edad * 12} en meses </label>`;
                }else{
                    html+= `<label> ${animalesEnGranja[index].edad} en meses </label>`;
                }
            html+=  `</div>`;
           }
       }
       divAnimales.innerHTML = html;
   }
   if (!edadInicial && edadFinal) {
       for (let index = 0; index < animalesEnGranja.length; index++) {
        let edad=0;
        if (animalesEnGranja[index].unidadDeEdad == "años") {
            edad = animalesEnGranja[index].edad * 12 ;
        }else{
            edad = animalesEnGranja[index].edad;
        }
        if ( edad <= edadFinal) {
            html +=
            `<div  class="animales">
              <label> ${animalesEnGranja[index].nombre} </label>
              <label> ${animalesEnGranja[index].tipo} </label>
              <label> ${animalesEnGranja[index].color} </label>`;

            if (animalesEnGranja[index].unidadDeEdad == "años") {
                html+= `<label> ${animalesEnGranja[index].edad * 12} en meses </label>`;
            }else{
                html+= `<label> ${animalesEnGranja[index].edad} en meses </label>`;
            }
            html+=  `</div>`;
        }
          }

          divAnimales.innerHTML= html;




       
   }
   if (edadInicial && !edadFinal) {

    for (let index = 0; index < animalesEnGranja.length; index++) {
        let edad = 0
        if (animalesEnGranja[index].unidadDeEdad == "años") {
            edad = animalesEnGranja[index].edad * 12;
        }else{
            edad = animalesEnGranja[index].edad;
        }
        if (edad >= edadInicial) {
            html +=
            `<div  class="animales">
              <label> ${animalesEnGranja[index].nombre} </label>
              <label> ${animalesEnGranja[index].tipo} </label>
              <label> ${animalesEnGranja[index].color} </label>`;

            if (animalesEnGranja[index].unidadDeEdad == "años") {
                html+= `<label> ${animalesEnGranja[index].edad * 12} en meses </label>`;
            }else{
                html+= `<label> ${animalesEnGranja[index].edad} en meses </label>`;
            }
            html+=  `</div>`;
     
        }    
    }
    divAnimales.innerHTML  = html;

   }
   if (!edadInicial && !edadFinal) {
    cargarDatos();
   }      
}

function animalesEnBola(){
    const divBolitas = document.getElementById("divBolitas");
    let html="";
    for (let index = 0; index < animalesEnGranja.length; index++) {

        html += 
        `<div class="bola flex-row m-r-5 align-items ${animalesEnGranja[index].color} justify-content ">`;

        if (animalesEnGranja[index].color == "negro") {
           html+= `<label class="letraBlanca"> ${animalesEnGranja[index].tipo.substring(0,2).toUpperCase()} </label>`;
        }else{
            html+= `<label > ${animalesEnGranja[index].tipo.substring(0,2).toUpperCase()} </label>`;
        }

             
         html += `</div>`;
    }
    divBolitas.innerHTML =html;
    
}



function dosCorrales(){
    const animalesNegros = document.getElementById("animalesNegros");
    const otrosAnimales  = document.getElementById("otrosAnimales");
    let html="";

    for (let index = 0; index < animalesEnGranja.length; index++) {

        if (animalesEnGranja[index].color == "negro") {

            html+=
            `<div class="bola  ${animalesEnGranja[index].color} letraBlanca flex-row m-r-5 align-items justify-content">
             <label> ${animalesEnGranja[index].tipo} </label>
             </div>`
        }
   
    }
    animalesNegros.innerHTML = html;

    let thmlNoNegros="";

    for (let index = 0; index < animalesEnGranja.length; index++) {

        if (animalesEnGranja[index].color != "negro") {

            thmlNoNegros+=
            `<div class="bola  ${animalesEnGranja[index].color} flex-row m-r-5 align-items justify-content">
             <label> ${animalesEnGranja[index].tipo} </label>
             </div>`
        }
   
    }
    otrosAnimales.innerHTML = thmlNoNegros;
}

const listadoDeNegros = [];
const animalesDeColores = [];
function agruparAnimal(){


    for (let index = 0; index < animalesEnGranja.length; index++) {

        if (animalesEnGranja[index].color == "negro") {
            listadoDeNegros.push(animalesEnGranja[index]);
                          
        }else{
            animalesDeColores.push(animalesEnGranja[index]);          
        }      
    }
    mostrarHtml()
} 

function moverAnimal(){
    
    const elementoAgregar= listadoDeNegros[0];
    animalesDeColores.push(elementoAgregar);

    listadoDeNegros.splice(0,1);
    mostrarHtml()  
}

function mostrarHtml(){
    let p="";
    let k="";
    const animaNegro = document.getElementById("animaNegro");
    const animaColor = document.getElementById("animaColor");

    for (let o = 0; o < listadoDeNegros.length; o++) {

        p+=
        `<div class="bola  ${listadoDeNegros[o].color} flex-row letraBlanca m-r-5 align-items justify-content">
             <label> ${listadoDeNegros[o].tipo} </label>
        </div>`
      
    }
    animaNegro.innerHTML=p;


    for (let l = 0; l < animalesDeColores.length; l++) {
        
        k+=
            `<div class="bola  ${animalesDeColores[l].color} flex-row  m-r-5 align-items justify-content">
                <label> ${animalesDeColores[l].tipo} </label>
            </div>`
        
    }
    animaColor.innerHTML=k;
}


const string = "hola";
const dosLetras = string.substring(0,2);
console.log(dosLetras)


function funcionesIniciales(){
    cargarDatos();
    animalesEnBola();
    dosCorrales();
    agruparAnimal();
  

};
