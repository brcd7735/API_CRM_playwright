import { test, expect } from '@playwright/test';
import { DealGetList } from '@utils/crm/api/deal/dealGetList';

test('POST /deal/list/', async ({ request }) => {
    const dealList = new DealGetList(request);
    const response = await dealList.getDealList();
    expect(response).toBeDefined();
});