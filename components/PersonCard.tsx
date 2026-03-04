import Image from "next/image";

interface PersonCardProps {
  name: string;
  title: string;
  image: string;
}

export default function PersonCard({ name, title, image }: PersonCardProps) {
  return (
    <div className="text-center group">
      <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden shadow-card group-hover:shadow-card-hover transition-shadow">
        <Image
          src={image}
          alt={name}
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
