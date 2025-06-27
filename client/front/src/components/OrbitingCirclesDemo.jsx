import { OrbitingCircles } from "@/components/magicui/orbiting-circles";

export function OrbitingCirclesDemo() {
  const logos = [
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      alt: "Apple",
    },
    {
      src: "data:image/png;base64,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",
      alt: "Base64 Logo",
    },
  ];

  const logoStyle = "h-[1000px] w-[60px] object-contain";

  return (
    <div className="relative flex h-[800px] w-full flex-col items-center justify-center overflow-hidden bg-amber-50">
      <OrbitingCircles iconSize={100} radius={300} speed={1}>
        {logos.map((logo, i) => (
          <img key={`outer-${i}`} src={logo.src} alt={logo.alt} className={logoStyle} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={80} radius={120} speed={1.5} reverse>
        {logos.slice(1).map((logo, i) => (
          <img key={`inner-${i}`} src={logo.src} alt={logo.alt} className={logoStyle} />
        ))}
      </OrbitingCircles>
    </div>
  );
}