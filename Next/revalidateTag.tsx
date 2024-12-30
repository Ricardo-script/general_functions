
    const handleFetch = async () => {
        await fetch("http://localhost:3333/tags", {
            next: {
                tags: ["get-tags"],
            },
        });
    };

    //chamada da re-validação:

    revalidateTag('get-tags');
