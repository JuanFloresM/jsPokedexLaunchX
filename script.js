var namePokemon = document.getElementById("pokemon");
var inputHTML = document.getElementById("pokemon");
var buttonGO = document.getElementById("go");
var imgHTML = document.getElementById("pokeball");
var buttonBack = document.getElementById("back");
var pantallaVerde = document.getElementById("pantalla-verde");
var altura=document.getElementById("inf-izq-neg");
var peso=document.getElementById("inf-der-neg");
var tipok = document.getElementById("tipo-pokemon");

function fetchPokemon(name){
    if(name==''){
        imagenPokemon("./error.gif");
    }else{
        name=name.toLowerCase();
        const url="https://pokeapi.co/api/v2/pokemon/"+name;
        fetch(url).then((res)=>{
            if(res.status!='200'){
                imagenPokemon("./error.gif");
            }else{
                return res.json();
            }
        }).then((data)=>{
            imagenPokemon(data.sprites.front_default);
            nombreNumeroPokemon(data.name, data.id);       
            alturaPeso(data.height,data.weight);
            tipoPokemon(data.types[0].type.name);
            estadisticasPokemon(data.stats);
            movimientos(data.moves);
        });
    }
}

function imagenPokemon(url){
    imgHTML.style.display="block";
    imgHTML.style.width="70%";
    imgHTML.style.marginTop="7%";
    imgHTML.src=url;
}

function nombreNumeroPokemon(nombre, id){
    nombre=nombre.split('');
    nombre[0]=nombre[0].toUpperCase();
    nombre=nombre.join('');
    pantallaVerde.innerHTML=nombre+"<br>No."+id;
}

function alturaPeso(alt,pes){
    altura.innerHTML="Altura: "+(alt*10)/100+" M";
    peso.innerHTML="Peso: "+pes/10+" Kg";
}

function tipoPokemon(tipo){
    tipo=tipo.split('');
    tipo[0]=tipo[0].toUpperCase();
    tipo=tipo.join('');
    tipok.innerHTML="<b>Tipo:</b> "+tipo;
}


function estadisticasPokemon(stats){
    document.getElementById("est1").innerHTML="<b>Hp:</b> "+stats[0].base_stat;
    document.getElementById("est2").innerHTML="<b>Atk:</b> "+stats[1].base_stat;
    document.getElementById("est3").innerHTML="<b>Def:</b> "+stats[2].base_stat;
    document.getElementById("est4").innerHTML="<b>SAtk:</b> "+stats[3].base_stat;
    document.getElementById("est5").innerHTML="<b>SDef:</b> "+stats[4].base_stat;
    document.getElementById("est6").innerHTML="<b>Speed:</b> "+stats[5].base_stat;
}

function movimientos(mov){
    document.getElementById('mov1').innerHTML="<b>"+mov[0].move.name+"</b>";
    document.getElementById('mov2').innerHTML="<b>"+mov[1].move.name+"</b>";
    document.getElementById('mov3').innerHTML="<b>"+mov[2].move.name+"</b>";
    document.getElementById('mov4').innerHTML="<b>"+mov[3].move.name+"</b>";
    console.log(mov[0].move.name);
}

function peticion(){    
    namePokemon = namePokemon.value.toLowerCase();
    inputHTML.style.display="none";
    buttonGO.style.display="none";
    imgHTML.style.display="none";
    buttonBack.style.display="block";
    fetchPokemon(namePokemon);
}

function atras(){
    location.reload();
}
