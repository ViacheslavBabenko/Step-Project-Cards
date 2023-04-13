export default function validateOtherInfo(otherInfo, par) {
  for (let key in otherInfo) {
    if (otherInfo[key] === null || otherInfo[key] === undefined) {
      par.style.display = "block";
      throw new Error("Complite all the values!");
    }
  }
  return true;
}
