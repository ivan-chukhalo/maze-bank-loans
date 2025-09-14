import LoanType from "../models/LoanType.js";

export const getLoans = async (req, res) => {
  try {
    const loans = await LoanType.find();
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
    const requestedLoan = await LoanType.findById(loanID);
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

export const createNewLoanType = async (req, res) => {
  try {
    const { name, term, yearPenaltyRate } = req.body;
    const newLoanType = new LoanType({ name, term, yearPenaltyRate });
    await newLoanType.save();
    res.status(201).json({
      message: `New loan ${name} created successfully`,
      loanType: newLoanType,
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal server error", errorMessage: err.message });
  }
};

export const editLoanType = async (req, res) => {
  try {
    const loanTypeID = req.params.id;
    const newLoanData = req.body;
    const updatedLoanType = await LoanType.findByIdAndUpdate(
      loanTypeID,
      newLoanData,
      {
        new: true,
        upsert: false,
        runValidators: true,
      }
    );
    if (!updatedLoanType) {
      return res
        .status(404)
        .json({ message: `Can not find a loan type with ${loanTypeID} ID` });
    }
    res.json({ message: "Loan type updated successfully", updatedLoanType });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal server error", errorMessage: err.message });
  }
};

export const deleteLoanType = async (req, res) => {
  try {
    const loanTypeID = req.params.id;
    const deletedLoanType = await LoanType.findByIdAndDelete(loanTypeID);
    if (!deletedLoanType) {
      return res
        .status(404)
        .json({ message: `Can not find loan type with ${loanTypeID} ID` });
    }
    res.json({ message: "Deleted sucessfully", deletedLoanType });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal server error", errorMessage: err.message });
  }
};
