import { Response as ExpressResponse, NextFunction, Request } from "express";
import { ZodObject } from "zod";
import Response from "../models/Response";


const validateBody = (schema: ZodObject<any>) => (req: Request, res: ExpressResponse, next: NextFunction) => {
    try {
        schema.parse(req.body);
        next();
    } catch (error: any) {
        const response = new Response(400, error.errors);
        return res.status(400).json(response);
    }
}


export default validateBody;