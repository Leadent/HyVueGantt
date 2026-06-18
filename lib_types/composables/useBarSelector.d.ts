export default function useBarSelector(): {
    findBarElement: (ganttId: string, barId: string) => HTMLElement | null;
    findAllBarElements: (ganttId: string) => NodeListOf<HTMLElement>;
    barExistsInGantt: (ganttId: string, barId: string) => boolean;
};
