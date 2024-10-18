/**
 * Takes in a File and returns a Promise that contains the files contents when the file has finished being read.
 * @param {File} file - The file that we are expecting to be read
 * @returns {Promise<string | null>} The promise that contains either a null or a string with the files contents.
 */
export const readFile = (file: File): Promise<string | null> => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();

        const onLoadEnd = (event: ProgressEvent<FileReader>) => {
            if (event.target) {
                const result = event.target.result;
                if (result !== null && !(result instanceof ArrayBuffer)) {
                    resolve(result as string)
                } else {
                    reject(new Error("Invalid file format"));
                }
            } else {
                reject(new Error("File reading failed"));
            }
            fileReader.removeEventListener("loadend", onLoadEnd);
            fileReader.removeEventListener("error", onError)
        }

        const onError = () => {
            reject(new Error("File reading encountered an error"));

            fileReader.removeEventListener("loadend", onLoadEnd);
            fileReader.removeEventListener("error", onError)
        }

        fileReader.addEventListener("loadend", onLoadEnd);
        fileReader.addEventListener("error", onError);

        fileReader.readAsText(file);
    })
}