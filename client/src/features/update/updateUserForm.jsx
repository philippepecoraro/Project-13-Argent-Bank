import './updateUserForm.css';
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { updateUser } from './updateSlice'



const UpdateUserForm = () => {
    const { user } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const validationSchema = Yup.object().shape({
        firstName: Yup.string()
            .required("This field is required")
            .min(3, "too small")
            .max(50, "too long"),
        lastName: Yup.string()
            .required("This field is required")
            .min(3, "too small")
            .max(50, "too long"),
    });

    const initialvalues = {
        firstName: "",
        lastName: "",
    };

    const handleLogin = (formValue) => {
        const { firstName, lastName } = formValue;
        dispatch(updateUser({ firstName, lastName }))
            .then((response) => {
                if (response) {
                    window.location.reload();
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div>
            <Formik
                onSubmit={handleLogin}
                initialValues={initialvalues}
                validationSchema={validationSchema}
            >
                <Form className="input-form">
                    <div className="input-input-wrapper">
                        <div className="input-firstName-wrapper">
                            <Field name="firstName" type="text" id="firstName" placeholder={user.firstName} />
                            <ErrorMessage
                                name="firstName"
                                component="div"
                                className="error-text" />
                        </div>
                        <div className="input-lastName-wrapper">
                            <Field name="lastName" type="text" id="lastName" placeholder={user.lastName} />
                            <ErrorMessage
                                name="lastName"
                                component="div"
                                className="error-text" />
                        </div>
                    </div>
                    <div className="button-wrapper">
                        <button type="submit" className="save-button" id="save-button">Save</button>
                        <button type="submit" className="cancel-button" id="cancel-button">Cancel</button>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}

export default UpdateUserForm