// funcion de buscador llamada 

const buscador = document.getElementById('buscador')
buscador.addEventListener('input', e => {
  const textoBuscado = e.target.value;


  document.querySelectorAll('#idhijo').forEach(fila => {
      const primeraCelda =  fila.querySelector('#ididentidad');
      console.log(primeraCelda);
    const textoCelda = primeraCelda.textContent;

    if (textoCelda.includes(textoBuscado)) {
      fila.classList.remove('filtro');
    } else {
      fila.classList.add('filtro');
    }
  });
});

// gestion de clientes 
const formularioGestionClientes = document.getElementById('formularioGestionClientes');
const padreTabla = document.getElementById('TablaGestionClientes');


// informacion de los id de los input //
const identificacion = document.getElementById('identificacion');
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const placa = document.getElementById('placa');
const tipo = document.getElementById('tipo');
const correo = document.getElementById('correo');
const telefono = document.getElementById('telefono');


// array//
const gestionClientes = [];

// funcion listar clientes //
function listarClientes(gestionClientes){
    padreTabla.innerHTML = '';
    gestionClientes.forEach((e, index) => {
        let hijo = document.createElement('tr');
        hijo.classList.add('table-secondary','tabla');
        hijo.id = 'idhijo';  
        
        let clienteid = document.createElement('td');
        clienteid.textContent = `${e,idC}`;
        hijo.appendChild(clienteid) ;
        clienteid.id = 'identidad'; 

        let clientenombre = document.createElement('td');
        clientenombre.textContent = `${nombreC}`;
        hijo.appendChild(clientenombre);

        let clienteapellido = document.createElement('td');
        clienteapellido.textContent = `${e,apellidoC}`;
        hijo.appendChild(clienteapellido);

        let clienteplaca = document.createElement('td');
        clienteplaca.textContent = `${e,placaC}`;
        hijo.appendChild(clienteplaca);

        let clientetipo = document.createElement('td');
        clientetipo.textContent = `${e,tipoC}`;
        hijo.appendChild(clientetipo);

        let clientecorreo = document.createElement('td');
        clientecorreo.textContent = `${e,correoC}`;
        hijo.appendChild(clientecorreo);

        let clientetelefono = document.createElement('td');
        clientetelefono.textContent = `${e,telefonoC}`;
        hijo.appendChild(clientetelefono);


        // boton eliminar y editar //
        let botonEliminar = document.createElement('td');
        eliminarBoton = document.createElement('button');
        botonEditar = document.createElement('button');
        botonEditar.classList.add('btn', 'btn-primary');
        eliminarBoton.classList.add('btn', 'btn-danger');
        eliminarBoton.textContent ='eliminar'
        botonEditar.textContent ='editar';
        botonEditar.dataset.index = index;
        botonEliminar.appendChild(botonEditar);
        botonEliminar.appendChild(eliminarBoton);
        hijo.appendChild(botonEliminar);

        // se agrega el hijo al padre table//
        padreTabla.appendChild(hijo);

        //llamdo al boton eliminar //
        eliminarBoton.addEvenlistener('click', function(){
            eliminarCliente(index);
        });

        botonEditar.addEvenlistener('click', function(){
            editarCliente(index);
        });
        crearSelectorC();
    });
}

// funcion actualizar datos del cliente //
function editarCliente(index){
    const cliente = gestionClientes[index];
    identificacion.value = cliente.idC;
    nombre.value = cliente.nombreC;
    apellido.value = cliente.apellidoC;
    placa.value = cliente.placaC;
    tipo.value = cliente.tipoC;
    correo.value = cliente.correoC;
    telefono.value = cliente.telefonoC;

    formularioGestionClientes.addEventListener('submit', function (event) {
        event.preventDefault(); 
        cliente.idC = identificacion.value;
        cliente.nombreC = nombre.value;
        cliente.apellidoC = apellido.value;
        cliente.placaC = placa.value;
        cliente.tipoC = tipo.value;
        cliente.correoC = correo.value;
        cliente.telefonoC = telefono.value;

        listarClientes(gestionClientes);
        formularioGestionClientes.reset();  //reset formulario//

        formularioGestionClientes.addEventListener('submit',agregarCliente())
    });
}

// eliminar cliente //
function eliminarCliente(eliminar){
    gestionClientes.splice(eliminar,1)
    listarClientes(gestionClientes);
};

//agregar al form//
formularioGestionClientes.addEventListener('submit', agregarCliente);

// funcion agregar cliente//
function agregarCliente (event){
    event.preventDefault();
    const nuevoCliente = {};
    nuevoCliente.idC = identificacion.value;
    nuevoCliente.nombreC= nombre.value;
    nuevoCliente.apellidoC = apellido.value;
    nuevoCliente.placaC = placa.value;
    nuevoCliente.tipoC = tipo.value;
    nuevoCliente.correoC = correo.value;
    nuevoCliente.telefonoC = telefono.value;
    nuevoCliente.puntosC = 0;

    gestionClientes.push(nuevoCliente);
    listarClientes(gestionClientes);
    formularioGestionClientes.reset();
}

                                            // gestion servicios //

