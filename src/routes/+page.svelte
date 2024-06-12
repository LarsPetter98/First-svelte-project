<script>
    import List from "../components/list.svelte";
    import Header from "../components/header.svelte";
    import NewListBtn from "../components/newListBtn.svelte";
    import "../styles.css";

    let lists = [];

    function addNewList () {
        lists = [...lists, {}];
    };

</script>

<div class="bg-gray-500 px-5 py-5 rounded-lg h-10/12" style="height: 90vh;">
    <Header />
    <div class="flex items-center">
        <List />
        {#each lists as list}
            <List />
        {/each}
    </div>
    <NewListBtn on:addNewList={addNewList} />
</div>
