import { Link } from "react-router";

export default function Login() {
    return (
        <section id="login-page">
            <h1>Login</h1>
            <form action="#" method="POST">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" required="" />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" required="" />
                <button type="submit">Login</button>
            </form>
            <p>
                Don't have an account? <Link to="/register">Register here</Link>
            </p>
        </section>
    );
}