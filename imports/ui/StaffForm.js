import React from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";


//apollo/string query vs. mutation vs. what we're doing
const createStaff = gql`
mutation createStaff($name: String!) {
    createStaff(name: $name) {
        _id
    }
}
`;

//here we didnt hit an api we called function from props
class StaffForm extends React.Component {
    submitForm = () => {

        this.props.createStaff({
            variables: {
                name: this.name.value
            }

        }).then(({ data }) => {
            this.props.refetch()
        }).catch(error => {
            console.log(error)
        });

    }
    render() {
        return (
            <div>
                <input type="text" ref={input => (this.name = input)} />
                <button onClick={this.submitForm}>Submit</button>
            </div>
        )
    }
}

//passed in as props to give name in react devtools
export default graphql(createStaff, {
    name: "createStaff"
})(StaffForm)