import { Link, useLocation } from 'react-router-dom'
import './Legal.css'

const EMAIL = 'growth@zenvoralabs.xyz'
const PHONE = '+91 82644 49956'
const COMPANY = 'Zenvora Labs'
const LAST_UPDATED = 'June 4, 2026'

const docs = [
  { slug: 'privacy', to: '/privacy', label: 'Privacy Policy' },
  { slug: 'terms', to: '/terms', label: 'Terms of Service' },
  { slug: 'cookies', to: '/cookies', label: 'Cookie Policy' },
  { slug: 'dpa', to: '/dpa', label: 'Data Processing Addendum' },
]

const P = ({ children }) => <p className="legal__p">{children}</p>
const H = ({ children }) => <h2 className="legal__h">{children}</h2>
const UL = ({ items }) => (
  <ul className="legal__list">
    {items.map((it, i) => <li key={i}>{it}</li>)}
  </ul>
)

/* ─────────────────────────────  PRIVACY  ───────────────────────────── */
function Privacy() {
  return (
    <>
      <P>
        {COMPANY} (“we”, “us”, “our”) builds websites, web apps and runs performance
        marketing for brands worldwide. This Privacy Policy explains what personal
        data we collect, why we collect it, and the rights you have over it. It applies
        to our website, our proposals and onboarding, and any services we provide.
      </P>

      <H>1. Who we are</H>
      <P>
        {COMPANY} is a digital studio headquartered in Mohali, India, with partner desks
        in Sydney and London. For questions about this policy or your data, contact us at{' '}
        <a href={`mailto:${EMAIL}`}>{EMAIL}</a> or {PHONE}.
      </P>

      <H>2. What we collect</H>
      <UL items={[
        'Contact details you give us — name, email, phone, company and the contents of any brief or message you send.',
        'Project information — the goals, assets, credentials and account access you share so we can deliver work.',
        'Usage data — pages visited, referrer, device and browser type, and approximate location, collected via analytics.',
        'Communications — emails, WhatsApp, calls and notes relating to your project.',
      ]} />

      <H>3. How we use it</H>
      <UL items={[
        'To respond to enquiries and prepare proposals.',
        'To deliver, maintain and support the services you engage us for.',
        'To send service updates, invoices and contractual notices.',
        'To improve our website and understand how visitors use it.',
        'To comply with legal, tax and accounting obligations.',
      ]} />
      <P>
        We do not sell your personal data, and we will not add you to a marketing list
        without your consent.
      </P>

      <H>4. Legal bases (GDPR)</H>
      <P>
        Where the GDPR applies, we rely on: <strong>contract</strong> (to deliver work you
        ask for), <strong>legitimate interests</strong> (to run and improve our business),
        <strong> consent</strong> (for non-essential cookies and marketing), and
        <strong> legal obligation</strong> (for tax and compliance records).
      </P>

      <H>5. Sharing &amp; sub-processors</H>
      <P>
        We share data only with vendors that help us run our business — for example hosting,
        analytics, email, payment and project-management providers — under contracts that
        require them to protect it. Where we process client end-user data, we do so under a{' '}
        <Link to="/dpa">Data Processing Addendum</Link>.
      </P>

      <H>6. International transfers</H>
      <P>
        We operate across India, Australia, the UK and the US. Where data moves between
        regions, we rely on appropriate safeguards such as Standard Contractual Clauses.
      </P>

      <H>7. Retention</H>
      <P>
        We keep personal data only as long as needed for the purpose it was collected, or as
        required by law. Project records are typically retained for the duration of the
        engagement plus the period required for tax and legal purposes.
      </P>

      <H>8. Your rights</H>
      <P>
        Depending on where you live (including under the GDPR and CCPA/CPRA), you may have the
        right to access, correct, delete or port your data, to object to or restrict
        processing, and to withdraw consent. To exercise any of these, email{' '}
        <a href={`mailto:${EMAIL}`}>{EMAIL}</a>. We respond within 30 days.
      </P>

      <H>9. Security</H>
      <P>
        We use industry-standard measures — encryption in transit, access controls and
        least-privilege practices — to protect your data. No method is perfectly secure, but
        we work hard to keep your information safe.
      </P>

      <H>10. Changes</H>
      <P>
        We may update this policy from time to time. Material changes will be reflected by an
        updated “last updated” date at the top of this page.
      </P>
    </>
  )
}

