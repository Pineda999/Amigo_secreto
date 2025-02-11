let ListaAmigos=[];

function agregarAmigo(){
   let amigo =document.getElementById("amigo").value;

   if(amigo==false){
        alert("Por favor, digite un nombre valido");
   }else{
        ListaAmigos.push(amigo);
        if (true){
            Texto();
            limpiarCampo();
    }   
        }
    console.log(ListaAmigos);
}

function sortearAmigo(){
    console.log("funciona sortear")
}

function limpiarCampo(){
    document.getElementById("amigo").value="";
}

function Texto(){
   let mostrarLista= document.querySelector("#amigo").value;
   document.querySelector("#listaAmigos").innerHTML +="<li>"+mostrarLista+"</li>";
    return;
}
