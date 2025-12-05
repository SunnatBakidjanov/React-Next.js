/* --- Types --- */
type Props = {
	specs: string;
	text: string;
};

/* --- ListItem Component --- */
export const ListItem = ({ specs, text }: Props) => {
	return (
		<li className="flex justify-between bg-gray-50 p-3 rounded-lg">
			<span className="font-semibold">{specs}</span>
			<span>{text}</span>
		</li>
	);
};
