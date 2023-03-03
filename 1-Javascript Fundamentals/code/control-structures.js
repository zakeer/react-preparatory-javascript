
function developerOutput(developerName, language) {
  let output = "";
  if (language === "nodejs") {
    output = `console.log("Hello ${developerName}!")`
  } else if (language === "python") {
    output = `print("Hello ${developerName}!")`
  } else if (language === "java") {
    output = `System.out.println("Hello ${developerName}!")`
  } else {
    output = `Unsupported language: ${language}`
  }
}

function developer(name, language) {
  let output;
  switch (language) {
    case 'nodejs':
      output = `console.log("Hello ${name}!")`;
      break;
    case 'python':
      output = `print("Hello ${name}!")`;
      break;
    case 'java':
      output = `System.out.println("Hello ${name}!")`;
      break;
    default:
      output = `Unsupported language: ${language}`
      break;
  }
  return output;
}