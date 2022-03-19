import { Field, Float, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
class ZipLocation{
    @Field(type => Float)
    x: number;

    @Field(type => Float)
    y: number;
}

@ObjectType()
export class ZipType {
    @Field({ nullable: true })
    city?: string;

    @Field(type => Int, { nullable: true })
    pop?: number;

    @Field({ nullable: true })
    zip?: string;

    @Field({ nullable: true })
    state?: string;

    @Field({nullable: true})
    loc?: ZipLocation;
}






