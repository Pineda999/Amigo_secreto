let ListaAmigos=[];
let sorteo=[];

function agregarAmigo(){

   let amigo =document.getElementById("amigo").value;

   //validar que el campo no vaya vacio
   if(amigo==false){
    amigoSorteado("p","Por favor indique un nombre valido")
   }else{
    //guarda los nombre
        ListaAmigos.push(amigo);
    //muestra lista amigo y limpia el campo para insertar mas nombres    
        if (true){
            MostrarAmigos();
            limpiarCampo();
    }   
        }
}

function sortearAmigo(){
    //con el numero que devuelve al azar, se le pone al indice de la variable ListaAmigo
    let numeroAleatorio= Math.floor(Math.random()*(ListaAmigos.length));

    //Valida que no este vacio la ListaAmigos
    if(ListaAmigos==false){
        amigoSorteado("p","No se han insertado nombres");
    }else{
        if(ListaAmigos.length==1){
            amigoSorteado("h4","El juego es valido desde dos juegadores en adelante");
        }else{
            //verifica que todos los nombres fueron sorteados
            if(sorteo.length==ListaAmigos.length){
                amigoSorteado("h4","Todos los nombres ya fueron sorteados");
                EliminarAmigos();
            }else{
                //Descarta nombres ya sorteados
                if(sorteo.includes(numeroAleatorio)){
                    return sortearAmigo();
                }else{
                //Sorteo lleva un conteo de los nombres ya sorteados    
                    sorteo.push(numeroAleatorio);
                //Muestra el nombre del amigo que le toco
                    amigoSorteado("#resultado", `El amigo sorteado es: ${ListaAmigos[numeroAleatorio]}`);
                    return ListaAmigos;
                }
            }
        }        
    }
}

//mensaje del amigo seleccionado
function amigoSorteado(elemento, nombretxt){
    let nombreHTML=document.querySelector(elemento);
    nombreHTML.innerHTML = nombretxt;

//limpia la lista de amigos
    let mostrarLista= document.querySelector("#amigo").value;
   document.querySelector("#listaAmigos").innerHTML ="";
}

//limpia el input
function limpiarCampo(){
    document.getElementById("amigo").value="";
}

//lista de los nombres que se han añadido
function MostrarAmigos(){
   let mostrarLista= document.querySelector("#amigo").value;
   document.querySelector("#listaAmigos").innerHTML +="<li>"+mostrarLista+"</li>";
    return;
}

//reinicia el juego automaticamente 
function EliminarAmigos(){
    ListaAmigos=[];
    sorteo=[];
   let mostrarLista= document.querySelector("#amigo").value;
   document.querySelector("#listaAmigos").innerHTML ="";

   let nombreHTML=document.querySelector("#resultado");
   nombreHTML.innerHTML = "";

   amigoSorteado("p","");
}


//reinicia el juego desde el boton

function reinicia(){
    ListaAmigos=[];
    sorteo=[];
   let mostrarLista= document.querySelector("#amigo").value;
   document.querySelector("#listaAmigos").innerHTML ="";

   let nombreHTML=document.querySelector("#resultado");
   nombreHTML.innerHTML = "";

   amigoSorteado("p","");
   amigoSorteado("h4","");
}