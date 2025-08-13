export function alphanumeric(string: string): boolean {
    return /^[A-Za-z0-9]+$/.test(string);
}