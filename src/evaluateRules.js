const rules = require("../config/rules");

function evaluateChecklist(data) {
  return rules.map((rule) => ({
    name: rule.name,
    description: rule.description,
    status: rule.condition(data) ? "Passed" : "Failed",
  }));
}

module.exports = evaluateChecklist;
