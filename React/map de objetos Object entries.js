const feedbackTypes = {
    BUG:{
        title: 'Problema',
        image: {
            source: bugImageUrl,
            alt: 'Imagem de um inseto'
        },
    },
    IDEA: {
        title: 'Ideia',
        image: {
            source: ideaImageUrl,
            alt: 'Imagem de uma lampada'
        },
    },
    OTHER: {
        title: 'Outro',
        image: {
            source: thoughtImageUrl,
            alt: 'Imagem de um balão de pensamento'
        }
    }
}

//Object.entries(feedbackTypes) => 

/**
 * [
 *  ['BUG', {...}],
 *  ['IDEA', {...}],
 *  ['OTHER', {...}]
 * 
 * ]
 */

<div>
    { Object.entries(feedbackTypes).map(([key, value]) => {
        return(
            <button>
                <img src={value.image.source} alt={value.image.alt} />
                <span>{value.title}</span>
            </button>
        )
    })}
</div>