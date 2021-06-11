import { parse } from "../lib";

function getParser(code) {
  return () => parse(code, { sourceType: "module" });
}

describe("block params syntax", () => {
  it("should parse", () => {
    expect(getParser(`foo() {}`)()).toMatchSnapshot();
  });
});
