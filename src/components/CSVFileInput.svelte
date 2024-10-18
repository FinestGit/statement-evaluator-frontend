<script lang="ts">
    import { readFile } from "../utils/ReadFile";
    import { csvFileContent } from "../stores/csvStore";
    import CSVHeaderParser from "./LogicalComponents/CSVHeaderParser.svelte";

    const handleFileUpload = async (event: Event) => {
        const input = event.target as HTMLInputElement;
        const files = input.files as FileList;
        if (files.length > 0) {
            const file = files[0];
            try {
                const csvFileContent = await readFile(file);
                if (csvFileContent) {
                    $csvFileContent = csvFileContent;
                }
            } catch (error) {
                console.error(error);
            }
        }
    };
</script>

<input
    type="file"
    id="csv-file"
    name="csv-file"
    accept=".csv, .xlsx, .xls"
    on:change={handleFileUpload}
/>
<CSVHeaderParser />
