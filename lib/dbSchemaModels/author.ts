import mongoose, { Document, Schema, model, Model } from 'mongoose';

interface IAuthor extends Document {
  user: mongoose.Types.ObjectId;
  bio: string;
  newsletters: mongoose.Types.ObjectId[];
  followers: mongoose.Types.ObjectId[];
  totalSubscribers: number;
}

const authorSchema = new Schema<IAuthor>({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  bio: { type: String, maxlength: 500 },
  newsletters: [{ type: Schema.Types.ObjectId, ref: 'Newsletter' }],
  followers: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  totalSubscribers: { type: Number, default: 0 }
}, { timestamps: true });

// Virtual for getting the total number of followers
authorSchema.virtual('followerCount').get(function(this: IAuthor) {
  return this.followers.length;
});

// Check if the model already exists to prevent recompilation
const Author: Model<IAuthor> = mongoose.models.Author || model<IAuthor>('Author', authorSchema);

export default Author;