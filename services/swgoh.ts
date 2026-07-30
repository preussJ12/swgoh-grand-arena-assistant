export async function getPlayer(allyCode: string) {
    console.log("Fetching", allyCode);

    // Temporary
    return {
        allyCode,
        name: "Loading...",
        galacticPower: 0
    };
}