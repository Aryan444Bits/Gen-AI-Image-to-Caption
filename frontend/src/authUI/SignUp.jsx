import { useForm } from "react-hook-form";

const SignUP = () => {
  const { submitHandler, register, error } = useForm();
  return <>
  <form className="bg-white p-8 rounded-xl shadow-lg max-w-sm mx-auto mt-10">
  <div className="">
    <label htmlFor="username" className="block text-gray-700 font-semibold mb-2">Name:</label>
    <input
      {...register("userName")}
      type="text"
      placeholder="username"
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
    />
  </div>

  <div className="">
    <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email:</label>
    <input
      {...register("email")}
      type="email"
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
    />
  </div>

  <div >
    <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password:</label>
    <input
      {...register("password")}
      type="password"
      placeholder="New Password"
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
    />
  </div>
</form>
  </>;
};

export default SignUP;
