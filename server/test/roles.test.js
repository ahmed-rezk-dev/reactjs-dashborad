const roles = require('../controllers/web/roles');

test('Should generate full name', () => {
	const text = roles.fullName('Ahmed', 'Rezk');
	expect(text).toBe('Ahmed Rezk');
});
