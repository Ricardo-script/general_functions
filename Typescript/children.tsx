// formas de declarar um children:

const Title = ({children} : {children: string}) => {
	return <h1>{children}</h1>;
}

return(
	<div>
		<Title>Hello World!</Title>
	</div>
);

//----------------------------------------------------------------

// outra forma mais legivel:

type TypeProps = {
	children: React.ReactNode   // = span, b etc...
}

const Title = ({children} : TypeProps) => {
	return <h1>{children}</h1>;
}

return(
	<div>
		<Title>
			<span>
				Hello <b>World</b>
			</span>
		</Title>
	</div>
);


// merge de props: usar dois tipos concatenados
type TypografyProps = {
	children: React.ReactNode;
	size?: 'small' | 'large';
};

type ParagraphProps = {
	color: string;
}

const Paragraph = ({ children, size, color } : TypografyProps & ParagraphProps) => {
	return(
		<h1 style={{
			fontSize: size === 'small' ? '1.5rem' : '3rem'
		}}>
			{children}
		</h1>
	);
}