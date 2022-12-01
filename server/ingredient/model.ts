import { dso, Defaults, BaseModel, Model, Field, FieldType } from "../../deps.ts"

@Model('ingredient')
class Food extends BaseModel {
    @Field({
        type: FieldType.INT,
        primary: true,
        length: 10,
        autoIncrement: true
    })
    entity_id!: string;

    @Field({ type: FieldType.INT })
    recipe_id!: string;

    @Field({ type: FieldType.INT })
    food_id!: string;
    
    @Field({ type: FieldType.INT })
    unit_id!: string;

    @Field({ type: FieldType = "decimal" })
    unit_id!: string;
}

export default dso.define(Food);