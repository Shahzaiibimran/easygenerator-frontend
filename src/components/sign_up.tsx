import React, { 
  useState 
} from 'react';
import { 
  useForm, 
  SubmitHandler 
} from 'react-hook-form';
import * as yup from 'yup';
import { 
  yupResolver 
} from '@hookform/resolvers/yup';
import { 
  motion 
} from 'framer-motion';
import axios from 'axios';
import { 
  signUp 
} from '../services/auth_service';
import { 
  ErrorMessage,
	Container,
	Form,
	Input,
	Button 
} from '../styles/sign_up';
import { 
	ToastContainer, 
	toast 
} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import APIResponse from '../interfaces/api_response';
import { useNavigate } from 'react-router-dom';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email address').required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters long')
    .matches(/[a-zA-Z]/, 'Password must contain at least 1 letter')
    .matches(/\d/, 'Password must contain at least 1 number')
    .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least 1 special character')
    .required('Password is required'),
});

interface SignUpFormInputs {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const [serverErrors, setServerErrors] = useState<{ [key: string]: string }>({});
  const navigate = useNavigate();

	const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<SignUpFormInputs> = async (data) => {
    try {
      const response = await signUp(data);

			if (response.status_code === 201) {
        toast.success(response.message, {
					onClose: () => navigate('/sign-in')
				});
      }
    } catch (error) {
			if (axios.isAxiosError(error) && error.response) {
        const errorResponse = error.response.data as APIResponse;
				
				const formattedErrors: { [key: string]: string } = {};
				
				for (const errorItem of errorResponse.errors) {
					for (const field in errorItem) {
						const messages = errorItem[field] as string[];
						formattedErrors[field] = messages.join(', ');
					}
				}

				setServerErrors(formattedErrors);
      } else {
        console.error('An unexpected error occurred:', error);
      }
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}
			 	as={motion.form}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2>Sign Up</h2>
				<div>
					<Input
						type="text"
						placeholder="name"
						whileFocus={{ scale: 1.05 }}
						{...register('name')}
					/>
					{errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
					{serverErrors.name && <ErrorMessage>{serverErrors.name}</ErrorMessage>}
				</div>
				<div>
					<Input
						type="email"
						placeholder="Email"
						whileFocus={{ scale: 1.05 }}
						{...register('email')}
					/>
					{errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
					{serverErrors.email && <ErrorMessage>{serverErrors.email}</ErrorMessage>}
				</div>
					<div>
					<Input
						type="password"
						placeholder="Password"
						whileFocus={{ scale: 1.05 }}
						{...register('password')}
					/>
					{errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
					{serverErrors.password && <ErrorMessage>{serverErrors.password}</ErrorMessage>}
				</div>
				<Button
					type="submit"
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
				>
					Sign Up
				</Button>
      </Form>
			<ToastContainer position="top-right" autoClose={5000} hideProgressBar />
    </Container>
  );
};

export default SignUp;