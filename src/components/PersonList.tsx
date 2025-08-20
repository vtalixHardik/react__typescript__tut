type PersonListProps = {
    // Define any props if needed
    list?: {
        firstName: string;
        lastName: string;
    }[];
    }

const PersonList = (props: PersonListProps) => {
  return (
    <div>
        {/* <h2>Bruce Wayne</h2>
        <h2>Clark Kent</h2>
        <h2>Princess Diana</h2> */}
        {props.list?.map((name, index) => (
            <div key={index}>
                {name.firstName} - {name.lastName}
            </div>
        ))}
    </div>
  )
}

export default PersonList