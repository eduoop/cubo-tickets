import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsOptional } from "class-validator";

export enum TicketStatus {
    OPEN = 'OPEN',
    CLOSED = 'CLOSED',
}

export class UpdateTicketDto {
    @ApiProperty({ example: "OPEN", enum: TicketStatus, required: false })
    @IsEnum(TicketStatus, { message: 'O status deve ser OPEN ou CLOSED' })
    status: TicketStatus;
}
