// "29/10/2021" => to date

export const dateStringToDate = (dateString: string): Date => {
    const rawDate = dateString.split("/").map((e: string): number => parseInt(e));
    const day = rawDate[0];
    const month = rawDate[1] - 1;
    const year = rawDate[2];
    return new Date(year, month, day);
};
