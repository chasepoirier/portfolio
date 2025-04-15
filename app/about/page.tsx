import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

import { Container } from "@/components/Container";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
  YoutubeIcon,
} from "@/components/SocialIcons";

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
  ...rest
}: React.ComponentPropsWithoutRef<typeof Link> & {
  className?: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <li className={clsx(className, "flex")}>
      <Link
        href={href}
        {...rest}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  );
}

function MailIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  );
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src="/images/portrait-2.jpg"
              width={1024}
              height={1024}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Building for creators from Denver, CO.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I&apos;ve always been inspired by creators who use technology to
              shape their lives and build their dreams. After years spent
              fascinated by entrepreneurs and content creators who forged their
              own paths, I decided it was my turn to step forward.
            </p>
            <p>
              My journey wasn&apos;t straightforward—I spent countless evenings
              wrestling with code, watching endless tutorials, and questioning
              if I was cut out for this. Despite setbacks and self-doubt, my
              passion for creating meaningful solutions only deepened.
            </p>
            <p>
              Now, I&apos;m building CreatorNative, a platform dedicated to
              empowering solo creators and founders with practical resources and
              real-world guidance. My goal is simple: to help others navigate
              the same challenges I faced, turning their side hustles into
              profitable, sustainable businesses. Because everyone deserves the
              tools and confidence to build their dreams on their own terms.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul className="space-y-2">
            <SocialLink
              href="https://youtube.com/@chase_codes"
              aria-label="Follow on YouTube"
              target="_blank"
              rel="noreferrer"
              icon={YoutubeIcon}
            >
              Follow on YouTube
            </SocialLink>
            <SocialLink
              href="https://x.com/chase_codes"
              aria-label="Follow on X"
              target="_blank"
              rel="noreferrer"
              icon={XIcon}
            >
              Follow on X
            </SocialLink>
            <SocialLink
              href="https://instagram.com/chase_codes"
              target="_blank"
              rel="noreferrer"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            >
              Follow on Instagram
            </SocialLink>
            <SocialLink
              href="https://github.com/chasepoirier"
              target="_blank"
              rel="noreferrer"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            >
              Follow on Github
            </SocialLink>
            <SocialLink
              href="https://linkedin.com/in/chasepoirier"
              target="_blank"
              rel="noreferrer"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:chase@creatornative.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              chase@creatornative.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  );
}
