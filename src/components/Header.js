import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => (
    <div className="header">
        <div className="container">
            <h1 className="header__title">{props.title}</h1>
            {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
        </div>
    </div>
);


Header.defaultProps = {
    title: 'Indecision',
    subtitle: 'Put your life in the hands of computer!'

};

export default Header;