/* ─────────────────────────────  TERMS  ───────────────────────────── */
function Terms() {
  return (
    <>
      <P>
        These Terms of Service (“Terms”) govern your use of the {COMPANY} website and the
        services we provide. By engaging us or using this site, you agree to these Terms.
        Specific engagements are also governed by a written proposal or statement of work
        (“SOW”), which prevails where it conflicts with these Terms.
      </P>

      <H>1. Services</H>
      <P>
        We provide design, engineering, performance marketing and related consulting services
        as described in each SOW. Scope, deliverables, timelines and fees are defined per
        engagement. Work outside an agreed scope may require a change order.
      </P>

      <H>2. Proposals &amp; acceptance</H>
      <P>
        A proposal becomes binding when accepted in writing (including email) or when work
        begins with your authorisation. Estimates are valid for 30 days unless stated
        otherwise.
      </P>

      <H>3. Fees &amp; payment</H>
      <UL items={[
        'Build projects are fixed-scope and invoiced per the milestones in the SOW.',
        'Retainers are flat monthly fees, billed in advance, and may be paused or cancelled with 30 days’ notice unless agreed otherwise.',
        'Ad spend is paid by you directly in your own accounts and is never marked up.',
        'Invoices are due within 14 days. Late amounts may incur a reasonable late fee and pause active work.',
        'Fees are exclusive of taxes; you are responsible for applicable taxes or withholdings.',
      ]} />

      <H>4. Client responsibilities</H>
      <P>
        You agree to provide timely feedback, access, assets and approvals needed for us to
        deliver. Delays in providing these may extend timelines. You confirm you have the
        rights to any materials you give us.
      </P>

      <H>5. Intellectual property</H>
      <P>
        On full payment, ownership of the final, paid-for deliverables transfers to you. We
        retain ownership of our pre-existing tools, libraries, know-how and any general
        techniques, and grant you a licence to use them as embedded in the deliverables. We
        may showcase non-confidential work in our portfolio unless you ask us not to.
      </P>

      <H>6. Confidentiality</H>
      <P>
        Each party agrees to protect the other’s confidential information and use it only to
        perform under the engagement. We are happy to sign a separate NDA.
      </P>

      <H>7. Warranties &amp; disclaimers</H>
      <P>
        We perform our services with reasonable skill and care. Except as expressly stated,
        services and this website are provided “as is” without other warranties. We do not
        guarantee specific marketing results, rankings or revenue, as these depend on factors
        outside our control.
      </P>

      <H>8. Limitation of liability</H>
      <P>
        To the maximum extent permitted by law, neither party is liable for indirect or
        consequential losses, and our total liability for any engagement is limited to the
        fees you paid us for that engagement in the three months preceding the claim.
      </P>

      <H>9. Termination</H>
      <P>
        Either party may terminate an engagement for material breach not cured within 14 days
        of notice. On termination, you pay for work performed up to the termination date, and
        we hand over completed, paid-for deliverables.
      </P>

      <H>10. Governing law</H>
      <P>
        These Terms are governed by the laws of India, and the courts of Mohali, Punjab have
        jurisdiction, unless a separate SOW specifies otherwise for a particular market.
      </P>

      <H>11. Contact</H>
      <P>
        Questions about these Terms? Email <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
      </P>
    </>
  )
}

/* ─────────────────────────────  COOKIES  ───────────────────────────── */
function Cookies() {
  return (
    <>
      <P>
        This Cookie Policy explains how {COMPANY} uses cookies and similar technologies on our
        website. It should be read alongside our <Link to="/privacy">Privacy Policy</Link>.
      </P>

      <H>1. What cookies are</H>
      <P>
        Cookies are small text files stored on your device when you visit a website. They help
        the site work, remember your preferences, and let us understand how the site is used.
      </P>

      <H>2. Types we use</H>
      <UL items={[
        'Essential — required for the site to function and to remember your privacy choices. These cannot be switched off.',
        'Analytics — help us measure traffic and improve the site (e.g. Google Analytics). Set only with your consent where required.',
        'Functional — remember preferences such as your selected currency.',
        'Marketing — measure the effectiveness of campaigns. We use these only where you have consented.',
      ]} />

      <H>3. Managing cookies</H>
      <P>
        You can control cookies through your browser settings — most browsers let you block or
        delete them. Note that disabling some cookies may affect how the site works. Where a
        consent banner is shown, you can change your choices at any time.
      </P>

      <H>4. Changes</H>
      <P>
        We may update this Cookie Policy as our use of cookies evolves. The “last updated” date
        above reflects the latest version.
      </P>
    </>
  )
}

