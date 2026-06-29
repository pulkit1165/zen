import { useEffect, Fragment } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../components/Icons'
import useReveal from '../lib/useReveal'
import './ERP.css'

const WHATSAPP = 'https://wa.me/919517744959?text=Hi%20Zenvora%20Labs%2C%20I%27d%20like%20to%20book%20an%20ERP%20consultation.'

/* ─────────────────────────  DATA  ───────────────────────── */
const problems = [
  { t: 'WhatsApp groups', d: 'Decisions buried in endless chat threads.', icon: 'message' },
  { t: 'Excel sheets', d: 'A different version of the truth on every laptop.', icon: 'grid' },
  { t: 'Manual follow-ups', d: 'Leads and payments slip because nobody chased them.', icon: 'refresh' },
  { t: 'Disconnected billing', d: 'Invoices live apart from inventory and sales.', icon: 'card' },
  { t: 'No live stock view', d: 'You learn you’re out of stock from the customer.', icon: 'box' },
  { t: 'Owner-dependent', d: 'Nothing moves until you personally approve it.', icon: 'users' },
  { t: 'Delayed reporting', d: 'You see last month’s numbers — next month.', icon: 'barChart' },
]

const packages = [
  {
    name: 'Small Business ERP',
    for: 'Local businesses, service providers, clinics, agencies and small distributors.',
    price: 'Starts from',
    note: 'Affordable, fast to launch.',
    popular: false,
    features: ['Sales tracking', 'Inventory / service records', 'Billing & invoices', 'Staff tasks', 'WhatsApp alerts', 'Basic reporting'],
  },
  {
    name: 'Scaling Business ERP',
    for: 'Growing companies with multiple teams, branches or higher transaction volume.',
    price: 'Custom quoted',
    note: 'Most popular.',
    popular: true,
    features: ['Custom workflows', 'CRM & pipeline', 'Purchase / sales flow', 'Role-based dashboards', 'Team approvals', 'Automated reporting', 'AI assistant for owners'],
  },
  {
    name: 'Enterprise ERP',
    for: 'Complex businesses that need deep customization and a true digital backbone.',
    price: 'Based on workflows, users & integrations',
    note: 'A fully custom backbone.',
    popular: false,
    features: ['Multi-location operations', 'Advanced finance visibility', 'Vendor / customer portals', 'Custom integrations', 'Department dashboards', 'Automation engine', 'AI decision layer', 'Dedicated support'],
  },
]

const buildSteps = [
  { t: 'Workflows', icon: 'refresh' },
  { t: 'Approval chains', icon: 'check' },
  { t: 'Dashboards', icon: 'monitor' },
  { t: 'Data structure', icon: 'database' },
  { t: 'Automations', icon: 'zap' },
  { t: 'AI agents', icon: 'sparkles' },
  { t: 'Integrations', icon: 'link' },
]

const modules = [
  { name: 'Sales & CRM', benefit: 'Every lead, deal and follow-up in one pipeline.', icon: 'tag' },
  { name: 'Inventory & Stock', benefit: 'Live stock levels with alerts before you run out.', icon: 'box' },
  { name: 'Purchase & Vendor', benefit: 'Raise POs, track vendors, reconcile deliveries.', icon: 'cart' },
  { name: 'Finance & Billing', benefit: 'Invoices, payments and cash flow always reconciled.', icon: 'card' },
  { name: 'HR & Staff Tasks', benefit: 'Assign work, track attendance, approve in a tap.', icon: 'hr' },
  { name: 'Customer Support', benefit: 'Every ticket and conversation on one timeline.', icon: 'headphones' },
  { name: 'WhatsApp Alerts', benefit: 'Critical updates pushed to you the moment they happen.', icon: 'message' },
  { name: 'Reports & Analytics', benefit: 'Live dashboards — no month-end spreadsheet chase.', icon: 'barChart' },
  { name: 'Branch / Location', benefit: 'Run every outlet from one console, per-branch P&L.', icon: 'building' },
  { name: 'AI Business Assistant', benefit: 'Ask, get answers and approve in plain language.', icon: 'sparkles' },
  { name: 'Owner Dashboard', benefit: 'The whole business on one screen, anywhere.', icon: 'monitor' },
  { name: 'Custom Integrations', benefit: 'Connect Tally, Shopify, gateways and more.', icon: 'link' },
]

const flow = [
  { t: 'Lead / Order', icon: 'target' },
  { t: 'Team Assignment', icon: 'users' },
  { t: 'Inventory Check', icon: 'box' },
  { t: 'Invoice', icon: 'fileText' },
  { t: 'Payment', icon: 'card' },
  { t: 'Customer Update', icon: 'message' },
  { t: 'Owner Report', icon: 'barChart' },
  { t: 'AI Insights', icon: 'sparkles' },
]

