
/* eslint-disable-next-line */
export type UiSharedProps = {
  className?: string
}


export function UiShared(props: UiSharedProps) {
  return (
    <div className={props.className || 'example'}>
      <h1>Welcome to UiShared!</h1>
    </div>
  )
}

export default UiShared
