import React from 'react';
import PropTypes from 'prop-types';
import SVGInline from 'react-svg-inline';
import arrowRight from '../../img/arrow-right.svg';
import './DropdownButton.scss';

const DropdownButton = ({
  open, 
  value,
  onClick,
}) => (
  <div 
    className={`DropdownButton DropdownButton--${open ? 'open' : 'closed'}`}
    onClick={onClick}
  >
    <div className="DropdownButton__text">
      {value} 
    </div>
    <SVGInline 
      className="DropdownButton__arrow"
      svg={arrowRight} 
    />        
  </div>
);

if (process.env.NODE_ENV !== 'production') {
  DropdownButton.propTypes = {
    open: PropTypes.bool.isRequired,
    value: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  }
}

export default DropdownButton;
