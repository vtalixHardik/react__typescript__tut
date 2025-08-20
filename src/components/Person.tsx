type PersonProps = {
  fullname: {
    fistName: string;
    lastName: string;
  };
}

const Person = (props) => {
  return (
    <div>{props.fullname.firstName}-{props.fullname.lasstName}</div>
  )
}

export default Person