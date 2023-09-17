import { ChangeEvent, useRef, useState } from "react";

interface EmailDetailsFormType {
  activeForm: boolean;
  sendDetailsToParent: (
    arg: Record<string, string | number | readonly string[] | undefined>
  ) => void;
  isFirstFormPage: boolean;
  isLastFormPage: boolean;
  handlePreviousFormBtn: () => void;
}

const EmailDetailsForm = ({
  activeForm,
  sendDetailsToParent,
  isFirstFormPage,
  isLastFormPage,
  handlePreviousFormBtn,
}: EmailDetailsFormType) => {
  const [emailFormDetails, setEmailFormDetails] = useState<
    Record<string, string | number | readonly string[] | undefined>
  >({ email: "", password: "" });
  const [emailErrorMsg, setEmailErrorMsg] = useState("");
  const [passwordErrorMsg, setPasswordErrorMsg] = useState("");

  const inputRefs = useRef<HTMLInputElement[]>([]);

  const handleInputsChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case "email": {
        setEmailFormDetails((state) => {
          return {
            ...state,
            [name]: value,
          };
        });
        setEmailErrorMsg("");
        break;
      }
      case "password": {
        setEmailFormDetails((state) => {
          return {
            ...state,
            [name]: value,
          };
        });
        setPasswordErrorMsg("");
        break;
      }
    }
  };

  const handleFormStepvalidation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let areFieldsValid = true;

    for (const input of inputRefs.current) {
      if (input.validity.valueMissing) {
        areFieldsValid = false;
        input.name === "email"
          ? setEmailErrorMsg(`Please enter your email address`)
          : setPasswordErrorMsg(`Please enter your password`);
      }

      if (input.validity.typeMismatch) {
        areFieldsValid = false;
        setEmailErrorMsg(`Please enter a valid email address`);
      }

      if (input.validity.tooShort || input.validity.tooLong) {
        areFieldsValid = false;
        setPasswordErrorMsg(
          "Your password must be minimum 8 characters and maximum 16 characters long"
        );
      }
    }
    if (areFieldsValid) {
      sendDetailsToParent(emailFormDetails);
    }
  };
  return (
    <form
      onSubmit={(e) => handleFormStepvalidation(e)}
      className={`${
        activeForm ? `flex` : `hidden`
      } flex-col w-1/2 m-auto p-4 gap-4`}
      noValidate
    >
      <div className="flex flex-col">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={handleInputsChange}
          ref={(node: HTMLInputElement) => (inputRefs.current[0] = node)}
          value={emailFormDetails["email"]}
          required
          className="border border-black"
        />
        <span className="mt-2 bg-red-200 text-red-700" aria-live="polite">
          {emailErrorMsg}
        </span>
      </div>
      <div className="flex flex-col">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleInputsChange}
          ref={(node: HTMLInputElement) => (inputRefs.current[1] = node)}
          value={emailFormDetails["password"]}
          required
          minLength={8}
          maxLength={16}
          className="border border-black"
        />
        <span className="mt-2 bg-red-200 text-red-700" aria-live="polite">
          {passwordErrorMsg}
        </span>
      </div>
      <div className="flex gap-2 justify-end">
        {!isFirstFormPage ? (
          <button
            type="button"
            onClick={handlePreviousFormBtn}
            className="px-4 border border-black rounded"
          >
            Previous
          </button>
        ) : null}
        <button className="px-4 border border-black rounded">
          {isLastFormPage ? "Submit" : "Next"}
        </button>
      </div>
    </form>
  );
};

export default EmailDetailsForm;
