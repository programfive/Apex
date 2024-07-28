import { Video, Timer, Lock } from "lucide-react";


export const TEAM_MEMBERS = [
  {
    id: 1,
    name: "Sarah Johnson",
    designation: "UX Designer",
    image: "/images/ellipse1.jpg",
  },
  {
    id: 2,
    name: "Emily Rodriguez",
    designation: "Product Manager",
    image: "/images/ellipse2.jpg",
  },
  {
    id: 3,
    name: "Michael Chen",
    designation: "Frontend Developer",
    image: "/images/ellipse3.jpg",
  },
];

export const FEATURES = [
  {
    title: "Video messaging",
    description:
      "Enjoy crystal-clear video calls with friends and family. Easy to use, just like being there.",
    Icon: Video,
  },
  {
    title: "Save your time",
    description:
      "Intuitive interface and quick options for efficient communication. More time for what matters.",
    Icon: Timer,
  },
  {
    title: "Keep safe & private",
    description:
      "End-to-end encryption and privacy settings. Your conversations are kept secure and private.",
    Icon: Lock,
  },
];
export const MESSAGE_ORDERS = [
  {
    id: "1",
    type: "message",
    content: "Hey Alex, are you free now?",
    avatar: "/path/to/avatar1.jpg",
  },
  {
    id: "2",
    type: "email",
    content: "Alex, your order replaced ID # 45321",
  },
  {
    id: "3",
    type: "facebook",
    content: "How can I see the tracking number?",
    avatar: "/path/to/avatar2.jpg",
  },
  {
    id: "4",
    type: "message",
    content: "How can I renew my subscription?",
    avatar: "/path/to/avatar3.jpg",
  },
];
