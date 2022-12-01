import { dso, Defaults, BaseModel, Model, Field, FieldType } from "../../deps.ts"

@Model('food')
class Food extends BaseModel {
    @Field({
        type: FieldType.INT,
        primary: true,
        length: 10,
        autoIncrement: true
    })
    entity_id!: string;

    @Field({ type: FieldType.STRING })
    name!: string;
}

export default dso.define(Food);