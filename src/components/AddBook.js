import React from 'react';
import BookForm from './BookForm';

const AddBook = ({history, books, setBook})=>{
	const handleOnsubmit = (book)=>{
		setBook([book, ...books]);
		history.push('/');
	};

	return(
		<React.Fragment>
			<BookForm handleOnsubmit={handleOnsubmit} />
		</React.Fragment>
	)
};

export default AddBook;