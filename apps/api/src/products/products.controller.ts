import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Post, Put, Req } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Public } from '../auth/decorator/public.decorator';
import { ProductResponseDto } from './dto/product-response.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {
  }

  @Post()
  async create(@Body() createProductDto: CreateProductDto, @Req() req): Promise<ProductResponseDto> {
    return this.productsService.createProduct(createProductDto, req.user.id);
  }

  @Get()
  @Public()
  async findAll(): Promise<ProductResponseDto[]> {
    return this.productsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseUUIDPipe) id: number): Promise<ProductResponseDto> {
    return this.productsService.findProductById(id);
  }

  @Get('merchant/:id')
  async findByMerchant(@Param('id', ParseUUIDPipe) id: number): Promise<ProductResponseDto[]> {
    return this.productsService.findProductsByMerchant(id);
  }

  @Get(':id/merchant')
  async findProductByMerchant(
    @Param('id', ParseUUIDPipe) id: number,
    @Req() req,
  ): Promise<ProductResponseDto> {
    return this.productsService.findProductByMerchant(id, req.user.id);
  }

  @Put(':id')
  async update(
    @Param('id', ParseUUIDPipe) id: number,
    @Req() req,
    @Body() updateProductDto: UpdateProductDto,
  ): Promise<ProductResponseDto> {
    return this.productsService.update(id, req.user.id, updateProductDto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseUUIDPipe) id: number, @Req() req): Promise<void> {
    return this.productsService.remove(id, req.user.id);
  }
}
