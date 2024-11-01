import {
  MessageSquare,
  Users,
  Headphones,
  Bot,
  Shield,
  Clock,
  Webhook,
  LucideIcon,
} from "lucide-react";

export interface Feature {
  icon: LucideIcon;
  text: string;
}

export interface PlanStyle {
  card: string;
  text: string;
  icon: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  description: string;
  features: Feature[];
  buttonText: string;
  buttonVariant:
    | "default"
    | "outline"
    | "secondary"
    | "destructive"
    | "ghost"
    | "link";
  style: PlanStyle;
}

export interface PricingCardProps {
  plan: PricingPlan;
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "free",
    name: "Free Chat",
    price: "0",
    description: "Get started with basic chat features at no cost.",
    features: [
      {
        icon: MessageSquare,
        text: "Up to 100 messages/month",
      },
      {
        icon: Users,
        text: "Up to 2 team members",
      },
      {
        icon: Bot,
        text: "Basic chat features",
      },
      {
        icon: Clock,
        text: "12-hour message history",
      },
    ],
    buttonText: "Get Started Free",
    buttonVariant: "outline",
    style: {
      card: "bg-white/60",
      text: "text-text-primary",
      icon: "text-orange-500",
    },
  },
  {
    id: "basic",
    name: "Basic Chat",
    price: "9",
    description:
      "Perfect for personal use and small teams getting started with chat.",
    features: [
      {
        icon: MessageSquare,
        text: "Up to 1,000 messages/month",
      },
      {
        icon: Users,
        text: "Up to 5 team members",
      },
      {
        icon: Bot,
        text: "Basic chatbot integration",
      },
      {
        icon: Clock,
        text: "24-hour message history",
      },
    ],
    buttonText: "Start chatting",
    buttonVariant: "outline",
    style: {
      card: "bg-white/60",
      text: "text-text-primary",
      icon: "text-orange-500",
    },
  },
  {
    id: "business",
    name: "Business Chat",
    price: "29",
    description: "Advanced features for businesses and growing teams.",
    features: [
      {
        icon: MessageSquare,
        text: "Unlimited messages",
      },
      {
        icon: Users,
        text: "Unlimited team members",
      },
      {
        icon: Bot,
        text: "Advanced AI chatbot features",
      },
      {
        icon: Shield,
        text: "Enhanced security",
      },
      {
        icon: Webhook,
        text: "Custom integrations",
      },
      {
        icon: Headphones,
        text: "Priority support",
      },
    ],
    buttonText: "Start chatting",
    buttonVariant: "secondary",
    style: {
      card: "bg-orange-500",
      text: "text-white",
      icon: "text-gray-100",
    },
  },
];
