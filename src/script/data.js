export const documents = [
	{
		id: 1,
		name: 'Паспорт',
	},
	{
		id: 2,
		name: 'ИНН',
	},
	{
		id: 3,
		name: 'Тестовое задание кандидата',
	},
	{
		id: 4,
		name: 'Трудовой договор',
	},
	{
		id: 5,
		name: 'Мед. книжка',
	},
]

export const documentGroups = [
	{
		id: 1,
		name: 'Обязательные для всех',
		documents: [ documents.shift(), documents.shift() ],
	},
	{
		id: 2,
		name: 'Обязательные для трудоустройства',
		documents: [documents.shift(),documents.shift()]
	},
	{
		id: 3,
		name: 'Специальные',
		documents: [documents.shift()]
	},
];

export default {
	documents,
	documentGroups,
}
