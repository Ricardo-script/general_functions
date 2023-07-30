//funcao de filtros 

const onFilterChats = (query: string) => {
    data.filter(
		element => element.toLowerCase().indexOf(query.toLowerCase()) !== -1,
    );
};

