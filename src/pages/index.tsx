import React, { useState } from 'react';
import {DetailsForm} from './forms/DetailsForm';
import {ScheduleForm} from './forms/ScheduleForm';
import { TargetForm } from './forms/TargetForm';

export interface FormData {
  details: DetailsFormProps;
  schedule: ScheduleFormProps;
  target: TargetFormProps;
}

export interface DetailsFormProps {
  type?: string;
  title?: string;
  body?: string;
}
export interface ScheduleFormProps {
  date?: string;
  time?: string;
}
export interface TargetFormProps {
  audience?: string;
}
export default function Home() {
  const [formData, setFormData] = useState<FormData>({
    details: {},
    schedule: {},
    target: {},
  });

  const [currentTab, setCurrentTab] = useState(0);

  const forms = [
    <DetailsForm
      saveData={(data) => setFormData((prev) => ({ ...prev, details: data }))}
    />,
    <ScheduleForm
      saveData={(data) => setFormData((prev) => ({ ...prev, schedule: data }))}
    />,
    <TargetForm
      saveData={(data) => setFormData((prev) => ({ ...prev, target: data }))}
    />,
  ];

  const handleNext = () => {
    if (currentTab < forms.length - 1) {
      setCurrentTab(currentTab + 1);
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    console.log('Final Form Data:', formData);
  };

  return (
    <div>
      {forms[currentTab]}
      <button type="button" onClick={handleNext}>
        {currentTab < forms.length - 1 ? 'Next' : 'Submit'}
      </button>
      <br />
      <pre>
        <code>{JSON.stringify(formData, null, 2)}</code>
      </pre>
    </div>
  );
};
