export function countBits(n: number): number {
    let binary: string = n.toString(2);
    let bits: number = 0;
    for (let i: number = 0; i < binary.length; i++) {
        if (binary[i] == "1") {
            bits++;
        }
    }
    return bits;
}