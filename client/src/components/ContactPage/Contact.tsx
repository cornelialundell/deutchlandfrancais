import React, { useState } from "react";
import { Button } from "../globalStyles/button.style";
import { Wrapper } from "./Contact.styles";
import axios from "axios";
import type { FormEvent } from "react";

export const Contact = () => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  async function sendContact(e: FormEvent) {
    e.preventDefault();
    try {
      console.log("hej");
      const registerData = {
        title,
        message,
      };

      await axios.post("http://localhost:9000/contactForm", registerData);

      setTitle("");
      setMessage("");
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <Wrapper>
      <form onSubmit={sendContact}>
        <input
          type="text"
          placeholder="namn"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <input
        type="text"
          id="question"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        ></input>
        <Button type="submit" onClick={sendContact} bgColor="violet">
          skicka din fråga
        </Button>
      </form>
    </Wrapper>
  );
};
