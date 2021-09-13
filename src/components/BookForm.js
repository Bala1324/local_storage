import React, {useState} from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuid4} from "uuid";

const BookForm = (props)=>{
const [book, setBook] = useState({
	bookname: props.book ? props.book.bookname: '',
	author: props.book ? props.book.author: '',
	quantity: props.book ? props.book.quantity: '',
	price: props.book ? props.book.price: '',
	date: props.book ? props.book.date: '',
})

const [errorMsg, setErrorMsg] = useState('');
const {bookname, author, quantity, price} = book;

const handleOnsubmit = (event)=>{
	event.preventDefault();
	const values = [bookname, author, price, quantity];
	let errorMsg = '';

	const allFieldsFilled = values.every((field)=>{
		const value = `${field}`.trim();
		return value !== '' && value !== '0';
	})

	if(allFieldsFilled){
		const book = {
			id:uuid4(),
			bookname,
			author,
			price,
			quantity,
			date: new Date()
		};
		props.handleOnsubmit(book);
	}else{
		errorMsg = 'Please fill out all the fields.';
	}
	setErrorMsg(errorMsg);
};

const handleInputChange = (event) =>{
	const { name, value } = event.target;
	switch(name){
		case 'quantity':
		if(value === ''|| parseInt(value) === +value){
			setBook((prevState)=>({
				...prevState,
				[name]: value
			}));
		}
		break;
		case 'price':
		if(value === ''|| value.match(/^\d{1,}(\.\d{0,2})?$/)){
			setBook((prevState)=>({
				...prevState,
				[name]:value
			}));
		}
		break;
		default:
		setBook((prevState)=>({
			...prevState,
			[name]: value
		}));
	}
}

return(
	<div className = "main-form">
	{errorMsg && <p className = "errorMsg">{errorMsg}</p>}
	<Form onSubmit = {handleOnsubmit}>
	<Form.Group controlId = "name">
	<Form.Label>Book Name</Form.Label>
	<Form.Control
	className = "input-control"
	type = "text"
	name = "bookname"
	value = {bookname}
	placeholder = "Enter name of book"
	onChange = {handleInputChange}
	/>
	</Form.Group>
	<Form.Group controlId = "author">
	<Form.Label>Author</Form.Label>
	<Form.Control
	className = "input-control"
	type = "text"
	name = "author"
	value = {author}
	placeholder = "Enter name of author"
	onChange = {handleInputChange}
	/>
	</Form.Group>
	<Form.Group controlId = "price">
	<Form.Label>Price</Form.Label>
	<Form.Control
	className = "input-control"
	type = "text"
	name = "price"
	value = {price}
	placeholder = "Enter the price"
	onChange = {handleInputChange}
	/>
	</Form.Group>
	<Form.Group controlId = "quantity">
	<Form.Label>Quantity</Form.Label>
	<Form.Control
	className = "input-control"
	type = "number"
	name = "quantity"
	value = {quantity}
	placeholder = "Enter the quantity"
	onChange = {handleInputChange}
	/>
	</Form.Group>
	<Button variant = "primary" type= "submit" className="submit-btn">
	Submit
	</Button>
	</Form>
	</div>
	)
}

export default BookForm;