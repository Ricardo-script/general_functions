const movies = [
            { name: 'E.T: O Extraterrestre', directedBy: 'Steven Spielberg', year: 1985},
            { name: 'A origem', directedBy: 'Christopher Nolan', year: 2005},
            { name: 'Jurassic Park', directedBy: 'Steven Spielberg', year: 1995},
            { name: 'Seven: Os sete pecados capitais', directedBy: 'David Fincher', year: 1995},
            { name: 'A cor Púrpura', directedBy: 'Steven Spielberg', year: 1985},
            { name: 'Clube da Luta', directedBy: 'David Fincher', year: 2005},
        ]

        const readfunction = () => {
            const groupYears = Object.groupBy(movies, movies => movies.year)
            console.log('groupYears', groupYears)
            /*
                { 1985: (2) [{...}, {...}] },
                { 1995: (2) [{...}, {...}] },
                { 2005: (2) [{...}, {...}] }
            */

            const groupMovies = Object.groupBy(movies, movie => movie.year <= 2000 ? 'FilmesDeVeio' : 'FilmesApos2000');
            console.log('groupMovies', groupMovies)
            /* 
                { FilmesApos2000: (2) [{…}, {…}] },
                { FilmesDeVeio: (4) [{…}, {…}, {…}, {…}] },
            */
        }

        readfunction();

