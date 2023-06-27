import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface Props {
  expenses: Expense[];
  onDelete: (id: number) => void;
}

const ExpenseList = ({ expenses, onDelete }: Props) => {
  const doc = new jsPDF();
  autoTable(doc, { html: "#data_table" });

  const downloadTable = () => {
    const doc = new jsPDF();
    autoTable(doc, { html: "#data_table" });
    doc.save("table.pdf");
  };

  if (expenses.length == 0) return null;

  return (
    <>
      <table className="table table-bordered" id="data_table">
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.description}</td>
              <td>{expense.amount}</td>
              <td>{expense.category}</td>
              <td>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => onDelete(expense.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td>
              $
              {expenses
                .reduce((acc, expense) => expense.amount + acc, 0)
                .toFixed(2)}
            </td>
            <td></td>
            <td></td>
          </tr>
        </tfoot>
      </table>
      <button onClick={downloadTable} className="btn btn-secondary">
        Print to PDF
      </button>
    </>
  );
};

export default ExpenseList;
