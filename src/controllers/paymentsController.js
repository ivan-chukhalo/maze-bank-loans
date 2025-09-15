import Payment from "../models/Payment.js";

// GET: return records about all payments made
export const getAllPaymentREcords = async (req, res) => {
  try {
    const allPaymentRecords = await Payment.find();
    res.json(allPaymentRecords);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal server error", errorMessage: err.message });
  }
};

// GET: return record about payment by its ID
export const getPaymentRecordByID = async (req, res) => {
  try {
    const paymentRecordID = req.params.id;
    const Payment = await Payment.findById(paymentRecordID);
    if (!Payment) {
      return res.status(404).json({
        message: `Cant find the payment record with ${paymentRecordID} ID`,
      });
    }
    res.json(Payment);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal server error", errorMessage: err.message });
  }
};

// POST: add record about payment
export const addPaymentRecord = async (req, res) => {
  try {
    const { loanName, clientName, amount, paymentDate } = req.body;
    const newPaymentRecord = new Payment({
      loanName,
      clientName,
      amount,
      paymentDate,
    });
    await newPaymentRecord.save();
    res.status(201).json({
      message: `Payment record for loan ${loanName} is successfully created`,
      Payment: newPaymentRecord,
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal server error", errorMessage: err.message });
  }
};

// PUT: update record about payment
export const editPaymentRecord = async (req, res) => {
  try {
    const paymentRecordID = req.params.id;
    const newData = req.body;
    const updatedPaymentRecord = await Payment.findByIdAndUpdate(
      paymentRecordID,
      newData,
      {
        new: true,
        upsert: false,
        runValidators: true,
      }
    );
    if (!updatedPaymentRecord) {
      // mongo returns Null if can't find the payment record by ID
      return res
        .status(404)
        .json({ message: `Can not find the payment record` });
    }
    res.json({
      message: `Payment record for loan ${updatedPaymentRecord.loanName} updated successfully`,
      Payment: updatedPaymentRerord,
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal server error", errorMessage: err.message });
  }
};

// DELETE: delete record about payment
export const deletePaymentRecord = async (req, res) => {
  try {
    const paymentRecordID = req.params.id;
    const deletedPaymentRecord = await Payment.findByIdAndDelete(
      paymentRecordID
    );
    if (!deletedPaymentRecord) {
      return res.status(404).json({ message: `Can't find the payment record` });
    }
    res.json({
      message: "Deleted successfully",
      Payment: deletedPaymentRecord,
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal server error", errorMessage: err.message });
  }
};
