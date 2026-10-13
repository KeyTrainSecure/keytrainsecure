import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { TERMS_URL } from '../signup'

const EFFECTIVE_DATE = 'October 13, 2026'
const CONTACT = 'hello@keytrainsecure.com'
const USER_DATA_POLICY = 'https://developers.google.com/terms/api-services-user-data-policy'

const mail = (
  <a href={`mailto:${CONTACT}`} className="text-brand-hi hover:underline">
    {CONTACT}
  </a>
)

function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-24 space-y-4">
      <h2 className="text-2xl font-bold text-white">{title}</h2>
      {children}
    </section>
  )
}

export default function Privacy() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle={`How KeyTrain collects, uses, and protects your information. Effective ${EFFECTIVE_DATE}.`}
      />

      <div className="mx-auto max-w-3xl space-y-12 px-5 py-20 leading-relaxed text-silver [&_li]:ml-5 [&_li]:list-disc [&_ul]:space-y-2">
        <Section id="who-we-are" title="1. Who we are">
          <p>
            KeyTrain LLC ("KeyTrain", "we", "us") provides KeyTrain Halo and Halo + RailNet Intelligence
            (cybersecurity software for your devices and mailbox), KeyTrain Learning (security awareness training),
            and HOOKeD (phishing simulation), together the "Services". This policy covers the Services and this
            website, keytrainsecure.com.
          </p>
        </Section>

        <Section id="google-user-data" title="2. Google user data (Gmail)">
          <p>
            Halo can connect to a Gmail account so it can detect phishing and alert you about suspicious email.
            Connecting Gmail is optional, and Halo only accesses Gmail after you sign in with Google and grant
            permission on Google's consent screen.
          </p>
          <h3 className="pt-2 text-lg font-semibold text-white">What we access</h3>
          <p>
            Halo requests the Gmail <code className="text-white">gmail.modify</code> permission. It lets Halo read
            the messages in your mailbox (senders, subjects, headers, message content, links, and attachments) and
            change how a message is organized, for example by applying a label to it or moving it out of your inbox.
          </p>
          <h3 className="pt-2 text-lg font-semibold text-white">How we use it</h3>
          <ul>
            <li>To scan incoming messages for phishing, malicious links, and malicious attachments.</li>
            <li>To alert you in Halo when a message looks dangerous.</li>
            <li>To flag or move a message that Halo identifies as phishing, so you are less likely to open it.</li>
          </ul>
          <p>We use Gmail data only to provide these user-facing features of Halo, and for no other purpose.</p>
          <h3 className="pt-2 text-lg font-semibold text-white">Storage and retention</h3>
          <p>
            We do not store the contents of your email. Messages are analyzed when Halo scans your mailbox and are
            discarded once the scan is complete.
          </p>
          <h3 className="pt-2 text-lg font-semibold text-white">Sharing</h3>
          <p>
            We do not sell Gmail data, and we do not share or transfer it to third parties. Gmail data is not
            included in RailNet threat intelligence.
          </p>
          <h3 className="pt-2 text-lg font-semibold text-white">What we never do with Gmail data</h3>
          <ul>
            <li>Use it to serve advertising, including personalized or retargeted ads.</li>
            <li>Sell it, or transfer it to data brokers or information resellers.</li>
            <li>Use it to determine creditworthiness or for lending purposes.</li>
            <li>Use it to develop, improve, or train generalized artificial intelligence or machine learning models.</li>
            <li>
              Allow people to read it, unless you give us permission for a specific message, it is necessary for
              security purposes such as investigating abuse, or it is required to comply with applicable law.
            </li>
          </ul>
          <h3 className="pt-2 text-lg font-semibold text-white">Limited Use</h3>
          <p className="rounded-xl border border-line bg-panel p-5 text-white">
            KeyTrain's use and transfer to any other app of information received from Google APIs will adhere to
            the{' '}
            <a href={USER_DATA_POLICY} target="_blank" rel="noopener noreferrer" className="text-brand-hi hover:underline">
              Google API Services User Data Policy
            </a>
            , including the Limited Use requirements.
          </p>
          <h3 className="pt-2 text-lg font-semibold text-white">Disconnecting Gmail</h3>
          <p>
            You can disconnect Gmail in Halo at any time, or remove KeyTrain's access from your Google Account at{' '}
            <a
              href="https://myaccount.google.com/permissions"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-hi hover:underline"
            >
              myaccount.google.com/permissions
            </a>
            . Once access is removed, Halo can no longer read or change your email.
          </p>
        </Section>

        <Section id="information-we-collect" title="3. Other information we collect">
          <ul>
            <li>
              <strong className="text-white">Account information:</strong> your name, email address, password,
              organization name, and the plan you choose when you sign up.
            </li>
            <li>
              <strong className="text-white">Billing information:</strong> payments are processed by Stripe. We
              receive your billing contact details and subscription status, not your full card number.
            </li>
            <li>
              <strong className="text-white">Device security information:</strong> Halo collects information about
              the devices it protects, such as system health, installed software and patch levels, network activity,
              and threats it detects.
            </li>
            <li>
              <strong className="text-white">Training information:</strong> KeyTrain Learning and HOOKeD record
              course progress, quiz results, and how users respond to simulated phishing.
            </li>
            <li>
              <strong className="text-white">Messages you send us:</strong> what you enter in our contact form or
              send to us by email.
            </li>
          </ul>
        </Section>

        <Section id="how-we-use" title="4. How we use information">
          <ul>
            <li>To provide, maintain, and secure the Services, and to detect and respond to threats.</li>
            <li>To create and manage accounts, process payments, and provide customer support.</li>
            <li>To send service messages, such as security alerts, receipts, and account notices.</li>
            <li>To comply with the law and enforce our terms.</li>
          </ul>
        </Section>

        <Section id="sharing" title="5. How we share information">
          <p>We do not sell personal information. We share information only:</p>
          <ul>
            <li>
              With service providers that run parts of the Services for us, such as hosting, databases, payment
              processing, and email delivery, under agreements that limit their use of it.
            </li>
            <li>
              Through RailNet, as de-identified threat indicators from Halo device detections (for example, a
              malicious file signature), so a threat found in one environment helps protect others. RailNet does not
              include Gmail data.
            </li>
            <li>With your organization's administrators, for accounts your organization manages.</li>
            <li>When required by law, or to protect the rights, safety, and security of our users and KeyTrain.</li>
          </ul>
        </Section>

        <Section id="security" title="6. Security">
          <p>
            We protect information with encryption in transit, access controls, and the principle of least
            privilege. No system is perfectly secure, but we work to protect your information and will notify you
            of a breach that affects it as required by law.
          </p>
        </Section>

        <Section id="retention" title="7. Retention and deletion">
          <p>
            We keep account, billing, and training information while your account is active and as needed to meet
            legal and accounting obligations. You can ask us to delete your account and the information associated
            with it by emailing {mail}. Email content from Gmail is not stored, as described in section 2.
          </p>
        </Section>

        <Section id="your-choices" title="8. Your choices">
          <ul>
            <li>You can access and update your account information in the Services, or ask us to do it for you.</li>
            <li>You can disconnect Gmail or uninstall Halo at any time.</li>
            <li>You can ask for a copy of your information, or for it to be corrected or deleted, by emailing {mail}.</li>
          </ul>
        </Section>

        <Section id="children" title="9. Children">
          <p>The Services are not directed to children under 13, and we do not knowingly collect their information.</p>
        </Section>

        <Section id="changes" title="10. Changes to this policy">
          <p>
            We will post any changes on this page and update the effective date. If a change materially affects how
            we use your information, we will notify you before it takes effect.
          </p>
        </Section>

        <Section id="contact" title="11. Contact us">
          <p>
            Questions about this policy or your information: {mail}, or use our{' '}
            <Link to="/contact" className="text-brand-hi hover:underline">contact form</Link>. Use of the Services is
            also governed by our{' '}
            <a href={TERMS_URL} className="text-brand-hi hover:underline">Terms of Service</a>.
          </p>
        </Section>
      </div>
    </>
  )
}
