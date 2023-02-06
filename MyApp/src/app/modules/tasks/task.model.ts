export class Task {
    id: number;
    name: string;
    description?: string;
    done?: boolean;
    priority?: Priority;
    userId?: number

    constructor() {
        this.id = 0;
    }
}

export enum Priority {
    High,
    Meduim,
    Low
}