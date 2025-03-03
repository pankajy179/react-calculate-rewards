import { Card, CardContent, CardHeader, Typography } from '@mui/material';
import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            errorMsg: ""
        }
    }

    static getDerivedStateFromError(error, info) {
        return { hasError: true };
    }
    componentDidCatch(error) {
        console.log("componentDidCatch", error);
    }

    render() {
        if (this.state.hasError) return (
            <div className='error_card'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardHeader title="OOPS!" />
                    <CardContent>
                        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                            Something went wrong. Please try again later.
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        )
        return (
            <>{this.props.children}</>
        )
    }
};

export default ErrorBoundary;