import Form from './From'
export default () => {
  return (
    <main id="content">
      <div className="overflow-hidden">
        <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm py-3 md:py-0">
          <nav className="max-w-[85rem] w-full mx-auto px-4 md:px-6 lg:px-8">
            <div className="relative md:flex md:items-center md:justify-between">
              <div className="flex items-center justify-between">
                <a
                  className="flex-none focus:outline-none focus:opacity-80"
                  href="#"
                >
                  Yunzai Next
                </a>

                <div className="md:hidden">
                  <button
                    type="button"
                    className="hs-collapse-toggle size-9 flex justify-center items-center text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                    id="hs-navbar-page-demo-pricing-collapse"
                    aria-expanded="false"
                    aria-controls="hs-navbar-page-demo-pricing"
                    aria-label="Toggle navigation"
                    data-hs-collapse="#hs-navbar-page-demo-pricing"
                  >
                    <svg
                      className="hs-collapse-open:hidden shrink-0 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="3" x2="21" y1="6" y2="6" />
                      <line x1="3" x2="21" y1="12" y2="12" />
                      <line x1="3" x2="21" y1="18" y2="18" />
                    </svg>
                    <svg
                      className="hs-collapse-open:block hidden shrink-0 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              <div
                id="hs-navbar-page-demo-pricing"
                className="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow md:block"
                aria-labelledby="hs-navbar-page-demo-pricing-collapse"
              >
                <div className="overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
                  <div className="flex flex-col gap-x-0 mt-5 divide-y divide-dashed divide-gray-200 md:flex-row md:items-center md:justify-end md:gap-x-7 md:mt-0 md:ps-7 md:divide-y-0 md:divide-solid dark:divide-neutral-700">
                    <a
                      className="py-3 md:py-6 font-medium text-gray-600 hover:text-gray-500 focus:outline-none focus:text-gray-500 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
                      href="#"
                      aria-current="page"
                    >
                      开发文档
                    </a>

                    <a
                      className="py-3 md:py-6 font-medium text-gray-600 hover:text-gray-500 focus:outline-none focus:text-gray-500 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
                      href="#"
                    >
                      源码
                    </a>

                    <div className="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover] py-3 md:py-4">
                      <button
                        id="hs-mega-menu-pdp"
                        type="button"
                        className="flex items-center w-full text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400 font-medium dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
                        aria-haspopup="menu"
                        aria-expanded="false"
                        aria-label="Mega Menu"
                      >
                        更新记录
                        <svg
                          className="ms-2 size-2.5 text-gray-500 dark:text-neutral-500"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          ></path>
                        </svg>
                      </button>

                      <div
                        className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 w-full hidden z-10 top-full start-0 min-w-60 bg-white md:shadow-2xl rounded-lg py-2 md:p-4 dark:bg-neutral-900 dark:divide-neutral-700 before:absolute before:-top-5 before:start-0 before:w-full before:h-5"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="hs-mega-menu-pdp"
                      >
                        <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                          <div className="flex flex-col mx-1 md:mx-0">
                            <a
                              className="group flex gap-x-5 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-lg p-4 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                              href="#"
                            >
                              <svg
                                className="shrink-0 size-5 mt-1"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                              </svg>
                              <div className="grow">
                                <p className="font-medium text-gray-800 dark:text-neutral-200">
                                  Support Docs
                                </p>
                                <p className="text-sm text-gray-500 group-hover:text-gray-800 group-focus:text-gray-800 dark:text-neutral-500 dark:group-hover:text-neutral-200 dark:group-focus:text-neutral-200">
                                  Explore advice and explanations for all of
                                  Preline's features.
                                </p>
                              </div>
                            </a>

                            <a
                              className="group flex gap-x-5 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-lg p-4 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                              href="#"
                            >
                              <svg
                                className="shrink-0 size-5 mt-1"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <rect
                                  width="7"
                                  height="7"
                                  x="14"
                                  y="3"
                                  rx="1"
                                />
                                <path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3" />
                              </svg>
                              <div className="grow">
                                <p className="font-medium text-gray-800 dark:text-neutral-200">
                                  Integrations
                                </p>
                                <p className="text-sm text-gray-500 group-hover:text-gray-800 group-focus:text-gray-800 dark:text-neutral-500 dark:group-hover:text-neutral-200 dark:group-focus:text-neutral-200">
                                  Discover the huge range of tools that Preline
                                  integrates with.
                                </p>
                              </div>
                            </a>

                            <a
                              className="group flex gap-x-5 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-lg p-4 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                              href="#"
                            >
                              <svg
                                className="shrink-0 size-5 mt-1"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="m7 11 2-2-2-2" />
                                <path d="M11 13h4" />
                                <rect
                                  width="18"
                                  height="18"
                                  x="3"
                                  y="3"
                                  rx="2"
                                  ry="2"
                                />
                              </svg>
                              <div className="grow">
                                <p className="font-medium text-gray-800 dark:text-neutral-200">
                                  API Reference
                                </p>
                                <p className="text-sm text-gray-500 group-hover:text-gray-800 group-focus:text-gray-800 dark:text-neutral-500 dark:group-hover:text-neutral-200 dark:group-focus:text-neutral-200">
                                  Build custom integrations with our first-class
                                  API.
                                </p>
                              </div>
                            </a>
                          </div>

                          <div className="flex flex-col mx-1 md:mx-0">
                            <a
                              className="group flex gap-x-5 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-lg p-4 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                              href="#"
                            >
                              <svg
                                className="shrink-0 size-5 mt-1"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <circle cx="12" cy="12" r="10" />
                                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                                <path d="M12 17h.01" />
                              </svg>
                              <div className="grow">
                                <p className="font-medium text-gray-800 dark:text-neutral-200">
                                  Help Center
                                </p>
                                <p className="text-sm text-gray-500 group-hover:text-gray-800 group-focus:text-gray-800 dark:text-neutral-500 dark:group-hover:text-neutral-200 dark:group-focus:text-neutral-200">
                                  Learn how to install, set up, and use Preline.
                                </p>
                              </div>
                            </a>

                            <a
                              className="group flex gap-x-5 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-lg p-4 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                              href="#"
                            >
                              <svg
                                className="shrink-0 size-5 mt-1"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <circle cx="12" cy="12" r="4" />
                                <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
                              </svg>
                              <div className="grow">
                                <p className="font-medium text-gray-800 dark:text-neutral-200">
                                  Developer Hub
                                </p>
                                <p className="text-sm text-gray-500 group-hover:text-gray-800 group-focus:text-gray-800 dark:text-neutral-500 dark:group-hover:text-neutral-200 dark:group-focus:text-neutral-200">
                                  Learn how to integrate or build on top of
                                  Preline.
                                </p>
                              </div>
                            </a>

                            <a
                              className="group flex gap-x-5 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-lg p-4 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                              href="#"
                            >
                              <svg
                                className="shrink-0 size-5 mt-1"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                <circle cx="9" cy="7" r="4" />
                                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                              </svg>
                              <div className="grow">
                                <p className="font-medium text-gray-800 dark:text-neutral-200">
                                  Community Forum
                                </p>
                                <p className="text-sm text-gray-500 group-hover:text-gray-800 group-focus:text-gray-800 dark:text-neutral-500 dark:group-hover:text-neutral-200 dark:group-focus:text-neutral-200">
                                  Learn, share, and connect with other Preline
                                  users.
                                </p>
                              </div>
                            </a>
                          </div>

                          <div className="flex flex-col pt-4 md:pt-0 mx-1 md:mx-0">
                            <span className="text-sm font-semibold uppercase text-gray-800 dark:text-neutral-200">
                              Customer stories
                            </span>

                            <a
                              className="mt-4 group flex gap-x-5 items-center focus:outline-none"
                              href="#"
                            >
                              <img
                                className="size-32 rounded-lg"
                                src="https://images.unsplash.com/photo-1648737967328-690548aec14f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=320&q=80"
                                alt="Avatar"
                              ></img>
                              <div className="grow">
                                <p className="text-gray-800 dark:text-neutral-200">
                                  Preline Projects has proved to be most
                                  efficient cloud based project tracking and bug
                                  tracking tool.
                                </p>
                                <p className="mt-3 inline-flex items-center gap-x-2 text-sm font-semibold text-gray-800 dark:text-neutral-200">
                                  Learn more
                                  <svg
                                    className="shrink-0 size-4 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  >
                                    <path d="m9 18 6-6-6-6" />
                                  </svg>
                                </p>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>

        <div className="relative">
          <div
            aria-hidden="true"
            className="flex -z-[1] absolute -top-48 start-0"
          >
            <div className="bg-purple-200 opacity-30 blur-3xl w-[1036px] h-[600px] dark:bg-purple-900 dark:opacity-20"></div>
            <div className="bg-gray-200 opacity-90 blur-3xl w-[577px] h-[300px] transform translate-y-32 dark:bg-neutral-800/60"></div>
          </div>

          <div className="max-w-[85rem] px-4 pt-10 sm:px-6 lg:px-8 lg:pt-14 mx-auto">
            <div className="max-w-2xl mx-auto text-center mb-10">
              <h2 className="text-3xl leading-tight font-bold md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-700 text-transparent">
                Yunzai Admin
              </h2>
              <p className="mt-2 lg:text-lg text-gray-800 dark:text-neutral-200">
                欢迎使用Yunzai管理系统
              </p>
            </div>
          </div>

          <div className="absolute top-1/2 start-1/2 -z-[1] transform -translate-y-1/2 -translate-x-1/2 w-[340px] h-[340px] border border-dashed border-violet-200 rounded-full dark:border-violet-900/60"></div>
          <div className="absolute top-1/2 start-1/2 -z-[1] transform -translate-y-1/2 -translate-x-1/2 w-[575px] h-[575px] border border-dashed border-violet-200 rounded-full opacity-80 dark:border-violet-900/60"></div>
          <div className="absolute top-1/2 start-1/2 -z-[1] transform -translate-y-1/2 -translate-x-1/2 w-[840px] h-[840px] border border-dashed border-violet-200 rounded-full opacity-60 dark:border-violet-900/60"></div>
          <div className="absolute top-1/2 start-1/2 -z-[1] transform -translate-y-1/2 -translate-x-1/2 w-[1080px] h-[1080px] border border-dashed border-violet-200 rounded-full opacity-40 dark:border-violet-900/60"></div>
        </div>


        <div className='w-[23rem] sm:w-[30rem] md:w-[40rem] ] m-auto'>
          <Form />
        </div>


      </div>
    </main>
  )
}
