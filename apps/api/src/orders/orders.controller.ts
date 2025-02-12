import { Body, Controller, Delete, Get, Param, Patch, Post, Req } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { UpdateOrderDto } from './dto/update-order.dto';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrderStatus } from '../enums/enums';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {
  }

  @Get()
  async findAll(@Req() req) {
    return this.ordersService.findAll(req.user.id);
  }

  @Get('pending')
  async findPendingOrders(@Req() req) {
    return this.ordersService.findPendingOrders(req.user.id);
  }

  @Get('merchant/:id')
  async findOrdersByMerchant(@Param('id') id: number) {
    return this.ordersService.findOrdersByMerchant(id);
  }

  @Get(':id')
  async findOne(@Param('id') id: number, @Req() req) {
    return await this.ordersService.findOne(id, req.user.id);
  }

  @Post()
  async create(@Body() createOrderDto: CreateOrderDto, @Req() req) {
    return this.ordersService.createOrder(createOrderDto, req.user.id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateOrderDto: UpdateOrderDto,
    @Req() req,
  ) {
    return this.ordersService.updateOrder(id, req.user.id, updateOrderDto);
  }

  @Patch(':id/status')
  async updateStatus(
    @Param('id') id: number,
    @Body('status') status: OrderStatus,
    @Req() req,
  ) {
    const role = req.user.role;
    return this.ordersService.updateOrderStatus(id, req.user.id, status, role);
  }

  @Delete(':id')
  async remove(@Param('id') id: number, @Req() req) {
    return this.ordersService.removeOrder(id, req.user.id);
  }
}
