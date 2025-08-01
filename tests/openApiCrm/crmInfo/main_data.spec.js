import { test, expect } from '@playwright/test';
import { MainData } from '@utils/crm/api/crmInfo/mainData';

test('GET /openapi/v1/main/data/', async ({ request }) => {
    const mainDataCrm = new MainData(request);

    const response = await mainDataCrm.GetMainDataCrm();
    expect(response).toBeDefined();
    expect(response.status_code).toBe(200);
    console.log('✅ [ТЕСТ END] Ответ получен:', response.status_code);
});