// src/components/ErrorMsg.jsx
export default function ErrorMsg({ message, onRetry }) {
    return (
        <div className="p-4 text-red-600">
            <p>{message}</p>
            {onRetry && (
                <button
                    className="mt-2 px-3 py-1 border rounded"
                    onClick={onRetry}
                >
                    Retry
                </button>
            )}
        </div>
    );
}
