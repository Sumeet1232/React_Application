import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
    return (
        <div className="container">
            <div className="py-4">
                <h1>Contact Page</h1>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div>
                    <input type="Submit" value="Submit" class="form-label btn btn-primary"/>
                </div>
            </div>
        </div>
    );
};

export default Contact;