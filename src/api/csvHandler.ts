import axios from "axios"
import type { CSVHeadersTransformResponse } from "../models/csvHeadersTransformResponse";

const transformHeaders = async (csvHeaders: Array<string>): Promise<CSVHeadersTransformResponse> => {
    const response = await axios.post("http://localhost:8080/dbCreator/csvHeaders/transform", {
        CSVHeaders: csvHeaders
    });
    return response.data;
}

export { transformHeaders }