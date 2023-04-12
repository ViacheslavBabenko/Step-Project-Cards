export default function validateOtherInfo(otherInfo) {
  for (let key in otherInfo) {
    if (otherInfo[key] === null || otherInfo[key] === undefined) {
      return false;
    }
  }
  return true;
}
