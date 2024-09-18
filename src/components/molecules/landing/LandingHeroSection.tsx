import Image from "next/image";

export default function LandingHeroSection() {
  return (
    <>
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="w-full flex justify-between gap-2">
            <div className="flex-col flex flex-1 space-y-1.5">
              <span className="flex gap-2 items-center md:text-6xl text-2xl font-bold">
                <div>Hi, I'm Brilly</div>
                <Image
                  src={"assets/verified.svg"}
                  alt="Verified"
                  width={64}
                  height={64}
                  className="size-5 md:size-7"
                />
              </span>
              <div className="flex">
                <span className="md:text-xl text-sm">
                  Software Engineer. I like learning new things even though my
                  hobby is just playing <strong>Tiktok</strong>.
                </span>
              </div>
            </div>
            <div>
              <Image
                src={"/assets/images/brilly.png"}
                alt="Muhammad Ahib Ibrilli"
                width={150}
                height={150}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
