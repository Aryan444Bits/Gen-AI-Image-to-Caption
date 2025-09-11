import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const submit = (data) => {
    console.log(data);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(submit)}
        className="bg-gray-200 opacity-90 p-8 rounded-xl  shadow-lg max-w-sm mx-auto shadow-gray-300"
      >
        <div className="">
          <label
            htmlFor="user"
            className="block text-gray-700 font-semibold mb-2"
          >
            Name:
          </label>
          <input
            {...register("username")}
            id="user"
            type="text"
            required
            autoComplete="username"
            placeholder="username"
            className="w-full px-4 py-2 mb-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
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
            name="email"
            required
            id="email"
            autoComplete="username"
            placeholder="email"
            className="w-full mb-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          />
        </div>

        <div>
          <label
            htmlFor="pass"
            className="block text-gray-700 font-semibold mb-2"
          >
            Password:
          </label>
          <input
            {...register("password")}
            type="password"
            id="pass"
            required
            placeholder="New password"
            autoComplete="current-password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          />
        </div>
        <br />
        <button
          type="submit"
          className="bg-blue-500 ml-[28%] p-2 px-6 rounded-xl text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
        >
          Create Account
        </button>
      </form>
    </>
  );
};

export default Login;
