import { Schema,model } from "mongoose";
import { Employe } from "../interface/interface";

const EmployeSchema = new Schema<Employe>(
    {
        first_name :{type:String,required:true},
        last_name: { type: String, required: true },
        email: { type: String, required: true },
        number: { type: String, required: true },
        gender: { type: String, required: true },
        photo: { type: String, required: true }
    }
    
);

const Employees = model<Employe>('Employe`',EmployeSchema);

export { Employees}