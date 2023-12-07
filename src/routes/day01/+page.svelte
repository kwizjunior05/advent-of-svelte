<script>
    import { onMount } from "svelte";
    import { apiData, names } from "./store.ts";
    import AutoComplete from "simple-svelte-autocomplete";

    let input_url = "https://advent.sveltesociety.dev/data/2023/day-one.json";
    let name = "";

    onMount(async () => {
        fetch(input_url)
            .then((response) => response.json())
            .then((data) => {
                apiData.set(data);
            })
            .catch((error) => {
                console.log(error);
                return [];
            });
    });
    let tally = 0;
    $: {
        tally = 0;
        $apiData.forEach((entry) => {
            if (entry.name == name) {
                tally = entry.tally;
            }
        });
    }
</script>
<AutoComplete items="{$names}" bind:selectedItem="{name}" hideArrow="true" showClear="true" placeholder="enter your name"/>
<!-- <input id="name" name="name" autocomplete="given-name" placeholder="enter your name" /> -->

<p>Tally: {tally}</p>

<style>
</style>
