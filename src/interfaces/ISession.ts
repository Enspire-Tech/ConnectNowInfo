export interface ISession {
    isAuthenticated?: boolean;
    redirectPathOnAuthentication?: string;
  }
  
  export const initialSession: ISession = {}