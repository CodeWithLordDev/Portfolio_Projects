"use client";

import AnimatedDetailedLesson from "./AnimatedDetailedLesson";

function v(text) {
  return <p className="text-sm text-gray-300">{text}</p>;
}

function build(config) {
  return function Topic() {
    return <AnimatedDetailedLesson {...config} />;
  };
}

const formTag = {
  title: "Form Tag",
  subtitle: "Data collection container",
  intro: "Use form to group input fields and submit data in a predictable way.",
  steps: [
    { id: "f1", label: "Step 1", title: "Create form shell", explain: "Wrap all controls in form with submit button.", visual: v("Form defines submission boundary."), code: `<form method="post">\n  <input name="name" />\n  <button type="submit">Send</button>\n</form>`, why: "Browser handles submit naturally." },
    { id: "f2", label: "Step 2", title: "Add labels and constraints", explain: "Use label + id + required rules.", visual: v("Label click should focus matching input."), code: `<label for="email">Email</label>\n<input id="email" type="email" required />`, why: "Better UX and accessibility." },
  ],
  deepDive: ["Use fieldset/legend for grouped fields.", "Validate on both client and server.", "Provide clear success/error feedback."],
  commonMistakes: ["Missing labels.", "Inputs without name attributes."],
  practice: { task: "Build contact form with name/email/message.", solution: `<form method="post">\n  <label for="n">Name</label><input id="n" name="name" required />\n  <label for="e">Email</label><input id="e" name="email" type="email" required />\n  <label for="m">Message</label><textarea id="m" name="message"></textarea>\n  <button type="submit">Send</button>\n</form>` },
};

const inputTag = {
  title: "Input Tag",
  subtitle: "Single-line user input",
  intro: "Different input types improve keyboard behavior and validation quality.",
  steps: [
    { id: "i1", label: "Step 1", title: "Choose correct type", explain: "Use email/password/number/date based on data.", visual: v("Correct type improves mobile keyboard and validation."), code: `<input type="email" name="email" required />`, why: "Less invalid data from users." },
    { id: "i2", label: "Step 2", title: "Add validation constraints", explain: "Use minlength, min/max, required, pattern.", visual: v("Constraints help users submit valid data quickly."), code: `<input type="password" minlength="8" required />`, why: "Cleaner submissions with fewer errors." },
  ],
  deepDive: ["Always set name for submitted fields.", "Use autocomplete where helpful.", "Avoid placeholder-only labels."],
  commonMistakes: ["Wrong type for data.", "Missing name attribute."],
  practice: { task: "Create email/password/age input fields.", solution: `<input type="email" name="email" required />\n<input type="password" name="password" minlength="8" required />\n<input type="number" name="age" min="13" />` },
};

const textareaSelect = {
  title: "Textarea & Select",
  subtitle: "Long text and fixed options",
  intro: "Use textarea for multiline content and select for controlled option inputs.",
  steps: [
    { id: "ts1", label: "Step 1", title: "Use textarea", explain: "Textarea captures long messages.", visual: v("Better than input for comments and descriptions."), code: `<textarea rows="5" name="message"></textarea>`, why: "Supports multiline text cleanly." },
    { id: "ts2", label: "Step 2", title: "Use select options", explain: "Select limits values to known options.", visual: v("Great for category, country, status fields."), code: `<select name="category">\n  <option value="">Choose</option>\n  <option value="bug">Bug</option>\n</select>`, why: "Prevents inconsistent free-text entries." },
  ],
  deepDive: ["Label textarea/select explicitly.", "Use disabled placeholder option.", "Use multiple select only when needed."],
  commonMistakes: ["No default option.", "No labels."],
  practice: { task: "Create support form snippet with category and message.", solution: `<label for="c">Category</label><select id="c" name="category"><option value="">Choose</option><option>Technical</option></select>\n<label for="m">Message</label><textarea id="m" name="message" rows="5"></textarea>` },
};

const moreOnForms = {
  title: "More on Forms",
  subtitle: "Advanced form usability",
  intro: "Improve forms with grouping, explicit errors, and submit state management.",
  steps: [
    { id: "mf1", label: "Step 1", title: "Group related fields", explain: "Use fieldset and legend for logical sections.", visual: v("Better for long forms and assistive navigation."), code: `<fieldset>\n  <legend>Account</legend>\n  ...\n</fieldset>`, why: "Improves form structure clarity." },
    { id: "mf2", label: "Step 2", title: "Handle error and loading states", explain: "Show actionable error and disable submit while pending.", visual: v("Tell user exactly how to fix invalid values."), code: `<p id="email-error">Enter a valid email</p>\n<button disabled>Submitting...</button>`, why: "Prevents repeated invalid submissions." },
  ],
  deepDive: ["Link errors via aria-describedby.", "Persist user input on failed submit.", "Show success confirmation after submit."],
  commonMistakes: ["Generic error text.", "No pending submit state."],
  practice: { task: "Refactor signup form with clear error and pending button.", solution: `<fieldset><legend>Sign Up</legend><input aria-describedby="e1" /><p id="e1">Email invalid</p><button disabled>Submitting...</button></fieldset>` },
};

export const FormTagContent = build(formTag);
export const InputTagContent = build(inputTag);
export const TextareaSelectContent = build(textareaSelect);
export const MoreOnFormsContent = build(moreOnForms);