const formularioGestionServicios = document.getElementById('formularioGestionServicios');
const TablaGestionServicios = document.getElementById('TablaGestionServicios');

//inputs//
const servicio = document.getElementById('Cservicio');
const valor = document.getElementById('Cvalor');
const descripción = document.getElementById('Cdescripción');
const puntos = document.getElementById('puntos');

//array y contador //
const gestionServicios = [];
var contador = 1;

//prevent//
formularioGestionServicios.addEventListener('submit', function(event){
    event.preventDefault();
    let newServicio = {};
    newServicio.id = contador;
    newServicio.Cservicio = servicio.value;
    newServicio.Cvalor = valor.value;
    newServicio.Cdescripción = descripción.value;
    newServicio.pts = puntos.value;
    contador++
    gestionServicios.push(newServicio);
    listarServicios(gestionServicios);
    formularioGestionClientes.reset();
    crearSelectorS();
});

// LISTAR SERVICIOS ///
function listarServicios(servicios){
    TablaGestionServicios.innerHTML = '';

    gestionServicios.forEach ((e, index) => {
        let hijoServicios = document.createElement('tr');
        hijoServicios.classList.add('table-secondary', 'tabla');

        let iden = document.createElement('td');
        iden.textContent = `${e.id}`;
        hijoServicios.appendChild(iden);

        let nS = document.createElement('td');
        nS.textContent = `${e.Cservicio}`;
        hijoServicios.appendChild(nS)

        let vL = document.createElement('td');
        vL.textContent = `${e.Cvalor}`;
        hijoServicios.appendChild(vL);

        let desC = document.createElement('td');
        desC.textContent = `${e.Cdescripción}`;
        hijoServicios.appendChild(desC);

        let pts = document.createElement('td');
        pts.textContent = `${e.puntos}`;
        hijoServicios.appendChild(pts);

        TablaGestionServicios.appendChild(hijoServicios);


        //btn eliminar//
        let btnEliminar = document.createElement('td');
        elimarBtn = document.createElement('button');
        elimarBtn.classList.add('btn', 'btn-danger');
        elimarBtn.textContent = 'eliminar'
        btnEliminar.appendChild(elimarBtn);
        hijoServicios.appendChild(btnEliminar);


        //llamado btn eliminar //
        btnEliminar.addEventListener('click', function(){
            eliminarServicio(index);
        });

    });
}

function eliminarServicio(index){
    gestionServicios.splice(index,1)
    listarServicios(gestionServicios)
}

// compra de servicios 

const formularioCompras = document.getElementById('formularioCompras');
const selectCliente = document.getElementById('selectCliente');
const selectServicio = document.getElementById('selectServicio');

formularioCompras.addEventListener('submit', function(event){
    event.preventDefault()
    let cedula = '';
    let valorServicio = 0;
    let puntos = 0;

    for(let servicio of gestionServicios){
        if(servicio.vservicio == selectServicio.value){
            valorServicio =parseFloat(servicio.Cvalor)
            puntos = parseFloat(servicio.pts);
        }
    }
    for(let cliente of gestionClientes){
        if(cliente.nombreC == selectCliente.value){
            cedula = cliente.idC;
            cliente.puntosC += puntos;
        }
    }
    alert (`        *Resumen de la compra*

        identificacion:  ${cedula}
        nombre cliente:  ${selectCliente.value}
        nombre servicio: ${selectServicio.value}
        valor Total:     ${valorServicio *0.26}
        puntos ganados:  ${puntos}`)
        totalPuntos(); 
});

function crearSelectorC (){
    selectCliente.innerHTML = '<option selected>seleccionar cliente</option'

    for(let cliente of gestionClientes){
        if(gestionClientes.length == 0){
            return
        }
    const crearOpcionCliente = document.createElement('option');
    crearOpcionCliente.textContent = cliente.nombreC;
    selectCliente.appendChild(crearOpcionCliente);
} 
}

function crearSelectorS (){
    selectServicio.innerHTML = '<option selected>seleccionar servicio</option>'

    for(let newServicio of gestionServicios ){
        if(gestionServicios.length == 0){
            return
        }
        const crearOpcionServicio = document.createElement('option');
        crearOpcionServicio.textContent = newServicio.servicio;
        selectServicio.appendChild(crearOpcionServicio);
    }
}

// puntos

const TablaFidelizacion = document.getElementById('TablaFidelizacion');


function totalPuntos(){
  TablaFidelizacion.innerHTML = '';   //para que lo tome vacio en el html//
  
  // recorriendo el array de clientesGestion //
  for(cliente of gestionClientes){
    if(cliente.puntosC != 0){
      const filaPuntos = document.createElement('tr')  //se crea la fila o el text row para guardar en la tabla//
      filaPuntos.innerHTML = `<td> ${cliente.nombreC}</td>
                              <td>${cliente.apellidoC}</td>
                              <td>${cliente.puntosC}</td>`
                              TablaFidelizacion.appendChild(filaPuntos); // filaPuntos es el hijo de la tablaFidelizacion//
    }
  
  }
}


