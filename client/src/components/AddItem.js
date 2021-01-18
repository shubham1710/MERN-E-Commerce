import { Component } from 'react';
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Container
} from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';
import PropTypes from 'prop-types';

class AddItem extends Component {
    state = {
        title = '',
        description = '',
        category = '',
        price = ''
    }

    static propTypes = {
        isAuthenticated: PropTypes.bool
    }

    onChange = (e) => {
        this.setState({[e.target.name]:e.target.value});
    }

    onSubmit = (e) => {
        e.preventDefault();

        const newItem = {
            title: this.state.title,
            description: this.state.description,
            category: this.state.category,
            price: this.state.price
        }

        this.props.addItem(newItem);
    }

    render(){
        return(
            <Container>
                <Form onSubmit={this.onSubmit}>
                    <FormGroup>
                        <Label for="title">Title</Label>
                        <Input
                            type="text"
                            name="title"
                            id="title"
                            placeholder="Title of the item"
                            onChange={this.onChange}
                        />
                        <Label for="description">Description</Label>
                        <Input
                            type="text"
                            name="description"
                            id="description"
                            placeholder="Description of the item"
                            onChange={this.onChange}
                        />
                        <Label for="category">Category</Label>
                        <Input type="select" name="category" id="category">
                            <option>Smartphones</option>
                            <option>Laptops</option>
                            <option>Earphones</option>
                            <option>Tablets</option>
                            <option>Smart Watches</option>
                        </Input>
                        <Label for="price">Price</Label>
                        <Input
                            type="number"
                            name="price"
                            id="price"
                            placeholder="Price of the item"
                            onChange={this.onChange}
                        />
                        <Button
                            color="dark"
                            style={{marginTop: '2rem'}}
                            block
                        >Add Item</Button>
                    </FormGroup>
                </Form>
            </Container>
        )
    }
}

const mapStateToProps = (state) => ({
    item: state.item,
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps,{addItem})(AddItem);