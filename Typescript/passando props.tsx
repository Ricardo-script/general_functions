import { ReactNode, useEffect, useState } from 'react';

interface Data {
	lastName: string;
	age: number;
}

interface MainProps {
	name: string;
	children?: ReactNode;
}

export const Main = ({ name, children }: MainProps) => {
	
	const [data, setData] = useState<Data>();
	useEffect(() => {
    // api call
    setData({
		lastName: 'Zagatti',
		age: 23,
    });
	
}, []);
  
	return (
    <div>
		<h1>{`${name} ${data?.lastName} - ${data?.age}`}</h1>
			{children}
		</div>
	);
};