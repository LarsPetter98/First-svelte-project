<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();

    function addNewList () {
        dispatch("addNewList");
    };
</script>

<div class="flex mt-8 fixed bottom-16">
    <button class="
        bg-blue-400 py-2 px-4 rounded-md text-2xl text-center cursor-pointer hover:bg-opacity-50"
        on:click={addNewList}
        >
        +
    </button>
</div>