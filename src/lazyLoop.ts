export function makeLooper(str: string): () => string {
    let index: number = 0;
    return function(): string {
        const char: string = str[index];
        index = (index + 1) % str.length;
        return char;
    }
}
