<script lang="ts">
    export let inputValue: string;
    export let onInputChange: (newValue: string) => void;

    const handleInputChange = (event: Event) => {
        const value = (event.target as HTMLInputElement).value;
        onInputChange(value);
    };
</script>

<input type="text" bind:value={inputValue} on:input={handleInputChange} />
