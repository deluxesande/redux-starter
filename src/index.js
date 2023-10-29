import { compose, pipe } from "lodash/fp";

const input = "Hello world";

const trim = (str) => str.trim();
const wrapperDiv = (str) => `<div>${str}</div>`;

const transform = pipe(trim, wrapperDiv);

const result = transform(input);
console.log(result);
