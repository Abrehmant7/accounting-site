import { homeFaqs } from './home';

export const faqGroups = [
  {
    id: 'getting-started', number: '01', title: 'Getting started', description: 'Scope, fit, and the first conversation.',
    questions: [homeFaqs[0], homeFaqs[1], homeFaqs[3], homeFaqs[5]],
  },
  {
    id: 'working-together', number: '02', title: 'Working together', description: 'Systems, communication, and day-to-day delivery.',
    questions: [
      homeFaqs[2],
      { id: 'question-delivery-calendar', question: 'How are delivery dates and review points agreed?', answer: 'We map the recurring workload, required inputs, and review steps before agreeing a delivery calendar. Dates depend on the scope and the information available; timing is confirmed before work begins.' },
      { id: 'question-queries', question: 'Who do we speak to about questions or changes?', answer: 'We agree the day-to-day contacts, communication channels, and escalation route during onboarding. Queries, missing records, and proposed changes should have a named owner and a clear next action.' },
      { id: 'question-capacity', question: 'Can the level of support change over time?', answer: 'Yes, the scope and capacity can be reviewed as your needs change. Adjustments depend on the work, role requirements, availability, and engagement terms, with any transition agreed together.' },
    ],
  },
  {
    id: 'security-data', number: '03', title: 'Security & your information', description: 'Access, confidentiality, and the documents to discuss.',
    questions: [
      homeFaqs[4],
      { id: 'question-certification', question: 'Where can we find ISO or other security certification details?', answer: 'Certification details are not published on this site. If certification is part of your procurement criteria, request current documentation and confirm its scope and validity before agreeing an engagement.' },
      { id: 'question-confidentiality', question: 'Can we discuss confidentiality and data-handling requirements?', answer: 'Yes. Raise your confidentiality, information-sharing, access, and retention requirements during scoping. Relevant documents and responsibilities should be reviewed and agreed before system access or business records are shared.' },
      { id: 'question-enquiry-data', question: 'What information should we include in a website enquiry?', answer: 'Share your name, work email, business context, and a brief description of the support you need. Enquiry details are used to respond to your request. Please leave out passwords, bank details, employee records, and client financial data; an appropriate information-sharing process can be agreed later.' },
    ],
  },
  {
    id: 'practical-details', number: '04', title: 'The practical details', description: 'Approvals, preparation, and responsibilities.',
    questions: [
      { id: 'question-filing', question: 'Are tax advice, filing, and statutory sign-off included?', answer: 'They are not assumed to be included. Preparation, specialist advice, review, approval, and submission are separate responsibilities that must be explicitly agreed for the relevant entity and jurisdiction. VAT preparation refers to relevant UK workflows; US tax needs are discussed separately.' },
      { id: 'question-payment-control', question: 'Who approves accounts, payroll, and payments?', answer: 'Your business or designated professional retains final approval responsibility. We agree the preparation and review process, and your business keeps control of payment authorisation and release.' },
      { id: 'question-backlogs', question: 'Can you help with a backlog or a one-off project?', answer: 'We can discuss a focused catch-up or project scope. We first review the records, period, volume, known gaps, and intended outputs before agreeing the work and delivery expectations.' },
      { id: 'question-before-introduction', question: 'What should we prepare for the first conversation?', answer: 'A short outline of your workload, accounting tools, reporting frequency, and where support would help is enough to start. You do not need to send financial records through the website form.' },
    ],
  },
] as const;

export const allFaqs = faqGroups.flatMap(group => [...group.questions]);
