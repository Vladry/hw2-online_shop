import React, {PureComponent} from 'react';
import ErrorPage500 from "./ErrorPage500";

export default class ErrorBoundary extends PureComponent {
    state = {errorPresent: false};

    static getDerivedStateFromError(error) {
        return {errorPresent: true};
    }

    render() {
        if (this.state.errorPresent) {
            return <ErrorPage500/>
        } else
        return this.props.children;
    }

}
