export const onboardingSteps = [
  { title: 'Start with your world.', description: 'We map your workload, reporting rhythm, and priorities. You tell us where the pressure is; we work out where support will help.' },
  { title: 'Agree the way forward.', description: 'Together, we define the scope, responsibilities, review points, and communication routine before work changes hands.' },
  { title: 'Make the connection.', description: 'Introduce the team, share the agreed processes, and arrange the right system access for a considered handover.' },
  { title: 'Find your rhythm. Keep improving.', description: 'Work moves through an agreed delivery and review cycle, with regular conversations about quality, capacity, and what comes next.' },
] as const;

export const audiences = [
  { number: '01', title: 'Accounting practices', subtitle: 'More capacity. The same standards.', description: 'Support for UK and US practices managing client workloads, seasonal peaks, and recurring delivery.', detail: 'Keep your client relationships. Extend the team behind them.', icon: 'layers' as const },
  { number: '02', title: 'SMEs & owner-led businesses', subtitle: 'A clearer view of the everyday.', description: 'Practical bookkeeping and reporting support when finance needs more attention than you have time to give it.', detail: 'Spend less time chasing the detail and more time running your business.', icon: 'chart' as const },
  { number: '03', title: 'Growing finance teams', subtitle: 'Room for your next stage.', description: 'Additional people and processes as transaction volumes, entities, and reporting needs become more complex.', detail: 'Build capacity around the work you need today and the plans ahead.', icon: 'people' as const },
] as const;

export const homeFaqs = [
  { id: 'question-scope', question: 'Do we need to outsource our whole finance function?', answer: 'No. Start with a defined task, such as bookkeeping, payroll, or month-end support. The scope can expand when the arrangement is working well and your needs change.' },
  { id: 'question-practices', question: 'Can you support an accounting practice as well as a business?', answer: 'Yes. Support can be shaped around a practice’s client work or a business’s internal finance workload. We agree responsibilities and review arrangements around the way your team operates.' },
  { id: 'question-software', question: 'Can we keep our existing accounting software?', answer: 'Your current setup is part of the discovery conversation. Tell us which tools you use, including Xero, QuickBooks, or Sage, so we can confirm the right workflow and access arrangements before onboarding.' },
  { id: 'question-onboarding', question: 'What does getting started involve?', answer: 'We begin with your priorities, then agree the scope, handover plan, system access, and review process. Timing depends on the work involved and is confirmed together before delivery begins.' },
  { id: 'question-security', question: 'How is access to our data handled?', answer: 'Access permissions, confidentiality arrangements, information sharing, and review controls should be agreed before onboarding. You can request the relevant security documentation as part of that discussion.' },
  { id: 'question-pricing', question: 'How is the cost of support worked out?', answer: 'A proposal is based on the work involved, its complexity and frequency, and the level of team support you need. Scope and commercial terms are agreed before work starts.' },
] as const;
