const Footer = () => {
  return (
<<<<<<< Updated upstream
    <div className="bg-primary relative">
      <hr className="border-gray-800 border-2 absolute top-20 w-full" />
=======
    <div className="bg-primary dark:bg-black dark:text-white">
>>>>>>> Stashed changes
      <div className="mx-auto w-full max-w-screen-xl xl:pb-2">
        <div className="md:flex md:justify-between px-8 p-4 py-16 sm:pb-16 gap-4"></div>
        <div
          className="flex w-full flex-col sm:flex-row sm:flex sm:items-center sm:justify-between rounded-md py-4 px-8 gap-2"
          style={{ flexDirection: "column" }}
        >
          <div className="flex justify-between px-8 p-4 py-16 sm:pb-16 gap-4 w-full">
            <div className="mb-12 flex-col flex gap-4">
              <a className="flex items-center gap-2" href="/">
                <img src="/apehr-logo.png" className="h-16 w-16 rounded-xl" />
                <span className="text-white text-4xl font-bold">APE HR</span>
              </a>
              <p className="max-w-xs text-secondary dark:text-white">
                Identify and fix slow code–in minutes, not months.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:gap-10 sm:grid-cols-2">
              <div>
                <h2 className="mb-6 text-sm tracking-tighter font-medium text-gray-900 dark:text-white">
                  Community
                </h2>
                <ul className="gap-2 grid">
                  <li>
                    <a
                      className="cursor-pointer text-gray-400 hover:text-gray-200 duration-200 font-[450] text-sm"
                      href="https://twitter.com/springreenoff"
                    >
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a
                      className="cursor-pointer text-gray-400 hover:text-gray-200 duration-200 font-[450] text-sm"
                      href="https://twitter.com/springreenoff"
                    >
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a
                      className="cursor-pointer text-gray-400 hover:text-gray-200 duration-200 font-[450] text-sm"
                      href="mailto:hello@springreen.in"
                    >
                      Email
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm tracking-tighter font-medium text-gray-900 dark:text-white">
                  Legal
                </h2>
                <ul className="gap-2 grid">
                  <li>
                    <a
                      className="cursor-pointer text-gray-400 hover:text-gray-200 duration-200 font-[450] text-sm"
                      href="/docs/terms"
                    >
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a
                      className="cursor-pointer text-gray-400 hover:text-gray-200 duration-200 font-[450] text-sm"
                      href="/docs/privacy-policy"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      className="cursor-pointer text-gray-400 hover:text-gray-200 duration-200 font-[450] text-sm"
                      href="/docs/code-policy"
                    >
                      Code Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex sm:flex-row sm:flex sm:items-center sm:justify-between rounded-md py-4 px-8 gap-2">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              Copyright © 2024{" "}
              <a className="cursor-pointer" href="/">
                ApeHr
              </a>
              . All Rights Reserved.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
