import { Card } from "@/components/ui/card";
import Section from "@/components/ui/section";
import Link from "next/link";

const cardData = [
  {
    title: "2024-present",
    content: (
      <div className="prose prose-sm dark:prose-invert">
        <h4 className="text-lg font-bold">
          Software Engineer, Growth <span className="text-zinc-500">·</span>{" "}
          Fastic
        </h4>
        <ul className="list-disc pl-4 mt-2 text-zinc-700 dark:text-zinc-400">
          <li>
            Maintain and optimize user acquisition funnel using
            React/TypeScript/Next.js, leveraging Amplitude and Statsig
          </li>
          <li>
            Developed WhatsApp user acquisition funnel with Meta's Cloud API and
            Node.js
          </li>
          <li>
            Built synthetic data generation tool using Python and Generative AI
          </li>
          <li>
            Developed internal billing management system with Firebase
            authentication
          </li>
        </ul>
      </div>
    ),
    skills: ["React", "TypeScript", "Next.js", "Node.js", "Python", "Firebase"],
  },
  {
    title: "2021-2024",
    content: (
      <div className="prose prose-sm dark:prose-invert">
        <h4 className="text-lg font-bold">
          Technical CRM Manager <span className="text-zinc-500">·</span> Fastic
        </h4>
        <ul className="list-disc pl-4 mt-2 text-zinc-700 dark:text-zinc-400">
          <li>
            Managed technical CRM development requirements and integrations
          </li>
          <li>
            Optimized blog achieving 1000% increase in engagement (100K+ monthly
            users)
          </li>
          <li>
            Improved monetization strategies leading to 50% revenue increase
          </li>
          <li>
            Developed responsive email and in-app notifications, improving CTR
            by 60%
          </li>
          <li>
            Led A/B testing program with statistical validation methodology
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "2022-2023",
    content: (
      <div className="prose prose-sm dark:prose-invert">
        <h4 className="text-lg font-bold">
          Project Manager <span className="text-zinc-500">·</span> Admiral
          Studio
        </h4>
        <ul className="list-disc pl-4 mt-2 text-zinc-700 dark:text-zinc-400">
          <li>
            Co-Launched WalletAds, the first-ever NFT marketing SaaS platform
          </li>
          <li>
            Managed rollout of key NFT projects like PirateGirls and Planetics
          </li>
          <li>
            Developed multiple websites using Webflow, optimizing for conversion
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "2021",
    content: (
      <div className="prose prose-sm dark:prose-invert">
        <h4 className="text-lg font-bold">
          Working Student, CRM <span className="text-zinc-500">·</span>{" "}
          Superloop App
        </h4>
        <ul className="list-disc pl-4 mt-2 text-zinc-700 dark:text-zinc-400">
          <li>Helped in setup of newly integrated CRM system, Iterable</li>
          <li>Designed and deployed foundational user journey flows</li>
          <li>Built automated customer engagement campaigns</li>
        </ul>
      </div>
    ),
  },
];

export default function About() {
  return (
    <Section>
      <div className="flex flex-col">
        <h2 className="text-4xl font-bold text-zinc-200 text-left">About me</h2>
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="mt-4 sm:mt-8 lg:mb-16 mb-8 w-full lg:w-1/3">
            <h3 className="text-2xl font-bold text-zinc-200 mb-5">
              Tim Börner
            </h3>
            <div className="flex flex-col mb-5">
              <h4 className="text-lg text-zinc-200">B.Sc. Computer Science</h4>
              <p className="text-sm text-zinc-500">
                University of Applied Sciences Dresden
              </p>
            </div>
            <p className="text-lg text-zinc-400 mb-5">
              I am a <span className="text-zinc-200">Full-stack engineer</span>{" "}
              specializing in{" "}
              <span className="text-zinc-200">growth engineering</span>. <br />
              <br />I have a proven track record of building scalable web
              applications,{" "}
              <span className="text-zinc-200">
                optimizing user acquisition funnels
              </span>
              , and implementing data-driven solutions using modern web
              technologies and AI. <br />
              <br />
              My expertise spans <span className="text-zinc-200">
                React
              </span>, <span className="text-zinc-200">TypeScript</span>, and{" "}
              <span className="text-zinc-200">Node.js</span>, with a focus on
              creating impactful solutions that drive business growth.
            </p>
            <Link
              href="https://www.linkedin.com/in/tmbrnr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
            >
              Connect with me on LinkedIn →
            </Link>
          </div>
          <div className="w-full lg:w-2/3">
            <h3 className="lg:hidden text-2xl font-bold text-zinc-200 mb-10">
              Experience
            </h3>
            <div className="lg:mt-5 flex flex-col lg:gap-4 gap-10">
              {cardData.map((card, index) => (
                <Card key={index} title={card.title} content={card.content} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
