import { services } from '@/config/site';

interface Detail { title: string; description: string; }
interface Faq { question: string; answer: string; }
export interface ServicePage {
  slug: string;
  label: string;
  href: string;
  number: string;
  title: string;
  accent: string;
  description: string;
  meta: string;
  visual: 'ledger' | 'report' | 'forecast' | 'calendar' | 'payroll' | 'team';
  boardTitle: string;
  boardRows: [string, string, string];
  outcomes: [string, string, string];
  scopeTitle: string;
  scopeIntro: string;
  scope: Detail[];
  fit: string;
  processTitle: string;
  steps: Detail[];
  deliveryTitle: string;
  deliveryIntro: string;
  deliverables: string[];
  boundary: string;
  faqs: Faq[];
  cta: string;
}

type Content = Omit<ServicePage, 'label' | 'href' | 'number'>;
const content: Content[] = [
  {
    slug: 'bookkeeping-month-end-close',
    title: 'A clearer close.', accent: 'A stronger start.',
    description: 'Bring order to the everyday. From transaction records to reconciliations and month-end schedules, give your business a finance foundation it can build on.',
    meta: 'Bookkeeping and month-end close support for accounting practices and businesses. Transaction processing, reconciliations, close schedules, and review-ready records.',
    visual: 'ledger', boardTitle: 'The everyday, in order.',
    boardRows: ['Transaction records', 'Reconciliations', 'Close & review'],
    outcomes: ['An agreed close rhythm', 'Organised supporting records', 'Clear ownership of open items'],
    scopeTitle: 'The detail behind a dependable close.',
    scopeIntro: 'Choose ongoing bookkeeping, help with the month-end workload, or a combination of both. We agree the accounts, frequency, and review process before work begins.',
    scope: [
      { title: 'Transaction processing', description: 'Record and categorise transactions against your chart of accounts, using agreed source documents and coding rules.' },
      { title: 'Bank & card reconciliations', description: 'Match ledger entries to statements and flag missing records, timing differences, and items needing your input.' },
      { title: 'Receivables & payables', description: 'Maintain customer and supplier records, allocate receipts and payments, and prepare ageing summaries.' },
      { title: 'Month-end journals', description: 'Prepare agreed accruals, prepayments, depreciation, and other recurring entries for review.' },
      { title: 'Balance-sheet schedules', description: 'Keep supporting schedules connected to the ledger so balances are easier to trace and review.' },
      { title: 'Catch-up & clean-up', description: 'Work through backlogs or historic reconciliation gaps within a separately agreed scope and timetable.' },
    ],
    fit: 'For practices balancing recurring client work, owners spending too long in the ledger, and finance teams that need additional close capacity.',
    processTitle: 'From scattered records to a shared rhythm.',
    steps: [
      { title: 'Map the starting point.', description: 'Review your systems, accounts, transaction volume, and existing backlog. Agree the information needed and who provides it.' },
      { title: 'Set the close calendar.', description: 'Define cut-off dates, coding rules, review responsibilities, and how queries move between our teams.' },
      { title: 'Record. Reconcile. Review.', description: 'Process the agreed work, prepare schedules, and share outstanding questions before your final review and sign-off.' },
    ],
    deliveryTitle: 'A handover you can follow.',
    deliveryIntro: 'The aim is more than a completed task list. It is a set of records your team or adviser can pick up and understand.',
    deliverables: ['Updated ledgers within the agreed scope', 'Bank and card reconciliation schedules', 'Month-end journals and supporting workings', 'An open-items list with clear next actions'],
    boundary: 'Payment authorisation, accounting policies, and final sign-off stay with your business or appointed adviser. Any catch-up work is scoped separately.',
    faqs: [
      { question: 'Can you work with a bookkeeping backlog?', answer: 'Yes. We first review the period, volume, records available, and known gaps. Catch-up work is then scoped separately so the starting position and delivery expectations are clear.' },
      { question: 'Do we have to change accounting software?', answer: 'Your existing setup is the starting point. We discuss tools such as Xero, QuickBooks, or Sage, confirm the required access, and agree whether the proposed workflow fits your system.' },
      { question: 'How often will the books be updated?', answer: 'The frequency is agreed around your transaction volume, reporting needs, and the availability of source information. It can include a recurring processing schedule and a separate month-end close calendar.' },
      { question: 'Who deals with queries and approves adjustments?', answer: 'We agree a named contact and a query process during onboarding. Proposed adjustments and unresolved items are shared for review; your designated reviewer retains approval responsibility.' },
    ],
    cta: 'Let’s bring your close into focus.',
  },
  {
    slug: 'year-end-accounts',
    title: 'Less year-end friction.', accent: 'More clarity ahead.',
    description: 'Turn a busy year of transactions into organised accounts and supporting schedules. Preparation support that gives your reviewer a clearer starting point.',
    meta: 'Year-end accounts and financial reporting preparation for practices and businesses. Working papers, reconciliations, draft accounts, and reviewer query support.',
    visual: 'report', boardTitle: 'The year, brought together.',
    boardRows: ['Trial balance', 'Supporting schedules', 'Draft accounts'],
    outcomes: ['Connected working papers', 'Clear review trail', 'An organised year-end handover'],
    scopeTitle: 'A considered approach to the final detail.',
    scopeIntro: 'Support for the preparation stage of year-end reporting, shaped around your reporting framework, reviewer requirements, and agreed responsibilities.',
    scope: [
      { title: 'Trial-balance review', description: 'Review the supplied trial balance, identify reconciliation gaps, and raise questions before drafting begins.' },
      { title: 'Year-end reconciliations', description: 'Prepare or update agreed balance-sheet reconciliations and explain material reconciling items.' },
      { title: 'Working-paper preparation', description: 'Assemble schedules for fixed assets, debtors, creditors, accruals, and other balances in scope.' },
      { title: 'Draft financial statements', description: 'Prepare draft accounts using your agreed format and reporting basis for review by the responsible professional.' },
      { title: 'Adjustment schedules', description: 'Document proposed year-end journals and keep supporting calculations linked to the relevant balances.' },
      { title: 'Reviewer query support', description: 'Respond to preparation queries, update workings, and maintain a clear record of agreed revisions.' },
    ],
    fit: 'For UK and US practices managing year-end peaks, and businesses that need preparation support alongside their existing accountant.',
    processTitle: 'A more orderly path to review.',
    steps: [
      { title: 'Agree the reporting brief.', description: 'Confirm the entity, accounting period, reporting basis, required format, and the professional responsible for review.' },
      { title: 'Build the supporting picture.', description: 'Prepare reconciliations and working papers, identify missing information, and document proposed adjustments.' },
      { title: 'Hand over for sign-off.', description: 'Share the draft accounts and schedules, work through review queries, and record the final agreed changes.' },
    ],
    deliveryTitle: 'Prepared for a clearer review.',
    deliveryIntro: 'A consistent set of outputs helps your reviewer spend less time finding the workings and more time assessing the accounts.',
    deliverables: ['Draft financial statements in the agreed format', 'Indexed supporting working papers', 'Proposed journals with supporting calculations', 'A review-query and revision record'],
    boundary: 'This is accounts preparation support. Audit, assurance, statutory signing, filing, and specialist technical opinions are not included unless separately agreed with appropriately authorised professionals.',
    faqs: [
      { question: 'Is this an audit or assurance service?', answer: 'No. This service supports accounts preparation and working papers. It does not provide an audit opinion or independent assurance. Any required audit or assurance engagement remains with your appointed provider.' },
      { question: 'Can you use our practice’s working-paper format?', answer: 'We can scope the work around your templates, indexing conventions, and review process. We confirm the format and any system requirements before onboarding.' },
      { question: 'What information is needed to start?', answer: 'Typically, the trial balance, prior-year accounts, relevant ledger detail, reconciliations, and supporting records. The exact request list depends on the entity and work agreed.' },
      { question: 'Who approves and files the accounts?', answer: 'Your business and designated professional retain responsibility for review, approval, signing, and filing. We agree the preparation handover and any additional coordination required at the outset.' },
    ],
    cta: 'Make room for a calmer year-end.',
  },
  {
    slug: 'management-accounts-fpa',
    title: 'Know where you stand.', accent: 'See what comes next.',
    description: 'Connect reporting, cash-flow forecasts, and planning. Give decision-makers a more useful view of the numbers, with context that supports the next conversation.',
    meta: 'Management accounts and FP&A support: reporting packs, budgets, cash-flow forecasts, variance analysis, and scenario modelling for growing businesses and finance teams.',
    visual: 'forecast', boardTitle: 'A view beyond the month.',
    boardRows: ['Actuals & reporting', 'Budget & variance', 'Forecast & scenarios'],
    outcomes: ['A consistent reporting rhythm', 'Visible planning assumptions', 'More context for decisions'],
    scopeTitle: 'Reporting with somewhere to go.',
    scopeIntro: 'Build a reporting and planning routine around the questions your team actually needs to answer. Start with a monthly pack or add focused analytical support.',
    scope: [
      { title: 'Management reporting', description: 'Prepare recurring profit-and-loss, balance-sheet, and cash summaries in your agreed reporting format.' },
      { title: 'Budgeting support', description: 'Organise budget inputs and build models around the revenue, cost, and operational drivers you define.' },
      { title: 'Cash-flow forecasting', description: 'Model expected cash movements using agreed assumptions, timing, and forecast horizons.' },
      { title: 'Variance analysis', description: 'Compare actuals against budgets or prior periods and highlight areas that need management explanation.' },
      { title: 'KPI reporting', description: 'Bring selected financial and operational measures into a consistent pack with clear definitions.' },
      { title: 'Scenario modelling', description: 'Explore how changes in assumptions could affect the forecast, with the inputs and limitations visible.' },
    ],
    fit: 'For owners who need better reporting, finance leads with limited analytical capacity, and growing teams building their planning routine.',
    processTitle: 'From data to a better conversation.',
    steps: [
      { title: 'Choose the questions.', description: 'Agree the decisions, reporting audience, key measures, and cadence. Review the quality and availability of source data.' },
      { title: 'Connect the model.', description: 'Set up the reporting structure, document assumptions, and align actuals with the budget and forecast.' },
      { title: 'Review the movement.', description: 'Refresh the pack, explain the workings, and surface changes for your team to interpret and act on.' },
    ],
    deliveryTitle: 'Useful context, clearly presented.',
    deliveryIntro: 'Outputs are designed for a recurring management conversation, with the detail available when someone wants to look closer.',
    deliverables: ['A management reporting pack', 'Budget and forecast workings', 'Variance and KPI summaries', 'An assumptions and scenario register'],
    boundary: 'Forecasts depend on the information and assumptions supplied; they are not guarantees. Management retains responsibility for decisions, funding plans, and approval of budgets.',
    faqs: [
      { question: 'Can we start with management accounts only?', answer: 'Yes. You can start with a defined reporting pack and add budgeting, forecasting, or analysis later. We agree the outputs and frequency around your current priorities.' },
      { question: 'What if our bookkeeping is not up to date?', answer: 'We review the starting data before agreeing the reporting timetable. Bookkeeping or reconciliation gaps may need to be resolved first, either by your team or through a separate support scope.' },
      { question: 'Can you work with our existing financial model?', answer: 'Yes, subject to reviewing the model, access requirements, and the work involved. We can support an existing structure or agree a revised format if your reporting needs have changed.' },
      { question: 'How are forecast assumptions agreed?', answer: 'Your team provides and approves the business assumptions. We document the inputs, show how they flow through the model, and flag gaps or inconsistencies for discussion.' },
    ],
    cta: 'Bring your next decision into focus.',
  },
  {
    slug: 'vat-tax-compliance',
    title: 'More order in the detail.', accent: 'Less deadline pressure.',
    description: 'Preparation and coordination support for your tax workflow. Keep records, reconciliations, and reviewer questions connected to an agreed filing calendar.',
    meta: 'VAT and tax compliance preparation support, including VAT workings, reconciliations, tax schedules, and filing-calendar coordination with your appointed advisers.',
    visual: 'calendar', boardTitle: 'A more connected calendar.',
    boardRows: ['Source records', 'Preparation & queries', 'Adviser review'],
    outcomes: ['An agreed responsibilities map', 'Traceable preparation workings', 'Earlier visibility of missing records'],
    scopeTitle: 'The preparation behind the deadline.',
    scopeIntro: 'VAT support is scoped for relevant UK workflows. Other tax preparation depends on the entity, jurisdiction, and your appointed adviser’s requirements.',
    scope: [
      { title: 'VAT return workings', description: 'Prepare draft VAT calculations from the agreed records and flag items requiring a tax-treatment decision.' },
      { title: 'VAT reconciliations', description: 'Connect draft return figures to ledger balances and maintain a record of reconciling differences.' },
      { title: 'Source-document checks', description: 'Identify missing invoices or supporting records and maintain a query list for your team.' },
      { title: 'Tax preparation schedules', description: 'Assemble agreed ledger extracts and supporting schedules for your appointed tax professional.' },
      { title: 'Calendar coordination', description: 'Track agreed preparation milestones, information requests, and review handovers against your filing plan.' },
      { title: 'Adviser query support', description: 'Help resolve preparation questions and keep changes to workings documented through the review cycle.' },
    ],
    fit: 'For practices handling recurring VAT preparation, and businesses that want better organised records for their accountant or tax adviser.',
    processTitle: 'A clear route from records to review.',
    steps: [
      { title: 'Confirm the boundaries.', description: 'Identify the entity, jurisdiction, period, relevant tax workflow, and who advises, reviews, and submits.' },
      { title: 'Prepare the workings.', description: 'Gather the agreed data, reconcile figures, and raise missing records or treatment questions with the responsible adviser.' },
      { title: 'Coordinate the handover.', description: 'Deliver the preparation pack for approval and maintain a clear record of queries and agreed changes.' },
    ],
    deliveryTitle: 'Connected records. Clear responsibilities.',
    deliveryIntro: 'Preparation outputs are agreed around your adviser’s requirements, so the next person in the process knows what is ready and what needs attention.',
    deliverables: ['Draft VAT workings where in scope', 'Ledger-to-return reconciliations', 'Supporting tax preparation schedules', 'A preparation calendar and open-query log'],
    boundary: 'VAT is not a US tax service. Tax advice, treatment decisions, representation, and filing require an explicitly agreed scope and appropriately authorised professionals. We confirm responsibilities before work begins.',
    faqs: [
      { question: 'Does VAT support apply to US businesses?', answer: 'VAT preparation here refers to relevant UK workflows. US tax preparation needs are discussed separately with your appointed adviser; we do not treat VAT and US sales tax as interchangeable.' },
      { question: 'Will you decide the tax treatment of transactions?', answer: 'We follow agreed preparation rules and raise uncertain items with your appointed adviser. Specialist tax-treatment decisions remain with the professional responsible for that advice.' },
      { question: 'Is submitting a return included?', answer: 'Submission is not assumed. We explicitly agree who prepares, reviews, approves, and files. Any filing access or additional service must be confirmed before the work starts.' },
      { question: 'Can you support our existing tax adviser?', answer: 'Yes. The preparation scope can be shaped around their information requests, formats, and review milestones, with your business retaining the adviser relationship.' },
    ],
    cta: 'Give your tax workflow more breathing room.',
  },
  {
    slug: 'payroll-outsourcing',
    title: 'A dependable rhythm.', accent: 'For your people.',
    description: 'Give recurring payroll work a consistent process. Preparation, processing support, and payslip workflows coordinated with your team’s approved inputs and calendar.',
    meta: 'Payroll outsourcing support for practices and businesses. Payroll inputs, processing, payslip preparation, change logs, and review packs within an agreed scope.',
    visual: 'payroll', boardTitle: 'People first. Process connected.',
    boardRows: ['Approved inputs', 'Payroll preparation', 'Review & release'],
    outcomes: ['A defined payroll calendar', 'A documented change trail', 'Review before release'],
    scopeTitle: 'Keep the recurring work moving.',
    scopeIntro: 'Payroll is scoped around your jurisdiction, software, pay frequency, and approval process. The responsibilities for submissions and payments are agreed explicitly.',
    scope: [
      { title: 'Input coordination', description: 'Organise the approved payroll inputs, recurring instructions, and cut-off dates for each pay cycle.' },
      { title: 'Payroll processing', description: 'Support gross-to-net processing in the agreed system, using the rules and inputs approved for your payroll.' },
      { title: 'Joiner & leaver changes', description: 'Process documented employee changes after your team has supplied and authorised the required information.' },
      { title: 'Payslip preparation', description: 'Prepare payslips and payroll summaries for review, with distribution responsibilities confirmed in advance.' },
      { title: 'Payroll reconciliations', description: 'Prepare agreed comparisons and reconciliation schedules to help your reviewer understand changes between cycles.' },
      { title: 'Period-end schedules', description: 'Assemble agreed payroll reports and supporting schedules for your finance team or appointed adviser.' },
    ],
    fit: 'For practices managing client payrolls, growing employers with recurring workloads, and finance teams that need extra processing capacity.',
    processTitle: 'Every cycle, a clear sequence.',
    steps: [
      { title: 'Set up the calendar.', description: 'Agree the payroll population, systems, cut-off dates, required inputs, and named approvers.' },
      { title: 'Prepare and compare.', description: 'Process authorised information, prepare the review pack, and highlight exceptions or changes needing attention.' },
      { title: 'Approve before release.', description: 'Your authorised reviewer signs off the outputs. Any distribution, submission, or payment step follows the agreed responsibilities.' },
    ],
    deliveryTitle: 'A review pack with the detail attached.',
    deliveryIntro: 'A consistent handover makes it easier to see what changed, what needs approval, and which actions sit with your team.',
    deliverables: ['Draft payroll summaries for approval', 'Payslips within the agreed workflow', 'A documented input and change log', 'Payroll reconciliation and exception schedules'],
    boundary: 'Your business approves employee data, payroll outputs, and payments. Statutory submissions, pension administration, benefits, and employment advice are not assumed within the processing scope.',
    faqs: [
      { question: 'Can you support different payroll frequencies?', answer: 'We discuss the pay cycles, employee numbers, input deadlines, and systems during scoping. The delivery calendar is agreed before processing begins.' },
      { question: 'Who approves payroll and makes payments?', answer: 'Your authorised reviewer approves the payroll outputs and your business retains payment control. We document the approval and release process during onboarding.' },
      { question: 'Are statutory submissions and pensions included?', answer: 'They are not assumed to be included. Jurisdiction-specific submissions, pension tasks, and other additional work must be explicitly scoped with the relevant responsibilities and access agreed.' },
      { question: 'How is employee data shared?', answer: 'We agree the access permissions, transfer method, and people who need the information before onboarding. Payroll data should be shared through the agreed workflow rather than included in an initial website enquiry.' },
    ],
    cta: 'Build a better payroll rhythm.',
  },
  {
    slug: 'dedicated-offshore-teams',
    title: 'Different desks.', accent: 'One shared direction.',
    description: 'Extend your finance capacity with dedicated offshore professionals. People who work within your agreed systems, processes, and review structure, with a connection to your everyday.',
    meta: 'Dedicated offshore accounting teams for practices and businesses. Role scoping, onboarding, workflow alignment, delivery coordination, and ongoing capacity reviews.',
    visual: 'team', boardTitle: 'Your team, thoughtfully extended.',
    boardRows: ['Your priorities', 'Connected delivery', 'Shared review rhythm'],
    outcomes: ['Roles shaped around your workload', 'Agreed communication routines', 'Capacity you can review as you grow'],
    scopeTitle: 'Build around the work. Connect the people.',
    scopeIntro: 'A dedicated team starts with clear responsibilities. We define the roles and delivery model around the work you need covered, rather than a generic resource list.',
    scope: [
      { title: 'Role & capacity planning', description: 'Map the workload and define the skills, responsibilities, and level of support needed for your team.' },
      { title: 'Team alignment', description: 'Agree role expectations, working arrangements, escalation routes, and the people responsible for delivery oversight.' },
      { title: 'Process onboarding', description: 'Introduce your workflows, templates, quality expectations, and documentation before recurring delivery begins.' },
      { title: 'System access planning', description: 'Arrange the agreed access with your administrators and define how information moves between the teams.' },
      { title: 'Delivery coordination', description: 'Keep task ownership, priorities, review points, and communication routines visible across locations.' },
      { title: 'Ongoing capacity reviews', description: 'Review the workload and delivery experience together as your business needs change.' },
    ],
    fit: 'For accounting practices expanding delivery capacity and businesses building an extended finance function alongside their internal team.',
    processTitle: 'A working relationship, built deliberately.',
    steps: [
      { title: 'Define the roles.', description: 'Understand the work, expected experience, systems, communication needs, and where the new capacity will fit.' },
      { title: 'Connect the team.', description: 'Agree the team arrangement, introduce the people, and work through documented onboarding and access requirements.' },
      { title: 'Build a shared rhythm.', description: 'Start with agreed priorities and review points, then use regular conversations to refine capacity and ways of working.' },
    ],
    deliveryTitle: 'The connection is part of the scope.',
    deliveryIntro: 'The arrangement is documented so your extended team has direction and your internal team knows how to work with them.',
    deliverables: ['A role and responsibilities brief', 'An onboarding and access checklist', 'An agreed workflow and review map', 'A communication and capacity-review routine'],
    boundary: 'Team size, availability, working-hour overlap, continuity arrangements, and commercial terms depend on the agreed engagement. Your business retains policy decisions and final approvals.',
    faqs: [
      { question: 'Can we start with one role?', answer: 'We can discuss a focused starting scope and the capacity needed. The proposed arrangement depends on the role, workload, availability, and engagement terms.' },
      { question: 'Will the team use our existing processes?', answer: 'That is the starting point. We review your workflows, templates, and systems, then agree the onboarding needed and any changes that would make delivery clearer.' },
      { question: 'How do working hours and communication work?', answer: 'Working-hour overlap, meeting frequency, response expectations, and escalation contacts are agreed during scoping. We do not assume the same arrangement suits every business.' },
      { question: 'Can capacity change as our workload grows?', answer: 'Capacity can be reviewed as your needs change. Any adjustment is subject to the engagement terms, role requirements, and availability, with transition arrangements agreed together.' },
    ],
    cta: 'Meet your next stage with the right team.',
  },
];

export const servicePages: ServicePage[] = content.map((page, index) => {
  const navigation = services.find(service => service.href === `/services/${page.slug}/`);
  if (!navigation) throw new Error(`Missing service navigation: ${page.slug}`);
  return { ...page, label: navigation.label, href: navigation.href, number: `0${index + 1}` };
});
