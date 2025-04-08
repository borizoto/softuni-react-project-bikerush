import { Link, useNavigate } from "react-router";
import { useActionState, useContext } from "react";

import { useLogin } from "../../api/authApi";
import { useError } from "../../hooks/useError";
import { UserContext } from "../../contexts/UserContext";

export default function Login() {
    const navigate = useNavigate();

    const { login } = useLogin();
    const { error, setError } = useError();

    const { setAuthData } = useContext(UserContext);

    const loginHandler = async (prevState, formData) => {
        const { email, password } = Object.fromEntries(formData);

        if (!email || !password) {
            return setError('All fields must be filled!');
        }

        try {
            const authData = await login(email, password);

            delete authData.password;

            setAuthData(authData);

            navigate('/');
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