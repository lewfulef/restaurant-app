import PropTypes from 'prop-types';
import Button from 'react-bootstrap/esm/Button';

export const Pizzas = (props) => {
  return (
    <article className='card'>
    <div className="card-body">
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <Button className="btn-bottom" variant="danger">Valor ${props.valor}</Button> 
    </div>
  </article>
  );
};

Pizzas.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  valor: PropTypes.number.isRequired 
};

