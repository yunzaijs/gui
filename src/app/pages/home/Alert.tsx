'use client'

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default () => {
  const alert = useSelector((state: any) => state.alert)
  const dispatch = useDispatch()
  useEffect(() => {
    if (alert.show) {
      const timer = setTimeout(() => {
        // 隐藏
        dispatch({
          type: 'ALERT',
          show: false
        })
      }, 3000) // 3秒后自动关闭
      return () => clearTimeout(timer) // 清理定时器
    }
  }, [alert.show, dispatch])
  if (!alert.show) return <></>
  return (
    <>
      <div className="space-y-5 absolute z-50 w-full flex justify-center top-14">
        {alert.typing == 'error' ? (
          <div
            className="bg-red-50 border-s-4 border-red-500 p-4 dark:bg-red-800/30"
            role="alert"
            aria-labelledby="hs-bordered-red-style-label"
          >
            <div className="flex">
              <div className="shrink-0">
                {/* Icon */}
                <span className="inline-flex justify-center items-center h-8 w-8 rounded-full border-4 border-red-100 bg-red-200 text-red-800 dark:border-red-900 dark:bg-red-800 dark:text-red-400">
                  <svg
                    className="h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </svg>
                </span>
              </div>
              <div className="ms-3">
                <h3
                  id="hs-bordered-red-style-label"
                  className="text-gray-800 font-semibold dark:text-white"
                >
                  {alert.title}
                </h3>
                <p className="text-sm text-gray-700 dark:text-neutral-400">
                  {alert.message}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div
            className="bg-teal-50 border-t-2 border-teal-500 rounded-lg p-4 dark:bg-teal-800/30"
            role="alert"
            aria-labelledby="hs-bordered-success-style-label"
          >
            <div className="flex">
              <div className="shrink-0">
                {/* Icon */}
                <span className="inline-flex justify-center items-center h-8 w-8 rounded-full border-4 border-teal-100 bg-teal-200 text-teal-800 dark:border-teal-900 dark:bg-teal-800 dark:text-teal-400">
                  <svg
                    className="h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </span>
                {/* End Icon */}
              </div>
              <div className="ms-3">
                <h3
                  id="hs-bordered-success-style-label"
                  className="text-gray-800 font-semibold dark:text-white"
                >
                  {alert.title}
                </h3>
                <p className="text-sm text-gray-700 dark:text-neutral-400">
                  {alert.message}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
