import HeroSection from "@/components/HeroSection";
import ServicesPreview from "@/components/ServicesPreview";
import MastersPreview from "@/components/MastersPreview";
import GalleryPreview from "@/components/GalleryPreview";
import BookingCta from "@/components/BookingCta";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesPreview />
      <MastersPreview />
      <GalleryPreview />
      <BookingCta />
    </main>
  );
}
