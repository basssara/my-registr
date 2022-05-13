import React, { FC, useState } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";
import axiosInstance from '../apis/axios';

const schema = Yup.object({
    email: Yup.string().required(),
    password: Yup.string().required().min(3),
    firstName: Yup.string().required(),
    lastName: Yup.string().required(),
}).required();

const SingUp: FC = () => {
    const [loading, setLoading] = useState(false)

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });

    const onSubmit = async (data: object) => {
        try {
            setLoading(true)
            await axiosInstance.post('/v1/auth/email/register', data).then((res) => console.log(res))
            console.log(data)
        } catch (e) {
            console.error(e)
        } finally {
            setLoading(false)
        }
    }
    return (
        <>
            <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Sign Up
                    </h2>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <label htmlFor="email-address" className="sr-only">
                                    Email Address
                                </label>
                                <input
                                    id="email-address"
                                    {...register('email')}
                                    type="email"
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Email address"
                                />
                                {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    {...register('password')}
                                    type="password"
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Password"
                                />
                                {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}
                            </div>
                            <div>
                                <label htmlFor="firstName-id" className="sr-only">
                                    Name
                                </label>
                                <input id="firstName-id"
                                    {...register('firstName')}
                                    type="name"
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="First Name"
                                />
                                {errors.firstName && <p style={{ color: 'red' }}>{errors.firstName.message}</p>}
                            </div>
                            <div>
                                <label htmlFor="lastName-id" className="sr-only">
                                    Name
                                </label>
                                <input id="lastName-id"
                                    {...register('lastName')}
                                    type="lastName"
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Last Name"
                                />
                                {errors.lastName && <p style={{ color: 'red' }}>{errors.lastName.message}</p>}
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export { SingUp }