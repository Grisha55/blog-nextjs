import ContactForm from '@/components/ContactForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Contact page",
  description: "We need your opinion to be better :)",
};

export default function ContactPage() {
	return <ContactForm />
}
