import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {DropdownButton} from './index';
import './Dropdown.scss';

class Dropdown extends Component {
    state = {
        open: false,
    }

    toggleOpen = () => {
        this.setState({
            open: !this.state.open,
        });
    }

    render() {
        const {open} = this.state;
        const {
            buttonValue,
            content,
        } = this.props;
        return (
            <div className="Dropdown">
                <DropdownButton 
                    open={open}
                    value={buttonValue}
                    onClick={this.toggleOpen}
                />
                {open && content}
            </div>
        );
    }
}

if (process.env.NODE_ENV !== 'production') {
    Dropdown.propTypes = {
        buttonValue: PropTypes.string.isRequired,
        content: PropTypes.node.isRequired,
    }
}

export default Dropdown;
