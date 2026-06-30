import { useEffect, useRef, Fragment } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../components/Icons'
import CountUp from '../components/CountUp'
import ErpLeadForm from '../components/ErpLeadForm'
import useReveal from '../lib/useReveal'
import './ERP.css'

const WHATSAPP = 'https://wa.me/919517744959?text=Hi%20Zenvora%20Labs%2C%20I%27d%20like%20to%20map%20my%20business%20system.'
const inr = (n) => '₹' + Math.round(n).toLocaleString('en-IN')

/* ─────────────────────────  DATA  ───────────────────────── */
const heroMetrics = [
  { v: 20, suf: '%+', l: 'Revenue lift' },
  { v: 40, suf: '%', l: 'Less manual work' },
  { v: 1, suf: ' app', l: 'Runs everything' },
]

const signals = [
  { t: 'New order', v: '#1182', icon: 'cart', pos: 1 },
  { t: 'Payment received', v: '₹42,000', icon: 'card', pos: 2 },
  { t: 'Low stock', v: '3 SKUs', icon: 'box', pos: 3 },
  { t: 'New lead', v: '+14', icon: 'users', pos: 4 },
  { t: 'Invoice pending', v: '7', icon: 'fileText', pos: 5 },
  { t: 'Staff delay', v: '2', icon: 'hr', pos: 6 },
]

const heroChat = [
  { from: 'owner', text: "What's happening right now?" },
  { from: 'ai', lines: [['Revenue', '₹1,84,000'], ['New leads', '14'], ['Low stock', '3 items'], ['Pending invoices', '7']], action: 'Summarising today and chasing 2 high-value leads…' },
]

const agentChat = [
  { from: 'owner', text: 'What needs my attention today?' },
  { from: 'ai', bullets: ['3 invoices are overdue.', '2 staff tasks are delayed.', 'Inventory is low for 4 SKUs.', 'Revenue is 18% higher than last Monday.'], action: 'Recommended: approve the supplier order before 4 PM.' },
]
const agentActions = ['Approve Purchase', 'Send Reminder', 'View Report', 'Call Manager']

const nerveModules = [
  { t: 'Sales', icon: 'tag' },
  { t: 'Inventory', icon: 'box' },
  { t: 'Finance', icon: 'card' },
  { t: 'Staff', icon: 'hr' },
  { t: 'Customers', icon: 'users' },
  { t: 'Branches', icon: 'building' },
]

const problems = [
  { t: 'WhatsApp groups', d: 'Decisions buried in endless chat threads.', icon: 'message' },
  { t: 'Excel sheets', d: 'A different version of the truth on every laptop.', icon: 'grid' },
  { t: 'Manual follow-ups', d: 'Leads and payments slip because nobody chased them.', icon: 'refresh' },
  { t: 'Disconnected billing', d: 'Invoices live apart from inventory and sales.', icon: 'card' },
  { t: 'No live stock view', d: 'You learn you’re out of stock from the customer.', icon: 'box' },
  { t: 'Owner-dependent', d: 'Nothing moves until you personally approve it.', icon: 'users' },
  { t: 'Delayed reporting', d: 'You see last month’s numbers — next month.', icon: 'barChart' },
]

const tiers = [
  {
    name: 'Small Business OS',
    tag: 'Lean control system',
    for: 'Local businesses, clinics, agencies and small distributors.',
    price: 'Starts from',
    icon: 'monitor',
    popular: false,
    features: ['Sales & service tracking', 'Inventory / records', 'Billing & invoices', 'Staff tasks', 'WhatsApp alerts', 'Core reporting'],
  },
  {
    name: 'Scaling Business OS',
    tag: 'Automation + workflows',
    for: 'Growing companies with multiple teams, branches or volume.',
    price: 'Custom quoted',
    icon: 'layers',
    popular: true,
    features: ['Custom workflows', 'CRM & pipeline', 'Role-based dashboards', 'Team approvals', 'Automated reporting', 'AI assistant for owners'],
  },
  {
    name: 'Enterprise Command OS',
    tag: 'Multi-location AI command center',
    for: 'Complex operations that need a true digital backbone.',
    price: 'Based on workflows, users & integrations',
    icon: 'sparkles',
    popular: false,
    features: ['Multi-location operations', 'Advanced finance visibility', 'Vendor / customer portals', 'Custom integrations', 'Automation engine', 'AI decision layer', 'Dedicated support'],
  },
]

