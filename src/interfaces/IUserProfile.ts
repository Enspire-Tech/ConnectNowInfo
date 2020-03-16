interface IUserProfile {
    id?: string;
    authorized: boolean;
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
    active: boolean;
    organization?: string;
    accessLevel?: number;
    message?: string;
    username?: string;
}

export default IUserProfile;
