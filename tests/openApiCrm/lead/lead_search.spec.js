import { expect, test } from '@playwright/test';
import { LeadSearch } from '@utils/crm/api/lead/leadSearch';

test('POST /lead/search/', async ({ request }) => {
    const search = new LeadSearch(request);

    const responseSearchLead = await search.searchLead(request);
    expect(responseSearchLead.status_code).toBe(200);


});