const phoneAlerts = [
  { icon: 'card', label: "Today's revenue", value: '₹1,84,000', tone: 'green' },
  { icon: 'check', label: 'Pending approvals', value: '5', tone: 'gold' },
  { icon: 'box', label: 'Low stock alert', value: '3 items', tone: 'red' },
  { icon: 'users', label: 'New leads', value: '14', tone: 'plain' },
  { icon: 'refresh', label: 'Customer follow-ups', value: '8 due', tone: 'plain' },
  { icon: 'tag', label: 'Payment received', value: '₹42,000', tone: 'green' },
]

const waMsgs = [
  { from: 'owner', text: 'What happened today?' },
  { from: 'ai', lines: [
    ['Revenue', '₹1,84,000'],
    ['Pending invoices', '7'],
    ['Low stock', '3 items'],
    ['New leads', '14'],
    ['Staff task delays', '2'],
  ], action: 'Suggested action: follow up with high-value leads before 6 PM.' },
]

/* ─────────────────────────  MOCKUPS  ───────────────────────── */
function Sparkline() {
  return (
    <svg className="erp-spark" viewBox="0 0 320 96" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id="erpGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="var(--erp-gold)" stopOpacity="0.28" />
          <stop offset="1" stopColor="var(--erp-gold)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon fill="url(#erpGrad)" points="0,72 0,64 46,58 92,66 138,42 184,48 230,28 276,34 320,16 320,96 0,96" />
      <polyline fill="none" stroke="var(--erp-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
        points="0,64 46,58 92,66 138,42 184,48 230,28 276,34 320,16" />
    </svg>
  )
}

function Dashboard() {
  const bars = [54, 70, 48, 82, 64, 91, 76]
  return (
    <div className="erp-dash" role="img" aria-label="Zenvora ERP dashboard preview">
      <div className="erp-dash__bar">
        <span className="erp-dash__dots"><i /><i /><i /></span>
        <span className="erp-dash__title">Zenvora ERP · Owner Console</span>
        <span className="erp-dash__pill">Live</span>
      </div>
      <div className="erp-dash__body">
        <aside className="erp-dash__rail" aria-hidden="true">
          {['monitor', 'tag', 'box', 'card', 'hr', 'barChart'].map((ic, i) => (
            <span key={i} className={`erp-dash__rail-i ${i === 0 ? 'is-active' : ''}`}><Icon name={ic} size={16} /></span>
          ))}
        </aside>
        <div className="erp-dash__main">
          <div className="erp-kpis">
            {[
              { l: 'Revenue · MTD', v: '₹1,84,000', c: '+12%', up: true },
              { l: 'Orders', v: '312', c: '+8%', up: true },
              { l: 'Low stock', v: '3', c: 'items', up: false },
              { l: 'New leads', v: '14', c: 'today', up: true },
            ].map((k) => (
              <div className="erp-kpi" key={k.l}>
                <div className="erp-kpi__l">{k.l}</div>
                <div className="erp-kpi__v">{k.v}</div>
                <div className={`erp-kpi__c ${k.up ? 'is-up' : ''}`}>{k.c}</div>
              </div>
            ))}
          </div>
          <div className="erp-dash__grid">
            <div className="erp-panel erp-panel--wide">
              <div className="erp-panel__head"><span>Revenue · last 7 days</span><span className="erp-panel__tag">▲ 18%</span></div>
              <Sparkline />
              <div className="erp-bars">
                {bars.map((h, i) => <span key={i} style={{ height: `${h}%` }} />)}
              </div>
            </div>
            <div className="erp-panel">
              <div className="erp-panel__head"><span>Inventory</span></div>
              <div className="erp-donut" style={{ background: 'conic-gradient(var(--erp-green) 0 68%, var(--erp-gold) 68% 88%, #C0492E 88% 100%)' }}>
                <div className="erp-donut__hole"><b>68%</b><span>in stock</span></div>
              </div>
              <ul className="erp-legend">
                <li><i style={{ background: 'var(--erp-green)' }} />In stock</li>
                <li><i style={{ background: 'var(--erp-gold)' }} />Low</li>
                <li><i style={{ background: '#C0492E' }} />Out</li>
              </ul>
            </div>
            <div className="erp-panel erp-panel--wide">
              <div className="erp-panel__head"><span>Orders pipeline</span></div>
              <ul className="erp-pipe">
                {[['New', 42, 'g'], ['Processing', 28, 'd'], ['Dispatched', 19, 'd'], ['Delivered', 64, 'g']].map(([s, n, t]) => (
                  <li key={s}><span>{s}</span><span className="erp-pipe__bar"><i className={t === 'g' ? 'is-g' : ''} style={{ width: `${Math.min(n, 70)}%` }} /></span><b>{n}</b></li>
                ))}
              </ul>
            </div>
            <div className="erp-panel erp-panel--ai">
              <span className="erp-panel__ai-tag"><Icon name="sparkles" size={13} /> AI</span>
              <p>Margins on Branch B dipped 4%. Reorder SKU-114 and chase 7 overdue invoices to recover ₹62k.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Phone({ screen = 'home' }) {
  return (
    <div className="erp-phone">
      <div className="erp-phone__notch" aria-hidden="true" />
      <div className="erp-phone__screen">
        <div className="erp-phone__status"><span>9:41</span><span className="erp-phone__status-r"><Icon name="cloud" size={12} /> 5G</span></div>
        {screen === 'wa' ? (
          <div className="erp-wa">
            <div className="erp-wa__head">
              <span className="erp-wa__avatar"><Icon name="sparkles" size={15} /></span>
              <div><b>Zenvora AI</b><span>business assistant · online</span></div>
            </div>
            <div className="erp-wa__body">
              <div className="erp-wa__msg erp-wa__msg--out">{waMsgs[0].text}</div>
              <div className="erp-wa__msg erp-wa__msg--in">
                {waMsgs[1].lines.map(([k, v]) => (
                  <div className="erp-wa__row" key={k}><span>{k}</span><b>{v}</b></div>
                ))}
                <div className="erp-wa__action"><Icon name="sparkles" size={13} /> {waMsgs[1].action}</div>
              </div>
              <div className="erp-wa__msg erp-wa__msg--out">Approve reorder for SKU-114</div>
            </div>
            <div className="erp-wa__bar"><span>Message Zenvora AI…</span><i><Icon name="send" size={14} /></i></div>
          </div>
        ) : (
          <div className="erp-screen">
            <div className="erp-screen__head">
              <div><span className="erp-screen__hi">Good evening, Raghav</span><b>Today at a glance</b></div>
              <span className="erp-screen__avatar">RS</span>
            </div>
            <div className="erp-screen__hero">
              <span>Today’s revenue</span>
              <b>₹1,84,000</b>
              <em>▲ 12% vs yesterday</em>
            </div>
            <ul className="erp-screen__list">
              {phoneAlerts.slice(1).map((a) => (
                <li key={a.label}>
                  <span className={`erp-screen__ic erp-screen__ic--${a.tone}`}><Icon name={a.icon} size={15} /></span>
                  <span className="erp-screen__lab">{a.label}</span>
                  <b>{a.value}</b>
                </li>
              ))}
            </ul>
            <div className="erp-screen__ai">
              <span className="erp-screen__ai-tag"><Icon name="sparkles" size={12} /> AI summary</span>
              Strong day. Clear 7 invoices and reorder 3 low-stock items to stay ahead.
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

/* ─────────────────────────  PAGE  ───────────────────────── */
export default function ERP() {
  const reveal = useReveal()

  useEffect(() => {
    const prevTitle = document.title
    document.title = 'AI-Native ERP Built Around Your Business | Zenvora Labs'
    const meta = document.querySelector('meta[name="description"]')
    const prevDesc = meta?.getAttribute('content')
    meta?.setAttribute(
      'content',
      'Zenvora Labs designs custom AI-native ERP systems around how your business actually runs — sales, inventory, finance, staff, customers and reporting, controlled from your pocket with a WhatsApp AI assistant.'
    )
    return () => {
      document.title = prevTitle
      if (meta && prevDesc) meta.setAttribute('content', prevDesc)
    }
  }, [])

  return (
    <div ref={reveal} className="erp">
      {/* 1 ── HERO ── */}
      <section className="erp-hero section--cream">
        <div className="grid-bg" aria-hidden="true" />
        <div className="container-content erp-hero__inner">
          <div className="erp-hero__copy">
            <span className="erp-eyebrow"><span className="erp-eyebrow__dot" /> AI-native ERP · Automation</span>
            <h1 className="erp-hero__title" data-reveal>
              Increase your revenue by more than 20% <span className="serif-italic">with the systems of Zenvora AI ERP.</span>
            </h1>
            <p className="erp-hero__lead" data-reveal>
              Speed growth and lower costs with AI and data-driven automation.
            </p>
            <p className="erp-hero__sub" data-reveal>
              Many manufacturing, transportation and logistics companies are buried in paper. Zenvora AI solutions
              automate document capture, accounts payable (AP) and repetitive data tasks — so you can grow without
              adding overhead.
            </p>
            <div className="erp-hero__actions" data-reveal>
              <Link to="/contact" className="btn btn-cta btn-lg btn--arrow">
                Build My ERP
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
              </Link>
              <a href="#modules" className="btn btn-outline btn-lg">See Modules</a>
            </div>
            <div className="erp-hero__tags" data-reveal>
              <span>Control your entire business from your pocket</span>
            </div>
          </div>
          <div className="erp-hero__visual" data-reveal>
            <Dashboard />
            <div className="erp-hero__phone"><Phone screen="home" /></div>
          </div>
        </div>
      </section>

      {/* 2 ── PROBLEM ── */}
      <section className="section section--paper">
        <div className="container-content">
          <div className="erp-head" data-reveal>
            <p className="type-eyebrow">The real problem</p>
            <h2 className="type-h2 erp-head__title">Most businesses run on <span className="serif-italic">a dozen disconnected tools.</span></h2>
            <p className="type-body">Each one holds a piece of the truth. None of them talk to each other. The owner becomes the integration.</p>
          </div>
          <div className="erp-problems">
            {problems.map((p, i) => (
              <div className="erp-problem" key={p.t} data-reveal style={{ transitionDelay: `${(i % 4) * 50}ms` }}>
                <span className="erp-problem__ic"><Icon name={p.icon} size={18} /></span>
                <div><b>{p.t}</b><span>{p.d}</span></div>
              </div>
            ))}
          </div>
          <div className="erp-solve" data-reveal>
            <Icon name="layers" size={22} />
            <p><strong>Zenvora ERP replaces all of it</strong> — one intelligent operating system, built around your exact workflows, from inventory to finance to staff to customer updates.</p>
          </div>
        </div>
      </section>

      {/* 3 ── PACKAGES ── */}
      <section className="section section--soft" id="packages">
        <div className="container-content">
          <div className="erp-head erp-head--center" data-reveal>
            <p className="type-eyebrow">Built for your stage</p>
            <h2 className="type-h2 erp-head__title">One platform, <span className="serif-italic">scaled to your business.</span></h2>
            <p className="type-body">Every build is custom. These are the starting points — priced on your workflows, users and integrations.</p>
          </div>
          <div className="erp-packages">
            {packages.map((p, i) => (
              <article className={`erp-package ${p.popular ? 'erp-package--popular' : ''}`} key={p.name} data-reveal style={{ transitionDelay: `${i * 70}ms` }}>
                {p.popular && <span className="erp-package__badge">Most popular</span>}
                <h3 className="erp-package__name">{p.name}</h3>
                <p className="erp-package__for">{p.for}</p>
                <div className="erp-package__price"><span>{p.price}</span></div>
                <ul className="erp-package__features">
                  {p.features.map((f) => (
                    <li key={f}><Icon name="check" size={16} />{f}</li>
                  ))}
                </ul>
                <Link to="/contact" className={`btn ${p.popular ? 'btn-cta' : 'btn-outline'}`} style={{ width: '100%' }}>Get a quote</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4 ── CUSTOM PROBLEM SOLVING ── */}
      <section className="section section--paper">
        <div className="container-content erp-build">
          <div className="erp-build__copy" data-reveal>
            <p className="type-eyebrow">Custom by default</p>
            <h2 className="type-h2 erp-build__title">Every business has its own mess. <span className="serif-italic">We build around yours.</span></h2>
            <p className="type-body">
              We don’t force your company into a fixed template. We map how you actually operate first — then design
              the system to fit, not the other way around.
            </p>
            <div className="erp-build__note">
              <Icon name="target" size={18} />
              <span>We map the business, then design the software.</span>
            </div>
          </div>
          <div className="erp-build__steps" data-reveal>
            {buildSteps.map((s, i) => (
              <div className="erp-build__step" key={s.t}>
                <span className="erp-build__num">{String(i + 1).padStart(2, '0')}</span>
                <span className="erp-build__ic"><Icon name={s.icon} size={18} /></span>
                <span className="erp-build__lab">{s.t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 ── MODULES ── */}
      <section className="section section--soft" id="modules">
        <div className="container-content">
          <div className="erp-head" data-reveal>
            <p className="type-eyebrow">The modules</p>
            <h2 className="type-h2 erp-head__title">Everything your operation needs — <span className="serif-italic">connected.</span></h2>
            <p className="type-body">Switch on what you need today. Add the rest as you grow. Each module shares one source of truth.</p>
          </div>
          <div className="erp-modules">
            {modules.map((m, i) => (
              <article className="erp-module" key={m.name} data-reveal style={{ transitionDelay: `${(i % 4) * 45}ms` }}>
                <span className="erp-module__ic"><Icon name={m.icon} size={22} /></span>
                <h3 className="erp-module__name">{m.name}</h3>
                <p className="erp-module__benefit">{m.benefit}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6 ── FLOW CHART ── */}
      <section className="section section--ink">
        <div className="grid-bg grid-bg--full" aria-hidden="true" />
        <div className="container-content">
          <div className="erp-head erp-head--center" data-reveal>
            <p className="type-eyebrow">How it flows</p>
            <h2 className="type-h2 erp-head__title">One unbroken chain, <span className="serif-italic">from lead to insight.</span></h2>
          </div>
          <div className="erp-flow" data-reveal>
            {flow.map((f, i) => (
              <Fragment key={f.t}>
                <div className="erp-flow__node">
                  <span className="erp-flow__ic"><Icon name={f.icon} size={20} /></span>
                  <span className="erp-flow__lab">{f.t}</span>
                </div>
                {i < flow.length - 1 && <span className="erp-flow__arrow" aria-hidden="true" />}
              </Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* 7 ── MOBILE-FIRST ── */}
      <section className="section section--paper">
        <div className="container-content erp-mobile">
          <div className="erp-mobile__phone" data-reveal><Phone screen="home" /></div>
          <div className="erp-mobile__copy" data-reveal>
            <p className="type-eyebrow">Mobile-first control</p>
            <h2 className="type-h2 erp-mobile__title">Run the business <span className="serif-italic">from your pocket.</span></h2>
            <p className="type-body">
              Revenue, approvals, staff updates, low-stock alerts, follow-ups and payments — the whole operation in
              your hand. Check it on the move, approve in a tap, and stay in control from anywhere.
            </p>
            <ul className="erp-mobile__list">
              {phoneAlerts.map((a) => (
                <li key={a.label}><Icon name="check" size={16} />{a.label}</li>
              ))}
              <li><Icon name="check" size={16} />Instant AI summary of the day</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 8 ── WHATSAPP AI ── */}
      <section className="section section--soft">
        <div className="container-content erp-mobile erp-mobile--rev">
          <div className="erp-mobile__copy" data-reveal>
            <p className="type-eyebrow">WhatsApp AI assistant</p>
            <h2 className="type-h2 erp-mobile__title">Your business updates, <span className="serif-italic">delivered on WhatsApp.</span></h2>
            <p className="type-body">
              Every ERP can include a custom AI assistant wired to your live business data. Ask it anything, get
              instant updates, approve actions and track operations — without opening a single dashboard.
            </p>
            <ul className="erp-mobile__list">
              <li><Icon name="check" size={16} />Ask questions in plain language</li>
              <li><Icon name="check" size={16} />Daily and on-demand summaries</li>
              <li><Icon name="check" size={16} />Approve orders, invoices and tasks</li>
              <li><Icon name="check" size={16} />Proactive alerts and suggested actions</li>
            </ul>
          </div>
          <div className="erp-mobile__phone" data-reveal><Phone screen="wa" /></div>
        </div>
      </section>

      {/* 9 ── DEMO DASHBOARD ── */}
      <section className="section section--deep">
        <div className="container-content">
          <div className="erp-head erp-head--center" data-reveal>
            <p className="type-eyebrow">The control room</p>
            <h2 className="type-h2 erp-head__title">Your whole business, <span className="serif-italic">on one screen.</span></h2>
            <p className="type-body">Revenue, pipeline, inventory, staff and AI recommendations — live, in one console.</p>
          </div>
          <div className="erp-demo" data-reveal><Dashboard /></div>
        </div>
      </section>

      {/* 10 ── CTA ── */}
      <section className="section section--ink">
        <div className="grid-bg grid-bg--full" aria-hidden="true" />
        <div className="container-content erp-cta">
          <h2 className="type-h2 erp-cta__title" data-reveal>
            Let’s build the operating system <span className="serif-italic">your business deserves.</span>
          </h2>
          <p className="type-body erp-cta__sub" data-reveal>
            We’ll map your workflows, identify the bottlenecks, and show what your custom ERP could look like.
          </p>
          <div className="erp-cta__actions" data-reveal>
            <Link to="/contact" className="btn btn--cream btn-lg btn--arrow">
              Book ERP Consultation
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
            </Link>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn btn--cream-outline btn-lg">Chat on WhatsApp</a>
          </div>
        </div>
      </section>
    </div>
  )
}
