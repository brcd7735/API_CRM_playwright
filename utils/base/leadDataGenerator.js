import {
    generateRandomEmail,
    generateRandomName, generateRandomPhone,
    randomEmployee,
    randomInboxType,
    randomPipeLine,
    randomTags, randomValueNumFields, randomValueTextFields
} from "@utils/base/dataGenerator";

export const generateLeadCreatePayload = function (includeEmployeeId = true) {
    const payload = {
            method: "create",
            pipeline_id: randomPipeLine(),
            inbox_type_id: randomInboxType(),
            visit_id: 0,
            region: "Свердловская область",
            timezone: "UTC+03:00",
            tags: randomTags(),
            record_link: "https://site.ru/upload/record.mp3 ",
            values: {
                name: generateRandomName(),
                phone: generateRandomPhone(),
                email: generateRandomEmail(),
                comment: "comment",
                utm_source: "test",
                utm_medium: "test",
                utm_campaign: "test",
                utm_content: "test",
                utm_term: "test",
                google_client_id: "6578764735984494",
                yandex_client_id: "53898484998788489498",
                custom: [
                    {
                        input_id: 33412,
                        value: randomValueNumFields()
                    },
                    {
                        input_id: 33414,
                        value: randomValueNumFields()
                    },
                    {
                        input_id: 33415,
                        value: randomValueTextFields()
                    },
                    {
                        input_id: 33419,
                        value: randomValueTextFields()
                    },
                    {
                        input_id: 33422,
                        value: generateRandomPhone()
                    }
                ]
            },
            contact_data: [
                {
                    type: "work_phone",
                    value: generateRandomPhone(),
                    addon: "101"
                },
                {
                    type: "mobile_phone",
                    value: generateRandomPhone()
                },
                {
                    type: "home_phone",
                    value: generateRandomPhone()
                },
                {
                    type: "email",
                    value: generateRandomEmail()
                },
                {
                    type: "position",
                    value: "vakhter"
                },
                {
                    type: "note",
                    value: "auto"
                },
                {
                    type: "skype",
                    value: "skype"
                },
                {
                    type: "vkontakte",
                    value: "vkontakte"
                },
                {
                    type: "telegram",
                    value: "telegram"
                },
                {
                    type: "whatsapp",
                    value: generateRandomPhone()
                },
                {
                    type: "facebook",
                    value: "facebook"
                },
                {
                    type: "instagram",
                    value: "instagram"
                },
                {
                    type: "viber",
                    value: "viber"
                }
            ]
    };

    if (includeEmployeeId) {
        payload.employee_id = randomEmployee();
    }
    return payload;
}

