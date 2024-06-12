/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/routes/+page.svelte",
        "./src/components/list.svelte",
        "./src/app.html",
        "./src/components/header.svelte",
        "./src/components/newListBtn.svelte"
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}