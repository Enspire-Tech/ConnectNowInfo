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
    expiry?: Date;
    failedAuthentication: boolean;
}

export default IUserProfile;
