function checkSize(videoFile: any): boolean {
  let size: number = Math.round(videoFile.size / 1024 / 1024);
  if (size < 100) {
    return true;
  } else {
    return false;
  }
}
export { checkSize };
