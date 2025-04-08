import { Link, useNavigate } from "react-router";
import { useRegister } from "../../api/authApi";
import { useError } from "../../hooks/useError";
import { useActionState, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export default function Register() {
    const navigate = useNavigate();

    const { register } = useRegister();
    const { error, setError } = useError();

    const { userLoginHandler } = useContext(UserContext);

    const registerHandler = async (prevState, formData) => {
        const { username, phoneNumber, email, password, rePass } = Object.fromEntries(formData);

        if (!email || !password || !username || !phoneNumber) {
            return setError('All fields must be filled!');
        }

        if (password !== rePass) {
            return setError('Passwords don\'t match');
        }

        try {
            const authData = await register(email, password, username, phoneNumber);

            delete authData.password;

            userLoginHandler(authData);

            navigate('/');
        } catch (err) {
            console.error("Error registering:", err.message);
            setError(err.message);
        }
    }

    const [state, registerAction, isPending] = useActionState(registerHandler, { email: '', password: '', username: '', phoneNumber: '' })

    return (
        <section id="register-page">
            <h1>Register</h1>
            <form action={registerAction}>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" required="" />

                <label htmlFor="phone">Phone Number:</label>
                <input type="text" id="phone" name="phoneNumber" required="" />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required="" />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required="" />

                <label htmlFor="confirm-password">Confirm Password:</label>
                <input type="password" id="confirm-password" name="rePass" required="" />

                <button type="submit" disabled={isPending} >Register</button>

                {error && <p className="error">{error}</p>}
            </form>
            <p>
                Already have an account? <Link to="/login">Login here</Link>
            </p>
        </section>
    );
}