const nombre = document.getElementById("nombreIn");
const apellido = document.getElementById("apellidoIn");
const invitados = JSON.parse(localStorage.getItem("invitados")) || [];
const cuerpoTabla = document.getElementById("cuerpoTabla");

console.log(invitados);

const agregarInvitado = () => {
  const invitado = {
    id: crypto.randomUUID(),
    nombre: nombre.value,
    apellido: apellido.value,
  };

  invitados.push(invitado);
  localStorage.setItem("invitados", JSON.stringify(invitados));
  mostrarInvitado();
};

const mostrarInvitado = () => {
  cuerpoTabla.innerHTML = "";
  invitados.forEach((invitado) => {
    cuerpoTabla.innerHTML += `<tr>
    <th scope="row">${invitado.id}</tr>
    <td>${invitado.nombre}</td>
    <td>${invitado.apellido}</td>
    <td>
    <button
        type="button"
        class="eliminarInvitados"
        onclick="eliminarInvitado('${invitado.id}')">Eliminar
        </button><td>    
    </tr>`;
  });
};

const eliminarInvitado = (id) => {
  console.log(id);
  localStorage.setItem("invitados", JSON.stringify(invitados));
};

const eliminarTodo = () => {
  localStorage.removeItem("invitados");
};
