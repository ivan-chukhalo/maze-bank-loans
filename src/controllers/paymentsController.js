import Payment from "../models/Payment.js";

// GET: return records about all payments made
export const getAllPaymentREcords = async (req, res) => {
  try {
    const allPaymentRecords = await Payment.find();
    res.json({
      message: "All payment records fetched successfully",
      data: allPaymentRecords,
    });
  } catch (err) {
    res.status(500).json({ message: err.message, data: null });
  }
};

// GET: return record about payment by its ID
export const getPaymentRecordByID = async (req, res) => {
  try {
    const paymentRecordID = req.params.id;
    const paymentRecord = await Payment.findById(paymentRecordID);
    if (!paymentRecord) {
      return res.status(404).json({
        message: `Payment record not found`,
        data: null,
      });
    }
    res.json({ message: "Payment record fetched successfully", data: paymentRecord });
  } catch (err) {
    res.status(500).json({ message: err.message, data: null });
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
      message: "New payment record created successfully",
      data: newPaymentRecord,
    });
  } catch (err) {
    res.status(500).json({ message: err.message, data: null });
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
        .json({ message: `Payment record not found`, data: null });
    }
    res.json({
      message: "Payment record updated successfully",
      data: updatedPaymentRecord,
    });
  } catch (err) {
    res.status(500).json({ message: err.message, data: null });
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
      return res
        .status(404)
        .json({ message: `Payment record not found`, data: null });
    }
    res.json({
      message: "Payment record deleted successfully",
      data: deletedPaymentRecord,
    });
  } catch (err) {
    res.status(500).json({ message: err.message, data: null });
  }
};
