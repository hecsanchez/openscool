import { User } from '@/types/User';

export interface Site {
  id: string;
  name: string;
  metadata: SiteMetadata;
  createdAt: string;
  updatedAt: string;
  public: boolean;
  onlineUsers: User[];
}

export interface SiteMetadata {
  calendarEnabled: number;
  color: string;
  coverSmallUrl: string;
  createdBy: string;
  creatorUser: string; // JSON stringified object.
  description: string;
  displayName: string;
  faviconUrl: string;
  fmbpc: number;
  initials: string;
  labels: string;
  lastPrivacyUpdate: number;
  levels: string; // JSON stringified object.
  links: string; // JSON stringified object.
  logoBigUrl: string;
  logoUrl: string;
  membership: number;
  numCourses: number;
  numModules: number;
  onlineUsers: string;
  pluginAutoDmEnabled: number;
  pluginWebhookEnabled: number;
  pluginZapierEnabled: number;
  privacy: number;
  selfChat: string;
  srcGroup: string;
  survey: string; // JSON stringified object.
  surveyEnabled: number;
  totalAdmins: number;
  totalMembers: number;
  totalOnlineMembers: number;
  totalPosts: number;
}
