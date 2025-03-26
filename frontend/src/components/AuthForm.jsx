import {
  Form,
  Link,
  useActionData,
  useNavigation,
  useSearchParams,
} from "react-router-dom";

function AuthForm() {
  // auth?mode=signup
  // auth?mode=login
  const data = useActionData();
  const navigation = useNavigation();
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";
  const isSubmitting = navigation.state === "submitting";

  return (
    <>
      <Form method="post" className="max-w-md mx-auto mt-8">
        <h1 className="text-2xl font-semibold mb-4">
          {isLogin ? "Log in" : "Create a new user"}
        </h1>
        {data && data.errors && (
          <ul>
            {Object.values(data.errors).map((err) => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        )}
        {data && data.message && <p>{data.message}</p>}
        <p className="mb-4">
          <label htmlFor="email" className="block mb-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </p>
        <p className="mb-4">
          <label htmlFor="password" className="block mb-1">
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </p>
        <div className="flex gap-4 justify-end items-center">
          <Link
            to={`?mode=${isLogin ? "signup" : "login"}`}
            className="bg-gray-200 text-gray-800 py-2 px-6 rounded hover:bg-teal-300"
          >
            {isLogin ? "Create new user" : "Login"}
          </Link>
          <button
            type="submit"
            className="bg-gray-300 text-gray-800 py-2 px-6 rounded hover:bg-amber-300"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Loading..." : "Save"}
          </button>
        </div>
      </Form>
    </>
  );
}

export default AuthForm;
