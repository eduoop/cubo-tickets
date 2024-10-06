import { Injectable } from '@nestjs/common';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { PrismaService } from 'src/shared/database/prisma/prisma.service';

@Injectable()
export class TicketService {

  constructor(private readonly prisma: PrismaService) { }

  async findAll() {
    const tickets = await this.prisma.ticket.findMany({
      include: { messages: true }
    });

    const ticketsWithLastMessage = tickets.map(ticket => {
      const lastMessage = ticket.messages[ticket.messages.length - 1];
      return {
        ...ticket,
        messages: lastMessage ? [lastMessage] : []
      };
    });

    return ticketsWithLastMessage;
  }

  async findOne(id: number) {
    const ticket = await this.prisma.ticket.findUnique({
      where: {
        id: id
      },
      include: {
        messages: true
      }
    });
    return ticket;
  }

  async update(id: number, updateTicketDto: UpdateTicketDto) {
    const updatedTicket = await this.prisma.ticket.update({
      where: { id: id },
      data: {
        status: updateTicketDto.status, 
      },
    });
  
    return updatedTicket; 
  }
}
