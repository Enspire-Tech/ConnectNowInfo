interface IChangePassword {
    id?: string;
    email?: string;
    newPassword?: string;
    confirmNewPassword?: string;
    minLength: number;
}

export default IChangePassword;
