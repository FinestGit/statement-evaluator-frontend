<script>
    import { transformHeaders } from "../../api/csvHandler";
    import { csvFileContent } from "../../stores/csvStore";

    $: {
        if ($csvFileContent) {
            // Parsing if coming from a windows system
            let headers = $csvFileContent.split("\r\n");
            if (headers.length > 1) {
                transformHeaders(headers[0].split(","));
            } else {
                // Parsing if coming from a UNIX based system
                headers = $csvFileContent.split("\n");
                if (headers.length > 1) {
                    transformHeaders(headers[0].split(","));
                } else {
                    // Parsing for older versions of MacOS
                    headers = $csvFileContent.split("\r");
                    if (headers.length > 1) {
                        transformHeaders(headers[0].split(","));
                    } else {
                        console.error(
                            "Something went wrong, csv file not recognized",
                            $csvFileContent,
                        );
                    }
                }
            }
        }
    }
</script>
