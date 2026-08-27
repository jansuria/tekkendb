export interface AuthState {
  isLoading: boolean;
  isLoggedIn: boolean;
  email: string | null;
  userId: string | null;
}
