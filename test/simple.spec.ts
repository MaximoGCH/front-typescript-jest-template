import 'jest';
import { awesomeFunction } from '../src/App';

describe('awesomeFunction', () => {
	test('awesomeFunction is true', () => {
		expect(awesomeFunction()).toBeTruthy();
	});
});
