import { Button } from '@shared/components'
import { useCharacter } from '../application/hooks/use-character.hook'

/**
 * The Character container.
 */
const CharacterContainer = () => {
  const { characters, error, loading } = useCharacter()

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.reason}</div>
  }

  return (
    <div>
      {characters.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}

      <Button>Button</Button>
    </div>
  )
}

export default CharacterContainer
