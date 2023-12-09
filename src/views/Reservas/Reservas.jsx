
import { useState } from 'react';
import { Button, Col, Form, Row, Container } from 'react-bootstrap';
import '../Reservas/Reservas.css';
import { db } from "../../config/Firebase";
import { collection, addDoc } from 'firebase/firestore';
import ListaReservas from '../../componentes/ListaReservas';

function Reservas() {
  // Estados para cada campo del formulario
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [fechaHora, setFechaHora] = useState('');
  const [telefono, setTelefono] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [comensales, setComensales] = useState('');
  const [terminos, setTerminos] = useState(false);
  
  // Estado para la validación del formulario
  const [validated, setValidated] = useState(false);
  
  // Estado para la confirmación de la reserva
  const [reservaRealizada, setReservaRealizada] = useState(false);

  // Función para guardar la reserva en Firebase
  const guardarReserva = async (datosReserva) => {
    try {
      await addDoc(collection(db, "Reservas"), datosReserva);
      setReservaRealizada(true); // Marcar la reserva como realizada
      console.log('Datos del formulario', { nombre, email, telefono, ciudad, mensaje, comensales,fechaHora });
    } catch (error) {
      console.error("Error al guardar la reserva: ", error);
    }
  };

  // Manejador del envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      // Crear objeto con los datos del formulario
      const datosReserva = { nombre, email, fechaHora, telefono, ciudad, mensaje, comensales };
      guardarReserva(datosReserva); // Llamar a la función para guardar los datos
    }
    setValidated(true); // Activar la validación de Bootstrap
  };

  // Si la reserva se realizó con éxito, mostrar mensaje de confirmación
  if (reservaRealizada) {
    return (
      <Container className="my-3 px-3">
        <h2>Reserva Realizada</h2>
        <p>¡Tu reserva ha sido confirmada con éxito!</p>
        <ListaReservas />
      </Container>
    );
  }

  // Renderizar formulario de reserva
  return (
    <Container className="my-3 px-3">
      <Row className="m-5">
        {/* Información de contacto */}
        <Col md={6} className="datos_contacto mb-2">
          <h2>Reserva con nosotros</h2>
          <h6>Tras tu contacto, nos pondremos en comunicación contigo para confirmar fechas y disponibilidad de horarios.</h6>
          <br />
          <Container fluid>
            <h6>Teléfono: +1 (555) 123-4567</h6>
            <h6>contacto@bestchoice.com</h6>
          </Container>
        </Col>
        {/* Formulario de reserva */}
        <Col md={6} className="formulario_reserva mb-2">
          <h2>Formulario de Reservas</h2>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
              {/* Entrada para el nombre */}
              <Form.Group as={Col} controlId="validationCustom01">
                <Form.Label>Nombre Completo</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
                <Form.Control.Feedback>¡Todo correcto!</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              {/* Entrada para el correo electrónico */}
              <Form.Group as={Col} md="4" controlId="validationCustom03">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                  Por favor, introduce un email válido.
                </Form.Control.Feedback>
              </Form.Group>

              {/* Entrada para el teléfono */}
              <Form.Group as={Col} md="4" controlId="validationCustom04">
                <Form.Label>Teléfono</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Teléfono"
                  required
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                  Por favor, introduce un número de teléfono válido.
                </Form.Control.Feedback>
              </Form.Group>

              {/* Entrada para la ciudad */}
              <Form.Group as={Col} md="4" controlId="validationCustom05">
                <Form.Label>Ciudad</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ciudad"
                  required
                  value={ciudad}
                  onChange={(e) => setCiudad(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                  Por favor, introduce una ciudad válida.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              {/* Entrada para el número de comensales */}
              <Form.Group as={Col} controlId="validationCustom02">
                <Form.Label>Comensales</Form.Label>
                <Form.Control
                  required
                  type="number"
                  placeholder="Número de comensales"
                  value={comensales}
                  onChange={(e) => setComensales(e.target.value)}
                />
                <Form.Control.Feedback>¡Todo correcto!</Form.Control.Feedback>
              </Form.Group>

              {/* Entrada para fecha y hora */}
              <Form.Group as={Col} controlId="validationCustomFechaHora">
                <Form.Label>Fecha y hora</Form.Label>
                <Form.Control
                  required
                  type="datetime-local"
                  placeholder="Fecha y hora"
                  value={fechaHora}
                  onChange={(e) => setFechaHora(e.target.value)}
                />
                <Form.Control.Feedback>¡Todo correcto!</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              {/* Área de texto para el mensaje */}
              <Form.Group as={Col} controlId="validationCustom06">
                <Form.Label>Mensaje</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Deja tu mensaje aquí..."
                  style={{ height: '100px' }}
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              {/* Checkbox para los términos y condiciones */}
              <Form.Group as={Col}>
                <Form.Check
                  required
                  label="Acepto términos y condiciones"
                  feedback="Debes estar de acuerdo antes de enviar."
                  feedbackType="invalid"
                  checked={terminos}
                  onChange={(e) => setTerminos(e.target.checked)}
                />
              </Form.Group>
            </Row>
            <Button variant='danger' type="submit">Enviar</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Reservas;
