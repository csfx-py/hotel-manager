import React, { useState } from "react";
import { Button, Form, FormGroup, FormSpan, Input } from "../HomeElements";

const Settings = (props) => {
  const [sinput, setSInput] = useState({ companyName: "", GSTIN: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSInput({ ...sinput, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setSettings({ companyName: sinput.companyName, GSTIN: sinput.GSTIN });
    // setSInput({
    //   companyName: props.settings.companyName,
    //   GSTIN: props.settings.GSTIN,
    // });
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FormSpan>Company Name</FormSpan>
        <FormGroup>
          <Input
            max="14"
            min="3"
            required={true}
            name="companyName"
            value={sinput.companyName}
            onChange={handleChange}
          />
          <Button type="submit">Change</Button>
        </FormGroup>
      </Form>
      <Form onSubmit={handleSubmit}>
        <FormSpan>GST invoice</FormSpan>
        <FormGroup>
          <Input
            max="14"
            min="3"
            required={true}
            name="GSTIN"
            value={sinput.GSTIN}
            onChange={handleChange}
          />
          <Button type="submit">Change</Button>
        </FormGroup>
      </Form>
    </>
  );
};

export default Settings;
