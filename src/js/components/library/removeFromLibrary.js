export default function removeFromLibrary(id, arr, key) {
    const index = arr.findIndex(obj => obj.id === Number(id));
    arr.splice(index, 1);
    localStorage.setItem(`${key}`, JSON.stringify(arr));
}