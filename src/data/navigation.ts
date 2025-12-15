import { Briefcase, FolderOpen, Home, MessageCircle, User } from 'lucide-react';

export const navigation = [
  {
    name: 'Home',
    hash: '#home',
    icon: Home,
  },
  {
    name: 'About',
    hash: '#about',
    icon: User,
  },
  {
    name: 'Experience',
    hash: '#experience',
    icon: Briefcase,
  },
  {
    name: 'Projects',
    hash: '#projects',
    icon: FolderOpen,
  },
  {
    name: 'Contact',
    hash: '#contact',
    icon: MessageCircle,
  },
];
