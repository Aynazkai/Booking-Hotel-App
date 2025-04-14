import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Mail, Lock } from 'lucide-react';
import { useForm, SubmitHandler } from 'react-hook-form';

type FormData = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log('Login attempt:', data);
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-[#3e5454e0] flex flex-col">
      <Header />
      <div className="flex-grow flex items-center justify-center px-4 mt-40 login-container">
        <div className="w-full max-w-md">
          <div className="bg-[#3e5454aa] backdrop-blur-md shadow-2xl rounded-lg p-8 login-form border border-white/20">
            <h1 className="text-3xl font-bold text-center mb-8 text-white">Welcome</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <div className="login-input-group">
                <div className="relative">
                <label htmlFor="email" className="login-label text-white flex items-center gap-2">
                    <Mail className="w-4 h-4 text-white" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder=" "
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: 'Invalid email address',
                      },
                    })}
                    className="login-input block w-full px-3 pb-2 pt-2 mt-2 bg-transparent focus:outline-none shadow-md shadow-[#00000033] rounded-lg border border-[#ffffff69] text-white"
                  />
                  {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
                </div>
              </div>

              <div className="login-input-group">
                <div className="relative">
                <label htmlFor="password" className="login-label text-white flex items-center gap-2">
                    <Lock className="w-4 h-4 text-white" />
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    placeholder=" "
                    {...register('password', { required: 'Password is required' })}
                    className="login-input block w-full px-3 pb-2 pt-2 mt-2 bg-transparent focus:outline-none rounded-lg shadow-md shadow-[#00000033] border border-[#ffffff69]  text-white"
                  />
                  {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input type="checkbox" className="w-4 h-4 rounded-none border-[#3E5454]" />
                  <span className="text-white group-hover:text-[#162626] transition-colors">Remember me</span>
                </label>
                <button type="button" className="text-white hover:text-[#162626] transition-colors">
                  Forgot Password?
                </button>
              </div>

              <button
                type="submit"
                className="login-button w-full bg-[#8EACAC] text-white py-3 px-4 hover:text-white transition-colors relative overflow-hidden"
              >
                <span className="relative z-10">Sign In</span>
              </button>
            </form>

            <p className="mt-6 text-center text-white">
              Don't have an account?{' '}
              <button className="text-white hover:text-[#8EACAC] transition-colors font-medium">
                Sign up
              </button>
            </p>
          </div>
        </div>
      </div>
      <div className="py-16">
        <Footer />
      </div>
    </div>
  );
};

export default Login;