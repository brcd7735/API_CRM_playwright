import {test, expect} from "@playwright/test";
import {LeadStart} from "@utils/crm/api/lead/leadStart";

test('POST /lead/start/', async ({request}) => {
    const startWork = new LeadStart(request);

    const responseLeadStart = await startWork.leadInWork(request);
    expect(responseLeadStart).toBeDefined();
    expect(responseLeadStart.status_code).toBe(200);
})