import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';


class PostsNew extends Component {

    render() {
        return (
            <form>
                <Field name="title" label="Title for Post" component={this.renderField}/>
                <Field name="tags" label="Tags" component={this.renderField}/>
                <Field name="content" label="Post Content" component={this.renderField}/>
            </form>
        );
    }

    renderField(field) {
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                />
            </div>
        );
    }

}

export default reduxForm({form: 'PostsNewForm'})(PostsNew);