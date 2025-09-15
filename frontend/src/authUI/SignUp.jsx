import { useForm } from "react-hook-form";

const SignUP = () => {
  const { submitHandler, register, error } = useForm();
  return (
    <>
      <form className="bg-white p-8 rounded-xl  shadow-lg max-w-sm mx-auto shadow-gray-500">
        <div className="">
          <label
            htmlFor="username"
            className="block text-gray-700 font-semibold mb-2"
          >
            Name:
          </label>
          <input
            {...register("userName")}
            type="text"
            placeholder="username"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          />
        </div>

        <div className="">
          <label
            htmlFor="email"
            className="block text-gray-700 font-semibold mb-2"
          >
            Email:
          </label>
          <input
            {...register("email")}
            type="email"
            placeholder="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-gray-700 font-semibold mb-2"
          >
            Password:
          </label>
          <input
            {...register("password")}
            autoComplete=""
            type="password"
            placeholder="New Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          />
        </div>
        <br />
        <button className="bg-blue-500 ml-[28%] p-2 px-6 rounded-xl text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
          Create Account
        </button>
      </form>
    </>
  );
};

export default SignUP;
