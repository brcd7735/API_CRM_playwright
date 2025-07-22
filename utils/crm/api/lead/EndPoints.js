import {BaseApi} from "@utils/base/baseApi";

export class InfoCrmEndPoints extends BaseApi {
    constructor(request) {
        super();
        this.request = request;
        this.mainData = '/main/data/';
        this.customStat = '/stat/custom/';
        this.managersStat = '/stat/managers/';
        this.stagesStat = '/stat/stages/';
        this.callsStat = '/stat/calls/';
    }

    mainDataUrl() {
        return this.getUrl(this.mainData)
    }

    customStatUrl() {
        return this.getUrl(this.customStat);
    }

    managersStatUrl() {
        return this.getUrl(this.managersStat);
    }

    stagesStatUrl() {
        return this.getUrl(this.stagesStat);
    }

    callsStatUrl() {
        return this.getUrl(this.callsStat);
    }
}

export class LeadEndPoints extends BaseApi {
    constructor(request) {
        super();
        this.request = request;
        this.leadSet = '/lead/set/';
        this.leadWorkset = '/lead/workset/';
        this.leadGet = '/lead/get/';
        this.leadSearch = '/lead/search/';
        this.leadList = '/lead/list/';
        this.leadStart = '/lead/start/';
        this.leadLogList = '/lead/log/list/';
        this.leadLogCreate = '/lead/log/create/';
        this.leadUpdateLeadValue = '/lead/updateLeadValue/';
        this.leadUpdateEmployee = '/lead/update_employee/';
    }

    leadSetUrl() {
        return this.getUrl(this.leadSet)
    }

    leadWorkSetUrl() {
        return this.getUrl(this.leadWorkset)
    }

    leadGetUrl() {
        return this.getUrl(this.leadGet)
    }

    leadSearchUrl() {
        return this.getUrl(this.leadSearch)
    }

    leadListUrl() {
        return this.getUrl(this.leadList)
    }

    leadStartUrl() {
        return this.getUrl(this.leadStart)
    }

    leadLogListUrl() {
        return this.getUrl(this.leadLogList)
    }

    leadLogCreateUrl() {
        return this.getUrl(this.leadLogCreate)
    }

    updateLeadValueUrl() {
        return this.getUrl(this.leadUpdateLeadValue)
    }

    leadUpdateEmployeeUrl() {
        return this.getUrl(this.leadUpdateEmployee)
    }
}

export class DealEndPoints extends BaseApi {
    constructor(request) {
        super();
        this.request = request;
        this.dealGet = '/deal/get/';
        this.dealCreate = '/deal/create/';
        this.dealSearch = '/deal/search/';
        this.dealUpdateStage = '/deal/updateDealStage/';
        this.dealUpdateEmployee = '/deal/updateEmployee/';
        this.dealToInbox = '/deal/toInbox/';
        this.dealList = '/deal/list/';
        this.dealLogList = '/deal/log/list/';
        this.dealLogCreate = '/deal/log/create/';
        this.dealCreateComment = '/deal/createComment/';
        this.dealUpdateTask = '/deal/updatetask/';
        this.dealAddTags = '/deal/tag/addDealTags/';
        this.dealUpdateInputsValue = '/deal/updateDealValue/';
        this.dealGetListInputs = '/deal/getListInputs/';
        this.dealGetInput = '/deal/getInput/';
        this.dealTaskList = '/task/list/';
        this.dealGetActivTasks = '/deal/getTasks/';

    }

    getDealById() {
        return this.getUrl(this.dealGet)
    }

    createDeal() {
        return this.getUrl(this.dealCreate)
    }

    searchDeal() {
        return this.getUrl(this.dealSearch)
    }

    updateStageDeal() {
        return this.getUrl(this.dealUpdateStage)
    }

    updateEmployeeDeal() {
        return this.getUrl(this.dealUpdateEmployee)
    }

    toInboxDeal() {
        return this.getUrl(this.dealToInbox)
    }

    getlistDeal() {
        return this.getUrl(this.dealList)
    }

    logListDeal() {
        return this.getUrl(this.dealLogList)
    }

    logCreateDeal() {
        return this.getUrl(this.dealLogCreate)
    }

    createCommentDeal() {
        return this.getUrl(this.dealCreateComment)
    }

    updateTaskDeal() {
        return this.getUrl(this.dealUpdateTask)
    }

    updateInputsValueDeal() {
        return this.getUrl(this.dealUpdateInputsValue)
    }

    addTagsDeal() {
        return this.getUrl(this.dealAddTags)
    }

    getListInputsDeal() {
        return this.getUrl(this.dealGetListInputs)
    }

    getInputDeal() {
        return this.getUrl(this.dealGetInput)
    }

    taskListDeal() {
        return this.getUrl(this.dealTaskList)
    }

    getActivTasksDeal() {
        return this.getUrl(this.dealGetActivTasks)
    }
}

