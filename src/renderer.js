// @ts-check
/** @type {HTMLButtonElement} */
const btn = document.querySelector("#getBtn");
/** @type {HTMLDivElement} */
const list = document.querySelector("#list");

btn.addEventListener("click", async () => {
    const info = await window.api.getSystemInformation();

    listGenerator(info, list);
});

/**
 * @param {object} object 
 * @param {HTMLDivElement} divElement 
 */
function listGenerator(object, divElement) {
    for (const key in object) {
        if (Object.hasOwnProperty.call(object, key)) {
            const h2 = document.createElement("h2");
            h2.textContent = key
            divElement.appendChild(h2);
            const obj = object[key];
            /** @type {HTMLUListElement} */
            const ul = document.createElement("ul");
            for (const key in obj) {
                if (Object.hasOwnProperty.call(obj, key)) {
                    /** @type {HTMLLIElement} */
                    const li = document.createElement("li");
                    const element = obj[key];
                    li.textContent = `${key} : ${element}`;
                    ul.appendChild(li);
                    divElement.appendChild(ul);
                }
            }
        }
    }
}