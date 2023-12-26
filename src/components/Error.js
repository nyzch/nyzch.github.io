import { Ghost } from 'react-kawaii';

export const Error = () => {
    return (
        <section className="error-page">
            <div>
                <Ghost size={240} mood="ko" color="#E0E4E8" />
            </div>
            <p>
                Oops! The requested page cannot be found.
            </p>
        </section>
    )
}