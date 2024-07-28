import React from "react";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  Icon: LucideIcon;
  title: string;
  description: string;
}

export const CustomCard: React.FC<FeatureCardProps> = ({
  Icon,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg bg-gray-50 px-4 py-6 shadow-sm">
      <div className="mb-4 text-4xl">
        <Icon size={36} className="text-primary" />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-text-primary">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};


