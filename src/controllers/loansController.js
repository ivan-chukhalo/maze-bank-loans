import Loan from "../models/Loan.js";

// GET: return records about all loan types
export const getLoans = async (req, res) => {
  try {
    const loans = await Loan.find();
    res.json({ message: "Loans fetched successfully", data: loans });
  } catch (err) {
    res.status(500).json({ message: err.message, data: null });
  }
};

// GET: return record about loan type by its ID
export const getLoanByID = async (req, res) => {
  try {
    const loanID = req.params.id;
    const requestedLoan = await Loan.findById(loanID);
    if (!requestedLoan) {
      return res.status(404).json({ message: "Loan not found", data: null });
    }
    res.json({ message: "Loan fetched successfully", data: requestedLoan });
  } catch (err) {
    res.status(500).json({ message: err.message, data: null });
  }
};

// POST: add record about loan type
export const createNewLoan = async (req, res) => {
  try {
    const { name, term, yearPenaltyRate } = req.body;
    const newLoan = new Loan({ name, term, yearPenaltyRate });
    await newLoan.save();
    res.status(201).json({
      message: "New loan type created successfully",
      data: newLoan,
    });
  } catch (err) {
    res.status(500).json({ message: err.message, data: null });
  }
};

// PUT: update record about loan type
export const editLoan = async (req, res) => {
  try {
    const loanID = req.params.id;
    const newLoanData = req.body;
    const updatedLoan = await Loan.findByIdAndUpdate(loanID, newLoanData, {
      new: true,
      upsert: false,
      runValidators: true,
    });
    if (!updatedLoan) {
      return res.status(404).json({ message: "Loan not found", data: null });
    }
    res.json({ message: "Loan type updated successfully", data: updatedLoan });
  } catch (err) {
    res.status(500).json({ message: err.message, data: null });
  }
};

// DELETE: delete record about loan type
export const deleteLoan = async (req, res) => {
  try {
    const loanID = req.params.id;
    const deletedLoan = await Loan.findByIdAndDelete(loanID);
    if (!deletedLoan) {
      return res.status(404).json({ message: "Loan not found", data: null });
    }
    res.json({ message: "Loan deleted sucessfully", data: deletedLoan });
  } catch (err) {
    res.status(500).json({ message: err.message, data: null });
  }
};
