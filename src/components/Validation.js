import * as yup from 'yup';

export const validationMessage=yup.object().shape({
    firstName:yup.string().required(),
    lastName:yup.string().required(),
    title:yup.string().required(),
    email:yup.string().email().required(),
    message:yup.string().required()
})
