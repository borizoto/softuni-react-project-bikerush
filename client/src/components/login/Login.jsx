import { Link, useNavigate } from "react-router";
import { useActionState } from "react";

import { useLogin } from "../../api/authApi";
import { useError } from "../../hooks/useError";

export default function Login({
    setAuthData
}) {
    const navigate = useNavigate();

    const { login } = useLogin();
    const { error, setError } = useError();

    const loginHandler = async (prevState, formData) => {
        const { email, password } = Object.fromEntries(formData);

        try {
            const authData = await login(email, password);

            setAuthData(authData);

            navigate('/listings')
        } catch (err) {
            console.error('Error logging in:', err.message)
            setError(err.message || 'Failed to log in profile. Please try again later.');
        }
    }

    const [state, loginAction, isPending] = useActionState(loginHandler, { email: '', password: '' });

    return (
        <section id="login-page">
            <h1>Login</h1>
            <form id="login" action={loginAction}>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required="" />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required="" />
                <button type="submit" disabled={isPending} >Login</button>
                {error && <p className="error">{error}</p>}
            </form>
            <p>
                Don't have an account? <Link to="/register">Register here</Link>
            </p>
        </section>
    );
}