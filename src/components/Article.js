import React from "react";

const DEFAULT_DATE = "January 1, 1970";

function Article({ title, date = DEFAULT_DATE, preview }) {
  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
