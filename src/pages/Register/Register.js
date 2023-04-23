import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import { Formik } from 'formik';

import routes from '~/configs/routes';
import { schemaAuth } from '~/rules';

function Register() {
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
            <div>
                <h1>Chào mừng đến với Movie</h1>
                <p>Đăng ký tài khoản ngay để trải nghiệm website của chúng tôi</p>
                <Formik
                    validationSchema={schemaAuth}
                    initialValues={{
                        email: '',
                        password: '',
                        confirmPassword: '',
                    }}
                >
                    {({ handleChange, handleBlur, values, touched, errors }) => {
                        const handleSubmitForm = (e) => {
                            e.preventDefault();
                            console.log(values);
                        };

                        return (
                            <>
                                <Form className="mt-5" onSubmit={handleSubmitForm}>
                                    <Form.Group className="mt-4">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control
                                            id="email"
                                            name="email"
                                            className="mb-2"
                                            size="lg"
                                            type="email"
                                            placeholder="Enter your email address"
                                            value={values.email}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            isValid={touched.email && !errors.email}
                                            style={{ borderColor: touched.email && errors.email ? 'red' : '' }}
                                        ></Form.Control>
                                        <Form.Text style={{ color: 'red' }}>{touched.email && errors.email}</Form.Text>
                                    </Form.Group>
                                    <Form.Group className="mt-4">
                                        <Form.Label>Pasword</Form.Label>
                                        <Form.Control
                                            id="password"
                                            name="password"
                                            className="mb-2"
                                            size="lg"
                                            type="password"
                                            placeholder="Enter your password"
                                            value={values.password}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            isValid={touched.password && !errors.password}
                                            style={{ borderColor: touched.password && errors.password ? 'red' : '' }}
                                        ></Form.Control>
                                        <Form.Text style={{ color: 'red' }}>
                                            {touched.password && errors.password}
                                        </Form.Text>
                                    </Form.Group>
                                    <Form.Group className="mt-4">
                                        <Form.Label>Confirm Pasword</Form.Label>
                                        <Form.Control
                                            id="confirmPassword"
                                            name="confirmPassword"
                                            className="mb-2"
                                            size="lg"
                                            type="password"
                                            placeholder="Enter your password"
                                            value={values.confirmPassword}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            isValid={touched.confirmPassword && !errors.confirmPassword}
                                            style={{
                                                borderColor:
                                                    touched.confirmPassword && errors.confirmPassword ? 'red' : '',
                                            }}
                                        ></Form.Control>
                                        <Form.Text style={{ color: 'red' }}>
                                            {touched.confirmPassword && errors.confirmPassword}
                                        </Form.Text>
                                    </Form.Group>
                                    <Button className="mt-4" type="submit" size="lg" disabled={errors ? false : true}>
                                        Đăng ký
                                    </Button>
                                </Form>

                                <div
                                    className="d-flex justify-content-center align-items-center mt-5"
                                    style={{ fontSize: '1.4rem' }}
                                >
                                    <span className="me-2">Bạn đã có tài khoản?</span>
                                    <Link to={routes.login}>Đăng nhập ngay</Link>
                                </div>
                            </>
                        );
                    }}
                </Formik>
            </div>
        </div>
    );
}

export default Register;
