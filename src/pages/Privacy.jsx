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
            Halo can connect to a Gmail account to detect phishing and warn you about dangerous email. Connecting
            Gmail is optional. Halo only accesses Gmail after you sign in with Google and grant permission on
            Google's consent screen.
          </p>

          <h3 className="pt-2 text-lg font-semibold text-white">What we access</h3>
          <p>
            Halo requests one Google permission, Gmail <code className="text-white">gmail.modify</code>, which lets
            it read and organize the messages in your mailbox. Halo reads:
          </p>
          <ul>
            <li>Your Gmail address, to show which account is connected.</li>
            <li>
              Each message's sender, recipients, reply-to address, subject, date, preview snippet, labels, and
              conversation ID.
            </li>
            <li>The text of each message, and the links in it.</li>
            <li>
              The complete message, including attachments, only when Halo rewrites a message as described below.
              Attachments are not analyzed.
            </li>
          </ul>
          <p>
            By default, Halo checks new messages across all of your mail, including Spam and Trash; you can
            narrow this in Halo's settings. It does not scan mail that was already in your mailbox when you
            connected.
          </p>

          <h3 className="pt-2 text-lg font-semibold text-white">How we use it</h3>
          <ul>
            <li>
              <strong className="text-white">Detect phishing.</strong> Halo analyzes each new message for signs of
              phishing, such as suspicious senders and dangerous links.
            </li>
            <li>
              <strong className="text-white">Alert you.</strong> Halo shows an alert on your device when a message
              looks dangerous.
            </li>
            <li>
              <strong className="text-white">Mark dangerous messages.</strong> When you connect, Halo creates a
              "HALO DANGER" label in your Gmail. By default it applies that label to messages it flags. If you turn
              on these options in Halo, it can also move flagged messages to Spam, or add a warning banner or
              subject prefix. To add a warning, Halo saves a marked copy of the message in your mailbox and moves
              the original to Trash.
            </li>
            <li>
              <strong className="text-white">Undo a false alarm.</strong> When you tell Halo a message is safe, or
              move a flagged message out of Spam, Halo removes its label and Spam marking, returns the message to
              your inbox, and replaces it with a clean copy, moving the marked version to Trash.
            </li>
          </ul>
          <p>
            Halo never permanently deletes your email. We use Gmail data only to provide these features to you,
            and for no other purpose.
          </p>

          <h3 className="pt-2 text-lg font-semibold text-white">Where it is processed</h3>
          <p>
            Your email is analyzed on your own device, by Halo's built-in rules. Email content is never sent to
            KeyTrain's servers or to any artificial intelligence service.
          </p>
          <p>
            Signing in with Google uses a secure exchange in which your Google access tokens pass through
            KeyTrain's token service. That service adds Halo's app credentials, forwards the request to Google,
            and returns the tokens to your device. It does not store them. On your device, the long-lived token is
            kept encrypted in your operating system's secure credential store (Windows DPAPI, macOS Keychain, or
            the Linux keyring), and the short-lived access token is kept only in memory.
          </p>

          <h3 className="pt-2 text-lg font-semibold text-white">What is stored, and where</h3>
          <p>Message text is never saved. Halo keeps the following on your device only:</p>
          <ul>
            <li>
              A record of each message it checks: the message and conversation IDs, the connected account, the
              sender, the subject, and when it was received.
            </li>
            <li>Its alerts, which include the message subject and the reasons the message was flagged.</li>
            <li>Senders you have marked as safe.</li>
            <li>An activity log that includes alert titles, kept for up to 14 days.</li>
          </ul>
          <p>
            These records stay on your device until you delete them (see "Disconnecting Gmail and deleting your
            data" below). None of them are sent to KeyTrain.
          </p>

          <h3 className="pt-2 text-lg font-semibold text-white">Sharing</h3>
          <p>
            We do not sell, share, or transfer Gmail data to anyone. RailNet threat intelligence receives only
            aggregate counts of detections, never your email content, email addresses, subjects, or links.
          </p>
          <p>
            If you choose to ask us about an alert, Halo opens a draft in your own email app addressed to KeyTrain
            support. It includes the alert's details, including the message subject. Nothing is sent unless you
            send that email yourself.
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
              KeyTrain staff have no tool that shows your email or your Halo alerts.
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

          <h3 className="pt-2 text-lg font-semibold text-white">Disconnecting Gmail and deleting your data</h3>
          <ul>
            <li>
              Disconnect Gmail in Halo at any time. Halo stops checking your mail, asks Google to revoke its access,
              and deletes its token from your device.
            </li>
            <li>
              You can also remove KeyTrain's access from your Google Account at{' '}
              <a
                href="https://myaccount.google.com/permissions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-hi hover:underline"
              >
                myaccount.google.com/permissions
              </a>
              .
            </li>
            <li>
              The records Halo keeps on your device are in the <code className="text-white">.halo</code> folder in
              your user's home folder. Delete that folder to remove them. Uninstalling Halo does not delete it.
            </li>
            <li>
              The "HALO DANGER" label stays in your Gmail after you disconnect. You can delete it in Gmail's
              settings.
            </li>
          </ul>
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
              the devices it protects, such as system health, installed software and patch levels, running
              processes, network activity, and threats it detects. Some of it, such as process activity, is sent to
              KeyTrain to provide protection.
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
              Through RailNet, as aggregate counts of detections, so a threat found in one environment helps
              protect others. RailNet does not include Gmail data.
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
            with it by emailing {mail}. Gmail-related records are kept only on your device; section 2 explains how
            to delete them.
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
