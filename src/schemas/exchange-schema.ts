import mongoose, { Model, ObjectId } from "mongoose";

interface Exchange {
  ticker: string;
}

// interface ExchangeModel extends Model<ExchangeDocumentType> {}

const ExchangeSchema = new mongoose.Schema<Exchange>({
  ticker: {
    type: String,
    required: true,
    unique: true,
  },
});

export { ExchangeSchema, Exchange };
