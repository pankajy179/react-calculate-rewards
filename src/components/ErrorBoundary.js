import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            errorMsg: ""
        }
        console.log("props", props);
    }

    static getDerivedStateFromError(error, info) {
        console.log("getDerivedStateFromError", error, info)
        return { hasError: true };
    }
    componentDidCatch(error) {
        console.log("componentDidCatch",error)
    }

    render() {

        if (this.state.hasError) return <h1>Something went wrong. Please try again later.</h1>
        return <>{this.props.children}</>

    }
};

export default ErrorBoundary;