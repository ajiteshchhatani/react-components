import { ChangeEvent, FormEvent, useRef, useState } from "react";

interface FormPropTypes {
  active: boolean;
  sendDetailsToParent: (
    arg: Record<string, string | number | readonly string[] | undefined>
  ) => void;
  isFirstFormPage: boolean;
  isLastFormPage: boolean;
  handlePreviousFormBtn: () => void;
}

const NameDetailsForm = ({
  active,
  sendDetailsToParent,
  isFirstFormPage,
  isLastFormPage,
  handlePreviousFormBtn,
}: FormPropTypes) => {
  const [nameFormDetails, setNameFormDetails] = useState<
    Record<string, string | number | readonly string[] | undefined>
  >({ firstName: "", lastName: "" });
  const [firstNameErrorMsg, setFirstNameErrorMsg] = useState("");
  const [lastNameErrorMsg, setLastNameErrorMsg] = useState("");

  const nameInputRefs = useRef<HTMLInputElement[]>([]);

  const handleFormInputsChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;

    switch (name) {
      case "firstName": {
        setNameFormDetails((state) => {
          return {
            ...state,
            [name]: value,
          };
        });
        setFirstNameErrorMsg("");
        break;
      }
      case "lastName": {
        setNameFormDetails((state) => {
          return {
            ...state,
            [name]: value,
          };
        });
        setLastNameErrorMsg("");
        break;
      }
    }
  };

  const handleNameFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let areFieldsValid = true;

    for (const input of nameInputRefs.current) {
      if (input.validity.valueMissing) {
        areFieldsValid = false;
        input.name === "firstName"
          ? setFirstNameErrorMsg("Please enter your first name")
          : setLastNameErrorMsg("Please enter your last name");
      }
    }
    if (areFieldsValid) {
      sendDetailsToParent({ ...nameFormDetails });
    }
  };

  return (
    <form
      onSubmit={(e) => handleNameFormSubmit(e)}
      className={`${
        active ? `flex` : `hidden`
      } flex-col w-1/2 m-auto p-4 gap-4`}
      noValidate
    >
      <div className="flex flex-col">
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          onChange={handleFormInputsChange}
          value={nameFormDetails["firstName"]}
          ref={(node: HTMLInputElement) => (nameInputRefs.current[0] = node)}
          required
          className="border border-black focus-visible:outline-none"
        />
        <span className="mt-2 bg-red-200 text-red-700" aria-live="polite">
          {firstNameErrorMsg}
        </span>
      </div>

      <div className="flex flex-col">
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          onChange={handleFormInputsChange}
          value={nameFormDetails["lastName"]}
          ref={(node: HTMLInputElement) => (nameInputRefs.current[1] = node)}
          required
          className="border border-black focus-visible:outline-none"
        />
        <span className="mt-2 bg-red-200 text-red-700">{lastNameErrorMsg}</span>
      </div>

      <div className="flex justify-end">
        {!isFirstFormPage ? (
          <button
            type="button"
            className="px-4 border border-black rounded"
            onClick={handlePreviousFormBtn}
          >
            Previous
          </button>
        ) : null}
        <button className="px-4 border border-black rounded">
          {isLastFormPage ? `Submit` : `Next`}
        </button>
      </div>
    </form>
  );
};

export default NameDetailsForm;
