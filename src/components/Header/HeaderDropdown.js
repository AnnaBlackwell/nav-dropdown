import React, {Component} from 'react';
import {DropdownButton} from '../Dropdown';
import './HeaderDropdown.scss';

class HeaderDropdown extends Component {
    render() {
        return (
            <div className="HeaderDropdown">
                <DropdownButton 
                    open={true}
                    value="teacher@school.org"
                />
            </div>
        );
    }
}

export default HeaderDropdown;