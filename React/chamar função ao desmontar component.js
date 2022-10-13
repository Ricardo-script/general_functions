import { useEffect } from 'react'

useEffect(() => console.log('componente montado ou teve um update'), [])

useEffect(() => {
  return () => console.log('componente sendo desmontado :(')
}, [])