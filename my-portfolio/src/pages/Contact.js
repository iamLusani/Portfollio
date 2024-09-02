import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const Contact = () => {
  return (
    <ContactContainer>
      <motion.h2
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 50 }}>
        Get in Touch
      </motion.h2>
      <Form>
        <motion.input
          type="text"
          placeholder="Your Name"
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", delay: 0.2 }}
        />
        <motion.input
          type="email"
          placeholder="Your Email"
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", delay: 0.4 }}
        />
        <motion.textarea
          placeholder="Your Message"
          initial={{ y: "100vh" }}
          animate={{ y: 0 }}
          transition={{ type: "spring", delay: 0.6 }}
        />
        <motion.button
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}>
          Send
        </motion.button>
      </Form>
    </ContactContainer>
  );
};

const ContactContainer = styled.div`
  padding: 40px;
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;

  input,
  textarea {
    margin: 10px 0;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }

  button {
    padding: 10px;
    background-color: #ff6f61;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;

export default Contact;
