export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO
  readMins: number;
  category: string;
  /** HTML body */
  body: string;
}

export const posts: BlogPost[] = [
  {
    slug: 'how-much-does-a-tax-return-cost-wallan',
    title: 'How Much Does a Tax Return Cost in Wallan?',
    description:
      'A clear breakdown of tax return costs in Wallan and the Mitchell Shire — basic returns from $120 — plus what affects the price and why a tax agent is worth it.',
    date: '2026-05-12',
    readMins: 5,
    category: 'Tax Returns',
    body: `
      <p>One of the most common questions we hear from locals in Wallan and across the Mitchell Shire is simply: <em>how much will my tax return cost?</em> It’s a fair question, and the honest answer is — it depends on your situation. Here’s a transparent guide.</p>
      <h2>Basic tax returns from $120</h2>
      <p>At Wallan Accounting &amp; Bookkeeping, a basic individual tax return starts from <strong>$120</strong>. A "basic" return generally means salary or wage income, bank interest, and standard work-related deductions. For many local employees, that’s exactly what they need.</p>
      <h2>What can affect the price?</h2>
      <ul>
        <li><strong>Rental properties</strong> — each property adds a schedule of income and deductions to prepare.</li>
        <li><strong>Capital gains</strong> — selling shares or an investment property requires CGT calculations.</li>
        <li><strong>Sole trader / business income</strong> — a business schedule takes more work than a simple wage return.</li>
        <li><strong>Multiple income sources or prior-year catch-ups</strong> — more moving parts means a little more time.</li>
      </ul>
      <p>We always confirm your fee <strong>before</strong> we start, so there are never any surprises.</p>
      <h2>Is a tax agent worth the cost?</h2>
      <p>Yes — for three reasons. First, the fee you pay a registered tax agent is <strong>generally deductible</strong> on next year’s return. Second, we routinely find deductions people miss, which often more than covers our fee. Third, lodging through an agent gives you extended lodgement deadlines and someone to deal with the ATO on your behalf.</p>
      <h2>Book your free consultation</h2>
      <p>Not sure what your return will involve? Call Shannon on <a href="tel:+61430339398">0430 339 398</a> for a free, no-obligation chat. We’ll give you a clear price and a checklist of what to bring.</p>
    `,
  },
  {
    slug: 'bas-due-dates-victoria-small-business',
    title: 'BAS Due Dates: A Simple Guide for Victorian Small Businesses',
    description:
      'When is your BAS due? A plain-English guide to quarterly and monthly BAS deadlines for small businesses in Wallan, Mitchell Shire and across Victoria.',
    date: '2026-04-18',
    readMins: 6,
    category: 'BAS & GST',
    body: `
      <p>If you run a GST-registered business in Wallan or anywhere in the Mitchell Shire, your Business Activity Statement (BAS) is a regular fact of life. Miss a deadline and you risk penalties and interest — so here’s a simple guide to staying on track.</p>
      <h2>Quarterly BAS due dates</h2>
      <p>Most small businesses lodge quarterly. The standard due dates are:</p>
      <ul>
        <li><strong>Quarter 1 (Jul–Sep):</strong> due 28 October</li>
        <li><strong>Quarter 2 (Oct–Dec):</strong> due 28 February</li>
        <li><strong>Quarter 3 (Jan–Mar):</strong> due 28 April</li>
        <li><strong>Quarter 4 (Apr–Jun):</strong> due 28 July</li>
      </ul>
      <p>Good news: when you lodge through a registered BAS or tax agent like us, you usually receive an automatic extension of around four extra weeks on most quarters.</p>
      <h2>Monthly BAS</h2>
      <p>If you lodge monthly, your BAS is generally due on the <strong>21st of the following month</strong>.</p>
      <h2>What happens if you’re late?</h2>
      <p>The ATO can apply a "failure to lodge on time" penalty plus interest on amounts owing. If you’ve fallen behind, don’t panic — we can bring overdue statements up to date quickly and, in many cases, request a remission of penalties.</p>
      <h2>Never miss a deadline again</h2>
      <p>We handle BAS and GST for businesses throughout the region — preparing, reviewing and lodging on time, every time, with reminders so nothing slips through. Call Shannon on <a href="tel:+61430339398">0430 339 398</a> to take BAS off your plate for good.</p>
    `,
  },
  {
    slug: 'tax-deductions-you-might-be-missing',
    title: 'Tax Deductions You Might Be Missing',
    description:
      'Common (and overlooked) tax deductions for workers and small businesses in Wallan and the Mitchell Shire. Don’t leave money on the table this tax time.',
    date: '2026-03-22',
    readMins: 7,
    category: 'Tax Tips',
    body: `
      <p>Every year we meet new clients in Wallan and the Mitchell Shire who’ve been missing out on deductions they were entitled to claim. Here are some of the most commonly overlooked ones — though always check your specific circumstances with us first.</p>
      <h2>Work-related deductions</h2>
      <ul>
        <li><strong>Car and travel</strong> — if you drive between job sites or for work (not your normal commute), you may be able to claim it.</li>
        <li><strong>Tools and equipment</strong> — tradies and many other workers can claim tools, with immediate write-offs for lower-cost items.</li>
        <li><strong>Working from home</strong> — a portion of electricity, internet and phone where you work from home.</li>
        <li><strong>Uniforms and protective clothing</strong> — compulsory, branded or protective workwear and laundry.</li>
        <li><strong>Self-education</strong> — courses directly related to your current job.</li>
      </ul>
      <h2>For small business owners</h2>
      <ul>
        <li><strong>Home office costs</strong> where you run the business from home.</li>
        <li><strong>Depreciation</strong> and the instant asset write-off on eligible equipment.</li>
        <li><strong>Subscriptions, software and professional fees</strong> — including your accounting software and our fee.</li>
        <li><strong>Motor vehicle expenses</strong> for business use.</li>
      </ul>
      <h2>Don’t forget…</h2>
      <p>Income protection insurance premiums, donations to registered charities, and the cost of managing your tax affairs are all commonly claimable.</p>
      <h2>Get a second opinion</h2>
      <p>The safest way to maximise your refund is to have a local tax agent review your situation. Call Shannon on <a href="tel:+61430339398">0430 339 398</a> and let’s make sure you claim everything you’re entitled to.</p>
    `,
  },
  {
    slug: 'sole-trader-vs-company-business-structure',
    title: 'Sole Trader vs Company: Which Structure Is Right for You?',
    description:
      'Choosing a business structure in Victoria? Compare sole trader, partnership, company and trust — and find out which suits your Wallan-area business.',
    date: '2026-02-15',
    readMins: 8,
    category: 'Business Advice',
    body: `
      <p>Choosing the right business structure is one of the most important decisions you’ll make when starting out. Get it right and you’ll save tax, protect your assets and make life simpler. Here’s a plain-English comparison for business owners around Wallan and the Mitchell Shire.</p>
      <h2>Sole trader</h2>
      <p><strong>Best for:</strong> simple, low-risk businesses and side hustles. It’s cheap and easy to set up — you just need an ABN. The downside is that you’re personally liable for the business, and all profit is taxed at your individual rate.</p>
      <h2>Partnership</h2>
      <p><strong>Best for:</strong> two or more people going into business together. Income is split between partners, but like sole traders, partners are personally liable.</p>
      <h2>Company</h2>
      <p><strong>Best for:</strong> growing businesses that want liability protection and a flat company tax rate. A company is a separate legal entity, which limits your personal liability, but it costs more to set up and run and has more compliance.</p>
      <h2>Trust</h2>
      <p><strong>Best for:</strong> family businesses and asset protection, offering flexibility in how income is distributed. Trusts are more complex and need careful management.</p>
      <h2>So which should you choose?</h2>
      <p>There’s no one-size-fits-all answer — it depends on your income, your risk, and your plans for growth. The wrong structure can cost you thousands in unnecessary tax or leave your personal assets exposed.</p>
      <p>We help new and established businesses choose and set up the right structure. Call Shannon on <a href="tel:+61430339398">0430 339 398</a> for a free consultation and get it right from the start.</p>
    `,
  },
  {
    slug: 'xero-vs-myob-vs-quickbooks',
    title: 'Xero vs MYOB vs QuickBooks: Which Is Best for Your Business?',
    description:
      'A practical comparison of Xero, MYOB and QuickBooks for small businesses in Wallan and central Victoria — and how to choose the right one.',
    date: '2026-01-20',
    readMins: 6,
    category: 'Software',
    body: `
      <p>The right accounting software can save you hours every week. But with Xero, MYOB and QuickBooks all competing for your business, which one should you choose? Here’s how we help local businesses decide.</p>
      <h2>Xero</h2>
      <p>Xero is hugely popular with small businesses for good reason — it’s clean, easy to use, fully cloud-based and has a massive ecosystem of add-ons. It’s often our go-to recommendation for new businesses and those wanting simple, modern bookkeeping.</p>
      <h2>MYOB</h2>
      <p>MYOB has been an Australian staple for decades and suits many established businesses, particularly those with more complex inventory or payroll needs. Its newer cloud products have closed the gap with Xero.</p>
      <h2>QuickBooks</h2>
      <p>QuickBooks Online is a strong, competitively priced all-rounder with excellent reporting. It’s a great fit for many sole traders and small businesses watching their costs.</p>
      <h2>The honest answer</h2>
      <p>The "best" software is the one that fits how <em>your</em> business actually works — your industry, your team, your budget and your reporting needs. More important than the brand is having it <strong>set up correctly</strong> from the start.</p>
      <p>We set up, migrate and support all three platforms. Call Shannon on <a href="tel:+61430339398">0430 339 398</a> and we’ll recommend the right fit and get you up and running.</p>
    `,
  },
  {
    slug: 'starting-a-business-in-wallan-checklist',
    title: 'Starting a Business in Wallan: Your Step-by-Step Checklist',
    description:
      'Thinking of starting a business in Wallan or the Mitchell Shire? Follow this step-by-step checklist covering structure, ABN, GST, registrations and bookkeeping.',
    date: '2025-12-08',
    readMins: 7,
    category: 'Business Advice',
    body: `
      <p>Starting a business in Wallan or the wider Mitchell Shire is exciting — but the admin can feel overwhelming. Use this checklist to make sure you start on solid foundations.</p>
      <h2>1. Choose your business structure</h2>
      <p>Decide whether you’ll operate as a sole trader, partnership, company or trust. This affects your tax, your liability and your paperwork, so it’s worth getting advice first.</p>
      <h2>2. Register your ABN</h2>
      <p>You’ll need an Australian Business Number to invoice customers and register for other taxes. We can usually sort this out the same day.</p>
      <h2>3. Register a business name</h2>
      <p>If you’re trading under a name that isn’t your own, you’ll need to register it with ASIC.</p>
      <h2>4. Register for GST (if needed)</h2>
      <p>Once your turnover reaches $75,000 you must register for GST. Some businesses choose to register earlier.</p>
      <h2>5. Set up your bookkeeping</h2>
      <p>Choose accounting software (Xero, MYOB or QuickBooks), set up a business bank account, and put a system in place to track income and expenses from day one.</p>
      <h2>6. Understand your tax obligations</h2>
      <p>Know your BAS, PAYG and superannuation responsibilities — especially if you’ll be hiring staff.</p>
      <h2>7. Get a local accountant in your corner</h2>
      <p>A good accountant saves you money and stress. We help new businesses across Wallan launch the right way and stay on track. Call Shannon on <a href="tel:+61430339398">0430 339 398</a> for a free consultation.</p>
    `,
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
