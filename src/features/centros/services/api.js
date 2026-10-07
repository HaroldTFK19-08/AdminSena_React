import { ENDPOINTS } from "../../../shared/api/endpoints";
import { createResourceService } from "../../../shared/api/createResourceService";

const centrosApi = createResourceService(ENDPOINTS.trainingcenters);

export default function getCentros(params) {
    return centrosApi.list(params);
}