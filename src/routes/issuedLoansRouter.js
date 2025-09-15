import { Router } from "express";
import {
  getLoans,
  getLoanByID,
  createNewLoanRecord,
  editLoanRecord,
  deleteLoanRecord,
} from "../controllers/issuedLoansController.js";

const issuedLoansRouter = Router();

issuedLoansRouter.get("/", getLoans);
issuedLoansRouter.get("/:id", getLoanByID);
issuedLoansRouter.post("/", createNewLoanRecord);
issuedLoansRouter.put("/:id", editLoanRecord);
issuedLoansRouter.delete("/:id", deleteLoanRecord);

export default issuedLoansRouter;
