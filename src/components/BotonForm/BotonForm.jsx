import { useEffect, useState } from "react";
import "./BotonForm.css";
import { Contact } from "../../iconos/Contact";
import { Form } from "../Form/Form";

export function BotonForm() {
  const [mostrarForm, setMostrarForm] = useState(false);

  useEffect(() => {
    if (mostrarForm) {
      document.getElementById("formContacto").classList.add("mostrar");
    } else {
      document.getElementById("formContacto").classList.remove("mostrar");
    }
  }, [mostrarForm]);

  return (
    <>
      <button
        type="button"
        className="boton-form"
        onClick={() => setMostrarForm(!mostrarForm)}
      >
        <Contact /> <span className="my-auto fs-5">Contáctanos</span>
      </button>
      <div className={"form-container"} id="formContacto">
        <div className="d-flex justify-content-end px-4 pt-3">
          <button
            type="button"
            className="close"
            onClick={() => setMostrarForm(false)}
          >
            <i className="fa-solid fa-xmark text-black fs-3"></i>
          </button>
        </div>
        <Form />
      </div>
    </>
  );
}
