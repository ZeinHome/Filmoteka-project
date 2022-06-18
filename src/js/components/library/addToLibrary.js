export default function addToLibrary(data, arr, key) {
    arr.push(data);
    localStorage.setItem(`${key}`, JSON.stringify(arr));
}
