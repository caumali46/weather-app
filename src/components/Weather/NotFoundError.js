import React from'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFrown } from '@fortawesome/free-solid-svg-icons';

const NotFoundError = (props) => {
  return ( 
    <>
      <br />
      <br />
      <span className="error-message">
        <FontAwesomeIcon icon={faFrown} />
        <span style={{ 'font-size': '20px' }}> Sorry, City not found</span>
      </span>
    </>
  );
}
export default NotFoundError;
