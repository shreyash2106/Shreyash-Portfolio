import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <h2 className="text-3xl font-bold tracking-tight text-[#E6F1FF]">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-[#E6F1FF]/60">{subtitle}</p>
      )}
    </div>
  );
}
