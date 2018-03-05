import React from 'react';
import PropTypes from 'prop-types';
import './DropdownOption.scss';

const DropdownOption = ({
    option,
    onClick,
    onToggle,
}) => {
    return option.url 
        ? (
            <a 
                className="DropdownOption"
                href={option.url}
            >
                {option.value}
            </a>
        ) : (
            <div 
                className="DropdownOption"
                onClick={onClick}
            >
                {option.value}
            </div>
        );
}

if (process.env.NODE_ENV !== 'production') {
    DropdownOption.propTypes = {
        option: PropTypes.shape({
            value: PropTypes.string,
            url: PropTypes.string,
        }).isRequired,
        onClick: PropTypes.func,
    }
}

export default DropdownOption;
