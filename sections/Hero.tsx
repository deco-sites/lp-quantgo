import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { clx } from "site/sdk/clx.ts";

interface ImageProps {
  src: ImageWidget;
  alt: string;
  width: number;
  height: number;
}

interface CTAProps {
  href: string;
  text: string;
  title: string
}

export interface Props {
  logo: ImageProps;
  registerButton: CTAProps;
  loginButton: CTAProps;
  title?: string;
  description?: string;
  image?: ImageProps;
  ctaButton: CTAProps;
}

export default function HeroFlats({
  title,
  description,
  image,
  ctaButton,
  registerButton,
  loginButton,
  logo
}: Props) {
  return (
    <>
      <section class="w-full bg-dark-blue lg:px-8 lg:pb-52">
        <header class={clx(
          "flex flex-col gap-5 w-full pt-5 pb-9 items-center",
          "lg:mb-7 lg:max-w-4xl lg:mx-auto lg:flex-row lg:justify-between"
        )}>
          <Image
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            class="block max-auto"
          />
          <div class="flex gap-7 lg:flex-row-reverse">
            <a
              href={loginButton.href}
              title={loginButton.title}
              class={clx(
                "flex items-center bg-white text-light-blue uppercase font-bold font-secondary text-xs px-6 py-1 rounded-full",
                "hover:bg-light-blue hover:text-white"
              )}
            >
              {loginButton.text}
            </a>
            <a
              class="flex border-2 border-white text-white uppercase font-bold font-secondary text-xs px-6 py-1 rounded-full"
              href={registerButton.href}
              title={registerButton.title}
            >
              {registerButton.text}
            </a>
          </div>
        </header>
        
        <div class="flex flex-col 6 w-full items-center px-8 pb-6 gap-6">
          <h1 class="font-bold font-primary text-white text-5xl text-center lg:max-w-xl">
            {title}
          </h1>
          <p class="font-primary text-white text-base text-center lg:text-xl/tight">
            {description}
          </p>
          <a
            href={ctaButton.href}
            title={ctaButton.title}
            class={clx(
              "flex items-center bg-white text-light-blue uppercase font-bold font-secondary text-sm px-6 py-2 rounded-full",
              "hover:bg-light-blue hover:text-white",
              "lg:py-3.5 lg:text-lg/tight"
            )}
          >
            {ctaButton.text}
          </a>
        </div>
      </section>
      {image && (
        <img src={image.src} alt={image.alt} class="w-full mx-auto max-w-lg lg:max-w-[1500px] lg:-mt-52" />
      )}
    </>
  );
}
