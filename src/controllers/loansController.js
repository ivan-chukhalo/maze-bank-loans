import Loan from "../models/Loan.js";

export const getLoans = async (req, res) => {
  try {
    const loans = await Loan.find();
    res.json(loans);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal server error", errorMessage: err.message });
  }
};

export const getLoanByID = async (req, res) => {
  try {
    const loanID = req.params.id;
    const requestedLoan = await Loan.findById(loanID);
    if (!requestedLoan) {
      return res
        .status(404)
        .json({ message: `Could not find the loan with ID ${loanID}` });
    }
    res.json(requestedLoan);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal server error", errorMessage: err.message });
  }
};

export const createNewLoan = async (req, res) => {
  try {
    const { name, term, yearPenaltyRate } = req.body;
    const newLoan = new Loan({ name, term, yearPenaltyRate });
    await newLoan.save();
    res.status(201).json({
      message: `New loan ${name} created successfully`,
      loan: newLoan,
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal server error", errorMessage: err.message });
  }
};

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
      return res
        .status(404)
        .json({ message: `Can not find a loan type with ${loanID} ID` });
    }
    res.json({ message: "Loan type updated successfully", updatedLoan });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal server error", errorMessage: err.message });
  }
};

export const deleteLoan = async (req, res) => {
  try {
    const loanID = req.params.id;
    const deletedLoan = await Loan.findByIdAndDelete(loanID);
    if (!deletedLoan) {
      return res
        .status(404)
        .json({ message: `Can not find loan type with ${loanID} ID` });
    }
    res.json({ message: "Deleted sucessfully", deletedLoan });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal server error", errorMessage: err.message });
  }
};
