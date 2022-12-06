import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from './loginSlice'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'


const Login = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch();

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email("This is not a valid email")
            .required("This field is required"),
        password: Yup.string()
            .required("This field is required")
    });

    const initialvalues = {
        email: "",
        password: "",
    };

    const handleLogin = (formValue) => {
        const { email, password } = formValue;
        dispatch(login({ email, password }))
            .then((response) => {
                if (response.payload.token) {
                    navigate("/profile");
                } else {
                    navigate("*");
                }
            })
            .catch((error) => {
                console.log(error)
            })
    };

    return (
        <div>
            <main className="main bg-dark login">
                <section className="sign-in-content">
                    <FontAwesomeIcon icon={faCircleUser} className="sign-in-icon" />
                    <h1>Sign In</h1>
                    <Formik
                        onSubmit={handleLogin}
                        initialValues={initialvalues}
                        validationSchema={validationSchema}
                    >
                        <Form>
                            <div className="input-wrapper">
                                <label htmlFor="email">Username</label>
                                <Field name="email" type="text" id="email" />
                                <ErrorMessage
                                    name="email"
                                    component="div"
                                    className="error-text" />
                            </div>
                            <div className="input-wrapper">
                                <label htmlFor="password">Password</label>
                                <Field name="password" type="password" id="password" />
                                <ErrorMessage
                                    name="password"
                                    component="div"
                                    className="error-text" />
                            </div>
                            <div className="input-remember">
                                <Field type="checkbox" id="remember-me" /><label htmlFor="remember-me"
                                >Remember me</label>
                            </div>
                            <button type="submit" className="sign-in-button">Sign In</button>
                        </Form>
                    </Formik>
                </section>
            </main>
        </div>
    )
}

export default Login