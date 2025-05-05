// src/components/Timer.jsx
import React, { useEffect, useState } from 'react';

export default function Timer({ onExpire }) {
    const [time, setTime] = useState(5);

    useEffect(() => {
        if (time <= 0) {
            onExpire();
            return;
        }
        const id = setTimeout(() => setTime(t => t - 1), 1000);
        return () => clearTimeout(id);
    }, [time, onExpire]);

    return <div>Time Left: {time}s</div>;
}
