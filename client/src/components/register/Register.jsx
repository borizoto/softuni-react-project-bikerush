import { Link } from "react-router";

export default function Register() {
    return (
        <section id="register-page">
            <h1>Register</h1>
            <form action="#" method="POST">
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" required="" />

                <label htmlFor="phone">Phone Number:</label>
                <input type="text" id="phone" required="" />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" required="" />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" required="" />

                <label htmlFor="confirm-password">Confirm Password:</label>
                <input type="password" id="confirm-password" required="" />

                <button type="submit">Register</button>
            </form>
            <p>
                Already have an account? <Link to="/login">Login here</Link>
            </p>
        </section>
    );
}