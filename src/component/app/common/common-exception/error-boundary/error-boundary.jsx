import React from "react";
import {Page404} from "./page-404/page-404";

export class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {hasError: false};
    }

    static getDerivedStateFromErr(error) {
        return {hasError: false}
    }

    componentDidCatch(error, info) {
        // Display fallback UI
        this.setState({hasError: true});
        // You can also log the error to an error reporting service
        // logErrorToMyService(error, info);
        console.log(error.message, error.stack)

    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            // return <h1>Something went wrong.</h1>;
            // history.push(`${ROUTE_APP[0]}/${ROUTE_LOBBY[0]}`)
            return <Page404/>;
        }
        return this.props.children;
    }
}
