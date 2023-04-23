import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import { Formik } from 'formik';

import routes from '~/configs/routes';
import { schemaAuth } from '~/rules';

function Login() {
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
            <div>
                <h1>Chào mừng quay trở lại</h1>
                <p>Đăng nhập để làm được nhiều điều thú vị hơn!!!</p>
                <Formik
                    validationSchema={schemaAuth}
                    initialValues={{
                        email: '',
                        password: '',
                    }}
                >
                    {({ handleChange, handleBlur, touched, values, errors, isSubmitting }) => {
                        const handleSubmitForm = (e) => {
                            e.preventDefault();
                            console.log(values);
                        };

                        return (
                            <>
                                <Form className="mt-5" onSubmit={handleSubmitForm}>
                                    <Form.Group className="mt-4">
                                        <Form.Label htmlFor="email">Email</Form.Label>
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
                                        <Form.Label htmlFor="password">Pasword</Form.Label>
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
                                    <div className="d-flex justify-content-between align-items-center mt-4">
                                        <Button
                                            type="submit"
                                            size="lg"
                                            disabled={errors.email || errors.password || isSubmitting}
                                        >
                                            Đăng nhập
                                        </Button>
                                        <Link style={{ fontSize: '1.4rem' }}>Quên mật khẩu?</Link>
                                    </div>
                                </Form>
                                <div
                                    className="d-flex justify-content-center align-items-center mt-5"
                                    style={{ fontSize: '1.4rem' }}
                                >
                                    <span className="me-2">Bạn chưa có tài khoản?</span>
                                    <Link to={routes.register}>Đăng ký ngay</Link>
                                </div>
                            </>
                        );
                    }}
                </Formik>
            </div>
        </div>
    );
}

export default Login;
