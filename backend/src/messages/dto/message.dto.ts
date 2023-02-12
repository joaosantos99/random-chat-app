import { IsNotEmpty, IsString } from 'class-validator';

export default class MessageDto {
  @IsNotEmpty()
  @IsString()
  sendedBy!: string;

  @IsNotEmpty()
  @IsString()
  message!: string;
}
