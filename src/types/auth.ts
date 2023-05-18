export type AuthUser = {
  uid: string;
  email: string | null;
  displayName: string | null;
  phoneNumber: string | null;
  photoURL: string | null;
};

export type AuthenticateUserActionPayload = { email: string; password: string };
