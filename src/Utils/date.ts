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

export const returnCurrentDate = () => {
	const now = new Date();
	const year = now.getFullYear();
	const day = now.getDate();
	const month =  now.getMonth() + 1;
	const date = new Date(`${month} ${day}, ${year}`);
	const strDay = date.getDay();
	const strMonth = date.getMonth();

	return {
		date,
		day,
		stringDay: days[strDay],
		stringMonth: months[strMonth],
		year
	}
}