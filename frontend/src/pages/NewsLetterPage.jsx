import NewsletterSignup from "../components/NewsLetterSignup";

function NewsletterPage() {
  return (
    <div
      style={{ background: "rgba(0,0,0,.5)" }}
      className="flex flex-col place-items-center gap-5 max-w-[30rem] m-auto rounded-lg mt-20 p-5"
    >
      <h1 className="self-center text-xl font-semibold whitespace-nowrap text-white">
        Join our awesome newsletter!
      </h1>
      <NewsletterSignup />
    </div>
  );
}

export default NewsletterPage;
