import React, { Component } from 'react';
import { Link } from 'react-router';
import { Sidebar } from '../../componentes/Sidebar';
import './layout.css';
import logo from './hbsis-logo.png'

class Layout extends Component {

    render() {
        return (
            <main>
                <div className="brand">
                    <Link to="/"><img src={logo} alt=""/></Link>
                </div>

                <section id="wrapper">
                    <Sidebar />

                    <section id="conteudo-pagina">
                        aaaaaaaaa
                    </section>
                </section>
            </main>
        );
    }

}

export default Layout;
