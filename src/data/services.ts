export interface ServiceFaq {
  q: string;
  a: string;
}

export interface Service {
  slug: string;
  name: string;
  shortName: string;
  /** Keyword used inside "<keyword> in <town>" combo pages */
  keyword: string;
  icon: string;
  /** Short one-liner used on cards and meta descriptions */
  summary: string;
  /** Intro paragraph(s) for the service page */
  intro: string[];
  /** Bulleted "what's included" list */
  includes: string[];
  /** Who this service helps */
  audience: string;
  faqs: ServiceFaq[];
}

export const services: Service[] = [
  {
    slug: 'individual-tax-returns',
    name: 'Individual Tax Returns',
    shortName: 'Tax Returns',
    keyword: 'Individual Tax Returns',
    icon: 'receipt',
    summary:
      'Fast, accurate individual tax returns that maximise your refund — basic returns from $120.',
    intro: [
      'Lodging your personal tax return shouldn’t be stressful. At Wallan Accounting & Bookkeeping we prepare and lodge individual tax returns for employees, sole traders, investors, retirees and families across Wallan and the wider Mitchell Shire region.',
      'We know the deductions that apply to local industries — from trades and transport along the Hume Freeway corridor to healthcare, education and farm workers throughout central Victoria — so you claim everything you’re entitled to and stay compliant with the ATO.',
    ],
    includes: [
      'Preparation and electronic lodgement of your individual tax return',
      'Review of work-related deductions, offsets and rebates you may be missing',
      'Rental property and investment income schedules',
      'Capital gains tax (CGT) calculations on shares and property',
      'Prior-year and late tax returns brought up to date',
      'Clear explanation of your refund or amount payable before we lodge',
    ],
    audience:
      'Employees, sole traders, investors, pensioners and anyone who needs their personal return lodged accurately and on time.',
    faqs: [
      {
        q: 'How much does a tax return cost?',
        a: 'Basic individual tax returns start from $120. The final fee depends on the complexity of your return — for example, rental properties or capital gains add some work. We’ll always confirm the price before we start, and your tax agent fee is generally deductible the following year.',
      },
      {
        q: 'What do I need to bring for my tax return?',
        a: 'Your most recent payment summary or income statement, bank interest details, private health insurance statement, and receipts for any work-related expenses. If you have a rental property or investments, bring those records too. Not sure? Call us on 0430 339 398 and we’ll send you a simple checklist.',
      },
      {
        q: 'Can you lodge late or overdue tax returns?',
        a: 'Yes. We regularly help clients catch up on several years of overdue returns and deal with the ATO on their behalf. Getting up to date is usually easier than people expect.',
      },
      {
        q: 'How long until I get my refund?',
        a: 'Once lodged electronically, the ATO typically issues refunds within about two weeks. We’ll let you know your expected refund before we lodge.',
      },
    ],
  },
  {
    slug: 'business-tax-returns',
    name: 'Business Tax Returns',
    shortName: 'Business Tax',
    keyword: 'Business Tax Returns',
    icon: 'building',
    summary:
      'Company, trust, partnership and sole trader tax returns prepared to minimise tax and keep you compliant.',
    intro: [
      'Running a business in central Victoria keeps you busy enough without worrying about tax deadlines. We prepare and lodge tax returns for sole traders, partnerships, companies and trusts, and structure your affairs to legally minimise the tax you pay.',
      'As a local firm we understand the businesses that drive the Mitchell Shire economy — trades and construction, agriculture, retail, hospitality, transport and professional services — and tailor your return accordingly.',
    ],
    includes: [
      'Preparation and lodgement of company, trust, partnership and sole trader returns',
      'Income tax minimisation and deduction planning',
      'Reconciliation of accounts and end-of-year adjustments',
      'Depreciation schedules and instant asset write-off claims',
      'Director and trust distribution planning',
      'Liaison with the ATO on your behalf',
    ],
    audience:
      'Sole traders, partnerships, companies and family trusts that want accurate, tax-effective returns.',
    faqs: [
      {
        q: 'Do you handle company and trust tax returns?',
        a: 'Yes. We prepare returns for all business structures — sole traders, partnerships, companies and trusts — including the related financial statements and distribution minutes where required.',
      },
      {
        q: 'Can you help reduce the tax my business pays?',
        a: 'Absolutely. Good tax planning happens before 30 June, but even at return time we make sure every legitimate deduction, depreciation claim and concession is applied. We can also review whether your business structure is still the most tax-effective.',
      },
      {
        q: 'I’ve fallen behind on my business returns — can you help?',
        a: 'Yes, this is very common. We’ll get your bookkeeping and returns up to date and negotiate a sensible position with the ATO if anything is outstanding.',
      },
    ],
  },
  {
    slug: 'bas-gst-lodgements',
    name: 'BAS & GST Lodgements',
    shortName: 'BAS & GST',
    keyword: 'BAS & GST Lodgements',
    icon: 'calendar',
    summary:
      'On-time, accurate BAS and GST lodgements so you never miss an ATO deadline or pay a penalty.',
    intro: [
      'Business Activity Statements have a habit of sneaking up on you. We take BAS and GST off your plate entirely — preparing, reviewing and lodging your statements accurately and on time, every quarter or month.',
      'As a registered BAS service provider working with businesses throughout Wallan and Mitchell Shire, we make sure your GST, PAYG withholding and instalments are correct so you avoid ATO penalties and surprises.',
    ],
    includes: [
      'Preparation and lodgement of monthly and quarterly BAS',
      'GST reconciliation and correct coding of transactions',
      'PAYG withholding and PAYG instalment reporting',
      'Review of GST on purchases, fuel tax credits and adjustments',
      'BAS lodgement reminders so nothing is ever late',
      'Catch-up of overdue activity statements',
    ],
    audience:
      'GST-registered sole traders and businesses that want their activity statements handled accurately and on time.',
    faqs: [
      {
        q: 'When is my BAS due?',
        a: 'Quarterly BAS is generally due on the 28th of the month after the quarter ends (with extensions when lodged through a BAS/tax agent like us). Monthly BAS is due on the 21st. We track your deadlines and lodge for you so you never miss one.',
      },
      {
        q: 'Do I need to register for GST?',
        a: 'You must register for GST once your business turnover reaches $75,000 (or $150,000 for non-profits). We can advise whether you need to register and handle the registration for you.',
      },
      {
        q: 'What happens if my BAS is overdue?',
        a: 'The ATO can apply failure-to-lodge penalties and interest. We can bring overdue BAS up to date quickly and, where appropriate, request remission of penalties.',
      },
    ],
  },
  {
    slug: 'bookkeeping',
    name: 'Bookkeeping',
    shortName: 'Bookkeeping',
    keyword: 'Bookkeeping',
    icon: 'book',
    summary:
      'Reliable, accurate bookkeeping that keeps your accounts up to date and your business running smoothly.',
    intro: [
      'Good bookkeeping is the foundation of every healthy business. We keep your books accurate and up to date so you always know where your business stands — and so tax time is painless.',
      'Whether you need a few hours a month or fully outsourced bookkeeping, our Wallan-based team works with your existing software and processes to keep everything reconciled, organised and compliant.',
    ],
    includes: [
      'Day-to-day data entry and bank reconciliations',
      'Accounts payable and accounts receivable management',
      'Cloud accounting setup and ongoing maintenance',
      'Monthly and quarterly management reports',
      'Catch-up bookkeeping for behind-the-eight-ball businesses',
      'Liaison with your accountant at year end',
    ],
    audience:
      'Small businesses, tradies and sole traders who want tidy, reliable books without the admin headache.',
    faqs: [
      {
        q: 'How often should my bookkeeping be done?',
        a: 'It depends on your business, but most small businesses benefit from weekly or fortnightly bookkeeping so reconciliations stay current and your BAS is always ready. We’ll recommend a rhythm that suits your size and budget.',
      },
      {
        q: 'My books are a mess — can you fix them?',
        a: 'Yes. Catch-up and rescue bookkeeping is one of our specialties. We’ll get your accounts reconciled, accurate and ready for BAS and tax, then keep them that way.',
      },
      {
        q: 'Do you work remotely or on-site?',
        a: 'Both. With cloud accounting we can manage your books remotely from Wallan, or attend your premises locally if you prefer a hands-on approach.',
      },
    ],
  },
  {
    slug: 'payroll-services',
    name: 'Payroll Services',
    shortName: 'Payroll',
    keyword: 'Payroll Services',
    icon: 'users',
    summary:
      'Accurate payroll with Single Touch Payroll, super and award compliance handled for you.',
    intro: [
      'Paying your team correctly and on time is non-negotiable. We run your payroll end-to-end — wages, PAYG withholding, superannuation and Single Touch Payroll (STP) reporting — so your staff are paid right and the ATO is kept happy.',
      'We help employers across Wallan and Mitchell Shire stay on top of award rates, super guarantee increases and STP Phase 2 obligations so payroll is one less thing to worry about.',
    ],
    includes: [
      'Processing of weekly, fortnightly or monthly pay runs',
      'Single Touch Payroll (STP) reporting to the ATO',
      'Superannuation guarantee calculations and lodgement',
      'PAYG withholding and payment summaries',
      'Award interpretation, leave accruals and entitlements',
      'New employee onboarding and TFN declarations',
    ],
    audience:
      'Employers who want payroll done accurately and compliantly without the weekly stress.',
    faqs: [
      {
        q: 'What is Single Touch Payroll (STP)?',
        a: 'STP requires employers to report wages, tax and super to the ATO each time they run payroll. We set this up and report it for you, including the STP Phase 2 requirements.',
      },
      {
        q: 'Can you calculate and lodge superannuation?',
        a: 'Yes. We calculate the correct super guarantee (currently 12%) for each employee and ensure it’s paid on time to avoid the super guarantee charge.',
      },
      {
        q: 'Do you handle award rates and entitlements?',
        a: 'We help interpret the relevant modern award, set up correct pay rates, leave accruals and penalty rates so your team is paid correctly.',
      },
    ],
  },
  {
    slug: 'financial-statements',
    name: 'Financial Statements',
    shortName: 'Financial Statements',
    keyword: 'Financial Statements',
    icon: 'chart',
    summary:
      'Clear profit & loss, balance sheet and management reports that show how your business is really tracking.',
    intro: [
      'Numbers only help when you can understand them. We prepare professional financial statements — profit and loss, balance sheet and cash flow — and explain what they mean for your business in plain English.',
      'These reports are essential for tax, for finance and lending applications, and for making confident decisions. We prepare them for businesses of all sizes across central Victoria.',
    ],
    includes: [
      'Annual profit & loss statements',
      'Balance sheets and equity statements',
      'Cash flow statements and forecasts',
      'Management reporting packs with commentary',
      'Reports formatted for banks and lenders',
      'Year-on-year performance comparisons',
    ],
    audience:
      'Business owners who need accurate financials for tax, lending or smarter decision-making.',
    faqs: [
      {
        q: 'Why do I need financial statements?',
        a: 'They’re required for your tax return, but they’re also the clearest picture of your business’s health — essential when applying for finance, planning growth or selling the business.',
      },
      {
        q: 'Can you prepare reports my bank will accept?',
        a: 'Yes. We regularly prepare financials formatted specifically for loan and finance applications so your lender has exactly what they need.',
      },
    ],
  },
  {
    slug: 'small-business-advice',
    name: 'Small Business Advice',
    shortName: 'Business Advice',
    keyword: 'Small Business Advice',
    icon: 'lightbulb',
    summary:
      'Practical, down-to-earth advice to help your business grow, save tax and stay on track.',
    intro: [
      'Sometimes you just need someone in your corner who understands the numbers and the local landscape. We provide practical small business advice — from cash flow and pricing to tax planning and growth — for businesses across Wallan and Mitchell Shire.',
      'As a small local business ourselves, we get the challenges you face. Our advice is straight-talking, affordable and tailored to where you are right now.',
    ],
    includes: [
      'Business structure reviews (sole trader, company, trust)',
      'Tax planning before 30 June to minimise your bill',
      'Cash flow management and budgeting',
      'Pricing, profitability and break-even analysis',
      'Help understanding your numbers and KPIs',
      'Support for new and growing businesses',
    ],
    audience:
      'New, established and growing small businesses that want a trusted local adviser.',
    faqs: [
      {
        q: 'I’m starting a business — can you help me set it up the right way?',
        a: 'Definitely. We help you choose the right structure, register for the necessary tax obligations and set up systems so you start on solid foundations. See our business setup and ABN registration service.',
      },
      {
        q: 'Do you offer tax planning before the end of the financial year?',
        a: 'Yes. Pre-30 June planning is one of the most valuable things we do. We review your position before year end and recommend strategies to legally reduce your tax.',
      },
    ],
  },
  {
    slug: 'xero-myob-quickbooks-support',
    name: 'Xero, MYOB & QuickBooks Support',
    shortName: 'Software Support',
    keyword: 'Xero, MYOB & QuickBooks Support',
    icon: 'cloud',
    summary:
      'Setup, training and ongoing support for Xero, MYOB and QuickBooks so your software works for you.',
    intro: [
      'The right accounting software saves you hours every week — but only when it’s set up correctly. We set up, migrate and support Xero, MYOB and QuickBooks for businesses throughout the Wallan region.',
      'From choosing the right platform to training your team and troubleshooting day-to-day issues, we make sure your software is doing the heavy lifting so you can get back to running your business.',
    ],
    includes: [
      'Software selection advice (Xero vs MYOB vs QuickBooks)',
      'New file setup and chart of accounts configuration',
      'Migration from spreadsheets or older software',
      'Bank feeds, invoicing and payroll setup',
      'One-on-one training for you and your staff',
      'Ongoing troubleshooting and support',
    ],
    audience:
      'Businesses moving to — or getting more out of — cloud accounting software.',
    faqs: [
      {
        q: 'Which accounting software is best for my business?',
        a: 'It depends on your needs. Xero is hugely popular for small businesses, MYOB suits many established businesses, and QuickBooks is a strong all-rounder. We’ll recommend the best fit and set it up for you.',
      },
      {
        q: 'Can you train my staff to use the software?',
        a: 'Yes. We provide practical, one-on-one training tailored to how your business actually works, so your team is confident from day one.',
      },
      {
        q: 'Can you move me from spreadsheets to cloud accounting?',
        a: 'Absolutely. We handle the full migration and make sure your opening balances and history come across cleanly.',
      },
    ],
  },
  {
    slug: 'business-setup-abn-registration',
    name: 'Business Setup & ABN Registration',
    shortName: 'Business Setup',
    keyword: 'Business Setup & ABN Registration',
    icon: 'rocket',
    summary:
      'Start your business the right way — ABN, GST, business name, structure and everything in between.',
    intro: [
      'Starting a business is exciting, but the paperwork can be overwhelming. We take care of the lot — choosing the right structure, registering your ABN, GST, business name and PAYG, and setting up your bookkeeping from day one.',
      'We help new business owners across Wallan and Mitchell Shire launch with confidence and the right foundations in place to grow.',
    ],
    includes: [
      'Business structure advice (sole trader, partnership, company, trust)',
      'ABN and TFN registration',
      'GST and PAYG withholding registration',
      'Business name registration',
      'Company and trust establishment',
      'Accounting software and bookkeeping setup',
    ],
    audience:
      'Anyone starting a new business or formalising a side hustle into a registered business.',
    faqs: [
      {
        q: 'How do I get an ABN?',
        a: 'We can register your ABN for you, usually on the same day, along with any other registrations you need such as GST, a business name and PAYG withholding.',
      },
      {
        q: 'Should I be a sole trader or a company?',
        a: 'It depends on your income, risk and growth plans. A sole trader is simple and cheap to run; a company offers liability protection and tax flexibility. We’ll walk you through the pros and cons for your situation.',
      },
      {
        q: 'What do I need to do before I start trading?',
        a: 'At a minimum you’ll usually need an ABN, the right structure, GST registration (if applicable) and a system to track income and expenses. We set all of this up so you’re ready to go.',
      },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
