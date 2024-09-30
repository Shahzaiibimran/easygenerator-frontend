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
import axios from 'axios';
import { 
  signIn 
} from '../services/auth_service';
import { 
  useAuth 
} from '../context/auth';
import { 
  ErrorMessage,
	Container,
	Form,
	Input,
	Button 
} from '../styles/sign_in';
import { 
	ToastContainer, 
	toast 
} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import APIResponse from '../interfaces/api_response';
import { useNavigate } from 'react-router-dom';

const schema = yup.object().shape({
  email: yup.string().email('Invalid email address').required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters long')
    .matches(/[a-zA-Z]/, 'Password must contain at least 1 letter')
    .matches(/\d/, 'Password must contain at least 1 number')
    .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least 1 special character')
    .required('Password is required'),
});

interface SignInFormInputs {
  email: string;
  password: string;
}

const SignIn = () => {
  const { login } = useAuth();
  const [serverErrors, setServerErrors] = useState<{ [key: string]: string }>({});
  const navigate = useNavigate();

	const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<SignInFormInputs> = async (data) => {
    try {
      const response = await signIn(data);

			if (response.status_code === 200) {
        login(response.data.access_token);

        toast.success(response.message, {
					onClose: () => navigate('/welcome')
				});
      }
    } catch (error) {
			if (axios.isAxiosError(error) && error.response) {
        const errorResponse = error.response.data as APIResponse;
				
				if (errorResponse.status_code !== 500) {
					const formattedErrors: { [key: string]: string } = {};
					
					for (const errorItem of errorResponse.errors) {
						for (const field in errorItem) {
							const messages = errorItem[field] as string[];

							formattedErrors[field] = messages?.join(', ');
						}
					}

					setServerErrors(formattedErrors);
				}
				
				toast.error(JSON.stringify(errorResponse.message));
      } else {
        console.error('An unexpected error occurred:', error);

        console.error('An unexpected error occurred:', error);
      }
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2>Sign In</h2>
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
          Sign In
        </Button>
      </Form>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar />
    </Container>
  );
};

export default SignIn;