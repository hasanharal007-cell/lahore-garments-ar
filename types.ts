
export type AccessLevel = 'HIDDEN' | 'READ' | 'EDIT' | 'FULL';

export interface ModuleDefinition {
  id: string;
  name: string;
  fieldKeys: string[]; // Maps to keys in Product object
  description: string;
}

export interface ModuleAccess {
  moduleId: string;
  accessLevel: AccessLevel;
}

export type Permission = 
  | 'ALL' 
  | 'VIEW_PRODUCTS' 
  | 'EDIT_PRODUCTS' 
  | 'MANAGE_USERS' 
  | 'MANAGE_ROLES' 
  | 'MANAGE_MODULES'
  | 'MANAGE_BRANDING'
  | 'VIEW_ANALYTICS';

export interface Role {
  id: string;
  name: string;
  permissions: Permission[];
  moduleAccess: ModuleAccess[];
}

export interface User {
  id: string;
  username: string;
  password?: string; 
  roleId: string;
  lastLogin?: string;
  status: 'active' | 'suspended';
  customStoreName?: string; // Per-user branding override
  theme?: 'light' | 'dark'; // User theme preference
}

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  modelUrl: string;
  imageUrl: string;
  colors: string[];
  sizes: string[];
  isNewArrival?: boolean;
  isTrending?: boolean;
  status: 'published' | 'draft';
}
