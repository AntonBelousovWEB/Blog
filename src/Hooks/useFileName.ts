export function useFileName(filename: string): {
    filename: string;
    extension: string | undefined;
} {
    const parts = filename.split('.');
    if (parts.length === 1) {
      return { filename, extension: '' };
    }
    const extension = parts.pop();
    const filenameWithoutExtension = parts.join('.');
    return { filename: filenameWithoutExtension, extension };
}  