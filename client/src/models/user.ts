import { UserRole } from '@/enums/user-role';

export interface User {
  createdAt: string;
  updatedAt: string;
  name: string;
  id: string;
  email: string;
  password: string;
  role: UserRole;
}
