import { ReactNode  } from 'react';
import LegalLayout from "@/components/LegalLayout";
import Breadcrumb from "@/components/Breadcrumb";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type SectionProps = {
  title: string;
  children: ReactNode;
};

function Section({ title, children }: SectionProps) {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="text-white/70">{children}</p>
    </div>
  );
}

export default function Terms() {
  return (
    <LegalLayout title="Terms & Conditions">

      <Section title="Services">
        We provide website development and related services.
      </Section>

      <Section title="Payments">
        Payments must be completed before final delivery.
      </Section>

      <Section title="Liability">
        We are not responsible for issues caused by third-party platforms,
        hosting providers, or external integrations.
      </Section>

      <Section title="Changes">
        These terms may be updated at any time. Continued use of our services
          implies acceptance of the latest terms.
      </Section>

    </LegalLayout>
  );
}

