import mongoose from 'mongoose';

const clientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    validate: textValuesValidator,
  },
  phone: {
    type: String,
    required: true,
    match: allowedPhoneValueRegex, // use `match:` insted of `validate:` because there is no need in complex validation, just a simple regex check
  },
  contactPerson: {
    type: String,
    required: true,
    validate: textValuesValidator,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
    validate: creationDateValidator,
  },
});

const Client = mongoose.model('Client', clientSchema);

export default Client;