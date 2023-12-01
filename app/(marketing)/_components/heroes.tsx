import Image from "next/image";

export const Heroes = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl">
      <div className="flex items-center">
        <div className="relative w-[328px] h-[120px] sm:w-[640px] sm:h-[234px] md:h-[234px] md:w-[640px]">
          <Image
            src="/hero.png"
            fill
            className="object-contain dark:hidden"
            alt="Hero image"
          />
          <Image
            src="/hero-dark.png"
            fill
            className="object-contain hidden dark:block"
            alt="Hero image"
          />
        </div>
      </div>
    </div>
  )
}