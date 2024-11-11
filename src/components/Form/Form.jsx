export function Form () {

  function submitToContacto (event) {
    event.preventDefault();
  }

  function sendToWhatsapp () {
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let empresa = document.getElementById('empresa').value;
    let correo = document.getElementById('correo').value;
    let telefono = document.getElementById('telefono').value;
    let mensaje = document.getElementById('mensaje').value;

    const numeroTelefono = 51927907173;

    let whatsappMessage = `Hola!%0A` +
                          `Mi nombre es: ${nombre}%0A` +
                          `Mi appelido es: ${apellido}%0A` +
                          `Mi empresa es: ${empresa}%0A` +
                          `Mi correo es: ${correo}%0A` +
                          `Mi telefono es: ${telefono}%0A` +
                          `Mensaje: ${mensaje}`;

    const whatsappUrl = `https://wa.me/${numeroTelefono}?text=${whatsappMessage}`;

    if ( nombre && apellido && empresa && correo && telefono && mensaje ) {
      window.open(whatsappUrl, '_blank');
      document.getElementById('mensaje').value = '';
      document.getElementById('nombre').value = '';
      document.getElementById('apellido').value = '';
      document.getElementById('empresa').value = '';
      document.getElementById('correo').value = '';
      document.getElementById('telefono').value = '';
    }
  }

  return (
    <>
      <form className="p-4 formContacto" onSubmit={submitToContacto}>
        <div className="d-flex gap-3 mb-3">
          <input type="text" name="nombre" className="form-control" id="nombre" placeholder="Nombre" required/>
          <input type="text" name="apellido" className="form-control" id="apellido" placeholder="Apellido" required/>
        </div>
        <div className="d-flex gap-3 mb-3">
          <input type="text" name="empresa" className="form-control" id="empresa" placeholder="Empresa" required/>
          <input type="tel" name="telefono" className="form-control" id="telefono" placeholder="Telefono" required/>
        </div>
        <input type="email" name="correo" className="form-control mb-3" id="correo" placeholder="Correo" required/>
        <textarea name="mensaje" id="mensaje" cols="30" rows="7" className="form-control mb-3" placeholder="Mensaje" required></textarea>
        <div className="d-flex justify-content-end gap-4">
          <button type="button" onClick={sendToWhatsapp} className="whats-btn">Enviar Datos al Whatsapp </button>
          <button type="submit" onSubmit={submitToContacto} className="form-btn">Enviar Datos </button>
        </div>
      </form>
    </>
  )
}