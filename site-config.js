window.SITE_CONFIG = {
  company: {
    name: "Strategic Acquisitions Limited",
    brand: "Strategic",
    brandSubline: "ACQUISITIONS LTD",
    description: "Strategic Acquisitions Limited is a Special Purpose Acquisition Company (SPAC) based in Karachi, formed under SECP and PSX rules."
  },
  logoSvg: `
    <defs>
      <linearGradient id="g-gold" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#EAD5A8"/>
        <stop offset=".55" stop-color="#C39A5A"/>
        <stop offset="1" stop-color="#94703A"/>
      </linearGradient>
      <symbol id="logo" viewBox="0 0 120 120">
        <path d="M78 19 A44 44 0 1 0 100 78" fill="none" stroke="url(#g-gold)" stroke-width="4.5" stroke-linecap="round"/>
        <rect x="35" y="64" width="12" height="27" fill="url(#g-gold)"/>
        <rect x="51" y="51" width="12" height="40" fill="url(#g-gold)"/>
        <rect x="67" y="37" width="12" height="54" fill="url(#g-gold)"/>
        <path d="M22 93 C48 108 82 96 99 60 L93 57 L110 42 L108 65 L102 62 C86 100 50 114 22 93 Z" fill="url(#g-gold)"/>
      </symbol>
    </defs>`,
  navigation: [
    { label: "About", href: "#about" },
    { label: "How it works", href: "#process" },
    { label: "Who benefits", href: "#benefits" },
    { label: "Board", href: "#board" },
    { label: "Contact", href: "#contact" }
  ],
  hero: {
    title: ["STRATEGIC", "ACQUISITIONS", "LIMITED"],
    tagline: "INVEST WISELY",
    description: "A Special Purpose Acquisition Company based in Karachi, set up to raise capital on the Pakistan Stock Exchange and merge with a promising private business.",
    primaryAction: { label: "How a SPAC works", href: "#process" },
    secondaryAction: { label: "Contact us", href: "#contact" }
  },
  about: {
    title: "About the company",
    paragraphs: [
      "A SPAC is a public company with no business operations of its own. It lists on the Pakistan Stock Exchange, raises money through an IPO, and then uses that money to merge with or acquire an operating private company within a fixed deadline.",
      "SPACs are regulated by the Securities and Exchange Commission of Pakistan under its Public Offering Regulations. The structure is new to Pakistan's market and has a lot of room to grow."
    ],
    facts: [
      { label: "Line of business", value: "Special Purpose Acquisition Company (SPAC)" },
      { label: "Regulator", value: "Securities and Exchange Commission of Pakistan (SECP)" },
      { label: "Exchange", value: "Pakistan Stock Exchange (PSX)" },
      { label: "Registered office", value: "Office No. 411, 4th Floor, Portways Trade Centre, SMCHS, Shahrah e Faisal, Karachi" }
    ]
  },
  process: {
    title: "From incorporation to listing",
    description: "Every SPAC at PSX follows the same four stages before it can go looking for a merger partner.",
    steps: [
      { tag: "PKR 10m minimum capital", title: "Incorporation", description: "A public limited shell company is set up with the required paid-up capital." },
      { tag: "Lead managers", title: "Appoint advisers", description: "Licensed consultants to the issue and a legal team are brought on board." },
      { tag: "SECP and PSX review", title: "Prospectus approval", description: "The prospectus is submitted to both regulators for approval." },
      { tag: "E-IPO via PES", title: "IPO launch", description: "Shares are offered to the public through the PSX Electronic IPO System." }
    ],
    escrow: {
      title: "After the IPO: the escrow account",
      chartLabel: "At least 90 percent of IPO proceeds held in escrow, at most 10 percent for operating costs",
      escrowLabel: "Escrow, at least 90%",
      operationsLabel: "10%",
      key: ["Held for investors", "Operating costs"],
      details: [
        { lead: "Protected funds.", text: "At least 90% of IPO money goes straight into a secured escrow account." },
        { lead: "Small operating budget.", text: "No more than 10% is used to run the company and search for targets." },
        { lead: "Firm deadline.", text: "Sponsors usually have 18 to 24 months to complete a merger." },
        { lead: "Money back if nothing happens.", text: "If no deal is made, the SPAC is dissolved and the cash is returned." }
      ]
    },
    merger: {
      title: "The merger (de-SPAC)",
      details: [
        { lead: "Find the target.", text: "Sponsors pick a high-growth private company for the business combination." },
        { lead: "Shareholder vote.", text: "Investors approve or reject the deal at an Extraordinary General Meeting." },
        { lead: "High Court sanction.", text: "The merger has to be approved by the High Court." },
        { lead: "Result.", text: "The private company absorbs the SPAC and takes over its listing on the PSX Main Board." }
      ]
    }
  },
  benefits: {
    title: "Who benefits",
    description: "A SPAC works for three groups at once. Pick one to see what's in it for them.",
    groups: [
      {
        id: "inv", label: "Investors", items: [
          { title: "Back experienced managers", description: "Retail investors can put money alongside fund managers and private equity deals that are usually out of reach." },
          { title: "Downside protection", description: "Your capital sits in escrow and earns a return until a deal is agreed." },
          { title: "Redemption rights", description: "If you don't like a proposed deal, you can vote against it and take your original cash back." },
          { title: "Liquidity", description: "Shares trade on the secondary market before the acquisition closes." }
        ]
      },
      {
        id: "tgt", label: "Private companies", items: [
          { title: "Faster route to market", description: "The transaction takes less time than a standard IPO, which can run for months." },
          { title: "Valuation certainty", description: "Price is negotiated directly with sponsors, not set by whatever the market does that week." },
          { title: "Lower costs", description: "The SPAC has already done the roadshow, so marketing costs are lower." },
          { title: "Capital on day one", description: "The company gets access to the cash held in escrow as soon as the merger completes." }
        ]
      },
      {
        id: "spn", label: "Sponsors", items: [
          { title: "Founder shares", description: "Promoters usually keep a meaningful equity stake for a nominal amount of capital." },
          { title: "Flexible sourcing", description: "Sponsors can look for the right target after the money is raised." },
          { title: "Less market risk", description: "Public funding is locked in upfront, so there's no scramble for capital at deal time." },
          { title: "Built on expertise", description: "The team's corporate management experience is what drives returns." }
        ]
      }
    ]
  },
  regulation: {
    title: "Regulatory framework",
    description: "The rules every SPAC must meet before it can list on the Pakistan Stock Exchange.",
    items: [
      { title: "Companies Act, 2017", description: "Incorporated as a public limited company under the Act." },
      { title: "PKR 10 million", description: "Minimum paid-up capital at incorporation." },
      { title: "Fit and proper", description: "Promoters, directors and the CEO must meet SECP criteria." },
      { title: "PSX Chapter 5", description: "Listing is governed by Chapter 5 of the PSX Rulebook." }
    ]
  },
  board: {
    title: "Board of directors",
    members: [
      { initials: "RH", name: "Rehan Hadi", role: "CEO and Director" },
      { initials: "SR", name: "Sheikh Muhammad Rizwan", role: "Director" },
      { initials: "HF", name: "Syed Hussain Fatmi", role: "Director" },
      { initials: "AZ", name: "Aasim Zahir", role: "Director" },
      { initials: "FH", name: "Farhan Hadi", role: "Director" }
    ]
  },
  contact: {
    title: "Get in touch",
    description: "For investor questions, target company introductions or anything else, reach the directors directly.",
    office: {
      title: "Registered office",
      address: ["Office No. 411, 4th Floor", "Portways Trade Centre, SMCHS", "Shahrah e Faisal, Karachi"],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Portways+Trade+Centre+Shahrah+e+Faisal+Karachi",
      mapLabel: "Open in Google Maps"
    },
    people: [
      { name: "Rehan Hadi", role: "CEO and Director", phone: "0300 9211528", phoneLink: "+923009211528", email: "rehan@salspac.com" },
      { name: "Syed Hussain Fatmi", role: "Director", phone: "0335 0024913", phoneLink: "+923350024913", email: "fatmi@salspac.com" }
    ]
  },
  footerNotice: "This website is for general information only. It is not an offer to sell, or a solicitation of an offer to buy, any securities. Any offering will be made only through a prospectus approved by the SECP and PSX."
};