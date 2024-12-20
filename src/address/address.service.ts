import { CreateAddressDto } from './dtos/createAddress.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AddressEntity } from './entities/address.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AddressService {
    constructor(
        @InjectRepository(AddressEntity)
        private readonly addressRepository: Repository<AddressEntity>
    ) {};

    async createAddress(createAddressDto: CreateAddressDto, userId: number){

        return this.addressRepository.save({
            ...createAddressDto,
            userId,
        })
    }


}
