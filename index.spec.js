const getIn = require("./index.js");

describe("getIn", () => {
  const context = {
    foo: {
      bar: {
        baz: "waldo"
      },
      qux: null
    },
    quux: "corge",
    17: "prime",
    falsy: {
      num: 0,
      val: false,
      obj: undefined,
      nul: null,
    }
  };

  it("returns value in object by Array path", () => {
    expect(getIn(context, ["foo", "bar", "baz"])).toBe("waldo");
  });

  it("returns value in object by string path", () => {
    expect(getIn(context, "quux")).toBe("corge");
  });

  it("returns value in object by number path", () => {
    expect(getIn(context, 17)).toBe("prime");
  });

  it("returns undefined if part of path is undefined", () => {
    expect(getIn(context, ["foo", "xyzzy", "baz"])).toBe(undefined);
  });

  it("returns notSetValue if part of path is undefined", () => {
    expect(getIn(context, ["foo", "xyzzy", "baz"], "thud")).toBe("thud");
  });

  it("returns context if context is falsy", () => {
    const context = null;
    expect(getIn(context, ["foo", "bar"])).toBe(null);
  });

  it("returns notSetValue if context is falsy", () => {
    const context = null;
    expect(getIn(context, ["foo", "bar"], "waldo")).toBe("waldo");
  });

  it("will not mutate path argument", () => {
    const path = ["foo", "bar", "baz"];
    getIn(context, path);
    expect(path).toEqual(["foo", "bar", "baz"]);
  });

  it("returns undefined if path is falsy", () => {
    expect(getIn(context, null)).toBe(undefined);
  });

  it("returns notSetValue if path is falsy", () => {
    expect(getIn(context, null, "bar")).toBe("bar");
  });

  it("returns value if value is falsy", () => {
    expect(getIn(context, ["falsy", "num"], "waldo")).toBe(0);
    expect(getIn(context, ["falsy", "obj"], "waldo")).toBe(undefined);
    expect(getIn(context, ["falsy", "val"], "waldo")).toBe(false);
    expect(getIn(context, ["falsy", "nul"], "waldo")).toBe(null);
  });

});
