import {DealGetById} from "@utils/crm/api/deal/dealGetById";
import {test, expect} from "@playwright/test";

test("POST /deal/get/", async ({request}) => {
    const getDealById = new DealGetById(request);
    const response = await getDealById.getDealById();
    expect(response).toBeDefined();
    expect(response.status_code).toBe(200);
})