import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, trim: true, lowercase: true },
  username: { type: String, required: true, trim: true, lowercase: true },
  password: { type: String, required: true },
});

export default mongoose.models.User || mongoose.model('User', userSchema);
