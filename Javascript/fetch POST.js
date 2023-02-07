const saveData = async (e: FormEvent) => {
        const email = emailRef.current?.value;
        const name = nameRef.current?.value;
        const telephone = telephoneRef.current?.value;
        const token = document.cookie.substring(6);

        console.log(email, name, telephone)
        console.log(document.cookie.substring(6))

        await fetch(`${apiURl}/customers`, {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify({
                email,
                name,
                telephone
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        }).then(res => res.json()).catch(err => console.log(err))
    }