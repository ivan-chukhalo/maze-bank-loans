import LoanRecord from "../models/LoanRecord.js";

// GET: return records about all issued loans 
export const getAllIssuedLoans = async (req, res) => {
  try {
    const issuedLoans = await LoanRecord.find();
    res.json(issuedLoans);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal sever error", errorMessage: err.message });
  }
};

// GET: return record about issued loan by its ID 
export const getIssuedLoanByID = async (req, res) => {
  try {
    const issuedLoanID = req.params.id;
    const issuedLoan = await LoanRecord.findById(issuedLoanID);
    if (!issuedLoan) {
      return res
        .status(404)
        .json({ message: `Can not fint the loand with ${issiedLoanID} ID` });
    }
    res.json(issuedLoan);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal server error", errorMessage: err.message });
  }
};

// POST: create record about a new issued loan
export const createIssuedLoan = async (req, res) => {
  try {
    const { loanName, clientName, amount, loanDate } = req.body;
    const newLoanData = new LoanRecord({
      loanName,
      clientName,
      amount,
      loanDate,
    });
    const newLoanRecord = await newLoanData.save();
    res.status(201).json({
      message: "New record is successfully created",
      loanRecord: newLoanRecord,
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal server error", erroMessage: err.message });
  }
};

// PUT: edit info about issued loan
export const editRecordOfIssuedLoan = async (req, res) => {
  try {
    const recordID = req.params.id;
    const updatedRecordData = req.body;
    const updatedRecord = await LoanRecord.findByIdAndUpdate(
      recordID,
      updatedRecordData,
      { new: true, upsert: false, runValidators: true }
    );
    if (!updatedRecord) {
      return res
        .status(404)
        .json({ message: "Can not find and updated record" });
    }
    res.json({ message: `Record updated successfully`, updatedRecord });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal server error", errorMessage: err.message });
  }
};

// DELETE: delete record about issued loan
export const deleteIssuedLoanRecord = async (req, res) => {
  try {
    const issuedLoanRecordID = req.params.id;
    const deletedRecord = await LoanRecord.findByIdAndDelete(
      issuedLoanRecordID
    );
    if (!deletedRecord) {
      return res.status(404).json({ message: `Can not find the record` });
    }
    res.json({ message: "Record deleted sucessfully", deletedRecord });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal server error", errorMessage: err.message });
  }
};
