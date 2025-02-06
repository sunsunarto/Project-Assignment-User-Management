import *as Yup from 'yup';

const AddSchema = Yup.object().shape({
    name: Yup.string()
        .required('Name is required')
        .min(3, 'Name must be at least 3 characters long'),
    email: Yup.string()
        .email('Invalid email')
        .required('Email is required'),
    role: Yup.string()
        .required('Role is required'),
});

export default AddSchema