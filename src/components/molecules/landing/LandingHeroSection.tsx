"use client";

import Image from "next/image";

export default function LandingHeroSection() {
  const text = `Hi, I'm Brilly`;
  const handleMouseEnter = (e: React.MouseEvent<HTMLSpanElement>) => {
    const wordIndex = e.currentTarget.getAttribute("data-index");
    const characters = document.querySelectorAll(`.word-${wordIndex} .char`);

    characters.forEach((char) => {
      if (char instanceof HTMLElement) {
        const randomX = Math.random() * 4;
        const randomY = Math.random() * 4 * -0.7;
        const randomRotate = Math.random() * 10;

        char.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomRotate}deg)`;
      }
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLSpanElement>) => {
    const wordIndex = e.currentTarget.getAttribute("data-index");
    const characters = document.querySelectorAll(`.word-${wordIndex} .char`);

    characters.forEach((char) => {
      if (char instanceof HTMLElement) {
        char.style.transform = "";
      }
    });
  };

  return (
    <>
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="w-full flex justify-between gap-2">
            <div className="flex-col flex flex-1 space-y-1.5">
              <span className="flex gap-2 items-center md:text-6xl text-2xl font-bold">
                <h1>
                  {text.split(" ").map((word, wordIndex) => (
                    <span
                      key={wordIndex}
                      data-index={wordIndex}
                      className={`group transition-all duration-300 ease-in-out hover:text-muted-foreground relative inline-block word-${wordIndex}`}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      {word.split("").map((char, charIndex) => (
                        <span
                          key={charIndex}
                          className="char relative inline-block transition-transform duration-200"
                        >
                          {char}
                        </span>
                      ))}
                      {wordIndex < text.split(" ").length - 1 && "\u00A0"}
                    </span>
                  ))}
                </h1>
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
