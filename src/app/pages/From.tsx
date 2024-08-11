"use client"

import axios from 'axios';
import React, { ChangeEvent, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { useImmer } from 'use-immer';

export default () => {
    const dispatch = useDispatch();
    const [from, setFrom] = useImmer({ username: '', password: '', remember: false });

    /**
     * 
     * @param e 
     */
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target as {
            value: string,
            name: 'username' | 'password'
        }
        setFrom((draft) => {
            draft[name] = value
        })
    }

    /**
     * 
     * @param event 
     */
    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();


        axios({
            url: '/api/login',
            method: "post",
            data: {
                username: from.username,
                password: from.password
            }
        }).then(res => {

            dispatch({
                // aler
                type: 'ALERT',
                show: true,
                typing: 'ok',
                title: '系统消息',
                message: '校验成功，正在载入...',
            });


        }).catch(err => {

            dispatch({
                // aler
                type: 'ALERT',
                show: true,
                typing: 'error',
                title: '系统消息',
                message: '账户或密码错误',
            });

        })
    }
    return (
        <>
            <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-neutral-900 dark:border-neutral-700">
                <div className="p-4 sm:p-7">
                    <div className="text-center">
                        <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">欢迎使用Yunzai可视化界面</h1>
                        <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
                            忘记账号?{' '}
                            <a className="text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500" href="https://github.com/yunzai-org/yunzai-gui">
                                学习如何配置
                            </a>
                        </p>
                    </div>

                    <div className="mt-5">
                        <button
                            type="button"
                            className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                        >

                            使用QQ授权登录
                        </button>

                        <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-neutral-500 dark:before:border-neutral-600 dark:after:border-neutral-600">
                            Or
                        </div>

                        {/* Form */}
                        <form onSubmit={(e) => onSubmit(e)}>
                            <div className="grid gap-y-4">
                                {/* Form Group */}
                                <div>
                                    <label htmlFor="email" className="block text-sm mb-2 dark:text-white">账户</label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            id="username"
                                            name="username"
                                            onChange={(e) => onChange(e)}
                                            className=" border py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                            required
                                        />
                                        <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                                            <svg className="size-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                {/* End Form Group */}

                                {/* Form Group */}
                                <div>
                                    <label htmlFor="password" className="block text-sm mb-2 dark:text-white">密码</label>
                                    <div className="relative">
                                        <input
                                            type="password"
                                            id="password"
                                            name="password"
                                            onChange={(e) => onChange(e)}
                                            className="border py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                            required
                                            aria-describedby="password-error"
                                        />
                                        <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                                            <svg className="size-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <p className="hidden text-xs text-red-600 mt-2" id="password-error">需要8+个字符</p>
                                </div>
                                {/* End Form Group */}


                                {/* End Form Group */}

                                {/* Checkbox */}
                                <div className="flex items-center">
                                    <div className="flex">
                                        <input
                                            id="remember-me"
                                            name="remember-me"
                                            type="checkbox"
                                            className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                        />
                                    </div>
                                    <div className="ms-3">
                                        <label htmlFor="remember-me" className="text-sm dark:text-white">
                                            <a className="text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500" href="#"> 记住我</a>
                                        </label>
                                    </div>
                                </div>
                                {/* End Checkbox */}

                                <button
                                    type="submit"
                                    className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                                >
                                    登录
                                </button>
                            </div>
                        </form>
                        {/* End Form */}
                    </div>
                </div>
            </div>
        </>
    );
};