export interface User {
  id: string;
  name: string;
  metadata: UserMetadata;
  createdAt: string;
  updatedAt: string;
  email: string;
  firstName: string;
  lastName: string;
}

interface UserMetadata {
  bio: string;
  lastOffline: number;
  linkFacebook: string;
  linkInstagram: string;
  linkLinkedin: string;
  linkTwitter: string;
  linkWebsite: string;
  linkYoutube: string;
  location: string;
  pictureThumbnail: string;
  picture: string;
}
