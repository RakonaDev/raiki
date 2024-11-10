export function activarItemXScroll($navItem) {
  let scrollInicio =
    document.querySelector(".dividor").scrollHeight +
    document.querySelector("#inicio").scrollHeight -
    60;
  let scrollNosotros =
    document.querySelector("#nosotros").scrollHeight + scrollInicio - 60;
  let scrollServicios =
    document.getElementById("servicios").scrollHeight + scrollNosotros - 60;
  let scrollProyectos =
    document.getElementById("proyectos").scrollHeight + scrollServicios - 60;

  if (window.scrollY >= 0 && window.scrollY <= scrollInicio) {
    EliminarActive();
    $navItem[0].classList.add("active");
  } else if (
    window.scrollY > scrollInicio &&
    window.scrollY <= scrollNosotros
  ) {
    EliminarActive();
    $navItem[1].classList.add("active");
  } else if (
    window.scrollY > scrollNosotros &&
    window.scrollY <= scrollServicios
  ) {
    EliminarActive();
    $navItem[2].classList.add("active");
  } else if (
    window.scrollY > scrollServicios &&
    window.scrollY <= scrollProyectos
  ) {
    EliminarActive();
    $navItem[3].classList.add("active");
  }
}

export function EliminarActive() {
  const $navBoton = document.querySelectorAll(".lista-item");
  $navBoton.forEach((item) => {
    item.classList.remove("active");
  });
}