import React, { Fragment, useState } from "react";

const Formulario = () => {
  // Crear State de Citas
  const [cita, actualizarCita] = useState({
    mascota: "",
    fecha: "",
    hora: "",
    sintomas: ""
  });

  // Funcion que se ejecuta cada vez que el usuario escribe en un imput
  const actualizarState = e => {
    actualizarCita({
      ...cita,
      [e.target.name]: e.target.value
    });
  };

  //Extraer los valores
  const { mascota, propietario, fecha, hora, sintomas } = cita;

  return (
    <Fragment>
      <h2>Crear cita</h2>

      <form>
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre Mascota"
          onChange={actualizarState}
          value={mascota}
        />

        <label>Nombre del Dueño</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre del Dueño"
          onChange={actualizarState}
          value={propietario}
        />

        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width bg-success"
          onChange={actualizarState}
          value={fecha}
        />

        <label>Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={actualizarState}
          value={hora}
        />

        <label>Sintomas</label>
        <textarea
          name="sintomas"
          className="u-full-width"
          onChange={actualizarState}
          value={sintomas}
        ></textarea>

        <button type="submit" className="u-full-width button-primary">
          Agregar Cita
        </button>
      </form>
    </Fragment>
  );
};

export default Formulario;
