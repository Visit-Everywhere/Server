export default function () {
  let chars = "abcdefhiklmnoqrstuvwxyz0123456789".split("");
  let result = "";
  for (let i = 0; i < 6; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
    // let x = Math.floor(Math.random() * chars.length);
    // result += chars[x];
  }
  return result;
}
