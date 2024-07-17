import Link from "next/link";

export default function CtaSection() {
  return (
    <section id="cta" className="s-cta">
      <div className="row row-x-center text-center">
        <div className="column xl-8 lg-12">
          <div className="s-cta__content">
            <h2 className="text-display-title">
              Get started with a consultation today.
            </h2>
            <p className="lead">
              The first step towards bringing your ideas to life begins with a
              conversation. Let&apos;s connect and discuss how we can work together
              synergistically, leveraging your creativity and my expertise to
              achieve remarkable results.
            </p>
            <Link href="/contact" className="btn btn--primary">
              Let&apos;s work together
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
