import { test, expect } from '@playwright/test';
import { LeadGet } from '@utils/crm/api/lead/leadGet';
import { LeadList } from '@utils/crm/api/lead/leadList';

test('POST /openapi/v1/lead/set/', async ({ request }) => {
    const leadGetUrl = new LeadGet(request);
    const list = new LeadList(request);

    const responseListData = await list.getLeadList();
    expect(responseListData).toBeDefined();
    const leads = responseListData.leads?.all_ids || [];
    if (leads.length === 0) {
        throw new Error('Массив all_ids пуст.');
    }
    const leadId = leads[Math.floor(Math.random() * leads.length)];
    const responseLeadGet = await leadGetUrl.leadGet(leadId);
    expect(responseLeadGet).toBeDefined();
});