export type UserStatus = "Active" | "Inactive";

export type UserRecord = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  status: UserStatus;
};

export type UserFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};
