import type { Metadata } from "next";
import { notFound } from "next/navigation";
import QuestionArticle from "../../components/QuestionArticle";
import { questionArticles } from "../../data/questionArticles";

export function generateStaticParams() {
  return questionArticles.map((article) => ({ slug: article.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = questionArticles.find((item) => item.slug === params.slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `/blog/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.description,
      url: `/blog/${article.slug}`,
      type: "article",
      images: [{ url: article.image, alt: article.imageAlt }],
    },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const article = questionArticles.find((item) => item.slug === params.slug);
  if (!article) notFound();
  return <QuestionArticle article={article} />;
}
