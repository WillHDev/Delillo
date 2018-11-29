import React from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";


//apollo/string query vs. mutation vs. what we're doing
const createStaff = gql`
mutation createStaff($name: String!, $img: String!, $largeImg: String!) {
    createStaff(name: $name, img: $img, largeImg: $largeImg) {
        _id
    }
}
`;

//here we didnt hit an api we called function from props
class StaffForm extends React.Component {
    state = {
        img: "",
        largeImg: "",
        name: ""
    };
    uploadImage = async e => {
        const files = e.target.files;
        const data = new FormData();
        data.append('file', files[0]);
        data.append('upload_preset', 'scoodle');

        const res = await fetch('https://res.cloudinary.com/v1_1/dx7xupqyp/image/upload/', {
            method: 'POST',
            body: data,
        });
        const file = await res.json();
        this.setState({
            img: file.secure_url,
            largeImg: file.eager[0].secure_url,
        });
    }

    submitForm = () => {
        e.preventDefault();
        this.props.createStaff({
            variables: {
                name: this.name.value,
                img: this.image.value
            }

        }).then(({ data }) => {
            this.props.refetch()
        }).catch(error => {
            console.log(error)
        });

    }
    render() {
        return (
            <form onSubmit={this.submitForm}>
                <label htmlFor="name">
                    Name
                <input
                        type="text"
                        ref={input => (this.name = input)}
                        required />
                </label>
                <label htmlFor="name">
                    Photo
                <input
                        type="file"
                        placeholder="Choose a photo..."
                        ref={input => (this.image = input)}
                        required
                        onChange={this.uploadFile} />
                </label>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

//passed in as props to give name in react devtools
export default graphql(createStaff, {
    name: "createStaff"
})(StaffForm)