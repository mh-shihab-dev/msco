import { assets } from "@/assets/assets";
import MainContent from "@/components/services/MainContent";
import { services } from "@/data/Data";
import Image from "next/image";

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="p-10 text-center text-red-500">Service not found</div>
    );
  }

  return (
    <div className="mb-[100px]">
      {/* Hero Section */}
      <div className="relative w-full h-[375px] md:h-[500px] lg:h-[600px]">
        <Image
          src={assets.serviceHeroBg}
          alt={service.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold">
            {service.title}
          </h1>
        </div>
      </div>

      {/* Main content */}
      <MainContent service={service} slug={slug}/>
    </div>
  );
}
