import fs from "fs";
import path from "path";

interface FileArray {
  path: string;
  ctime: number;
  size: number;
}

function spaceManagement(allowedDirectorySize: number, currentVideoSize: number, directoryPath: string): boolean | void {
  let unsortedArray: FileArray[] = [];
  let sortedArray: FileArray[] = [];
  let totalSize: number = 0;
  let files = fs.readdirSync(directoryPath);

  files.forEach((file) => {
    let filePath = path.join(directoryPath, file);
    let stat = fs.statSync(filePath);
    unsortedArray.push({ path: filePath, ctime: stat.ctimeMs, size: stat.size });
    totalSize += stat.size;
  });

  sortedArray = unsortedArray.sort((a, b) => {
    return a.ctime - b.ctime;
  });

  while (totalSize + currentVideoSize > allowedDirectorySize) {
    let fileToDelete = sortedArray.shift();
    fs.rmSync(fileToDelete!.path);
    totalSize = totalSize - fileToDelete!.size;
  }

  return totalSize + currentVideoSize <= allowedDirectorySize;
}
export { spaceManagement };
