import React from 'react';

const MDIcons = props =>
    <i className="material-icons" style={ {
        color: props.cor,
        fontSize: props.tamanho
    } }>
        { props.icone }
    </i>

MDIcons.propTypes = {
    icone: React.PropTypes.string,
    cor: React.PropTypes.string,
    tamanho: React.PropTypes.string
}

export { MDIcons }
