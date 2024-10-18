<script>
    import { transformHeaders } from "../../api/csvHandler";
    import { csvFileContent } from "../../stores/csvStore";

    $: {
        if ($csvFileContent) {
            let headers = $csvFileContent.split("\r\n");
            if (headers.length > 1) {
                transformHeaders(headers[0].split(","));
            } else {
                headers = $csvFileContent.split("\n");
                if (headers.length > 1) {
                    transformHeaders(headers[0].split(","));
                } else {
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
