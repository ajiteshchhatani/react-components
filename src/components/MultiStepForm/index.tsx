import { useState } from "react";
import NameDetailsForm from "./NameDetailsForm";
import EmailDetailsForm from "./EmailDetailsForm";
import FormData from "./FormData";

const NUM_OF_FORM_PAGES = 2;

const MultiStepForm = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [allFormsData, setAllFormsData] =
    useState<Record<string, string | number | readonly string[] | undefined>>();

  const handleTabChange = () => {
    if (activeTab < NUM_OF_FORM_PAGES) {
      setActiveTab((tab) => tab + 1);
    }
  };

  const handlePreviousFormBtn = () => {
    if (activeTab > 0) {
      setActiveTab((tab) => tab - 1);
    }
  };

  const handleFormDataReceived = (
    arg: Record<string, string | number | readonly string[] | undefined>
  ) => {
    setAllFormsData((state) => {
      return {
        ...state,
        ...arg,
      };
    });
    handleTabChange();
  };

  const handleTabChangeToHome = () => {
    setActiveTab(0);
  };

  return (
    <div className="flex flex-col m-auto py-2 px-4 w-1/2 border-2 border-black rounded">
      <p className="self-center text-2xl">Multi step form</p>
      {activeTab < NUM_OF_FORM_PAGES ? (
        <p className="self-end">
          {activeTab + 1} / {NUM_OF_FORM_PAGES}
        </p>
      ) : null}
      <NameDetailsForm
        active={activeTab === 0}
        sendDetailsToParent={handleFormDataReceived}
        isFirstFormPage={activeTab === 0}
        isLastFormPage={activeTab === NUM_OF_FORM_PAGES - 1}
        handlePreviousFormBtn={handlePreviousFormBtn}
      />
      <EmailDetailsForm
        activeForm={activeTab === 1}
        sendDetailsToParent={handleFormDataReceived}
        isFirstFormPage={activeTab === 0}
        isLastFormPage={activeTab === NUM_OF_FORM_PAGES - 1}
        handlePreviousFormBtn={handlePreviousFormBtn}
      />
      {activeTab === NUM_OF_FORM_PAGES ? (
        <FormData
          allFormsData={
            allFormsData as Record<
              string,
              string | number | readonly string[] | undefined
            >
          }
        />
      ) : null}
    </div>
  );
};

export default MultiStepForm;
