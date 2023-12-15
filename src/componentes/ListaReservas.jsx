import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config/Firebase';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

const ListaReservas = () => {
  const [listaDeReservas, setListaDeReservas] = useState([]);
  const [mostrarReservas, setMostrarReservas] = useState(false);

  useEffect(() => {
    const obtenerListaDeReservas = async () => {
      try {
        const refColeccion = collection(db, "Reservas");
        const respuesta = await getDocs(refColeccion);
        const documentos = respuesta.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setListaDeReservas(documentos);
      } catch (error) {
        console.error(error);
      }
    };

    if (mostrarReservas) {
      obtenerListaDeReservas();
    }
  }, [mostrarReservas]);

  const toggleMostrarReservas = () => {
    setMostrarReservas(!mostrarReservas);
  };

  // Función para formatear la fecha y hora
  const formatearFechaHora = (fechaHora) => {
    const fecha = new Date(fechaHora);
    return fecha.toLocaleString(); // Ajusta esto según tus necesidades
  };

  return (
    <Container>
      <Button onClick={toggleMostrarReservas} className="mb-3">
        {mostrarReservas ? 'Ocultar Reservas' : 'Mostrar Reservas'}
      </Button>
      {mostrarReservas && (
        <Row xs={1} md={2} lg={3} className="g-4">
          {listaDeReservas.map((reserva, indice) => (
            <Col key={indice}>
              <Card>
                <Card.Body>
                  <Card.Title>{reserva.nombre}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{reserva.email}</Card.Subtitle>
                  <Card.Text>
                    ID: {reserva.id}<br />
                    Fecha: {formatearFechaHora(reserva.fecha_hora)}<br />
                    Comensales: {reserva.comensales}<br />
                    Mensaje: {reserva.mensaje}<br />
                    Teléfono: {reserva.telefono}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default ListaReservas;
