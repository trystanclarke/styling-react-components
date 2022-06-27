import React from "react";

import css from "./Newsletter.module.css";
import { themr } from "@friendsofreactjs/react-css-themr";

/*
By using css modules the styles are scoped to the component
The styles are given a unique name to avoid collisions
this means we don't need to use BEM naming as there is no need to scope
The classes are referred to as properties on the css module or passed in theme
e.g. css.container or props.theme.container
 */

function Newsletter(props) {
  const [email, setEmail] = React.useState("");
  const emailPartsCount = countEmailParts(email);
  return (
    <section className={props.theme.container}>
      <div className={props.theme.spectrum} aria-hidden>
        {Array.from(Array(5)).map((_, i) => (
          <div
            className={
              i + 1 <= emailPartsCount ? props.theme.barActive : props.theme.bar
            }
            key={i}
          ></div>
        ))}
      </div>
      <header className={props.theme.header}>
        <h2>Get the newsletter</h2>
      </header>
      <input
        className={props.theme.email}
        type="email"
        placeholder="Your email"
        value={email}
        onChange={(evt) => setEmail(evt.target.value)}
      />
      <button className={props.theme.submit}>Sign up</button>
    </section>
  );
}

export default themr("Newsletter", css)(Newsletter);

function countEmailParts(email) {
  if (/@.+\..{2,}$/.test(email)) {
    return 5;
  } else if (/@.+\..?$/.test(email)) {
    return 4;
  } else if (/@.+$/.test(email)) {
    return 3;
  } else if (/@/.test(email)) {
    return 2;
  } else if (/.+/.test(email)) {
    return 1;
  } else {
    return 0;
  }
}
