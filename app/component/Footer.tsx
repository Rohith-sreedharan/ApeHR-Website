const Footer = () => {
  return (
    <div className="bg-primary relative">
      <hr className="border-gray-800 border-2 absolute top-0 w-full" />
      <div className="mx-auto w-full max-w-screen-xl px-4 py-8 lg:py-16">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="mb-6 lg:mb-0">
            <a className="flex items-center gap-2" href="/">
              <img src="/apehr-logo.png" className="h-12 w-12 rounded-xl" alt="APE HR Logo" />
              <span className="text-white text-2xl lg:text-4xl font-bold">APE HR</span>
            </a>
            <p className="mt-4 max-w-xs text-secondary text-sm">
              Identify and fix slow code–in minutes, not months.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">Community</h2>
              <ul className="text-gray-400">
                <li className="mb-4">
                  <a href="/chat" className="hover:text-gray-200 duration-200">Discord</a>
                </li>
                <li className="mb-4">
                  <a href="https://twitter.com/milliondotjs" className="hover:text-gray-200 duration-200">Twitter</a>
                </li>
                <li>
                  <a href="mailto:aiden@million.dev" className="hover:text-gray-200 duration-200">Email</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">Legal</h2>
              <ul className="text-gray-400">
                <li className="mb-4">
                  <a href="/docs/terms" className="hover:text-gray-200 duration-200">Terms of Service</a>
                </li>
                <li className="mb-4">
                  <a href="/docs/privacy-policy" className="hover:text-gray-200 duration-200">Privacy Policy</a>
                </li>
                <li>
                  <a href="/docs/code-policy" className="hover:text-gray-200 duration-200">Code Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />
        <div className="text-center">
          <span className="text-sm text-gray-400">
            © 2024 <a href="/" className="hover:text-white">ApeHr</a>. All Rights Reserved.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;