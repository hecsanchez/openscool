export interface Course {
  id: string;
  name: string;
  metadata: {
    coverImage: string;
    desc: string;
    hasAccess: number; // Assuming this is always an integer
    numModules: number;
    privacy: number; // Assuming this is a binary or enum-like field
    title: string;
  };
  createdAt: string; // ISO 8601 datetime format
  updatedAt: string; // ISO 8601 datetime format
  unitType: string;
  rootId: string;
  userId: string;
  groupId: string;
  state: number; // Assuming this is an enum-like field or status code
  public: boolean;
}
