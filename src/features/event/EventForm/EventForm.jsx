import React, { Component } from 'react'
import { Segment, Form, Button } from 'semantic-ui-react';

class EventForm extends Component {

    state = {
        title: '',
        date: '',
        city: '',
        venue: '',
        hostedBy: ''
    }

    componentDidMount() {
        if (this.props.selectedEvent != null) {
            this.setState({
                ...this.props.selectedEvent
            });
        }
    }

    handleFormSubmit = evt => {
        evt.preventDefault();
        if (this.state.id) {
            this.props.updateEvent(this.state);
        } else {
            this.props.createEvent(this.state);
        }
        
    }

    handleInputChange = ({target: {name, value}}) => {
        this.setState({
            [name]: value
        })
    }

    render() {
        const {cancelFormOpen} = this.props;
        const {title, date, city, venue, hostedBy} = this.state;
        return (
            <Segment>
            <Form onSubmit={this.handleFormSubmit} autoComplete='off'>
                <Form.Field>
                <label>Event Title</label>
                <input placeholder="Event title" name='title' value={title} onChange={this.handleInputChange} />
                </Form.Field>
                <Form.Field>
                <label>Event Date</label>
                <input type="date" placeholder="Date" name='date' value={date} onChange={this.handleInputChange} />
                </Form.Field>
                <Form.Field>
                <label>City</label>
                <input placeholder="City" name='city' value={city} onChange={this.handleInputChange} />
                </Form.Field>
                <Form.Field>
                <label>Venue</label>
                <input placeholder="Venue" name='venue' value={venue} onChange={this.handleInputChange} />
                </Form.Field>
                <Form.Field>
                <label>Hosted By</label>
                <input placeholder="Hosted by" name='hostedBy' value={hostedBy} onChange={this.handleInputChange} />
                </Form.Field>
                <Button positive type="submit">
                Submit
                </Button>
                <Button type="button" onClick={cancelFormOpen}>Cancel</Button>
            </Form>
            </Segment>
        )
    }
}

export default EventForm;