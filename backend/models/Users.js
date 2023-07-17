import mongoose from 'mongoose'; 

// the schema is the structure of the data
const UserSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    savedRecipes: [{type: mongoose.Schema.Types.ObjectId, ref: 'recipes'}]
});

// the model is the actual object that will be used, which is created from the schema
export const UserModel = mongoose.model('users', UserSchema);