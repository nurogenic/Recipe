import { dso, Defaults, BaseModel, Model, Field, FieldType } from "../../deps.ts"

@Model('user')
class User extends BaseModel {
    @Field({
        type: FieldType.INT,
        primary: true,
        length: 10,
        autoIncrement: true
    })
    id!: string;

    @Field({ type: FieldType.STRING })
    name!: string;

    @Field({ type: FieldType.STRING })
    email!: string;

    @Field({ type: FieldType.DATE, default: Defaults.CURRENT_TIMESTAMP })
    created_at!: Date;
}

export default dso.define(User);