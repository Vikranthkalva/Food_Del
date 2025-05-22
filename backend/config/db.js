import mongoose from "mongoose";


export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://VikranthLucky:Vikranth1251@cluster0.lpgumu5.mongodb.net/food-del').then(()=>console.log("DB Connected"));

}