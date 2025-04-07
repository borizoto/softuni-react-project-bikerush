import { Link, useNavigate } from "react-router";

export default function Login({
    setEmail
}) {
    const navigate = useNavigate();

    const loginAction = (formData) => {
        const { email } = Object.fromEntries(formData);

        setEmail(email);

        navigate('/listings')
    }

    return (
        <section id="login-page">
            <h1>Login</h1>
            <form id="login" action={loginAction}>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required="" />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required="" />
                <button type="submit">Login</button>
            </form>
            <p>
                Don't have an account? <Link to="/register">Register here</Link>
            </p>
        </section>
    );
}