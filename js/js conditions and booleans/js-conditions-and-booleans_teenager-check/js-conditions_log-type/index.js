let data;
console.log("hallo, dies ist ein check");
switch (typeof data) {
  case "undefined":
    console.log("undefined!");
    break;
  case "null":
    console.log("null!");
    break;
  case "number":
    if (Number.isNaN(data)) {
      console.log("not a number!");
      break;
    } else console.log("number!");
    break;
  case "string":
    console.log("string!");
    break;
  case "boolean":
    console.log("boolean!");
    break;
  case "bgint":
    console.log("bigint!");
    break;
  case "function":
    console.log("function!");
    break;
  case "object":
    if (Array.isArray(data)) {
      console.log("array!");
      break;
    } else console.log("object!");
    break;
  default:
    console.log("I have no idea!");
}
