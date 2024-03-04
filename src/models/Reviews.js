import { Schema, model, models } from 'mongoose';

const reviewSchema = new Schema(
  {
    userName: { type: String, required: true },
    secondName: { type: String, required: true },
    rating: { type: Number, required: true },
    body: { type: String, required: true },
    isModeration: { type: String, default: false }, //  - для отзывов, ожидающих проверки
  },
  { timestamps: true }
);
const Review = models?.Review || model('Review', reviewSchema);

export default Review;
