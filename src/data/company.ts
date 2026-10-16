import { services } from '@/config/site';

export const audienceProfiles = [
  {
    id: 'accounting-practices', number: '01', label: 'UK & US ACCOUNTING PRACTICES', title: 'Your clients. An extended team behind them.',
    intro: 'Create more room for client relationships without carrying every delivery task in-house. Support can follow your practice’s templates, review structure, and agreed client workflows.',
    moments: ['Recurring client work is taking up advisory time.', 'Year-end or seasonal workloads need extra capacity.', 'You want a more consistent preparation-to-review handover.'],
    arrangement: 'You retain the client relationship and final professional review. We agree the preparation work, communication routes, and handover standards with your team.',
    startingPoints: [services[0], services[1], services[5]],
    note: 'Jurisdiction, reporting basis, and any tax or filing responsibilities are confirmed for each engagement.',
  },
  {
    id: 'owner-led-businesses', number: '02', label: 'SMEs & OWNER-LED BUSINESSES', title: 'More time in your business. Less time in the books.',
    intro: 'When the finance to-do list keeps growing, the right support brings structure to the everyday. Start with the work that takes the most time or leaves the biggest gaps in your view.',
    moments: ['Bookkeeping is slipping behind the day-to-day.', 'You need clearer reporting for regular business decisions.', 'Payroll or routine finance work needs a dependable rhythm.'],
    arrangement: 'Agree a focused service and a named point of contact. Your business keeps its approval responsibilities, with a clearer view of what is being prepared and reviewed.',
    startingPoints: [services[0], services[2], services[4]],
    note: 'We can coordinate with your existing accountant or tax adviser as part of the agreed workflow.',
  },
  {
    id: 'growing-finance-teams', number: '03', label: 'GROWING BUSINESSES & FINANCE TEAMS', title: 'Keep the ambition. Add the capacity.',
    intro: 'As transaction volumes, entities, and reporting needs grow, finance can become a bottleneck. Extend delivery capacity around your internal team and the processes you are building.',
    moments: ['The close is competing with forecasting and analysis.', 'Your team needs support across a wider recurring workload.', 'You want dedicated capacity aligned with your systems.'],
    arrangement: 'Map the work, define ownership, and build a delivery and review routine alongside your finance lead. Capacity and ways of working can be reviewed as your needs change.',
    startingPoints: [services[2], services[5], services[0]],
    note: 'Role requirements, availability, working-hour overlap, and commercial terms are agreed before onboarding.',
  },
] as const;

export const workingPrinciples = [
  { number: '01', title: 'Clarity before complexity.', description: 'A useful starting point is a clear scope: what needs doing, who owns it, and what a good handover looks like.' },
  { number: '02', title: 'People before processes.', description: 'Understand the people doing the work. Agree the contacts, communication routine, and practical details that make collaboration easier.' },
  { number: '03', title: 'Ownership in the detail.', description: 'Give tasks a defined owner and review point. Keep questions and exceptions visible so the next step is understood.' },
  { number: '04', title: 'Room to keep improving.', description: 'A working relationship should make space for feedback. Review the delivery experience as priorities and workloads change.' },
] as const;

export const readinessQuestions = [
  { number: '01', title: 'Where is the pressure?', description: 'A recurring task, a seasonal peak, or a growing backlog. Start with what is getting in the way.' },
  { number: '02', title: 'How do you work today?', description: 'Your software, reporting calendar, and review process help shape a practical support model.' },
  { number: '03', title: 'What would better look like?', description: 'More capacity, clearer records, or more time for analysis. Agree the outcome worth working towards.' },
] as const;
