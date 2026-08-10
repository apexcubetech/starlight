import type { Metadata } from "next";
import { SiteShell } from "../layout";
import { galleryContent } from "@/content/gallery";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/ui/Section";
import { LightboxGallery } from "@/components/LightboxGallery";
import { TamilText } from "@/components/TamilText";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Starlight Reels gallery — visual identity and brand imagery.",
};

export default function GalleryPage() {
  const c = galleryContent;

  return (
    <SiteShell>
      <PageHero
        title={c.title}
        titleTamil={c.titleTamil}
        subtitle={c.subtitle}
        subtitleTamil={c.subtitleTamil}
      />

      <Section>
        <p className="text-lead mx-auto mb-14 max-w-2xl text-center font-semibold">
          {c.introduction}
        </p>
        <LightboxGallery
          images={c.images.map((img) => ({
            src: img.src,
            alt: img.alt,
            title: img.title,
            description: img.description,
          }))}
        />
        {c.images.map((img) => (
          <TamilText key={img.src} className="mx-auto mt-8 max-w-lg text-center text-sm">
            {img.titleTamil}
          </TamilText>
        ))}
      </Section>
    </SiteShell>
  );
}
