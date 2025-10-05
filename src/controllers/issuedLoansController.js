import IssuedLoan from "../models/IssuedLoan.js";

// GET: return records about all issued loans
export const getLoans = async (req, res) => {
  try {
    const loans = await IssuedLoan.find();
    res.json({ message: "Issued loans fetched successfully", data: loans });
  } catch (err) {
    res.status(500).json({ message: err.message, data: null });
  }
};

// GET: return record about issued loan by its ID
export const getLoanByID = async (req, res) => {
  try {
    const loanID = req.params.id;
    const requestedLoan = await IssuedLoan.findById(loanID);
    if (!requestedLoan) {
      return res.status(404).json({ message: `Issued loan not found`, data: null });
    }
    res.json({ message: "Issued loan fetched successfully", data: requestedLoan });
  } catch (err) {
    res.status(500).json({ message: err.message, data: null });
  }
};

// POST: add record about issued loan
export const createNewLoanRecord = async (req, res) => {
  try {
    const { loanName, clientName, amount } = req.body;
    const newLoanRecord = new IssuedLoan({ loanName, clientName, amount });
    await newLoanRecord.save();
    res.status(201).json({
      message: `New issued loan created successfully`,
      data: newLoanRecord,
    });
  } catch (err) {
    res.status(500).json({ message: err.message, data: null });
  }
};

// PUT: update record about issued loan
export const editLoanRecord = async (req, res) => {
  try {
    const LoanRecordID = req.params.id;
    const newLoanData = req.body;
    const updatedLoanRecord = await IssuedLoan.findByIdAndUpdate(
      LoanRecordID,
      newLoanData,
      {
        new: true,
        upsert: false,
        runValidators: true,
      }
    );
    if (!updatedLoanRecord) {
      return res.status(404).json({ message: `Issued loan not found`, data: null });
    }
    res.json({ message: "Issued loan updated successfully", data: updatedLoanRecord });
  } catch (err) {
    res.status(500).json({ message: err.message, data: null });
  }
};

// DELETE: delete record about issued loan
export const deleteLoanRecord = async (req, res) => {
  try {
    const LoanRecordID = req.params.id;
    const deletedLoanRecord = await IssuedLoan.findByIdAndDelete(LoanRecordID);
    if (!deletedLoanRecord) {
      return res.status(404).json({ message: "Issued loan not found", data: null });
    }
    res.json({ message: "Issued loan deleted sucessfully", data: deletedLoanRecord });
  } catch (err) {
    res.status(500).json({ message: err.message, data: null });
  }
};
