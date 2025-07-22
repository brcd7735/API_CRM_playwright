import { test, expect } from "@playwright/test";
import { LeadSet } from '@utils/crm/api/lead/leadSet';
import {generateLeadCreatePayload} from "@utils/base/leadDataGenerator";

test('POST /openapi/v1/lead/workset/', async ({request, page}) => {
    const lead = new LeadSet(request);
    const numberOfLeads = 1;

    for (let i = 0; i < numberOfLeads; i++) {
        console.log(`Создан лид № ${i + 1}`);
        const payload = generateLeadCreatePayload();
        const response = await lead.createLeadRequest(payload);

        expect(response).toBeDefined();
        await page.waitForTimeout(4000);
    }
})