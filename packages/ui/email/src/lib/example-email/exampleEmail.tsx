import { Button } from '@react-email/button'
import { Html } from '@react-email/html'

export default function ExampleEmail() {
  return (
    <Html>
      <Button
        href='https://example.com'
        style={{ background: '#000', color: '#fff' }}
      >
        Click me
      </Button>
    </Html>
  )
}
