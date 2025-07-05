import * as Joi from "joi";

export const envSchema = Joi.object({
    PORT: Joi.number().optional(),
    MONGODB_URL: Joi.string().required(),
});