/* ─────────────────────────────  DPA  ───────────────────────────── */
function Dpa() {
  return (
    <>
      <P>
        This Data Processing Addendum (“DPA”) forms part of the agreement between {COMPANY}
        (“Processor”) and the client (“Controller”) where {COMPANY} processes personal data on
        the client’s behalf in the course of providing services. It is designed to support
        compliance with the GDPR, UK GDPR and CCPA/CPRA.
      </P>

      <H>1. Roles</H>
      <P>
        The Controller determines the purposes and means of processing. {COMPANY} acts as
        Processor and processes personal data only on documented instructions from the
        Controller, including as set out in the relevant SOW.
      </P>

      <H>2. Scope of processing</H>
      <UL items={[
        'Subject matter — provision of design, engineering and marketing services.',
        'Duration — for the term of the engagement and any agreed wind-down period.',
        'Nature & purpose — hosting, building, analysing and operating digital products and campaigns.',
        'Data subjects — the Controller’s customers, prospects, employees or end users, as applicable.',
        'Data types — typically contact details, usage data and any data contained in systems we operate for you.',
      ]} />

      <H>3. Our obligations</H>
      <UL items={[
        'Process personal data only on the Controller’s instructions.',
        'Ensure persons authorised to process data are bound by confidentiality.',
        'Implement appropriate technical and organisational security measures.',
        'Assist the Controller with data subject requests and security/breach obligations.',
        'Notify the Controller without undue delay after becoming aware of a personal data breach.',
      ]} />

      <H>4. Sub-processors</H>
      <P>
        The Controller authorises {COMPANY} to engage sub-processors (such as hosting,
        analytics and email providers) under written terms offering equivalent protection.
        We remain responsible for their performance and will inform you of material changes on
        request.
      </P>

      <H>5. International transfers</H>
      <P>
        Where personal data is transferred across borders, the parties rely on appropriate
        safeguards such as Standard Contractual Clauses or other approved mechanisms.
      </P>

      <H>6. Return &amp; deletion</H>
      <P>
        On termination, {COMPANY} will, at the Controller’s choice, return or delete personal
        data, except where retention is required by law.
      </P>

      <H>7. Audits</H>
      <P>
        {COMPANY} will make available information reasonably necessary to demonstrate
        compliance with this DPA and will cooperate with audits on reasonable notice.
      </P>

      <H>8. Requesting a signed copy</H>
      <P>
        Need a countersigned DPA for your records? Email{' '}
        <a href={`mailto:${EMAIL}`}>{EMAIL}</a> and we’ll send our standard template.
      </P>
    </>
  )
}

const content = {
  privacy: { title: 'Privacy Policy', lede: 'How we collect, use and protect your data.', body: <Privacy /> },
  terms: { title: 'Terms of Service', lede: 'The terms that govern our website and our work together.', body: <Terms /> },
  cookies: { title: 'Cookie Policy', lede: 'How we use cookies and how you can control them.', body: <Cookies /> },
  dpa: { title: 'Data Processing Addendum', lede: 'How we process personal data on our clients’ behalf.', body: <Dpa /> },
}

export default function Legal({ slug }) {
  const { pathname } = useLocation()
  const active = slug || docs.find(d => d.to === pathname)?.slug || 'privacy'
  const doc = content[active]

  return (
    <>
      <section className="page-hero section--cream">
        <div className="grid-bg" aria-hidden="true" />
        <div className="container-content page-hero__inner">
          <p className="type-eyebrow">Legal</p>
          <h1 className="type-h1 page-hero__title">{doc.title}</h1>
          <p className="type-body page-hero__subtitle">{doc.lede}</p>
          <p className="legal__updated type-label">Last updated · {LAST_UPDATED}</p>
        </div>
      </section>

      <section className="section section--paper">
        <div className="container-content legal__layout">
          <aside className="legal__nav" aria-label="Legal documents">
            <p className="type-label legal__nav-title">Documents</p>
            {docs.map(d => (
              <Link
                key={d.slug}
                to={d.to}
                className={`legal__nav-link ${active === d.slug ? 'legal__nav-link--active' : ''}`}
              >
                {d.label}
              </Link>
            ))}
          </aside>

          <article className="legal__body">
            {doc.body}
          </article>
        </div>
      </section>
    </>
  )
}
