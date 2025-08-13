export function ipsBetween(start: string, end: string): number {
    const ipToNumber = (ip: string): number => {
        const parts = ip.split('.').map(Number);
        let num = 0;

        for (let i = 0; i < parts.length; i++) {
            num = num * 256 + parts[i];
        }

        return num;
    };

    return ipToNumber(end) - ipToNumber(start);
}