import { AddressService } from './address.service';
import { CreateAddressDto } from './dtos/createAddress.dto';
import { Body, Controller, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AddressEntity } from './entities/address.entity';

@Controller('address')
export class AddressController {

    constructor(
        private readonly addressService: AddressService
    ){}

    @Post('/:userId')
    @UsePipes(ValidationPipe)
    async createAddres(
        @Body() createAddressDto: CreateAddressDto,
        @Param('userId') userId: number,
    ): Promise<AddressEntity>{
        return this.addressService.createAddress(createAddressDto, userId)
    }
}
