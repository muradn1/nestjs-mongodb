import { Args, Int, Query, Resolver } from "@nestjs/graphql";
import { ZipType } from "./zip.model";
import { ZipsService } from "./zips.service";


@Resolver(of => ZipType)
export class ZipsResolver {
    constructor(
        private readonly zipsService: ZipsService
    ) { }

    @Query(returns => [ZipType], { name: 'allZips' })
    async getAllZips(@Args('limit', { type: () => Int, nullable: true }) limit?: number | null) {
        return await this.zipsService.findAll({limit});
    }
}