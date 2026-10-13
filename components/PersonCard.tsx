import Image from "next/image";

interface PersonCardProps {
  name: string;
  title: string;
  image: string;
}

export default function PersonCard({ name, title, image }: PersonCardProps) {
  return (
    <div className="text-center">
      <div className="relative mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full border border-hairline">
        <Image
          src={image}
          alt=""
          fill
          className="object-cover"
          sizes="128px"
        />
      </div>
      <h3 className="text-base font-semibold text-text-primary">{name}</h3>
      <p className="text-sm text-text-secondary">{title}</p>
    </div>
  );
}
