import { CurrentDate } from '../Types/Shared';

const days = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednsday',
	'Thursday',
	'Friday',
	'Saturday',
];

const months = [
	'Jan',
	'Feb',
	'Mar',
	'Apr',
	'May',
	'Jun',
	'Jul',
	'Aug',
	'Sept',
	'Oct',
	'Nov',
	'Dec',
];

export const returnCurrentDate = (dateValue?: Date): CurrentDate => {
	const now = dateValue ? new Date(dateValue) : new Date();
	const year = now.getFullYear();
	const day = now.getDate();
	const month =  now.getMonth() + 1;
	const date = new Date(`${month} ${day}, ${year}`);
	const strDay = date.getDay();
	const strMonth = date.getMonth();
	const hours = ('0' + now.getHours().toString()).slice(-2);
	const minutes = ('0' + now.getMinutes().toString()).slice(-2);

	return {
		date,
		day,
		hours,
		minutes,
		stringDay: days[strDay],
		stringMonth: months[strMonth],
		year
	}
}