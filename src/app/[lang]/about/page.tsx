import { ArticleContainer } from "@/components/article/article-container";
import { ArticleTitle } from "@/components/article/article-title";
import { ArticleTitleLevel2 } from "@/components/article/article-title-level-2";
import { ArticleTitleLevel3 } from "@/components/article/article-title-level-3";
import { ContactButtonWithLottie } from "@/components/contact-button-with-lottie";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Wevalyn",
  description:
    "Welcome to Wevalyn, your dedicated partner for expert WordPress development services. Transform your online presence with our skilled team of web developers, crafting customized solutions to elevate your website's performance and user experience. From responsive design to seamless integration of powerful WordPress features, we bring your vision to life. Explore our comprehensive services tailored for businesses of all sizes. Trust Wevalyn to turn your digital ambitions into reality. Contact us today for a WordPress experience that sets you apart in the online landscape.",
};

export default function AboutPage() {
  return (
    <ArticleContainer>
      <ArticleTitle>About Us</ArticleTitle>
      <div className="flex flex-col gap-y-4">
        <ArticleTitleLevel2>Our Genesis</ArticleTitleLevel2>
        <p>
          In the ever-evolving digital ecosystem, the need for a reliable,
          creative, and technically proficient WordPress development agency
          became glaringly evident. This realization led to the birth of
          Wevalyn. Founded on the principles of integrity, creativity, and
          excellence, we embarked on a journey to transform concepts into
          captivating digital realities.
        </p>
      </div>

      <div className="flex flex-col gap-y-4">
        <ArticleTitleLevel2>Our Mission</ArticleTitleLevel2>
        <p>
          At the heart of our mission is a commitment to empower businesses,
          organizations, and individuals with robust, visually stunning
          WordPress solutions. We believe that the online presence of any entity
          is not just a representation but an extension of its identity. Our
          mission is to elevate that identity, crafting a digital footprint that
          resonates with authenticity and purpose.
        </p>
      </div>

      <div className="flex flex-col gap-y-9">
        <ArticleTitleLevel2>The Wevalyn Difference</ArticleTitleLevel2>
        <div className="flex flex-col gap-y-4">
          <ArticleTitleLevel3>Technical Mastery</ArticleTitleLevel3>
          <p>
            Our team of seasoned WordPress developers boasts an extensive
            understanding of the platform, from its core functionalities to the
            latest trends and updates. We specialize in custom theme
            development, plugin integration, and optimization to ensure that
            your website not only meets but exceeds industry standards.
          </p>
        </div>

        <div className="flex flex-col gap-y-4">
          <ArticleTitleLevel3>Creative Ingenuity</ArticleTitleLevel3>
          <p>
            In the realm of digital experiences, creativity is the key to
            standing out. Our designers are not just artists; they are strategic
            thinkers who blend aesthetics with functionality. Whether it&apos;s
            a corporate website, an e-commerce platform, or a personal blog, we
            infuse creativity into every pixel, ensuring a visually compelling
            and memorable user experience.
          </p>
        </div>

        <div className="flex flex-col gap-y-4">
          <ArticleTitleLevel3>Client-Centric Approach</ArticleTitleLevel3>
          <p>
            Collaboration is at the heart of our process. We understand that
            your vision is unique, and we are here to bring it to life. Our
            client-centric approach involves active communication, transparency,
            and a deep understanding of your goals. Your success is our success,
            and we take pride in being a partner you can trust.
          </p>
        </div>

        <div className="flex flex-col gap-y-4">
          <ArticleTitleLevel3>Future-Proof Solutions</ArticleTitleLevel3>
          <p>
            The digital landscape is dynamic, and we believe in future-proofing
            our solutions. Our development practices adhere to the latest
            standards, ensuring scalability, security, and adaptability. We
            don&apos;t just build websites; we create foundations for sustained
            digital growth.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-y-4">
        <ArticleTitleLevel2>Our Portfolio</ArticleTitleLevel2>
        <p>
          Our portfolio is a testament to the diverse projects we&apos;ve
          undertaken and successfully delivered. From small businesses to large
          enterprises, we&apos;ve had the privilege of working with clients
          across industries. Each project in our portfolio reflects our
          commitment to excellence and our ability to tailor solutions to the
          unique needs of our clients.
        </p>
      </div>
      <div className="flex flex-col gap-y-9">
        <ArticleTitleLevel2>Joining Forces with Wevalyn</ArticleTitleLevel2>
        <div className="flex flex-col gap-y-4">
          <ArticleTitleLevel3>Let&apos;s Innovate Together</ArticleTitleLevel3>
          <p>
            Innovation is the heartbeat of Wevalyn. We embrace challenges,
            turning them into opportunities for creative problem-solving. If
            you&apos;re looking for a WordPress development agency that thinks
            beyond the conventional, we invite you to join us in crafting
            digital excellence.
          </p>
        </div>

        <div className="flex flex-col gap-y-4">
          <ArticleTitleLevel3>Your Success, Our Priority</ArticleTitleLevel3>
          <p>
            Your success is our driving force. We are not satisfied with merely
            meeting expectations; we aim to exceed them. With a focus on
            results-driven development, we ensure that every line of code
            contributes to your online success story.
          </p>
        </div>

        <div className="flex flex-col gap-y-4">
          <ArticleTitleLevel3>Experience the Wevalyn Magic</ArticleTitleLevel3>
          <p>
            Beyond the code and design, there&apos;s a touch of magic in every
            project we undertake. It&apos;s the Wevalyn difference — the
            seamless integration of technology and creativity, resulting in
            digital experiences that captivate, engage, and leave a lasting
            impression.
          </p>
        </div>
      </div>
      <ContactButtonWithLottie />
    </ArticleContainer>
  );
}
