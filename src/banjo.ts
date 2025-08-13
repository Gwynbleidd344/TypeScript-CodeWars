export function areYouPlayingBanjo(name: string): string {
    const splitted: Array<string> = name.split("");
    if (splitted[0] == "R" || splitted[0] == "r") {
        return name+" plays banjo"
    } else {
        return name+" does not play banjo"
    }
}