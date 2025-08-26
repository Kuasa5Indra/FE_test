// app/login/page.tsx or pages/login.tsx

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Panel */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-white p-8 md:p-10">
        {/* Logo */}
        <div className="w-40 h-24 bg-gray-100 border border-gray-300 flex items-center justify-center mb-10">
          <span className="text-lg font-semibold">App Logo</span>
        </div>

        {/* Login Form */}
        <form className="w-full max-w-sm space-y-4">
          <div>
            <label className="block mb-1 font-medium">Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full"
            />
          </div>

          <button className="btn btn-neutral w-full mt-4">Login</button>
        </form>
      </div>

      {/* Right Panel (hidden on small screens) */}
      <div className="hidden md:flex w-1/2 bg-gray-100 items-center justify-center">
        <div className="w-3/4 h-3/4 border border-gray-300 flex items-center justify-center text-center text-xl font-semibold text-gray-700">
          App Illustration/Background
        </div>
      </div>
    </div>
  );
}
