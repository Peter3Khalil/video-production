'use client';
import CustomIframe, {
  CustomIframeContent,
  CustomIframePlaceholder,
} from '@/components/custom-iframe';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <main className="pt-16">
      <header className="fixed left-0 top-0 z-30 flex h-16 w-full items-center border-b bg-background px-4 lg:px-12">
        <nav className="flex w-full items-center justify-between">
          <Link href="/" className="text-2xl font-bold leading-none">
            Logo
          </Link>
          <ul className="hidden items-center gap-4 md:flex">
            {[1, 2, 3, 4].map((item) => (
              <li
                key={item}
                className="text-sm text-muted-foreground duration-300 hover:text-foreground"
              >
                <Link href={`/page-${item}`}>Page {item}</Link>
              </li>
            ))}
          </ul>

          <Button asChild>
            <Link href="#projects">Explore Projects</Link>
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-t from-accent/40 to-background px-6 py-12">
        <article className="mx-auto flex flex-col gap-2 text-center lg:max-w-lg">
          <h1 className="text-5xl font-bold leading-none">
            Your Vision, Our Lens
          </h1>
          <p className="text-md text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, eget
            nunc, amet, in. Nunc, eget nunc, amet, in
          </p>
        </article>
        <Image
          src="/hero.webp"
          width={560 * 1.5}
          height={560}
          loading="eager"
          alt="Hero Image"
          className="mx-auto mt-6 rounded-lg md:w-[80%] lg:w-[70%]"
        />
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-accent/40 px-6 py-12">
        <article className="mx-auto flex flex-col gap-4 text-center lg:max-w-lg">
          <h2 className="text-3xl font-bold leading-none">Our Projects</h2>
          <p className="text-md text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, eget
            nunc, amet, in. Nunc, eget nunc, amet, in
          </p>
        </article>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 8 }).map((_, index) => (
            <article
              key={index}
              className="flex flex-col gap-4 rounded-lg bg-background p-6"
            >
              <CustomIframe onLoad={() => setIsLoaded(true)}>
                <CustomIframePlaceholder />
                <CustomIframeContent src="https://www.youtube.com/embed/E4Rgr7TOKLA?si=VsW5rSHHn_oGM5T9" />
              </CustomIframe>
              {isLoaded ? (
                <>
                  <h3 className="text-xl font-bold leading-none">
                    Project {index}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc, eget nunc, amet, in. Nunc, eget nunc, amet, in
                  </p>
                </>
              ) : (
                <div className="flex flex-col gap-4">
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-4 w-full" />
                </div>
              )}
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
