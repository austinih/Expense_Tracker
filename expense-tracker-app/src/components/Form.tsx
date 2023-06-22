import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";

const Form = () => {
  return (
    <>
      <form>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input id="description" type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input id="amount" type="number" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="Category" className="form-label">
            Category
          </label>
          <input id="category" type="text" className="form-control" />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </>
  );
};

export default Form;
