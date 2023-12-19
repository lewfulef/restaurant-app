import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config/Firebase';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

const formularioAdopcion = () => {
  const [formularioAdopcion, setFormularioAdopcion] = useState([]);
  const [mostrarAdopcion, setMostrarAdopcion] = useState(false);

  useEffect(() => {
    const obtenerFormularioAdopcion = async () => {
      try {
        const refColeccion = collection(db, "adopta");
        const respuesta = await getDocs(refColeccion);
        const documentos = respuesta.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setFormularioAdopcion(documentos);
      } catch (error) {
        console.error(error);
      }
    };

    if (mostrarAdopcion) {
      obtenerFormularioAdopcion();
    }
  }, [mostrarReservas]);

  const toggleMostrarAdopcion = () => {
    setMostrarAdopcion(!mostrarAdopcion);
  };

  // Función para formatear la fecha y hora
  const formatearFechaHora = (fechaHora) => {
    const fecha = new Date(fechaHora);
    return fecha.toLocaleString(); // Ajusta esto según tus necesidades
  };

  return (
    <Container>
      <Button onClick={toggleMostrarAdopcion} className="mb-3">
        {mostrarAdopcion ? 'Ocultar Adopcion' : 'Mostrar Adopcion'}
      </Button>
      {mostrarAdopcion && (
        <Row xs={1} md={2} lg={3} className="g-4">
          {formularioAdopcion.map((adopta, indice) => (
            <Col key={indice}>
              <Card>
                <Card.Body>
                  <Card.Title>{adopta.nombre}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{adopta.email}</Card.Subtitle>
                  <Card.Text>
                    ID: {adopta.id}<br />
                    Fecha: {formatearFechaHora(adopta.fecha_hora)}<br />
                    Gatitos: {adopta.gatitos}<br />
                    Mensaje: {adopta.mensaje}<br />
                    Teléfono: {adopta.telefono}
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

export default formularioAdopcion;
