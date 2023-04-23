import * as Yup from 'yup';

export const schemaAuth = Yup.object().shape({
    email: Yup.string().email('Email không đúng').required('Trường này bắt buộc nhập'),
    password: Yup.string().required('Trường này bắt buộc nhập'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Mật khẩu chưa trùng khớp')
        .required('Trường này bắt buộc nhập'),
});
