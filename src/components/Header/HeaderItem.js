import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classname';
import './HeaderItem.scss';

const HeaderItem = ({item}) => (
  <a 
    className={classname('HeaderItem', {
      'HeaderItem--highlight': item.highlight,
    })}
    href={item.url}
  >
    {item.value}
  </a>
);

if (process.env.NODE_ENV !== 'production') {
  HeaderItem.propTypes = {
    item: PropTypes.shape({
      value: PropTypes.string,
      highlight: PropTypes.bool,
      url: PropTypes.string,
    }).isRequired,
  }
}
   
export default HeaderItem;
