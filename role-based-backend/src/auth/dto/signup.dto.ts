 import { IsEmail, IsNotEmpty, IsString, IsNumber, IsStrongPassword, MinLength } from 'class-validator';


 export class SignUpDto {

    @IsNotEmpty()
    @IsString()
    readonly name: string;

    @IsNotEmpty()
    @IsString()
    readonly username: string;

    @IsNotEmpty()
    @IsEmail({message: 'Please enter correct email'})
    readonly email: string;

    @IsNotEmpty()
    @IsStrongPassword()
    @MinLength(6)
    readonly password: string;
}