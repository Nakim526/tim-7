"use client";

import Link from "next/link";
// import { useRouter } from "next/navigation";

export default function Login() {
  // const { push } = useRouter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({
        email: e.currentTarget.email.value,
        password: e.currentTarget.password.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Data: ", data);
        if (data.status === 500) {
          alert(data.message);
        } else {
          window.location.href = "/dashboard";
        }
      });
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center px-6 py-8 m-auto md:min-w-[40%] lg:py-0">
        <div className="w-full bg-gray-800 border border-gray-700 rounded-lg shadow md:mt-0 xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl! font-bold leading-tight tracking-tight text-white md:text-2xl!">
              Sign in to your account
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={(e) => handleSubmit(e)}
              method="POST"
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className=" border rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  placeholder="email@example.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className=" border rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div className="flex items-start">
                <Link
                  href="#"
                  className="m-0 text-sm font-medium text-white hover:underline text-primary-500"
                >
                  Forgot password?
                </Link>
              </div>
              <button
                type="submit"
                className="w-full! text-white hover:text-white! bg-blue-600! hover:bg-blue-700! focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5! text-center"
              >
                Sign in
              </button>
              <p className="text-sm font-normal text-gray-400">
                Don’t have an account yet?{" "}
                <Link
                  href="/auth/register"
                  className="font-semibold text-primary-600 hover:underline text-primary-500"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
