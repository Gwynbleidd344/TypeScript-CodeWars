export function toCamelCase(str: string): string {
    const splitted: Array<string> = str.split(/[-_]/);
    let result: Array<string> = [];

    for (let i: number = 0; i < splitted.length; i++) {
        for (let j: number = 0; j < splitted[i].length; j++) {
            if (i != 0 && j == 0) {
                result.push(splitted[i][j].toUpperCase())
            } else {
                result.push(splitted[i][j])
            }
        }
    }
    return result.join("");
}