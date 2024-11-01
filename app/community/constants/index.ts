import { Timer,Lock,File } from "lucide-react";

export const MESSAGES = [
  {
    id: 1,
    name: "Sarah",
    time: "09:34 PM",
    avatar: "/images/ellipse1.jpg",
  },
  {
    id: 2,
    name: "Emily",
    time: "08:12 PM",
    avatar: "/images/ellipse2.jpg",
  },
];
export const FEATURES = [
  {
    title: "Remove Participants",
    Icon: Timer,
    description:
      "Administrators can remove problematic groups or members from the community.",
  },
  {
    title: "Remove Chats",
    Icon: Lock,
    description:
      "Group and community administrators can remove inappropriate messages or multimedia content for all members.",
  },
  {
    title: "More Information",
    Icon: File,
    description:
      "Additional learning resources for administrators on how to best use features and manage their community.",
  },
];
