<script>
    let showOptions = false;
    function toggleOptions () {
        showOptions = !showOptions;
    };

    let showNewCard = false;
    function toggleNewCard () {
        showNewCard = !showNewCard;
    }
</script>

<div class="mt-10 mr-5 text-gray-400">
    <div class="bg-black text-gray-300 w-72 rounded-lg py-2">
        <div class="flex justify-between items-center px-5">
            <input class="pl-2 py-1 bg-black focus:outline-none focus:ring-2 focus:ring-blue-500 rounded placeholder-gray-300" type="text" placeholder="Uten tittel">
            <div class="flex relative hover:bg-gray-700 cursor-pointer rounded-lg">
                <button on:click={toggleOptions} class="pb-2 px-2">...</button>
            </div>
            {#if showOptions}
            <div class="absolute left-[280px] top-[112px] text-sm bg-blue-400 py-2 rounded w-72 text-gray-100">
                <div class="flex justify-center items-center mb-2 px-2">
                    <div class="flex-1"></div>
                    <div class="mr-auto">Liste-handlinger</div>
                    <div class="flex-1"></div>
                    <button on:click={toggleOptions} class="ml-5 hover:bg-gray-500 px-3 py-1 rounded cursor-pointer">x</button>
                </div>
                <div class="hover:bg-white hover:text-black pl-2 w-full py-1 cursor-pointer">Legg til kort</div>
                <div class="hover:bg-white hover:text-black pl-2 pr-16 py-1 cursor-pointer">Slett liste</div>
                <div class="hover:bg-white hover:text-black pl-2 pr-16 py-1 cursor-pointer">Kopier liste</div>
            </div>
            {/if}
        </div>
        <div class="pl-4 pr-5 w-full flex justify-between items-center mt-3">
            {#if !showNewCard}
                <button on:click={toggleNewCard} class="text-start pl-3 py-1 rounded-lg hover:bg-gray-700 cursor-pointer w-9/12 text-[15px] font-normal">
                    + &nbsp; Legg til kort
                </button>
                <div class="hover:bg-gray-700 rounded-lg cursor-pointer py-1 px-1">
                    <svg width="20" height="20" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 6V5C3 3.89543 3.89543 3 5 3H6C6.55228 3 7 3.44772 7 4C7 4.55228 6.55228 5 6 5H5V6C5 6.55228 4.55228 7 4 7C3.44772 7 3 6.55228 3 6Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M6 8C6 6.89543 6.89543 6 8 6H19C20.1046 6 21 6.89543 21 8V18C21 19.1046 20.1046 20 19 20H8C6.89543 20 6 19.1046 6 18V8ZM8 8H19V14H8V8ZM18 18C17.4477 18 17 17.5523 17 17C17 16.4477 17.4477 16 18 16C18.5523 16 19 16.4477 19 17C19 17.5523 18.5523 18 18 18ZM8 17C8 17.5523 8.44772 18 9 18H12C12.5523 18 13 17.5523 13 17C13 16.4477 12.5523 16 12 16H9C8.44772 16 8 16.4477 8 17Z" fill="currentColor"></path><path d="M4 14C3.44772 14 3 14.4477 3 15V16C3 17.1046 3.89543 18 5 18V15C5 14.4477 4.55228 14 4 14Z" fill="currentColor"></path><path d="M3 9C3 8.44772 3.44772 8 4 8C4.55228 8 5 8.44772 5 9V12C5 12.5523 4.55228 13 4 13C3.44772 13 3 12.5523 3 12V9Z" fill="currentColor"></path><path d="M8 4C8 3.44772 8.44772 3 9 3H13C13.5523 3 14 3.44772 14 4C14 4.55228 13.5523 5 13 5H9C8.44772 5 8 4.55228 8 4Z" fill="currentColor"></path><path d="M16 3C15.4477 3 15 3.44772 15 4C15 4.55228 15.4477 5 16 5H19C19 3.89543 18.1046 3 17 3H16Z" fill="currentColor"></path>
                    </svg>
                </div>
            {/if}
            {#if showNewCard}
                <div class="flex flex-col w-full">
                    <input class="pl-2 pt-1 pb-6 bg-gray-600 text-gray-300 placeholder-gray-300 focus:outline-none rounded placeholder-white w-full text-sm" type="text" placeholder="Skriv inn inneholdet til kortet">
                    <div class="flex items-center mt-3">
                        <button class="bg-blue-400 text-black hover:opacity-90 rounded py-1 px-2 w-5/12 text-sm">Legg til kort</button>
                        <button on:click={toggleNewCard} class="ml-2 hover:bg-gray-500 px-3 rounded cursor-pointer text-lg">x</button>
                    </div>
                </div>
            {/if}
        </div>
    </div>
</div>

<style>

</style>