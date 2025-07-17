import React from "react";

interface ContentBlock {
  type: "h2" | "h3" | "p";
  text: string;
}

interface ArticleProps {
  article: {
    title: string;
    image: string;
    contentBlocks: ContentBlock[];
  };
}

const Article: React.FC<ArticleProps> = ({ article }) => {
  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-extrabold mb-6">{article.title}</h1>
      <img src={article.image} alt={article.title} className="w-full h-auto rounded mb-6" />
      {article.contentBlocks.map((block, idx) => {
        if (block.type === "h2") {
          return (
            <h2 key={idx} className="text-3xl font-bold mt-8 mb-4">
              {block.text}
            </h2>
          );
        }
        if (block.type === "h3") {
          return (
            <h3 key={idx} className="text-xl font-semibold mt-6 mb-2">
              {block.text}
            </h3>
          );
        }
        return (
          <p key={idx} className="mb-4 text-base leading-relaxed">
            {block.text}
          </p>
        );
      })}
    </article>
  );
};

export default Article;
