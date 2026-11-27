import RichText from "@/components/RichText";
import { PATHS } from "@/constants/paths";

/**
 * The consent line under a form. "Privacy Policy" links to the policy once
 * that page is live, and reads as plain words until then.
 *
 * Rendered on the server and handed to the (client) form as a prop, so the
 * form doesn't pull the site's content into the browser:
 * <ContactForm privacyNote={<PrivacyNote />} />
 */
export default function PrivacyNote({ extra }) {
  return (
    <p className="text-center text-xs leading-relaxed text-white/45">
      <RichText text={`By sending this form you agree to our [Privacy Policy](${PATHS.privacyPolicy}).`} />
      {extra && ` ${extra}`}
    </p>
  );
}
