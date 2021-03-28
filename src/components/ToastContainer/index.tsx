import React from 'react';
import { useTransition } from 'react-spring';

import Toast from './Toast';
import { ToastMessage } from '../../hooks/Toast';
import { Container } from './styles';

interface ToastContainerProps {
    messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
    const messagesWithTransitions = useTransition(
        messages, {
        key: message => message.id,
        from: { right: '-120%', opacity: 0 },
        enter: { right: '0%', opacity: 1 },
        leave: { right: '-120%', opacity: 0 }
    }
    )

    return (
        <Container>
            {messagesWithTransitions((style, message) => (
                <Toast key={message.id} style={style} message={message} />
            ))}
        </Container>
    );
};

export default ToastContainer;