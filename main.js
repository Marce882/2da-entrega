//let boton = document.getElementById("boton")
//boton.onclick = reservar()


function reservar() {

    class Reserva {
        constructor(nombre, apellido, horario, origen, destino) {
            this.nombre = nombre;
            this.apellido = apellido;
            this.horario = horario;
            this.origen = origen;
            this.destino = destino

        }
    }
    console.log('reservado')

    let nombreRes = document.getElementById("nombre").value
    let apellidoRes = document.getElementById("apellido").value
    let horarioRes = document.getElementById("horario").value
    let origenRes = document.getElementById("origen").value
    let destinoRes = document.getElementById("destino").value
    //console.log(nombreRes, apellidoRes, horarioRes, origenRes, destinoRes)
    
    nuevaReserva = new Reserva(nombreRes,apellidoRes,horarioRes,origenRes,destinoRes)
    console.log(nuevaReserva)
    listar()
}
let reservasListar = []

function listar(){
    console.log('listado')
    reservasListar.push(nuevaReserva)
    console.log(reservasListar)
    document.getElementById("tabla").innerHTML += '<tbody><td>'+nuevaReserva.nombre+'</td><td>'+nuevaReserva.apellido'</td><td>'22 hs'</td><td>'Cañuelas'</td><td>'Cap Fed'</td></tbody>'

}


