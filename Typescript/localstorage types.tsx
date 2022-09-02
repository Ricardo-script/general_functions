//converter localstorage JSON.stringify para JSON.parse:

JSON.parse(localStorage.getItem('@cart') || '{}');