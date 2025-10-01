import IssuedLoan from "../models/IssuedLoan.js";

export const getLoans = async (req, res) => {
  try {
    const loans = await IssuedLoan.find();
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
    const requestedLoan = await IssuedLoan.findById(loanID);
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

export const createNewLoanRecord = async (req, res) => {
  try {
    const { loanName, clientName, amount } = req.body;
    const newLoanRecord = new IssuedLoan({ loanName, clientName, amount });
    await newLoanRecord.save();
    res.status(201).json({
      message: `New loan ${loanName} created successfully`,
      IssuedLoan: newLoanRecord,
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal server error", errorMessage: err.message });
  }
};

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
      return res
        .status(404)
        .json({ message: `Can not find a loan type with ${LoanRecordID} ID` });
    }
    res.json({ message: "Loan type updated successfully", updatedLoanRecord });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal server error", errorMessage: err.message });
  }
};

export const deleteLoanRecord = async (req, res) => {
  try {
    const LoanRecordID = req.params.id;
    const deletedLoanRecord = await IssuedLoan.findByIdAndDelete(LoanRecordID);
    if (!deletedLoanRecord) {
      return res
        .status(404)
        .json({ message: `Can not find loan type with ${LoanRecordID} ID` });
    }
    res.json({ message: "Deleted sucessfully", deletedLoanRecord });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal server error", errorMessage: err.message });
  }
};
