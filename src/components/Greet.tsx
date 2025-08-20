type GreetProps = {
  name: string;
  messageCount: number;
}

const Greet = (props: GreetProps) => {
  return (
    <div>Welcome {props.name} you have {props.messageCount} unread messages</div>
  )
}

export default Greet