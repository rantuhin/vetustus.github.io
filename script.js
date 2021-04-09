const projectIdField = document.getElementById('modid');
const type = document.getElementById('shield-type');
const uriElement = document.getElementById('url');
const logoCheckbox = document.getElementById('logo-checkbox');
// img
const plastic = document.getElementById('result-pic-plastic');
const flat = document.getElementById('result-pic-flat');
const flatSquare = document.getElementById('result-pic-flat-square');
const forTheBadge = document.getElementById('result-pic-for-the-badge');
const social = document.getElementById('result-pic-social');
//logo
const svgBase64Logo = 'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMSAxMSIgd2lkdGg9IjE0LjY2NyIgaGVpZ2h0PSIxNC42NjciICB4bWxuczp2PSJodHRwczovL3ZlY3RhLmlvL25hbm8iPjxkZWZzPjxjbGlwUGF0aCBpZD0iQSI+PHBhdGggZD0iTTAgMGgxMXYxMUgweiIvPjwvY2xpcFBhdGg+PC9kZWZzPjxnIGNsaXAtcGF0aD0idXJsKCNBKSI+PHBhdGggZD0iTTEuMzA5IDcuODU3YTQuNjQgNC42NCAwIDAgMS0uNDYxLTEuMDYzSDBDLjU5MSA5LjIwNiAyLjc5NiAxMSA1LjQyMiAxMWMxLjk4MSAwIDMuNzIyLTEuMDIgNC43MTEtMi41NTZoMGwtLjc1LS4zNDVjLS44NTQgMS4yNjEtMi4zMSAyLjA5Mi0zLjk2MSAyLjA5MmE0Ljc4IDQuNzggMCAwIDEtMy4wMDUtMS4wNTVsMS44MDktMS40NzQuOTg0Ljg0NyAxLjkwNS0xLjAwM0w4LjE3NCA1LjgybC0uMzg0LS43ODYtMS4xMTYuNjM1LS41MTYuNjk0LS42MjYuMjM2LS44NzMtLjM4N2gwbC0uMjEzLS45MS4zNTUtLjU2Ljc4Ny0uMzcuODQ1LS45NTktLjcwMi0uNTEtMS44NzQuNzEzLTEuMzYyIDEuNjUxLjY0NSAxLjA5OC0xLjgzMSAxLjQ5MnptOS42MTQtMS40NEE1LjQ0IDUuNDQgMCAwIDAgMTEgNS41QzExIDIuNDY0IDguNTAxIDAgNS40MjIgMCAyLjc5NiAwIC41OTEgMS43OTQgMCA0LjIwNmguODQ4QzEuNDE5IDIuMjQ1IDMuMjUyLjgwOSA1LjQyMi44MDljMi42MjYgMCA0Ljc1OCAyLjEwMiA0Ljc1OCA0LjY5MSAwIC4xOS0uMDEyLjM3Ni0uMDM0LjU2bC43NzcuMzU3aDB6IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiM1ZGE0MjYiLz48L2c+PC9zdmc+';

plastic.onclick = () => {
    saveToClipboard(plastic, 'Plastic');
}

flat.onclick = () => {
    saveToClipboard(flat, 'Flat');
}

flatSquare.onclick = () => {
    saveToClipboard(flatSquare, 'Flat square');
}

forTheBadge.onclick = () => {
    saveToClipboard(forTheBadge, 'For the badge');
}

social.onclick = () => {
    saveToClipboard(social, 'Social');
}

document.getElementById('update').onclick = () => {
    updateUri();
    updatePicture();
};

function updateUri() {
    url.innerText = encodeURI(`https://img.shields.io/badge/dynamic/json?color=5da545&label=modrinth&prefix=${type.value} &query=${type.value}&url=https://api.modrinth.com/api/v1/mod/${projectIdField.value}`);

}

function updatePicture() {
    plastic.src = genLink('plastic');
    flat.src = genLink('flat');
    flatSquare.src = genLink('flat-square');
    forTheBadge.src = genLink('for-the-badge');
    social.src = genLink('social');
}

function saveToClipboard(image, imageType) {
    navigator.clipboard.writeText(image.src)
        .then(() => {
            alert(imageType + ' copied to the clipboard!');
        })
        .catch(err => {
            alert('Error: ' + err);
        });
}

function genLink(imageStyle) {
    let rawUrl = `https://img.shields.io/badge/dynamic/json?color=5da545&label=modrinth&prefix=${type.value} &query=${type.value}&url=https://api.modrinth.com/api/v1/mod/${projectIdField.value}&style=${imageStyle}`;
    if (logoCheckbox.checked)
        rawUrl += '&logo=data:image/svg+xml;base64,' + svgBase64Logo;
    return rawUrl;
}