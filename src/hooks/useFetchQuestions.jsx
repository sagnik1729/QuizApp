// src/hooks/useFetchQuestions.jsx
import { useState, useEffect } from 'react';
import api from '@/api/client';

export default function useFetchQuestions(amount = 10) {
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchQs() {
            try {
                const { data } = await api.get('/api.php', {
                    params: { amount, type: 'multiple' }
                });
                setQuestions(data.results);
            } catch (err) {
                setError('Failed to load questions. Please try again.');
            } finally {
                setLoading(false);
            }
        }
        fetchQs();
    }, [amount]);

    return { questions, loading, error };
}
