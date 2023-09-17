import { useNavigate } from "react-router-dom";

interface FormDataTypes {
  allFormsData: Record<string, string | number | readonly string[] | undefined>;
}

const FormData = ({ allFormsData }: FormDataTypes) => {
  const navigate = useNavigate();
  const keys = Object.keys(allFormsData);
  return (
    <>
      <div className="flex flex-col gap-4">
        <h2>The form data you entered is:</h2>
        {keys.map((key) => (
          <p key={key}>
            {key.toUpperCase()}: {allFormsData[key]}
          </p>
        ))}
      </div>
      <button
        className="px-4 py-2 border border-black rounded self-end"
        type="button"
        onClick={() => navigate(0)}
      >
        Back to home
      </button>
    </>
  );
};

export default FormData;
