import type { Express } from "express";
import { CalculateMoneyOwedCommand } from "../commands/calculate-money-owed-command";
import { ExpenseReports } from "../entities/expense-reports";

export const calculateMoneyOwedController = (app: Express): void => {
  /**
   * @swagger
   * /calculate/money-owed:
   *   post:
   *     description: Returns the status of the server
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: array
   *             items:
   *               type: object
   *               required: true
   *               properties:
   *                 name:
   *                   type: string
   *                   required: true
   *                 expenses:
   *                   type: number
   *                   required: true
   *     responses:
   *       200:
   *         description: 
   */
  app.post("/calculate/money-owed", (req, res) => {
    const expenseReports = new ExpenseReports(req);
    const command = new CalculateMoneyOwedCommand();

    const response = command.calculate(expenseReports);
    res.json(response);
  });
}
