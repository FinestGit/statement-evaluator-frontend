<script lang="ts">
    import { writable } from "svelte/store";
    import { csvHeaders } from "../../stores/csvStore";
    import DBColumnInput from "./DBColumnInput.svelte";
    import DBColumnSubmit from "./DBColumnSubmit.svelte";

    let inputValues = writable($csvHeaders.map((header) => header));

    const handleInputChange = (index: number, newValue: string) => {
        inputValues.update((values) => {
            values[index] = newValue;
            return values;
        });
    };

    const handleSubmit = () => {
        inputValues.subscribe((values) => {
            $csvHeaders = values;
        });
    };

    $: {
        if ($csvHeaders) {
            console.log($csvHeaders);
        }
    }
</script>

{#if $csvHeaders.length > 0}
    {#each $csvHeaders as csvHeader, index}
        <DBColumnInput
            inputValue={csvHeader}
            onInputChange={(value) => handleInputChange(index, value)}
        />
    {/each}
    <DBColumnSubmit onSubmit={handleSubmit} />
{/if}
