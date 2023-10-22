import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="hero-section max-w-6xl mx-auto h-screen flex gap-4 items-center">
        <div className="basis-1/2 flex flex-col justify-between">
          <h1 className="text-6xl leading-[72px]">
            Get insights quickly, with Google Forms
          </h1>
          <p className="text-[#5f6368] my-10 text-xl">
            Easily create and share online forms and surveys, and analyze
            responses in real-time.
          </p>
          <div className="mb-10 text-[#5f6368]">
            <Link
              href={"/create-form"}
              className="inline-block box-border pointer px-12 py-4 bg-[#1a73e8] text-white rounded"
            >
              Go to Forms
            </Link>
          </div>
          <div className="flex gap-x-4 text-[#5f6368]">
            <p>Don't have an account?</p>
            <Link className="text-[#1a73e8]" href={"/sign-up"}>
              Signup
            </Link>
          </div>
        </div>
        <div className="basis-1/2">
          <Image
            src="/images/hero-image.png"
            style={{ objectFit: "cover" }}
            className="drop-shadow-lg"
            width={1120}
            height={730}
            alt="form-responses"
          />
        </div>
      </section>
    </main>
  );
}
