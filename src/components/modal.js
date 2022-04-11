import React, { Component } from "react";
import { ReactDOM } from "react-dom";
import createStoreWithMiddleware from '../index'
import { Provider } from 'react-redux'



class Modal extends Component {
    componentDidMount() {
        this.ModalTarget = document.createElement('div')
        this.ModalTarget.className = 'modal'
        document.body.appendChild(this.ModalTarget)
        this._render()
    }

    componentWillUpdate(){
        this._render()
    }

    componentWillUnmount(){
        ReactDOM.unmountComponentAtNode(this.ModalTarget)
            document.removeChild(this.ModalTarget)
    }

    _render() {
        ReactDOM.render(
            <Provider store={createStoreWithMiddleware()}>
                <div>{this.props.children}</div>)
            </Provider>,
           this.ModalTarget)
    }

    render() {
        return (
            <noscript />
        )
    }
}

export default Modal