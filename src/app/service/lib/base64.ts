export function toBase64(data: any) {
    return btoa(data);
}

export function fromBase64(data: any) {
    return atob(data);
}