const modules = [
  { name: 'Sales & CRM', benefit: 'Chases leads and predicts which deals will close.', icon: 'tag' },
  { name: 'Inventory & Stock', benefit: 'Low-stock alerts with smart reorder suggestions.', icon: 'box' },
  { name: 'Purchase & Vendor', benefit: 'Raises POs and tracks deliveries on its own.', icon: 'cart' },
  { name: 'Finance & Billing', benefit: 'Tracks invoices and fires payment reminders itself.', icon: 'card' },
  { name: 'HR & Staff', benefit: 'Flags task delays, attendance and productivity.', icon: 'hr' },
  { name: 'Operations & Approvals', benefit: 'Routes approvals, dispatch and service status.', icon: 'check' },
  { name: 'Customer Support', benefit: 'Resolves tickets and pushes WhatsApp updates.', icon: 'headphones' },
  { name: 'Reports & Analytics', benefit: 'Daily summaries and a live business-health score.', icon: 'barChart' },
  { name: 'Branch / Location', benefit: 'Compares every outlet with per-branch P&L.', icon: 'building' },
  { name: 'WhatsApp Alerts', benefit: 'Pushes the critical stuff the moment it happens.', icon: 'message' },
  { name: 'Owner Dashboard', benefit: 'The whole business on one screen, anywhere.', icon: 'monitor' },
  { name: 'AI Agent', benefit: 'Asks, answers, recommends — and executes.', icon: 'sparkles' },
]

const flow = [
  { t: 'Customer enquiry', icon: 'headphones' },
  { t: 'Quote', icon: 'fileText' },
  { t: 'Approval', icon: 'check' },
  { t: 'Stock / service check', icon: 'box' },
  { t: 'Invoice', icon: 'card' },
  { t: 'Payment', icon: 'dollar' },
  { t: 'WhatsApp update', icon: 'message' },
  { t: 'AI summary', icon: 'sparkles' },
]

const phoneAlerts = [
  { icon: 'check', label: 'Pending approvals', value: '5', tone: 'gold' },
  { icon: 'box', label: 'Low stock alert', value: '3 items', tone: 'red', pulse: true },
  { icon: 'users', label: 'New leads', value: '14', tone: 'plain' },
  { icon: 'refresh', label: 'Customer follow-ups', value: '8 due', tone: 'plain' },
  { icon: 'tag', label: 'Payment received', value: '₹42,000', tone: 'green' },
]

const mobileScreens = ['Today dashboard', 'Revenue', 'Tasks', 'Approvals', 'Stock alerts', 'Team activity', 'AI summary', 'WhatsApp agent']

