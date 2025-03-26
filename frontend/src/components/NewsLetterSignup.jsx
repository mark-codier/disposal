import { useState, useEffect } from "react";
import { useFetcher } from "react-router-dom";

export default function NewsletterSignup() {
  const fetcher = useFetcher();
  const [btnContent, setBtnContent] = useState("Sign up");
  useEffect(() => {
    if (fetcher?.data?.message) {
      setBtnContent(fetcher.data.message);
      const timeoutId = setTimeout(() => {
        setBtnContent("Sign up");
      }, 2000);
      return () => clearTimeout(timeoutId);
    }

  }, [fetcher]);

  return (
    <fetcher.Form method="post" action="/newsletter" className="flex">
      <input
        className="font-inherit py-1 px-3 rounded-none border-0"
        type="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
        name="email"
      />
      <button className="font-inherit text-white py-1 px-3 rounded-none border-0 rounded-tr rounded-br cursor-pointer hover:bg-teal-300 hover:text-gray-800">
        {btnContent}
      </button>
    </fetcher.Form>
  );
}
