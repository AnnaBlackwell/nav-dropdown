import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './HeaderDropdown.scss';
import {
    Dropdown,
    DropdownOptions,
    DropdownOption,
} from '../Dropdown';

class HeaderDropdown extends Component {
    render() {
        const {
            options,
            onSelect,
            selected,
        } = this.props;
        return (
            <div className="HeaderDropdown">
                <Dropdown 
                    buttonValue={selected}
                    content={(
                        <DropdownOptions>
                            {options.map((option) => {
                                if (option.value !== selected) {
                                    return (
                                        <DropdownOption 
                                            option={option}
                                            onClick={() => onSelect(option.value)}
                                            key={option.value}
                                        />
                                    )
                                }
                            })}
                        </DropdownOptions>
                    )}
                />
            </div>
        );
    }
}

if (process.env.NODE_ENV !== 'production') {
    HeaderDropdown.propTypes = {
        onSelect: PropTypes.func.isRequired,
        options: PropTypes.arrayOf(PropTypes.shape({
            value: PropTypes.string,
            url: PropTypes.string,
        })).isRequired,
        selected: PropTypes.oneOf([
            'teacher', 
            'student',
        ]),
    }
}

export default HeaderDropdown;
