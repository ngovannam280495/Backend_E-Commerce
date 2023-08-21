import mongoose from 'mongoose';
const { Schema } = mongoose;
const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      default: 300,
    },
    sex: {
      type: String,
      enum: ['male', 'female', 'unisex'],
      required: true,
      default: 'unisex',
    },
    images: [{ type: String }],
    inStock: {
      type: Number,
      default: 0,
    },
    soldOut: {
      type: Number,
      default: 0,
    },
    sizes: {
      XS: {
        type: Number,
        default: 0,
      },
      S: {
        type: Number,
        default: 0,
      },
      M: {
        type: Number,
        default: 0,
      },
      L: {
        type: Number,
        default: 0,
      },
      XL: {
        type: Number,
        default: 0,
      },
      XXL: {
        type: Number,
        default: 0,
      },
    },
    color: [
      {
        type: String,
      },
    ],
    reviews: [{ type: mongoose.Types.ObjectId, ref: 'Review' }],
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
);

const Product = mongoose.model('Product', productSchema);

export default Product;
