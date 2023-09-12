export type User = {
  id: string;
  name: string;
  role: string;
  phone: string;
  email: string;
  lastName: string;
  userName: string;
  password: string;
  address?: string;
  isActive: boolean;
  dateOfBirth?: Date;
  restaurantId: string;
  registrationDate: Date;
};

export type APIResponse = {
  // TODO
};
