import React, { useEffect, useState, FC } from "react";
import { IUser } from './components/types/IUser'

const Login: FC = () => {
  const [isEmail, setIsEmail] = useState("");
  const [isPassword, setIsPassword] = useState("");
  const [emailError, setEmailError] = useState('Укажите эмаил!');
  const [passwordError, setPasswordError] = useState('Укажите пароль!')
  const [emailEmpty, setEmailEmpty] = useState(false)
  const [passwordEpmty, setPasswordEmpty] = useState(false)
  const [isValid, setIsValid] = useState(false)

  useEffect(() => {
    if (emailError || passwordError) {
      setIsValid(false)
    } else {
      setIsValid(true)
    }
  }, [emailError, passwordError])

  const emailHandler = (e: any) => {
    setIsEmail(e.target.value)
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError('Не коректный Email')
    } else {
      setEmailError('')
    }
  }
  const passwordHandler = (e: any) => {
    setIsPassword(e.target.value)
    if (e.target.value.length < 3) {
      setPasswordError('Пароль не должен быть меньше 3')
      if (!e.target.value) {
        setPasswordError('Укажите пароль!')
      }
    } else {
      setPasswordError('')
    }
  }

  const blurHandler = (e: any) => {
    switch (e.target.name) {
      case 'email':
        setEmailEmpty(true)
        break;
      case 'password':
        setPasswordEmpty(true)
        break;
    }
  }

  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign In
        </h2>
        <div className="rounded-md shadow-sm -space-y-px">
          {(emailEmpty && emailError) && <div style={{ color: 'red' }}>{emailError}</div>}
          <div>
            <label htmlFor="email-address" className="sr-only">
              Email Address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              value={isEmail}
              autoComplete="email"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Email address"
              onBlur={(e) => blurHandler(e)}
              onChange={emailHandler}
            />
          </div>
          {(passwordEpmty && passwordError) && <div style={{ color: 'red' }}>{passwordError}</div>}
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={isPassword}
              autoComplete="current-password"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Password"
              onBlur={(e) => blurHandler(e)}
              onChange={passwordHandler}
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            disabled={!isValid}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={(e) => console.log("Send")}
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
