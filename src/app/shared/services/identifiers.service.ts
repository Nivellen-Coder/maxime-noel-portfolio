let nextId = 0;

export function createUniqueId(prefix: string): string {

    nextId++;

    return `${prefix}-${nextId}`;

}
