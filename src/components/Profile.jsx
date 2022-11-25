import React from "react";
import logo from "../netflix_logo.png";

class Profile extends React.Component {
    render() {
        return (
            <>
                <div
                    className="profile"
                    onClick={(e) => {
                        if (this.props.profile) {
                            this.props.func(
                                this.props.profile.name,
                                this.props.profile.icon,
                                this.props.profile.search
                            );
                        }
                    }}
                >
                    <img src={this.props.image} />
                    <h6>{this.props.text}</h6>
                </div>
            </>
        );
    }
}

export default Profile;