/* ─────────────────────────  CHART BITS  ───────────────────────── */
function Sparkline() {
  return (
    <svg className="erp-spark" viewBox="0 0 320 96" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id="erpGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="var(--erp-gold)" stopOpacity="0.3" />
          <stop offset="1" stopColor="var(--erp-gold)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon fill="url(#erpGrad)" points="0,72 0,64 46,58 92,66 138,42 184,48 230,28 276,34 320,16 320,96 0,96" />
      <polyline className="erp-spark__line" fill="none" stroke="var(--erp-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
        points="0,64 46,58 92,66 138,42 184,48 230,28 276,34 320,16" />
    </svg>
  )
}

function Dashboard({ variant = 'compact' }) {
  const bars = [54, 70, 48, 82, 64, 91, 76]
  return (
    <div className="erp-dash" role="img" aria-label="Zenvora ERP command console">
      <div className="erp-dash__bar">
        <span className="erp-dash__dots"><i /><i /><i /></span>
        <span className="erp-dash__title">Zenvora ERP · Command Console</span>
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
              { l: 'Revenue · MTD', node: <CountUp end={184000} format={inr} />, c: '+12%', up: true },
              { l: 'Orders', node: <CountUp end={312} format={(n) => Math.round(n)} />, c: '+8%', up: true },
              { l: 'Low stock', node: '3', c: 'items', up: false },
              { l: 'New leads', node: <CountUp end={14} format={(n) => Math.round(n)} />, c: 'today', up: true },
            ].map((k) => (
              <div className="erp-kpi" key={k.l}>
                <div className="erp-kpi__l">{k.l}</div>
                <div className="erp-kpi__v">{k.node}</div>
                <div className={`erp-kpi__c ${k.up ? 'is-up' : ''}`}>{k.c}</div>
              </div>
            ))}
          </div>
          <div className="erp-dash__grid">
            <div className="erp-panel erp-panel--wide">
              <div className="erp-panel__head"><span>Revenue · last 7 days</span><span className="erp-panel__tag">▲ 18%</span></div>
              <Sparkline />
              <div className="erp-bars">{bars.map((h, i) => <span key={i} style={{ height: `${h}%` }} />)}</div>
            </div>
            <div className="erp-panel">
              <div className="erp-panel__head"><span>Inventory</span></div>
              <div className="erp-donut" style={{ background: 'conic-gradient(var(--erp-green) 0 68%, var(--erp-gold) 68% 88%, var(--erp-red) 88% 100%)' }}>
                <div className="erp-donut__hole"><b>68%</b><span>in stock</span></div>
              </div>
              <ul className="erp-legend">
                <li><i style={{ background: 'var(--erp-green)' }} />In stock</li>
                <li><i style={{ background: 'var(--erp-gold)' }} />Low</li>
                <li><i style={{ background: 'var(--erp-red)' }} />Out</li>
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

          {variant === 'full' && (
            <div className="erp-dash__grid2">
              <div className="erp-panel">
                <div className="erp-panel__head"><span>Cashflow</span><span className="erp-panel__tag">Net ₹1.8L</span></div>
                <div className="erp-cf"><div className="erp-cf__row"><span>In</span><span className="erp-cf__bar"><i className="is-g" style={{ width: '82%' }} /></span><b>₹3.2L</b></div><div className="erp-cf__row"><span>Out</span><span className="erp-cf__bar"><i style={{ width: '38%' }} /></span><b>₹1.4L</b></div></div>
              </div>
              <div className="erp-panel">
                <div className="erp-panel__head"><span>Branch comparison</span></div>
                <ul className="erp-pipe">
                  {[['Branch A', 58, 'g'], ['Branch B', 41, 'd'], ['Branch C', 67, 'g']].map(([s, n, t]) => (
                    <li key={s}><span>{s}</span><span className="erp-pipe__bar"><i className={t === 'g' ? 'is-g' : ''} style={{ width: `${n}%` }} /></span><b>{n}</b></li>
                  ))}
                </ul>
              </div>
              <div className="erp-panel">
                <div className="erp-panel__head"><span>Team performance</span></div>
                <ul className="erp-pipe">
                  {[['Aman', 88, 'g'], ['Priya', 72, 'g'], ['Rohit', 49, 'd']].map(([s, n, t]) => (
                    <li key={s}><span>{s}</span><span className="erp-pipe__bar"><i className={t === 'g' ? 'is-g' : ''} style={{ width: `${n}%` }} /></span><b>{n}%</b></li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function PhoneHome() {
  return (
    <div className="erp-phone">
      <div className="erp-phone__notch" aria-hidden="true" />
      <div className="erp-phone__screen">
        <div className="erp-phone__status"><span>9:41</span><span className="erp-phone__status-r"><Icon name="cloud" size={12} /> 5G</span></div>
        <div className="erp-screen">
          <div className="erp-screen__head">
            <div><span className="erp-screen__hi">Good evening, Raghav</span><b>Today at a glance</b></div>
            <span className="erp-screen__avatar">RS</span>
          </div>
          <div className="erp-screen__hero">
            <span>Today’s revenue</span>
            <b><CountUp end={184000} format={inr} /></b>
            <em>▲ 12% vs yesterday</em>
          </div>
          <ul className="erp-screen__list">
            {phoneAlerts.map((a) => (
              <li key={a.label}>
                <span className={`erp-screen__ic erp-screen__ic--${a.tone} ${a.pulse ? 'is-pulse' : ''}`}><Icon name={a.icon} size={15} /></span>
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
      </div>
    </div>
  )
}

function WhatsAppPhone({ messages, actions, glow }) {
  return (
    <div className={`erp-phone ${glow ? 'erp-phone--glow' : ''}`}>
      <div className="erp-phone__notch" aria-hidden="true" />
      <div className="erp-phone__screen">
        <div className="erp-wa">
          <div className="erp-wa__head">
            <span className="erp-wa__avatar"><Icon name="sparkles" size={15} /></span>
            <div><b>Zenvora AI</b><span>business agent · online</span></div>
          </div>
          <div className="erp-wa__body">
            {messages.map((m, i) => (
              m.from === 'owner' ? (
                <div className="erp-wa__msg erp-wa__msg--out" style={{ '--d': i }} key={i}>{m.text}<span className="erp-wa__tick">✓✓</span></div>
              ) : (
                <div className="erp-wa__msg erp-wa__msg--in" style={{ '--d': i }} key={i}>
                  {m.lines && m.lines.map(([k, v]) => <div className="erp-wa__row" key={k}><span>{k}</span><b>{v}</b></div>)}
                  {m.bullets && <ul className="erp-wa__bullets">{m.bullets.map((b) => <li key={b}><i />{b}</li>)}</ul>}
                  {m.action && <div className="erp-wa__action"><Icon name="sparkles" size={13} /> {m.action}</div>}
                </div>
              )
            ))}
            <div className="erp-wa__typing" aria-hidden="true"><span /><span /><span /></div>
            {actions && (
              <div className="erp-wa__actions">
                {actions.map((a) => <button type="button" className="erp-wa__qa" key={a}>{a}</button>)}
              </div>
            )}
          </div>
          <div className="erp-wa__bar"><span>Message Zenvora AI…</span><i><Icon name="send" size={14} /></i></div>
        </div>
      </div>
    </div>
  )
}

/* ─────────────────────────  PAGE  ───────────────────────── */
export default function ERP() {
  const reveal = useReveal()
  const stageRef = useRef(null)

  useEffect(() => {
    const prevTitle = document.title
    document.title = 'AI ERP Operating System for Business | Zenvora Labs'
    const meta = document.querySelector('meta[name="description"]')
    const prevDesc = meta?.getAttribute('content')
    meta?.setAttribute('content', 'Zenvora Labs builds a custom AI ERP operating system that runs your business — sales, inventory, finance, staff, customers and AI agents — controlled from your pocket with a WhatsApp AI assistant.')
    return () => { document.title = prevTitle; if (meta && prevDesc) meta.setAttribute('content', prevDesc) }
  }, [])

  useEffect(() => {
    const el = stageRef.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let raf = 0, pending = false
    const onScroll = () => {
      if (pending) return
      pending = true
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect()
        const p = (window.innerHeight - r.top) / (window.innerHeight + r.height)
        el.style.setProperty('--py', Math.max(0, Math.min(1, p)).toFixed(3))
        pending = false
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => { cancelAnimationFrame(raf); window.removeEventListener('scroll', onScroll) }
  }, [])

  return (
    <div ref={reveal} className="erp">
      {/* 1 ── HERO ── */}
      <section className="erp-hero section--cream">
        <div className="grid-bg" aria-hidden="true" />
        <div className="container-content erp-hero__inner">
          <div className="erp-hero__copy">
            <span className="erp-eyebrow"><span className="erp-eyebrow__dot" /> The AI operating system for business</span>
            <h1 className="erp-hero__title" data-reveal>
              Your business, controlled by an <span className="serif-italic">AI operating system.</span>
            </h1>
            <p className="erp-hero__sub" data-reveal>
              Custom ERP systems that connect your teams, inventory, finance, customers, reporting and AI agents —
              so every decision, approval and update is available from your pocket.
            </p>
            <div className="erp-hero__metrics" data-reveal>
              {heroMetrics.map((m) => (
                <div className="erp-metric" key={m.l}>
                  <div className="erp-metric__v"><CountUp end={m.v} format={(n) => Math.round(n)} />{m.suf}</div>
                  <div className="erp-metric__l">{m.l}</div>
                </div>
              ))}
            </div>
            <div className="erp-hero__actions" data-reveal>
              <a href="#map-form" className="btn btn-cta btn-lg btn--arrow">
                Map My Business System
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
              </a>
              <a href="#modules" className="btn btn-outline btn-lg">See the system</a>
            </div>
          </div>

          <div className="erp-stage" ref={stageRef} data-reveal>
            <div className="erp-stage__rings" aria-hidden="true"><span /><span /><span /></div>
            <div className="erp-stage__dash"><Dashboard /></div>
            <div className="erp-stage__phone"><WhatsAppPhone messages={heroChat} glow /></div>
            {signals.map((s) => (
              <div className={`erp-signal erp-signal--${s.pos}`} key={s.t} aria-hidden="true">
                <span className="erp-signal__ic"><Icon name={s.icon} size={15} /></span>
                <span className="erp-signal__t">{s.t}</span>
                <b>{s.v}</b>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2 ── NERVOUS SYSTEM ── */}
      <section className="section section--ink">
        <div className="grid-bg grid-bg--full" aria-hidden="true" />
        <div className="container-content">
          <div className="erp-head erp-head--center" data-reveal>
            <p className="type-eyebrow">The operating layer</p>
            <h2 className="type-h2 erp-head__title">Your business has a <span className="serif-italic">nervous system now.</span></h2>
            <p className="type-body">Every part of the company feeds one intelligent core — which feeds the AI agent in your pocket.</p>
          </div>
          <div className="erp-nerve" data-reveal>
            <div className="erp-nerve__grid">
              {nerveModules.map((m) => (
                <div className="erp-nerve__col" key={m.t}>
                  <div className="erp-nerve__chip"><Icon name={m.icon} size={16} />{m.t}</div>
                  <span className="erp-wire" aria-hidden="true" />
                </div>
              ))}
            </div>
            <div className="erp-nerve__core"><span className="erp-nerve__pulse" aria-hidden="true" /><Icon name="layers" size={18} /> ERP Core</div>
            <span className="erp-wire erp-wire--center" aria-hidden="true" />
            <div className="erp-nerve__down">
              <div className="erp-nerve__node erp-nerve__node--ai"><Icon name="sparkles" size={18} /> AI Command Layer</div>
              <span className="erp-wire erp-wire--h" aria-hidden="true" />
              <div className="erp-nerve__node"><Icon name="smartphone" size={18} /> Owner’s Phone</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 ── PROBLEM ── */}
      <section className="section section--paper">
        <div className="container-content">
          <div className="erp-head" data-reveal>
            <p className="type-eyebrow">The real problem</p>
            <h2 className="type-h2 erp-head__title">Most businesses run on <span className="serif-italic">a dozen disconnected tools.</span></h2>
            <p className="type-body">Each holds a piece of the truth. None of them talk. The owner becomes the integration.</p>
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
            <p><strong>Zenvora becomes the operating layer your business runs on</strong> — one intelligent system built around your exact workflows, from inventory to finance to staff to customer updates.</p>
          </div>
        </div>
      </section>

      {/* 4 ── THREE OS TIERS ── */}
      <section className="section section--soft" id="packages">
        <div className="container-content">
          <div className="erp-head erp-head--center" data-reveal>
            <p className="type-eyebrow">Built for your stage</p>
            <h2 className="type-h2 erp-head__title">Three ERPs. <span className="serif-italic">One philosophy.</span></h2>
            <p className="type-body">The same operating layer, at three levels of sophistication. Every build is custom-quoted on your workflows.</p>
          </div>
          <div className="erp-packages">
            {tiers.map((p, i) => (
              <article className={`erp-package ${p.popular ? 'erp-package--popular' : ''}`} key={p.name} data-reveal style={{ transitionDelay: `${i * 70}ms` }}>
                {p.popular && <span className="erp-package__badge">Most popular</span>}
                <span className="erp-package__ic"><Icon name={p.icon} size={22} /></span>
                <h3 className="erp-package__name">{p.name}</h3>
                <p className="erp-package__tag">{p.tag}</p>
                <p className="erp-package__for">{p.for}</p>
                <div className="erp-package__price"><span>{p.price}</span></div>
                <ul className="erp-package__features">
                  {p.features.map((f) => <li key={f}><Icon name="check" size={16} />{f}</li>)}
                </ul>
                <Link to="/contact" className={`btn ${p.popular ? 'btn-cta' : 'btn-outline'}`} style={{ width: '100%' }}>Get a quote</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5 ── MODULES THAT TAKE ACTION ── */}
      <section className="section section--paper" id="modules">
        <div className="container-content">
          <div className="erp-head" data-reveal>
            <p className="type-eyebrow">Intelligent modules</p>
            <h2 className="type-h2 erp-head__title">Modules that don’t just store data — <span className="serif-italic">they take action.</span></h2>
            <p className="type-body">Each module watches your operation and acts: chasing, alerting, reconciling and recommending — on its own.</p>
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

      {/* 6 ── FLOW ── */}
      <section className="section section--ink">
        <div className="grid-bg grid-bg--full" aria-hidden="true" />
        <div className="container-content">
          <div className="erp-head erp-head--center" data-reveal>
            <p className="type-eyebrow">The business, running itself</p>
            <h2 className="type-h2 erp-head__title">From enquiry to insight, <span className="serif-italic">one unbroken chain.</span></h2>
          </div>
          <div className="erp-flow" data-reveal>
            {flow.map((f, i) => (
              <Fragment key={f.t}>
                <div className="erp-flow__node" style={{ '--i': i }}>
                  <span className="erp-flow__ic"><Icon name={f.icon} size={20} /></span>
                  <span className="erp-flow__lab">{f.t}</span>
                </div>
                {i < flow.length - 1 && <span className="erp-flow__arrow" aria-hidden="true" />}
              </Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* 7 ── AI AGENT ── */}
      <section className="section section--soft">
        <div className="container-content erp-mobile">
          <div className="erp-mobile__copy" data-reveal>
            <p className="type-eyebrow">The AI agent</p>
            <h2 className="type-h2 erp-mobile__title">The AI agent that works <span className="serif-italic">inside your operations.</span></h2>
            <p className="type-body">
              Wired to your live business data, it reads everything happening across the company, tells you what needs
              attention, and lets you act — approve, remind, report or call — without opening a dashboard.
            </p>
            <ul className="erp-mobile__list">
              <li><Icon name="check" size={16} />Ask in plain language</li>
              <li><Icon name="check" size={16} />Daily & on-demand summaries</li>
              <li><Icon name="check" size={16} />Approve orders & invoices</li>
              <li><Icon name="check" size={16} />Proactive, prioritised alerts</li>
            </ul>
          </div>
          <div className="erp-mobile__phone" data-reveal><WhatsAppPhone messages={agentChat} actions={agentActions} glow /></div>
        </div>
      </section>

      {/* 8 ── MOBILE COMMAND CENTER ── */}
      <section className="section section--paper">
        <div className="container-content erp-mobile erp-mobile--rev">
          <div className="erp-mobile__phone" data-reveal><PhoneHome /></div>
          <div className="erp-mobile__copy" data-reveal>
            <p className="type-eyebrow">Mobile command center</p>
            <h2 className="type-h2 erp-mobile__title">Your ERP should fit <span className="serif-italic">in your hand.</span></h2>
            <p className="type-body">
              Revenue, tasks, approvals, stock alerts, team activity and an AI summary — the whole operation in your
              pocket. Check it on the move, approve in a tap, stay in control from anywhere.
            </p>
            <div className="erp-screens">
              {mobileScreens.map((s) => <span className="erp-screens__chip" key={s}>{s}</span>)}
            </div>
          </div>
        </div>
      </section>

      {/* 9 ── DASHBOARD SHOWCASE ── */}
      <section className="section section--deep">
        <div className="container-content">
          <div className="erp-head erp-head--center" data-reveal>
            <p className="type-eyebrow">The control room</p>
            <h2 className="type-h2 erp-head__title">Your whole business, <span className="serif-italic">on one screen.</span></h2>
            <p className="type-body">Revenue, pipeline, inventory risk, team performance, cashflow, branch comparison and AI recommendations — live.</p>
          </div>
          <div className="erp-demo" data-reveal><Dashboard variant="full" /></div>
        </div>
      </section>

      {/* 10 ── CTA ── */}
      <section className="section section--ink">
        <div className="grid-bg grid-bg--full" aria-hidden="true" />
        <div className="container-content erp-cta">
          <h2 className="type-h2 erp-cta__title" data-reveal>
            Build the ERP your competitors <span className="serif-italic">wish they had.</span>
          </h2>
          <p className="type-body erp-cta__sub" data-reveal>
            We’ll study your current operations, design the custom ERP architecture, and show you how AI can run the
            repetitive parts of your business.
          </p>
          <div className="erp-cta__actions" data-reveal>
            <a href="#map-form" className="btn btn--cream btn-lg btn--arrow">
              Map My Business System
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
            </a>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn btn--cream-outline btn-lg">Chat on WhatsApp</a>
          </div>
        </div>
      </section>

      {/* 11 ── MAP MY SYSTEM (LEAD FORM) ── */}
      <section className="section section--deep erp-form-section" id="map-form">
        <div className="grid-bg grid-bg--full" aria-hidden="true" />
        <div className="container-content">
          <div className="erp-form-layout">
            <div className="erp-form-intro" data-reveal>
              <p className="type-eyebrow">Map my business system</p>
              <h2 className="type-h2 erp-form-intro__title">
                Tell us how your business <span className="serif-italic">runs today.</span>
              </h2>
              <p className="type-body">
                Share a few details and we’ll come back with a custom ERP map — the modules, automations and
                AI agents that would run the repetitive parts of your operation.
              </p>
              <ul className="erp-form-points">
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg> A tailored ERP architecture for your exact workflows</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg> Where AI agents replace manual, repetitive work</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg> A clear build &amp; rollout plan — no obligation</li>
              </ul>
              <p className="erp-form-intro__reply">We reply within one working day.</p>
            </div>
            <div className="erp-form-wrap" data-reveal>
              <ErpLeadForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
