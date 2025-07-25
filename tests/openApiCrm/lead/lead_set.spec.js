import { test, expect } from '@playwright/test';
import { LeadSet } from '@utils/crm/api/lead/leadSet';
import { generateLeadCreatePayload } from '@utils/base/leadDataGenerator';


test('POST /openapi/v1/lead/set/', async ({ page, request }) => {
    test.setTimeout(1200000);
    const leadGenerator = new LeadSet(request);
    const numberOfLeads = 1;

    for (let i = 0; i < numberOfLeads; i++) {
        console.log(`Создан лид № ${i + 1}`);

        const includeEmployeeId = true;
        const payload = generateLeadCreatePayload(includeEmployeeId);
        console.log(payload.employee_id);
        const response = await leadGenerator.createLeadRequest(payload);
        expect(response).toBeDefined();
        await page.waitForTimeout(4000);
    }

});

