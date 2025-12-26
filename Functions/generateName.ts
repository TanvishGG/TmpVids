function generateName(): string {
  let length: number = 8;
  let characters: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let name: string = "";

  for (let i = 0; i < length; i++) {
    let index = Math.floor(Math.random() * characters.length);
    name += characters.charAt(index);
  }

  return name;
}
export { generateName };
