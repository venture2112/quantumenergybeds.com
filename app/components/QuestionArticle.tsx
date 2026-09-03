import Image from "next/image";
import Link from "next/link";
import Navigation from "./Navigation";
import Footer from "./Footer";

export type ArticleSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type QuestionArticleData = {
  slug: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  intro: string;
  quickAnswer: string;
  sections: ArticleSection[];
  faqs: { question: string; answer: string }[];
  sources: { label: string; url: string }[];
  related: { title: string; slug: string }[];
};

export default function QuestionArticle({ article }: { article: QuestionArticleData }) {
  const canonical = `https://www.quantumenergybeds.com/blog/${article.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: `https://www.quantumenergybeds.com${article.image}`,
    mainEntityOfPage: canonical,
    author: { "@type": "Organization", name: "Quantum Energy Beds" },
    publisher: {
      "@type": "Organization",
      name: "Quantum Energy Beds",
      logo: { "@type": "ImageObject", url: "https://www.quantumenergybeds.com/logo.png" },
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: article.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Navigation />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <div className="relative h-[320px] sm:h-[400px] w-full">
        <Image src={article.image} alt={article.imageAlt} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent" />
      </div>

      <article className="pb-20 -mt-20 relative z-10">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <Link href="/blog/" className="inline-block text-blue-700 hover:underline mb-4">← Back to the blog</Link>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">{article.title}</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-slate-600 mb-8">{article.intro}</p>

            <div className="bg-violet-50 border-l-4 border-violet-600 p-6 my-8">
              <p className="font-semibold text-violet-950 m-0">Quick answer</p>
              <p className="text-violet-900 mt-2 mb-0">{article.quickAnswer}</p>
            </div>

            {article.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-2xl font-bold mt-12 mb-4">{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-slate-700 leading-7 mb-5">{paragraph}</p>
                ))}
                {section.bullets && (
                  <ul className="list-disc pl-6 mt-2 mb-7 space-y-2 text-slate-700 leading-7">
                    {section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                  </ul>
                )}
              </section>
            ))}

            <h2 className="text-2xl font-bold mt-12 mb-4">Questions people also ask</h2>
            <div className="space-y-5 not-prose">
              {article.faqs.map((faq) => (
                <div key={faq.question} className="bg-white border border-slate-200 rounded-xl p-5">
                  <h3 className="font-semibold text-lg text-slate-900">{faq.question}</h3>
                  <p className="text-slate-600 mt-2">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-10">
              <p className="font-semibold text-blue-950 m-0">Considering a multi-modal wellness bed?</p>
              <p className="text-blue-900 mt-2 mb-0">
                <Link href="/contact/" className="underline">Contact Quantum Energy Beds</Link> for specifications, current pricing, financing information, and answers about home or business installation.
              </p>
            </div>

            <p className="text-sm text-slate-500">
              This article is for general educational purposes and does not replace medical advice. Wellness equipment is not a substitute for diagnosis or treatment. Follow the device instructions and speak with a qualified healthcare professional about personal medical questions.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">Sources and further reading</h2>
            <ul className="space-y-2 mb-8">
              {article.sources.map((source) => (
                <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer">{source.label}</a></li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-4">Related articles</h2>
            <div className="grid md:grid-cols-2 gap-4 not-prose">
              {article.related.map((item) => (
                <Link key={item.slug} href={`/blog/${item.slug}/`} className="block p-4 bg-white rounded-lg border border-slate-200 hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-blue-700">{item.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}
