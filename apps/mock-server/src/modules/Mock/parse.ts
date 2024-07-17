const parse = (str: string) => {
  const matches = str.match(
    /(\{(number|string)\[[^\[\]]*\]\})|(\{[^\{\}\[\]]*\})/g,
  );

  if (!matches) return null;

  return matches.map((rule) => {
    const propertiesMatch = rule.match(/\[[^\[\]]*\]/);
    let _rule = rule;

    if (propertiesMatch) {
      _rule = _rule.replace(propertiesMatch[0], "");
    }

    return {
      match: rule,
      type: _rule.slice(1, -1),
      properties: propertiesMatch
        ? propertiesMatch[0].slice(1, -1).split(",")
        : null,
    };
  });
};

export default parse;
