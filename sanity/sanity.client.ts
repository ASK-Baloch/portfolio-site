import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
    projectId: "r8wcbv5x",
    dataset: "production",
    apiVersion: "2023-09-12",
    useCdn: false
};

const client = createClient(config)

export default client;





