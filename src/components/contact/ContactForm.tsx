import * as React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
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

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  company: z.string().min(2, 'Company name must be at least 2 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export default function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      message: '',
    },
  });

  return (
    <StyledForm
      {...form}
      data-netlify="true"
      netlify-honeypot="bot-field"
      name="contact"
      method="POST"
      >
      <StyledFormItem>
        <StyledFormLabel>Name</StyledFormLabel>
        <StyledFormControl>
          <StyledInput placeholder="John Doe" {...form.register('name')} />
        </StyledFormControl>
        <StyledFormMessage>
          {form.formState.errors.name?.message}
        </StyledFormMessage>
      </StyledFormItem>

      <StyledFormItem>
        <StyledFormLabel>Email</StyledFormLabel>
        <StyledFormControl>
          <StyledInput
            placeholder="john@example.com"
            type="email"
            {...form.register('email')}
          />
        </StyledFormControl>
        <StyledFormMessage>
          {form.formState.errors.email?.message}
        </StyledFormMessage>
      </StyledFormItem>

      <StyledFormItem>
        <StyledFormLabel>Company</StyledFormLabel>
        <StyledFormControl>
          <StyledInput
            placeholder="Your Company"
            {...form.register('company')}
          />
        </StyledFormControl>
        <StyledFormMessage>
          {form.formState.errors.company?.message}
        </StyledFormMessage>
      </StyledFormItem>

      <StyledFormItem>
        <StyledFormLabel>Message</StyledFormLabel>
        <StyledFormControl>
          <StyledTextarea
            placeholder="Tell us about your project"
            {...form.register('message')}
          />
        </StyledFormControl>
        <StyledFormMessage>
          {form.formState.errors.message?.message}
        </StyledFormMessage>
      </StyledFormItem>

      <Button type="submit" className="w-full">
        Send Message
      </Button>
    </StyledForm>
  );
}
