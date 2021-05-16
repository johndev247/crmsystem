import React, { useState } from "react";
import { Form, FormInput, FormLabel } from "../../Styles/forms.style";
import { Cards, PriButton } from "../../Styles/globalStyles";
import { AddTicketPageStyle } from "./addticketcomp.style";

const initialData = {
  subject: "",
  date: "",
  desc: "",
};

const AddTicketComp = () => {
  const [data, setData] = useState(initialData);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      data.subject.length > 5 &&
      data.date.length > 6 &&
      data.desc.length > 10
    ) {
      console.log("All is good");
    } else {
      console.log("Field too short");
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  return (
    <AddTicketPageStyle>
      <Cards style={{ alignSelf: "center", marginTop: "2em" }}>
        <Form onSubmit={handleSubmit}>
          <p
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <FormLabel>Title: </FormLabel>
            <FormInput
              style={{ width: "150px" }}
              value={data.subject}
              onChange={handleChange}
              name="subject"
            />
          </p>
          <p
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <FormLabel> Issue's Date : </FormLabel>
            <FormInput
              style={{ width: "150px" }}
              type="date"
              value={data.date}
              onChange={handleChange}
              name="date"
            />
          </p>
          <FormLabel>Description</FormLabel>
          <FormInput
            as="textarea"
            style={{ fontSize: "1.3em", height: "6em" }}
            value={data.desc}
            onChange={handleChange}
            name="desc"
          />
          <PriButton>Add Ticket</PriButton>
        </Form>
      </Cards>
    </AddTicketPageStyle>
  );
};

export default AddTicketComp;
