import React from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import './StaffForm.css';

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
    uploadFile = async e => {
        const files = e.target.files;
        const data = new FormData();
        data.append('file', files[0]);
        data.append('upload_preset', 'scoodle');

        const res = await fetch('https://api.cloudinary.com/v1_1/dx7xupqyp/image/upload', {
            method: 'POST',
            body: data,
        });
        const file = await res.json();
        this.setState({
            img: file.secure_url,
            largeImg: file.eager[0].secure_url,
        });
    }

    handleChange = e => {
        const { name, type, value } = e.target;
        const val = type === 'number' ? parseFloat(value) : value;
        this.setState({ [name]: val });
    };

    submitForm = (e) => {
        e.preventDefault();
        this.props.createStaff({
            variables: this.state
        }).then(({ data }) => {
            this.props.refetch()
        }).catch(error => {
            console.log(error)
        });

    }
    render() {
        return (
            <form onSubmit={this.submitForm}>
                <fieldset>
                    <label htmlFor="name">
                        Name
                <input
                            name="name"
                            id="name"
                            type="text"
                            placeholder="Enter Staff's Name..."
                            ref={input => (this.name = input)}
                            onChange={this.handleChange}
                            required />
                    </label>
                    <label htmlFor="file">
                        Photo
                <input
                            name="file"
                            id="file"
                            type="file"
                            placeholder="Choose a Photo..."
                            required
                            onChange={this.uploadFile} />
                        {this.state.image && (
                            <img width="200" src={this.state.img} alt="Upload Preview" />
                        )}
                    </label>
                    <button type="submit">Submit</button>
                </fieldset>
            </form>
        )
    }
}

//passed in as props to give name in react devtools
export default graphql(createStaff, {
    name: "createStaff"
})(StaffForm)

//ref={input => (this.img = input)}

//mutation {createStaff(name: "Lucy") {
//     name
// }
// }