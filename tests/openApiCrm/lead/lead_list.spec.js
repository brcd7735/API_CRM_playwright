import { test, expect } from '@playwright/test';
import { LeadList } from '@utils/crm/api/lead/leadList';

test('POST /openapi/v1/lead/list/', async ({ request }) => {
    const leadList = new LeadList(request);
    const response = await leadList.getLeadList();
    expect(response).toBeDefined();
});