import Image from 'next/image';

export default function BrandingSection() {
  return (
    <section className="text-white py-16 w-[1200px] mx-auto">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Text Content */}
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-5xl font-medium leading-tight">Logo Design <br/>& Branding</h2>
          <p className="text-gray-300 text-[13px]">
            Our team of talented graphic designers will work with you through the whole process
            to create a stunning marketing piece that you will love. From logos, business cards,
            brochures, to signs and everything in between, we have you covered for all of your
            design needs.
          </p>
          <p className="text-gray-300 text-[13px]">
            Enter the realm where brands come to life, identities are forged, and stories are told
            through visual narratives. Our logo and branding services are more than just design;
            they are a strategic blend of creativity and psychology, carving unique identities that
            resonate with audiences.
          </p>
        </div>

        {/* Image Content */}
        <div className="md:w-1/2 flex justify-center" 
            style={{
                backgroundImage:"url('/images/app_page_images/radial.png')",
                backgroundSize:'cover',
                backgroundRepeat:'no-repeat'
            }}
        >
          <div className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src={'/images/branding_page_images/branding.png'}
              alt="Logo Design & Branding"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
