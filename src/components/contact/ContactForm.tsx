import React, { useState } from 'react';
import { Button } from '../ui/button';
import {
  StyledForm,
  StyledFormControl,
  StyledFormItem,
  StyledFormLabel,
  StyledFormMessage,
  StyledInput,
  StyledTextarea,
} from '../../styled/ContactForm';
import validator from 'validator';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [isValid, setIsValid] = useState(false);

  const validateEmail = (e) => {
    var email = e.target.value;
    if (validator.isEmail(email)) {
      setEmailError('');
      setIsValid(true);
    } else {
      setEmailError('Invalid email address');
      setIsValid(false);
    }
    setEmail(email)
  }

  const resetForm = () => {
    setName('');
    setEmail('');
    setEmailError('');
    setCompany('');
    setMessage('');
    setIsValid(false);
  }

  const handleSubmit = () => {
    console.log(`name: ${name}, email: ${email}, company: ${company}, message: ${message}`);
    setTimeout(() => resetForm(), 1000);
  }

  return (
    <>
    <iframe title="dummyframe" name="dummyframe" id="dummyframe" style={{ display: 'none' }}></iframe>
    <StyledForm
      name="contact"
      data-netlify="true"
      netlify
      netlify-honeypot="honorific"
      method="POST"
      target="dummyframe"
      onSubmit={handleSubmit}
      >
      <input type="hidden" name="form-name" value="contact" />
      <div style={{ display: 'none' }}>
        <StyledFormItem>
          <StyledFormLabel>Honorific</StyledFormLabel>
          <StyledFormControl>
            <StyledInput placeholder="Mr" />
          </StyledFormControl>
        </StyledFormItem>
      </div>

      <StyledFormItem>
        <StyledFormLabel>Name</StyledFormLabel>
        <StyledFormControl>
          <StyledInput placeholder="John Doe" onChange={(e) => setName(e.target.value)}/>
        </StyledFormControl>
      </StyledFormItem>

      <StyledFormItem>
        <StyledFormLabel>Email</StyledFormLabel>
        <StyledFormControl>
          <StyledInput
            placeholder="john@example.com"
            type="email"
            value={email}
            onChange={(e) => validateEmail(e)}
          />
        </StyledFormControl>
        <StyledFormMessage>
          {emailError}
        </StyledFormMessage>
      </StyledFormItem>

      <StyledFormItem>
        <StyledFormLabel>Company</StyledFormLabel>
        <StyledFormControl>
          <StyledInput
            placeholder="Your Company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </StyledFormControl>
      </StyledFormItem>

      <StyledFormItem>
        <StyledFormLabel>Message</StyledFormLabel>
        <StyledFormControl>
          <StyledTextarea
            placeholder="Tell us about your project"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </StyledFormControl>
      </StyledFormItem>

      {name && email && company && message && isValid === true ? (
        <Button type="submit" className="w-full">
          Send Message
        </Button>
      ) : (
        <Button type="submit" className="w-full" disabled>
          Send Message
        </Button>
      )}
    </StyledForm>
    </>
  );
}
