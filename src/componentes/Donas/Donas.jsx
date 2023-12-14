
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap';
import { propTypes } from 'react-bootstrap/esm/Image';

export const Donas = (props) => {
  return (
    <article className='card'>
        <div className='card-body'>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <Button className="btn-bottom" variant="danger">Valor ${props.price}</Button>
        </div>
    </article>
  );
};

Donas.PropTypes = {

    name:PropTypes

}