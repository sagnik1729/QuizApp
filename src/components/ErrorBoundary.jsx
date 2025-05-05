// src/components/ErrorBoundary.jsx
import React, { Component } from 'react';

export class ErrorBoundary extends Component {
    state = { hasError: false };

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.error('Uncaught error:', error, info);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="p-4 text-center">
                    <h2>Something went wrong.</h2>
                    <button
                        className="mt-2 px-4 py-2 border rounded"
                        onClick={() => window.location.reload()}
                    >
                        Reload App
                    </button>
                </div>
            );
        }
        return this.props.children;
    }
}
