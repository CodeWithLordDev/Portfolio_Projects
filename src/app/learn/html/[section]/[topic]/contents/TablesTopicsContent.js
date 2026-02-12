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

const tableTag = {
  title: "Table Tag",
  subtitle: "Tabular data structure",
  intro: "Use tables for row-column data like reports, schedules, and scorecards.",
  steps: [
    { id: "t1", label: "Step 1", title: "Create base table", explain: "Use table, tr, th, and td.", visual: v("Headers define meaning for each column."), code: `<table>\n  <tr><th>Name</th><th>Score</th></tr>\n  <tr><td>Ana</td><td>91</td></tr>\n</table>`, why: "Structured data is easier to read and parse." },
    { id: "t2", label: "Step 2", title: "Add semantic sections", explain: "Use caption, thead, and tbody.", visual: v("Sectioned table is cleaner for styling and accessibility."), code: `<table>\n  <caption>Student Scores</caption>\n  <thead>...</thead>\n  <tbody>...</tbody>\n</table>`, why: "Assistive tools understand table context better." },
  ],
  deepDive: ["Use table only for tabular data.", "Add overflow wrappers for mobile.", "Use th scope in complex tables."],
  commonMistakes: ["Using table for page layout.", "No caption in data-rich table."],
  practice: { task: "Build a 3-column marks table with caption and thead/tbody.", solution: `<table>\n  <caption>Marks</caption>\n  <thead><tr><th>Name</th><th>Math</th><th>Science</th></tr></thead>\n  <tbody><tr><td>Ana</td><td>88</td><td>91</td></tr></tbody>\n</table>` },
};

const moreOnTable = {
  title: "More on Table",
  subtitle: "Advanced table patterns",
  intro: "Use colspan and rowspan for grouped headers/rows while keeping structure readable.",
  steps: [
    { id: "mt1", label: "Step 1", title: "Merge columns", explain: "Use colspan to span multiple columns.", visual: v("Useful for grouped report headers."), code: `<th colspan="2">Q1 Report</th>`, why: "Reduces duplicate header labels." },
    { id: "mt2", label: "Step 2", title: "Merge rows", explain: "Use rowspan for group labels over multiple rows.", visual: v("One cell can represent multiple related rows."), code: `<td rowspan="2">Frontend</td>`, why: "Better grouping and reduced repetition." },
  ],
  deepDive: ["Keep merged cells simple.", "Use scope attributes in complex tables.", "Test keyboard navigation."],
  commonMistakes: ["Overusing rowspan/colspan.", "Broken column alignment due to bad spans."],
  practice: { task: "Create report header using one colspan and one rowspan.", solution: `<table>\n  <tr><th rowspan="2">Team</th><th colspan="2">Q1</th></tr>\n  <tr><th>Sales</th><th>Profit</th></tr>\n</table>` },
};

export const TableTagContent = build(tableTag);
export const MoreOnTableContent = build(moreOnTable);

