export const generateRandomPhone = function () {
        const random8Digit = Math.floor(10000000 + Math.random() * 90000000);
        return `890${random8Digit}`;
}

export const generateRandomName = function () {
        const names = ['Ivan', 'Мария', 'Ольга', 'Дмитрий', 'Анна', 'Алексей',
                'Владислав', 'Елизавета', 'Александр', 'Андрей', 'Oxi', 'Ксения'];
        return names[Math.floor(Math.random() * names.length)];
}

export const generateRandomEmail = function () {
        const timestamp = Date.now();
        const domains = ['дом.рф', 'gmail.com', 'yandex.ru', 'mail.ru', 'site.su', 'sobaki.net'];
        return `${timestamp}@${domains[Math.floor(Math.random() * domains.length)]}`;
}

export const randomPipeLine = function () {
        const pipeline_id = [6265, 6268, 6269];
        return pipeline_id[Math.floor(Math.random() * pipeline_id.length)];
}

export const randomEmployee = function () {
        const employee_id = [0, 17280, 17281, 17282];
        return employee_id[Math.floor(Math.random() * employee_id.length)];
}

export const randomTags = function () {
        const tags = ['tag1', 'tag2', 'tag3'];
        return tags[Math.floor(Math.random() * tags.length)];
}

export const randomValueNumFields = function () {
        const valueNumFields = [0, 1, 24, 734, 1230, 235, 10043, 274, 8563, 46758, 58483, 3457, 9876, 467, 45,
                379, 737, 389, 477327, 982, 782, 378, 278355];
        return valueNumFields[Math.floor(Math.random() * valueNumFields.length)];
}

export const randomValueTextFields = function () {
        const valueTextFields = ['test', 'Black holes typically form when massive stars collapse at the end of their life cycle. After a black hole has formed, it can grow by absorbing mass from its surroundings. Supermassive black holes of millions of solar masses may form by absorbing other stars and merging with other black holes, or via direct collapse of gas clouds. There is consensus that supermassive black holes exist in the centres of most galaxies.'];
        return valueTextFields[Math.floor(Math.random() * valueTextFields.length)];
}

export const randomInboxType = function () {
        const inboxType = [14676, 14656, 14657, 14658, 14659, 14660, 14661, 14662, 14663, 14664, 14665]
        return inboxType[Math.floor(Math.random() * inboxType.length)];
}

export const normalizePhone = function (phone) {
        return phone.replace(/\D/g, '').replace(/^8/, '7');
}