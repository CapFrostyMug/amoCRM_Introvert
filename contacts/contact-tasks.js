const {client} = require('../client.js');

const contactTasks = async () => {

    // Получаем Контакты вместе со Сделками.
    const contacts = await client.contacts.get({with: 'leads'});

    // Проходимся циклом по Контактам: тем Контактам, у которых нет ниодной сделки, добавляем новую Задачу.
    for (let key in contacts.data) {

        if (!contacts.data[key]._embedded.leads.length) {
            contacts.data[key].tasks.create([
                {
                    text: 'Контакт без сделок',
                    complete_till: 2280001362,
                }
            ]);
        }
    }
};

contactTasks();
